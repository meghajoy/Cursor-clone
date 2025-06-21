export default function BuildSoftware() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mx-auto px-4 gap-6 pt-20 max-w-[1310px]">
      
      {/* Left Section */}
      <div className="flex flex-col gap-4 lg:max-w-[70%]">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-5xl bg-gradient-to-b from-neutral-200 to-neutral-400 bg-clip-text text-transparent">
          Build software faster
        </h1>
        <p className="font-mono font-medium text-base sm:text-lg md:text-xl lg:text-xl text-neutral-200">
          Intelligent, fast, and familiar, Cursor is the best way to code with AI.
        </p>
      </div>

      {/* Right Section - Button */}
      <a href="/features" className="self-start lg:self-auto ">
        <button className="cursor-pointer flex gap-2 items-center bg-stone-100 rounded-lg px-4 py-3 h-12 font-medium text-stone-900 text-sm sm:text-base">
          See More Features
        </button>      
      </a>
    </div>
  );
}
