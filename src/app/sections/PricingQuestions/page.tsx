import contents from "@/app/content/contents.json";
export default function PricingQuestions() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full px-4 py-10 max-w-[1280px] mx-auto pb-48">
        {
            contents.Contents.PricingContents.map((item) => (
                <div key={item.id} className="flex gap-y-0 border border-solid border-[0.5px] border-neutral-300 rounded-2xl h-fit bg-neutral-900">
                    {
                        item.id === 36 ? (
                            <div className="flex flex-col border-solid border-[0.5px] border-neutral-300 rounded-lg m-4 shadow-[0_0_16px_2px_rgba(255,255,255,0.1)]">
                                <div className="flex flex-col gap-3 p-5 ">
                                    <h2 className="text-neutral-200 font-semibold text-xl">{item.heading}</h2>
                                    <p className="text-neutral-400 font-medium text-md">{item.ans}</p>
                                </div>
                                <div className="flex gap-3 px-5 pb-5 pointer-cursor">
                                    <button className="p-3 cursor-pointer bg-neutral-200 text-black text-semibold font-lg rounded-lg ">Our Forum</button>
                                    <button className="p-3 cursor-pointer border-solid border-[0.5px] bg-neutral-950 text-white text-semibold font-lg rounded-lg ">Contact Us</button>
                                </div>
                            </div>
                        ):
                        (
                            <div className="flex flex-col gap-3 p-5">
                                <h2 className="text-neutral-200 font-semibold text-xl">{item.heading}</h2>
                                <p className="text-neutral-400 font-medium text-md">{item.ans}</p>
                            </div>
                        )
                    }
                    
                </div>
            ))
        }
    </div>
  )
}
