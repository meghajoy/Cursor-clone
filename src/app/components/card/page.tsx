interface CardProps {
    heading : string;
    description : string;
    video? : string;
    h: number;
    w: number;
}
export default function Card({
    heading,
    description,
    video,
    h,
    w,
}:CardProps) {
  return (
    <div className="mx-auto flex flex-col items-center gap-12 pb-38">
        <div className="flex flex-col items-center gap-4">
            <h1 className="font-bold text-5xl bg-linear-to-b from-neutral-200 to-neutral-400 bg-clip-text text-transparent">{heading}</h1>
            <p className="font-mono font-medium text-[24px] text-neutral-200 text-center px-4">{description}</p>
        </div>
        <div className="rounded-xl px-4 bg-[url('/img/gradient.avif')] mx-auto bg-cover bg-center w-[1310px] h-[632px] flex items-end justify-center">
            {video && (
                <video src={video} muted loop autoPlay 
                style={{
                    height:`${h}px`,
                    width:`${w}px`,
                    objectPosition:'center top'
                }}
                    className="mx-auto rounded-t-lg object-cover"></video>
            )}
        </div>
    </div>
  )
}
