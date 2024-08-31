import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import { Menu } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const flexBetween = "flex items-center justify-between";
  const iconColors =
    "text-stone-600 hover:text-stone-400 dark:text-stone-400 dark:hover:text-stone-600";

  return (
    <nav className="top-0 z-30 w-full pt-16 pb-8">
      <div className={`${flexBetween} mx-auto w-full`}>
        {/* Logo */}
        <Link href={"/home"}>
          <p className="font-['La_Belle_Aurore'] text-5xl xl:text-6xl text-stone-600 dark:text-stone-300 hover:text-stone-400 dark:hover:text-stone-500 md:ml-12">
            Cindy.T
          </p>
        </Link>
        {/* Menu in words */}
        <div className="hidden md:mr-8 lg:mr-16 md:flex font-light text-base md:text-base xl:text-lg 4xl:text-2xl text-stone-700 dark:text-stone-300 md:gap-8 lg:gap-14">
          <Link href={"/about"} className="hover:text-stone-400">
            About
          </Link>
          <Link href={"/projects"} className="hover:text-stone-400">
            Projects
          </Link>
          <Link href={"/resume"} className="hover:text-stone-400">
            Resume
          </Link>
          <Link href={"/contact"} className="hover:text-stone-400">
            Contact
          </Link>
        </div>
        {/* Buttons */}
        <div className="my-4 md:ml-2 md:mr-12 flex gap-8">
          <button className="md:hidden" onClick={() => {}}>
            <Menu className={iconColors} size={24} />
          </button>
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
