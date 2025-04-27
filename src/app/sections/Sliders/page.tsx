import SlidingCard from "@/app/components/SlidingCard/page";
import Contents from "@/app/content/contents.json";
export default function Sliders() {
  const {Slider1, Slider2, Slider3} = Contents.SlidingCards;
  return (
    <div className="flex flex-col items-center gap-10 mx-auto px-4">
      <div className="flex flex-col items-center gap-4">
            <h1 className="font-bold text-5xl bg-linear-to-b from-neutral-200 to-neutral-400 bg-clip-text text-transparent">Loved by world-class devs</h1>
            <p className="font-mono font-medium text-[24px] text-neutral-200 text-center px-4">Engineers all around the world reach for Cursor by choice.</p>
      </div>
      <div className="flex gap-6 h-[900px] overflow-hidden">
        <SlidingCard data={Slider1} direction="up"/>
        <SlidingCard data={Slider2} direction="down"/>
        <SlidingCard data={Slider3} direction="up"/>
      </div>
    </div>
  )
}
