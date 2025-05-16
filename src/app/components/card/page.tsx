interface CardProps {
  heading: string;
  description: string;
  video?: string;
  h: number;
  w: number;
}

export default function Card({
  heading,
  description,
  video,
  h,
  w,
}: CardProps) {
  return (
    <div className="mx-auto flex flex-col items-center gap-12 pb-38 px-4">
      {/* Heading + Description */}
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-5xl bg-gradient-to-b from-neutral-200 to-neutral-400 bg-clip-text text-transparent">
          {heading}
        </h1>
        <p className="font-mono font-medium text-sm sm:text-base md:text-lg lg:text-xl text-neutral-200 max-w-3xl">
          {description}
        </p>
      </div>

      {/* Video Container */}
      <div className="rounded-2xl w-full max-w-[1310px] h-[632px] bg-[url('/img/gradient.avif')] bg-cover bg-center flex justify-center items-end overflow-hidden px-4 pt-12">
        {video && (
            <div
            style={{
                height: `${h}px`,
                width: `${w}px`,
                maxWidth: "100%",
            }}
            className="w-full flex justify-end"
            >
            <video
                src={video}
                muted
                loop
                autoPlay
                playsInline
                className="object-cover object-top w-full h-full rounded-t-lg"
            />
            </div>
        )}
        </div>
    </div>
  );
}
