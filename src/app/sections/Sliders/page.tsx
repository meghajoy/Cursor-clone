"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import SlidingCard from "@/app/components/SlidingCard/page";
import Contents from "@/app/content/contents.json";

export default function Sliders() {
  const { Slider1, Slider2, Slider3 } = Contents.Contents;

  // Flatten all items into one list for mobile
  const allItems = [...Slider1, ...Slider2, ...Slider3];

  return (
    <div className="flex flex-col items-center gap-10 mx-auto px-4">
      {/* Heading */}
      <div className="text-center flex flex-col gap-4">
        <h1 className="font-bold text-5xl bg-linear-to-b from-neutral-200 to-neutral-400 bg-clip-text text-transparent">
          Loved by world-class devs
        </h1>
        <p className="font-mono font-medium text-[24px] text-neutral-200">
          Engineers all around the world reach for Cursor by choice.
        </p>
      </div>

      {/* ─── Mobile: manual carousel ─── */}
      <div className="w-full md:hidden">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={16}
          slidesPerView={1.2}
          centeredSlides={true}
        >
          {allItems.map((item) => (
            <SwiperSlide key={item.id}>
              <SlidingCard data={[item]} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ─── Desktop: your original auto‑scroll vertical sliders ─── */}
      <div className="hidden md:flex gap-6 h-[900px] overflow-hidden relative w-full">
        <SlidingCard data={Slider1} direction="up" />
        <SlidingCard data={Slider2} direction="down" />
        <SlidingCard data={Slider3} direction="up" />

        {/* Blur overlays */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-neutral-950 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-black to-transparent pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-black to-transparent pointer-events-none" />
      </div>
    </div>
  );
}
