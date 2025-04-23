import Image from "next/image"
export default function Spotlight() {
  return (
    <div className="rounded-xl px-4 bg-[url('/img/gradient.avif')] mx-auto bg-cover bg-center w-[1310px] h-[632px]">
      <div className="h-96 flex flex-col items-center text-white gap-8">

        {/*Headings*/}
        <h1 className="text-center text-9xl font-bold pt-21">The AI Code Editor</h1>
        <p className="text-center font-mono font-medium text-[23px]">Built to make you extraordinarily productive, Cursor is the best way to code with AI.</p>
        
        {/*Buttons*/}
        <div className="flex gap-4">
          {/* Download for windows Section */}
          <div className="flex p-1 items-center border-[0.5px] border-stone-100 rounded-xl ">
            <div className="flex gap-4 items-center bg-stone-100 rounded-lg px-4 py-4.5">
              <Image src="/img/download.svg" alt="Download icon" width={21} height={21}/>
              <a href="#" className="font-mono font-semibold uppercase text-stone-900">Download for windows </a>
            </div>
          </div>
          {/* Download All Section */}
          <div className="flex p-1 justify-center items-center border-[0.5px] border-stone-100 rounded-xl ">
            <div className="flex gap-2 items-center bg-stone-950 rounded-lg px-4 py-4.5">
              <a href="#" className="font-mono font-semibold uppercase text-stone-100">all downloads </a>
            </div>
          </div>
        </div>

        {/*Image*/}
        <div className="mx-auto">
          <Image src="/img/watch-demo.avif" alt="demo img" width={3860} height={3860} style={{
            width: "3860px",
            height: "220px",
            objectPosition: 'center top'
          }}className="object-cover"/>
        </div>
      </div>
    </div>
  )
}
