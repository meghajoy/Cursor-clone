interface Contains{
    heading: string;
    description: string;
    img: string;
    video?: string;
}
export default function GradientCard({
    heading,
    description,
    img,
    video,
}:Contains) {
  return (
    <a href="# " className="mx-auto flex flex-col border-[0.5px] border-solid border-neutral-400 rounded-xl w-[418px] h-[566.6px] bg-stone-950 ">
      <div className="flex flex-col gap-6 text-start p-8">
        <h1 className="text-neutral-200 font-bold text-4xl">{heading}</h1>
        <p className="text-neutral-200 font-regular text-lg">{description}</p>
      </div>
      {img && video && (
        <div className="relative w-full h-[352px] aspect-[533/461] overflow-hidden rounded-b-lg">
            <img src={img} alt="Image" 
                className="absolute inset-0 h-auto w-full pointer-events-none select-none hover:opacity-0 transition-opacity duration-300 ease-in-out"
          />
            <video src={video} muted loop autoPlay className="absolute inset-0 h-auto w-full pointer-events-none select-none"/>
        </div>
        )}
    </a>
  )
}
