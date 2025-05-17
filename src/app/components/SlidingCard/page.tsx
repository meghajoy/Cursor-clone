"use client";
import { useState, useEffect, useRef } from "react";

export interface TestimonialItem {
  id: number;
  feedback: string;
  name: string;
  img: string;
  job: string;
}

interface SlidingCardProps {
  data: TestimonialItem[];
  direction?: "up" | "down";
  repeat? : boolean;
}

export default function SlidingCard({ data, direction = "up", repeat = true }: SlidingCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(0);
  const [disableTransition, setDisableTransition] = useState(false);
  const [paused, setPaused] = useState(false);

  // repeat data for seamless scrolling, for mobile no repetition
  const items = repeat
    ? Array(3).fill(null).flatMap(() => data)
    : data;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const totalHeight = container.scrollHeight;
    const singleListHeight = totalHeight / 5;

    // start at middle copy
    setPosition(-singleListHeight);

    const speed = 1;
    const interval = setInterval(() => {
      if (paused) return;
      setPosition((prev) => {
        let next = direction === "up" ? prev - speed : prev + speed;

        // reset when crossing threshold
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
  }, [direction, paused]);

  useEffect(() => {
    if (disableTransition) {
      const timeout = setTimeout(() => setDisableTransition(false), 50);
      return () => clearTimeout(timeout);
    }
  }, [disableTransition]);

  return (
    <div className="overflow-hidden relative h-full">
      <div
        ref={containerRef}
        style={{
          transform: `translateY(${position}px)`,
          transition: disableTransition ? "none" : "transform 0.3s linear",
        }}
      >
        {items.map((item, idx) => (
          <div
            key={`${item.id}-${idx}`}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="group mb-4 p-4 border border-neutral-400 rounded-2xl bg-neutral-950
                        hover:bg-[url('/img/gradient.avif')] bg-cover bg-center
                        transition-colors duration-300 min-h-[200px]"
          >
            <div className="flex flex-col gap-6">
              <p className="font-mono text-neutral-300 font-medium text-base">
                {item.feedback}
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <p className="font-mono text-neutral-400 font-semibold text-lg">
                    {item.name}
                  </p>
                  <p className="font-mono text-neutral-400 font-medium text-lg">
                    {item.job}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
