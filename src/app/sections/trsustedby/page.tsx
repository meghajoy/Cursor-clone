
export default function Trusted() {
  const logos = [
    { src: "/img/shopify.svg", alt: "Shopify" },
    { src: "/img/openAI.svg", alt: "OpenAI" },
    { src: "/img/replicate.svg", alt: "Replicate" },
    { src: "/img/perplexity.svg", alt: "Perplexity" },
    { src: "/img/midjourney.svg", alt: "Midjourney" },
    { src: "/img/samsung.svg", alt: "Samsung" },
    { src: "/img/instacart.svg", alt: "Instacart" },
    { src: "/img/ramp.svg", alt: "Ramp" },
    { src: "/img/vercel.svg", alt: "Vercel" },
  ];

  return (
    <div className="flex flex-col items-center py-28 px-4 gap-8">
      {/* Heading */}
      <p className="font-mono uppercase font-medium text-sm text-neutral-400 mb-8">
        Trusted by engineers at
      </p>

      {/* Logos */}
      <div className="flex flex-wrap justify-around items-center place-items-center gap-x-12 gap-y-10 max-w-6xl w-full">
        {logos.map((logo, index) => (
          <div
            key={index}
            className=" h-[60px] flex items-center justify-center"
          >
        <img
        style={{width:"fit-content" , maxWidth:"158px", maxHeight:"60px"}}
              src={logo.src}
              alt={logo.alt}
              className="w-full h-full object-contain invert"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
