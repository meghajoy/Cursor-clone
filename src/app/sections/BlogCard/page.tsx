
export default function BlogCard() {
  return (
    <a href="#" className="flex justify-between">
      <div className="mx-auto">
        <div className="flex p-2 gap-3 items-center border">
            <img src="/img/cup.svg" alt="Cup" className="invert size-4" />
            <h5 className="font-mono text-neutral-500 font-medium text-lg uppercase">Blog</h5>
        </div>
        <h1 className="text-neutral-200 font-bold text-4xl">Iterating with Shadow Workspaces</h1>
        <p className="font-mono text-neutral-200 font-regular text-lg">Hidden windows and kernel-level folder proxies to let AIs iterate on code without affecting the user.</p>
        <button className="flex items-center border-[0.5px] border-solid border-neutral-400 rounded-lg p-2 
        hover:border-neutral-200 hover:border-neutral-200 font-mono font-semibold uppercase text-neutral-300">Keep Reading</button>
        <div className="flex gap-4">
            <img src="/_next/image?url=%2Fauthors%2Farvid.jpe" alt="Arvid" className="size-9 rounded-xl"/>
            <div className="flex flex-col gap-2 items-start">
                <p className="font-mono text-neutral-500 font-normal text-base">Posted by Arvid</p>
                <p className="font-mono text-neutral-500 font-light text-sm">19 minutes read</p>
            </div>
        </div>
      </div>
      <div>
        <img src="/img/gradient.avif" alt="Gradient image" width={523} className="w-[523px] h-[477.25px] border-lg bg-cover bg-bottom" />
      </div>
    </a>
  )
}
