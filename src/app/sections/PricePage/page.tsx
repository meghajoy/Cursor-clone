"use client";
import { useState } from "react";
import pricedata from "@/app/content/contents.json";

export default function PricePage() {
  const [year, setYear] = useState(false);

  const currentPricing = year
    ? pricedata.Contents.PricingYearly
    : pricedata.Contents.PricingMonthly;

  return (
    <div className="flex flex-col px-4 md:px-6 lg:px-16 mx-auto py-14">
      {/* First Section */}
      <div className="flex flex-col items-start gap-2 text-center md:text-left">
        <h1 className="font-bold h-15 text-4xl md:text-5xl bg-linear-to-b from-neutral-200 to-neutral-400 bg-clip-text text-transparent">
          Pricing
        </h1>
        <p className="font-mono font-medium text-lg md:text-xl text-neutral-200">
          Choose the plan that works for you
        </p>
      </div>

      {/* Second Section */}
      <div className="flex flex-col justify-center items-center py-10 gap-8">
        <div className="flex w-fit items-center border-[0.5px] border-neutral-400 rounded-md">
          <button
            onClick={() => setYear(false)}
            className={`rounded-sm py-1 hover:text-neutral-200 cursor-pointer${
              !year
                ? "text-neutral-900 bg-neutral-900 border-[0.5px] border-neutral-400 border-solid"
                : "text-neutral-400"
            }`}
          >
            <span className="font-mono text-sm text-neutral-300 font-regular uppercase px-3">
              Monthly
            </span>
          </button>
          <button
            onClick={() => setYear(true)}
            className={`rounded-sm py-1 hover:text-neutral-200 cursor-pointer${
              year
                ? "text-neutral-900 bg-neutral-900 border-[0.5px] border-neutral-400 border-solid"
                : "text-neutral-400"
            }`}
          >
            <span className="font-mono text-sm text-neutral-300 font-regular uppercase px-3">
              Yearly (save 20%)
            </span>
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
          {currentPricing.map((plan, index) => (
            <div
              key={plan.id}
              className="border-[0.5px] border-neutral-400 rounded-xl p-3"
            >
              <div className="flex flex-col justify-between h-full border-[0.5px] border-neutral-400 rounded-lg p-6 md:p-8 bg-neutral-900 relative overflow-hidden">
                {index === 1 && (
                  <div className="absolute bottom-0 left-0 w-full h-full z-0 pointer-events-none">
                    <div
                      className="absolute inset-0 bg-no-repeat bg-bottom bg-contain blur-lg"
                      style={{ backgroundImage: `url('/img/gradient.avif')` }}
                    />
                  </div>
                )}
                {/* Heading */}
                <div className="flex flex-col gap-4 z-10">
                  <p className="font-mono text-lg md:text-xl font-medium text-neutral-200">
                    {plan.pack}
                  </p>
                  <div className="flex items-end gap-1 border-b-[0.5px] border-neutral-400 pb-4">
                    <h2 className="font-semibold text-4xl md:text-6xl text-neutral-200">
                      {plan.price === "Free" ? "Free" : `$${plan.price}`}
                    </h2>
                    <p className="font-mono text-neutral-200 text-sm md:text-base">
                      {plan.price === "Free"
                        ? ""
                        : plan.price === "20"
                        ? "/month"
                        : "/user/month"}
                    </p>
                  </div>
                </div>

                {/* Includes */}
                <div className="flex flex-col py-4 gap-3 z-10">
                  <p className="text-lg md:text-xl font-semibold text-neutral-200">
                    {plan.include}
                  </p>
                  <ul className="font-mono text-neutral-200 font-medium flex flex-col gap-2">
                    {plan.points.map((point, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-sm md:text-base"
                      >
                        <img
                          src="/img/tick.svg"
                          alt="Tick icon"
                          className="size-2 invert"
                        />
                        <p>{point}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-auto z-10">
                  {plan.buttonone && (
                    <button className="flex items-center justify-center gap-2 px-4 py-2 border border-neutral-400 bg-stone-100 uppercase text-stone-900 rounded-lg transition text-sm md:text-base">
                      {plan.price === "Free" && (
                        <img
                          src="/img/download.svg"
                          alt="Download"
                          className="w-4 h-4"
                        />
                      )}
                      <span className="font-mono font-semibold">
                        {plan.buttonone}
                      </span>
                    </button>
                  )}
                  {plan.buttontwo && (
                    <button className="px-4 py-2 bg-neutral-950 border border-neutral-400 text-neutral-200 rounded-lg uppercase transition font-mono font-semibold text-sm md:text-base">
                      {plan.buttontwo}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Third Section */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 py-14 text-center sm:text-left">
        <p className="text-neutral-200 text-lg md:text-2xl font-medium">
          Questions about enterprise security, procurement, or custom contracts?
          Contact Sales
        </p>
        <img src="/img/arrow.svg" alt="Arrow icon" className="invert size-4" />
      </div>
    </div>
  );
}
