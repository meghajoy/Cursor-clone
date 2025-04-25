export default function Footer() {
    // const contents =[
    //     "Pricing", "Downloads", "Docs", "Forum", "Careers", "Company", "Security", "Privacy", "Terms", "Changelog", "Github", "Twitter"
    // ]
  return (
    <div className="mx-auto p-4 flex justify-between">

        {/* First Section */}
        <div className="flex flex-col gap-12">
            <div>
                <a href="#" className="flex gap-2 items-center">
                    <p className="text-neutral-300 text-lg font-medium">hi@cursor.com</p>
                    <img src="/img/arrow.svg" alt="Arrow" className="size-4 invert"/>
                </a>
            </div>
            <div className="flex flex-col gap-3 ">
                <div className="flex gap-2 p-1 rounded-lg bg-stone-900 w-fit">
                    <img src="/img/shield.svg" alt="Icon" className="invert"/>
                    <p className="font-mono text-sm font-normal text-neutral-500">SOC 2 Certified</p>
                </div>
                <div className="flex font-mono text-neutral-500 gap-1 group w-fit">
                    <p>Made by</p>
                    <div className="flex gap-1 items-center">
                        <a href="#" className="hover:text-neutral-400">Anysphere</a>
                        <img src="/img/arrow.svg" alt="Icon" className="size-3 invert hidden group-hover:block"/>
                    </div>
                </div>
            </div>
        </div>

        {/* Second Section */}
        <div>

            <div className="flex gap-20 ">

                {/* First */}
                <ul className="flex flex-col gap-4 text-neutral-500 text-sm font-normal">
                    <li className="hover:text-neutral-400"><a href="#">Pricing</a></li>
                    <li className="hover:text-neutral-400"><a href="#">Downloads</a></li>
                    <li className="flex items-center gap-2 hover:text-neutral-400 group"><a href="#">
                        Docs
                        </a>
                        <img src="/img/arrow.svg" alt="Arrow" className="size-2 invert hidden group-hover:block"/>
                    </li>
                    <li className="flex items-center gap-2 hover:text-neutral-400 group"><a href="#">
                        Forum
                        </a>
                        <img src="/img/arrow.svg" alt="Arrow" className="size-2 invert hidden group-hover:block"/>
                    </li>
                </ul>

                {/* Second */}
                <ul className="flex flex-col gap-4 text-neutral-500 text-sm font-normal">
                    <li className="flex items-center gap-2 hover:text-neutral-400 group"><a href="#">
                        Careers
                        </a>
                        <img src="/img/arrow.svg" alt="Arrow" className="size-2 invert hidden group-hover:block"/>
                    </li>
                    <li className="flex items-center gap-2 hover:text-neutral-400 group"><a href="#">
                        Company
                        </a>
                        <img src="/img/arrow.svg" alt="Arrow" className="size-2 invert hidden group-hover:block"/>
                    </li>
                    <li className="hover:text-neutral-400"><a href="#">Security</a></li>
                    <li className="hover:text-neutral-400"><a href="#">Privacy</a></li>
                </ul>

                {/* Third */}
                <ul className="flex flex-col gap-4 text-neutral-500 text-sm font-normal">
                    <li className="hover:text-neutral-400"><a href="#">Terms</a></li>
                    <li className="hover:text-neutral-400"><a href="#">Changelog</a></li>
                    <li className="flex items-center gap-2 hover:text-neutral-400 group"><a href="#">
                        Github
                        </a>
                        <img src="/img/arrow.svg" alt="Arrow" className="size-2 invert hidden group-hover:block"/>
                    </li>
                    <li className="flex items-center gap-2 hover:text-neutral-400 group"><a href="#">
                        Twitter
                        </a>
                        <img src="/img/arrow.svg" alt="Arrow" className="size-2 invert hidden group-hover:block"/>
                    </li>
                </ul>
            </div>
            <div></div>
        </div>
    </div>
    
  )
}
