import Image from "next/image";
export default function Header() {
  return (
    <div className="flex justify-between items-center px-[7px] py-[7px]">
      <div className="flex col gap-2 items-center ">
        <div className="w-[32px] h-[32px]">
            <img src="https://www.cursor.com/_next/static/media/placeholder-logo.737626f1.webp" alt="logo" />
        </div>
        <div>
            <Image src="/logo.svg" alt="Cursor" width={90.22} height={17} />
        </div>
      </div>
      <div>
        <ul className="flex gap-4 font-mono font-semibold uppercase text-neutral-400">
            <li>Pricing</li>
            <li>Features</li>
            <li>Enterprises</li>
            <li>Blog</li>
            <li>Forum</li>
            <li>Careers</li>
        </ul>
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex items-center border-[0.5px] border-solid border-neutral-400 rounded-md px-4 py-3.5">
            <a href="#" className="flex gap-4 font-mono font-semibold uppercase text-neutral-400">Sign Up</a>
        </div>
        <div className="flex gap-2 items-center bg-stone-100 rounded-md px-4 py-3.5">
            <Image src="/download.svg" alt="Download icon" width={14} height={16}/>
            <a href="#" className="font-mono font-semibold uppercase text-stone-900">Download</a>
        </div>
      </div>
    </div>
  )
}
