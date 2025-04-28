export default function Try() {
  return (
    <div className="flex mx-auto px-4 pt-68 py-24 justify-between items-center">
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-[110px] bg-linear-to-b from-neutral-200 to-neutral-300 bg-clip-text text-transparent">Try Cursor Now</h1>
        <a href="#">
            <div className="flex p-1 items-center border-[0.5px] border-stone-100 rounded-xl w-fit">
                <div className="flex gap-4 items-center bg-stone-100 rounded-lg px-4 py-3">
                    <img src="https://www.cursor.com/_next/static/media/placeholder-logo.737626f1.webp" alt="Image" className="size-8"/>
                    <p className="font-mono font-semibold uppercase text-stone-900">Download for free</p>  
                </div>
            </div>
        </a>
      </div>
      <img src="/img/logo-dark.avif" alt="Image" className="w-[381px] h-[439.9px]"/>
    </div>
  )
}
