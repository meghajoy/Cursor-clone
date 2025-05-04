"use client";
import { useState } from "react";
import pricedata from "@/app/content/contents.json";

export default function PricePage() {
    const [year, setYear] = useState(false);

    const currentPricing = year
    ? pricedata.SlidingCards.PricingYearly : pricedata.SlidingCards.PricingMonthly;
  return (

    <div className="flex flex-col px-4 mx-auto py-14">

        {/* First Section */}
        <div className="flex flex-col items-start gap-2">
            <h1 className="font-bold h-15 text-5xl bg-linear-to-b from-neutral-200 to-neutral-400 bg-clip-text text-transparent">Pricing</h1>
            <p className="font-mono font-medium text-[24px] text-neutral-200 text-center">Choose the plan that works for you</p>
        </div>

        {/* Second Section */}
        <div className="flex flex-col justify-center items-center py-10 gap-8">
            <div className="flex w-fit items-center border-solid border-[0.5px] border-neutral-400 rounded-md">
                <button onClick={() => setYear(false)} className={`rounded-sm py-1 hover:text-neutral-200 cursor-pointer${
                    !year
                        ? "text-neutral-900 bg-neutral-900 border-[0.5px] border-neutral-400 border-solid"
                        : "text-neutral-400"
                    }`}
                > 
                    <span className="font-mono text-sm text-neutral-300 font-regular uppercase px-3">
                    Monthly
                    </span>
                </button>
                <button onClick={() => setYear(true)} className={`rounded-sm py-1 hover:text-neutral-200 cursor-pointer${
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                {currentPricing.map((plan) => (  
                    <div key={plan.id} className="border-solid border-[0.5px] border-neutral-400 rounded-xl p-3">
                        <div className="flex flex-col justify-between h-full border-solid border-[0.5px] border-neutral-400 rounded-lg p-8 bg-neutral-900">
                            {/* Heading */}
                            <div className="flex flex-col gap-4">
                                <p className="font-mono text-xl font-medium text-neutral-200">{plan.pack}</p>
                                <div className="flex items-end gap-1 border-b-[0.5px] border-neutral-400 pb-4">
                                    <h2 className="font-semibold text-6xl text-neutral-200">{plan.price === "Free" ? "Free" : `$${plan.price}`}</h2>
                                    <p className="font-mono text-neutral-200">{plan.price === "Free"
                                        ? ""
                                        : plan.price === "20"
                                        ? "/month"
                                        : "/user/month"}
                                    </p>
                                </div>
                            </div>
                            {/* Includes */}
                            <div className="flex flex-col py-4 gap-3">
                                <p className="text-xl font-semibold text-neutral-200">{plan.include}</p>
                                <ul className="font-mono text-neutral-200 flex flex-col gap-2">
                                    {plan.points.map((point, index) => (
                                        <li key={index} className="flex items-center gap-2">
                                            <img src="/img/tick.svg" alt="Tick icon" className="size-2 invert"/>
                                            <p>{point}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* Buttons */}
                            <div className="flex gap-3 mt-auto">
                                {/* Button One */}
                                {plan.buttonone && (
                                    <button className="flex items-center gap-2 px-4 py-2 border border-neutral-400 bg-stone-100 uppercase text-stone-900 rounded transition">
                                        {plan.price === "Free" && (
                                            <img src="/img/download.svg" alt="Download" className="w-4 h-4" />
                                        )}
                                        <span className="font-mono text-sm">{plan.buttonone}</span>
                                    </button>
                                )}

                                {/* Button Two */}
                                {plan.buttontwo && (
                                    <button className="px-4 py-2 border border-neutral-400 text-neutral-200 rounded uppercase transition font-mono text-sm">
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
        <div className="flex items-center justify-center gap-2 py-14">
            <p className="text-neutral-200 text-2xl font-medium">Questions about enterprise security, procurement, or custom contracts? Contact Sales</p>
            <img src="/img/arrow.svg" alt="Arrow icon" className="invert size-4"/>
        </div>
    </div>
  )
}

