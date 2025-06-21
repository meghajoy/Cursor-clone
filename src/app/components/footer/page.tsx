export default function Footer() {
  return (
    <div className="mx-auto px-4 py-16 flex flex-col gap-12 lg:flex-row lg:justify-between">
      {/* Left + Middle Sections */}
      <div className="flex flex-col gap-28 lg:flex-row lg:gap-28">
        {/* First Section */}
        <div className="flex flex-col gap-14 items-center lg:items-start">
          <div>
            <a href="#" className="flex gap-2 items-center">
              <p className="text-neutral-300 text-lg font-medium">hi@cursor.com</p>
              <img src="/img/arrow.svg" alt="Arrow" className="size-4 invert" />
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex gap-2 p-1 rounded-lg bg-stone-900 w-fit">
              <img src="/img/shield.svg" alt="Icon" className="invert" />
              <p className="font-mono text-sm font-normal text-neutral-500">SOC 2 Certified</p>
            </div>
            <div className="flex font-mono text-neutral-500 gap-1 group w-fit">
              <p>Made by</p>
              <div className="flex gap-1 items-center w-12">
                <a href="#" className="hover:text-neutral-400">Anysphere</a>
                <img src="/img/arrow.svg" alt="Icon" className="size-3 invert hidden group-hover:block" />
              </div>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="flex flex-wrap gap-28 justify-center lg:justify-start">
          <div className="flex gap-40 text-neutral-500 text-base font-medium flex-wrap">
            {/* First Column */}
            <ul className="flex flex-col gap-4 w-[80px]">
              <li className="hover:text-neutral-400"><a href="#">Pricing</a></li>
              <li className="hover:text-neutral-400"><a href="#">Downloads</a></li>
              <li className="flex items-center gap-2 hover:text-neutral-400 group">
                <a href="#">Docs</a>
                <img src="/img/arrow.svg" alt="Arrow" className="size-2 invert hidden group-hover:block" />
              </li>
              <li className="flex items-center gap-2 hover:text-neutral-400 group">
                <a href="#">Forum</a>
                <img src="/img/arrow.svg" alt="Arrow" className="size-2 invert hidden group-hover:block" />
              </li>
            </ul>

            {/* Second Column */}
            <ul className="flex flex-col gap-4 w-[80px]">
              <li className="flex items-center gap-2 hover:text-neutral-400 group">
                <a href="#">Careers</a>
                <img src="/img/arrow.svg" alt="Arrow" className="size-2 invert hidden group-hover:block" />
              </li>
              <li className="flex items-center gap-2 hover:text-neutral-400 group">
                <a href="#">Company</a>
                <img src="/img/arrow.svg" alt="Arrow" className="size-2 invert hidden group-hover:block" />
              </li>
              <li className="hover:text-neutral-400"><a href="#">Security</a></li>
              <li className="hover:text-neutral-400"><a href="#">Privacy</a></li>
            </ul>

            {/* Third Column */}
            <ul className="flex flex-col gap-4 w-[80px]">
              <li className="hover:text-neutral-400"><a href="#">Terms</a></li>
              <li className="hover:text-neutral-400"><a href="#">Changelog</a></li>
              <li className="flex items-center gap-2 hover:text-neutral-400 group">
                <a href="#">Github</a>
                <img src="/img/arrow.svg" alt="Arrow" className="size-2 invert hidden group-hover:block" />
              </li>
              <li className="flex items-center gap-2 hover:text-neutral-400 group">
                <a href="#">Twitter</a>
                <img src="/img/arrow.svg" alt="Arrow" className="size-2 invert hidden group-hover:block" />
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="flex flex-col gap-4 items-center lg:items-end">
        <div className="flex gap-1 border border-[0.5px] rounded-lg items-center h-fit w-[240px] p-1 text-neutral-500">
          <img src="/img/globe.svg" alt="Globe Icon" className="size-6" />
          <select name="Language" id="lang" className="appearance-none cursor-pointer bg-transparent w-full">
            <option value="1">English</option>
            <option value="2">Chinese</option>
            <option value="3">Japanese</option>
          </select>
        </div>
        <div className="flex gap-2 border border-[0.5px] border-neutral-400 rounded-md items-center h-fit w-fit p-1 invert">
          <img src="/img/computer.svg" alt="All mode" className="size-4" />
          <img src="/img/sun.svg" alt="Light mode" className="size-4" />
          <img src="/img/moon.svg" alt="Dark mode" className="size-4" />
        </div>
      </div>
    </div>
  );
}
