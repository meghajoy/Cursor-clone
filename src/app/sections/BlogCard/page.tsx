import Image from "next/image"

export default function BlogCard() {
  return (
    <div className="mx-auto px-4 py-26">
        <a href="#" className="flex justify-between border-[0.5px] border-solid border-neutral-400 rounded-4xl p-16">
            <div className="flex flex-col gap-8">
                <div className="flex gap-2 items-center w-fit rounded-xl bg-neutral-900 p-2">
                    <Image src="/img/cup.svg" alt="Cup" className="invert size-4" width={4} height={4}/>
                    <h5 className="font-mono text-neutral-300 font-medium text-lg uppercase">Blog</h5>
                </div>
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="flex flex-col gap-25">
                        <div className="flex flex-col gap-10">
                            <h1 className="text-neutral-200 font-bold text-4xl">Iterating with Shadow Workspaces</h1>
                            <p className="font-mono text-neutral-200 font-regular text-lg">Hidden windows and kernel-level folder proxies to let AIs iterate on code without affecting the user.</p>
                            <button className="w-fit flex items-center border-[0.5px] border-solid border-neutral-400 rounded-lg p-2 
                            hover:border-neutral-200 font-semibold text-neutral-300">Keep Reading</button>
                        </div>
                        <div className="flex gap-6 items-center ">
                            <Image src="/img/profile/arvid.avif" alt="Arvid" className="size-18 rounded-xl" width={18} height={18}/>
                            <div className="flex flex-col items-start">
                                <p className="font-mono text-neutral-300 font-medium text-lg">Posted by Arvid</p>
                                <p className="font-mono text-neutral-300 font-light text-base">19 minutes read</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-auto flex justify-end">
                        <Image src="/img/gradient.avif" alt="Gradient image" width={200} height={300} className="aspect 296/200 w-full w-max-[523px] h-full h-max-[477.25px] rounded-2xl bg-cover bg-bottom" />
                    </div>
                </div>
            </div>
        </a>
    </div>
  )
}
