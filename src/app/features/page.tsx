import FeatureCard from "@/app/sections/FeatureCard/page"
import Try from "@/app/sections/TryCursor/page"

export default function Features() {
  return (
    <>
      <div className="flex flex-col items-center gap-6 py-12">
        <h2 className="font-bold text-9xl bg-linear-to-b from-neutral-200 to-neutral-400 bg-clip-text text-transparent">Features</h2>
        <p className="font-medium text-[22px] text-neutral-200 text-center">Build software faster</p>
      </div>
      <FeatureCard/>
      <Try/>
    </>
  )
}
