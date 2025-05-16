import GradientCard from "@/app/components/GradientCard/page"
export default function GradCards() {
  return (
    <div className="mx-auto px-4 flex flex-wrap gap-4 py-28">
      <GradientCard
        heading="Frontier Intelligence"
        description="Powered by a mix of purpose-built and frontier models, Cursor is smart and fast."
        img="https://assets.basehub.com/191e7e6d/a8f31b5eade8c4a868b8831955ea455c/frontier-black.webp"
        video="https://assets.basehub.com/191e7e6d/85d83ff8429b4ab1c6f99c364e55d474/frontier-black.mp4"
      />
      <GradientCard
        heading="Feels Familiar"
        description="Import all your extensions, themes, and keybindings in one click."
        img="https://assets.basehub.com/191e7e6d/9ae60e2d1008e3cc1c372e2cbf85c856/familiar-black.webp"
        video="https://assets.basehub.com/191e7e6d/02d37a133687665efcfc2c9e4e18c1f4/familiar-black.mp4"
      />
      <GradientCard
        heading="Privacy Options"
        description="If you enable Privacy Mode, your code is never stored remotely. Cursor is SOC 2 certified."
        img="https://assets.basehub.com/191e7e6d/30c4a4dc68ffbaa1f12dbf3a7b348931/sec-black-(0-00-00-00).webp"
        video="https://assets.basehub.com/191e7e6d/2c85b56bbcedd81f38415294251715d7/sec-black.mp4"
      />
    </div>
  )
}
