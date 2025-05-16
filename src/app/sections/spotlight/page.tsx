"use client";
import Image from "next/image";

export default function Spotlight() {
  return (
    <div className="rounded-xl px-4 bg-[url('/img/gradient.avif')] mx-auto bg-cover bg-center w-full max-w-[1310px]">
      <div className="flex flex-col items-center text-white gap-8 text-center">

        {/* Headings */}
        <h1 className="text-center font-bold text-5xl sm:text-6xl md:text-7xl lg:text-9xl pt-15">
          The AI Code Editor
        </h1>

        <p className="text-center font-mono font-medium text-lg sm:text-xl md:text-[20px]">
          Built to make you extraordinarily productive, Cursor is the best way to code with AI.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          {/* Download for Windows */}
          <div className="flex p-1 items-center border-[0.5px] border-stone-100 rounded-xl">
            <div className="flex gap-4 items-center bg-stone-100 rounded-lg px-4 py-4">
              <Image src="/img/download.svg" alt="Download icon" width={21} height={21} />
              <a href="#" className="font-mono font-semibold uppercase text-stone-900 text-sm">
                Download for Windows
              </a>
            </div>
          </div>

          {/* All Downloads */}
          <div className="flex p-1 items-center border-[0.5px] border-stone-100 rounded-xl">
            <div className="flex gap-2 items-center bg-stone-950 rounded-lg px-4 py-4">
              <a href="#" className="font-mono font-semibold uppercase text-stone-100 text-sm">
                All Downloads
              </a>
            </div>
          </div>
        </div>

        {/* Image*/}
        <div className="w-full max-w-5xl relative mt-8 flex justify-end">
          <div className="relative w-full aspect-[3/1] overflow-hidden rounded-t-lg">
            <Image
              src="/img/watch-demo.avif"
              alt="Demo Image"
              fill
              className="object-cover rounded-t-lg"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
