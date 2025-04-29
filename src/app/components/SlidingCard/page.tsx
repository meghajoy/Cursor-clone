"use client";
import { useState, useEffect, useRef } from "react";

export default function SlidingCard({ data, direction = "up" }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(0);
  const [disableTransition, setDisableTransition] = useState(false);

  const items = [...data, ...data, ...data, ...data, ...data]; // 5 copies

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const singleListHeight = container.scrollHeight / 5; // height of one set

    // Start from middle copy
    setPosition(-singleListHeight);

    const speed = 1; // 1px movement
    const interval = setInterval(() => {
      setPosition(prev => {
        let next = direction === "up" ? prev - speed : prev + speed;

        // If scrolled past 1.5 list, reset back to center
        if (direction === "up" && Math.abs(next) >= singleListHeight * 1.5) {
          setDisableTransition(true);
          return -singleListHeight;
        }
        if (direction === "down" && next >= singleListHeight * 0.5) {
          setDisableTransition(true);
          return -singleListHeight;
        }

        return next;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [direction]);

  useEffect(() => {
    if (disableTransition) {
      const timeout = setTimeout(() => {
        setDisableTransition(false);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [disableTransition]);

  return (
    <div className="overflow-hidden relative">
      <div
        ref={containerRef}
        style={{
          transform: `translateY(${position}px)`,
          transition: disableTransition ? "none" : "transform 0.3s linear",
        }}
      >
        {items.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="border-[0.5px] border-solid border-neutral-400 rounded-2xl p-4 mb-4"
          >
            <div className="flex flex-col gap-16">
              <p className="font-mono text-neutral-300 font-medium text-base">{item.feedback}</p>
              <div className="flex gap-4">
                <img src={item.img} alt="Profile" className="size-14 rounded-full" />
                <div className="flex flex-col">
                  <p className="font-mono text-neutral-400 font-semibold text-lg">{item.name}</p>
                  <p className="font-mono text-neutral-400 font-medium text-lg">{item.job}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>     
    </div>
  );
}
