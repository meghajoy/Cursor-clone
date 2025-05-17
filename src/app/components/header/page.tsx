"use client"
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },[]);
  
  return (
    <header className="sticky top-0 z-50 w-full px-4 py-7 mx-auto max-w-[1280px]">
      <div className={`flex justify-between items-center px-[7px] py-[6px] bg-stone-950 rounded-2xl w-full ${isScrolled? "shadow-[0_0_20px_rgba(255,255,255,0.1)]":""} backdrop-blur-md transition-shadow`}>
        
        {/* Logo Section */}
        <div className="px-4">
          <a href="/" className="flex gap-1 items-center">
            <div className="w-[32px] h-[32px]">
              <img
                src="https://www.cursor.com/_next/static/media/placeholder-logo.737626f1.webp"
                alt="logo"
              />
            </div>
            <div>
              <Image
                src="/img/logo.svg"
                alt="Cursor"
                width={90.22}
                height={17}
              />
            </div>
          </a>
        </div>

        {/* Nav Section */}
        <div className="hidden lg:flex">
          <ul className="flex gap-10 font-mono font-semibold uppercase text-neutral-400">
            <li><a href="/Pages/Pricing" className="hover:text-neutral-200">Pricing</a></li>
            <li><a href="/Pages/Features" className="hover:text-neutral-200">Features</a></li>
            <li><a href="#" className="hover:text-neutral-200">Enterprises</a></li>
            <li><a href="/Pages/Blogs" className="hover:text-neutral-200">Blog</a></li>
            <li><a href="#" className="hover:text-neutral-200">Forum</a></li>
            <li><a href="#" className="hover:text-neutral-200">Careers</a></li>
          </ul>
        </div>

        {/* Sign In & Download */}
        <div className="hidden lg:flex gap-4 items-center">
          <div className="flex items-center border-[0.5px] border-solid border-neutral-400 rounded-lg px-4 py-3 hover:border-neutral-200">
            <a href="#" className="flex gap-4 font-mono font-semibold uppercase text-neutral-300">Sign In</a>
          </div>
          <div className="flex gap-2 items-center bg-stone-100 rounded-lg px-4 py-3">
            <Image src="/img/download.svg" alt="Download icon" width={14} height={12} />
            <a href="#" className="font-mono font-semibold uppercase text-stone-900">Download</a>
          </div>
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden block">
          <img
            src="/img/hamburger.svg"
            alt="Hamburger Icon"
            className="invert size-10"
          />
        </div>

      </div>
    </header>
  );
}
