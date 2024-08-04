import React from "react";
import ThemeSwitch from "../ThemeSwitch";
import { Menu } from "lucide-react";

const Navbar = () => {
  const flexBetween = "flex items-center justify-between";

  return (
    <nav
    // className="flex justify-between mx-8 my-16"
    >
      <div className={`${flexBetween} top-0 z-30 w-full pt-16 pb-8`}>
        {/* innerdiv: the container of components in navbar, width relative the parent div*/}
        <div className={`${flexBetween} mx-auto w-3/4 md:w-5/6 lg:w-11/12`}>
          {/* Logo */}
          <div className="font-['La_Belle_Aurore'] text-4xl lg:text-5xl xl:text-6xl text-stone-600 dark:text-stone-300">
            Cindy.T
          </div>
          <div className="hidden md:flex m-4 font-light text-sm md:text-lg lg:text-xl xl:text-2xl text-stone-700 dark:text-stone-300 gap-6 lg:gap-12">
            <p>About</p>
            <p>Projects</p>
            <p>Resume</p>
            <p>Contact</p>
          </div>
          <div className="my-4 mr-2 flex gap-4">
            <button
              className="md:hidden px-3 py-2 rounded-full hover:bg-stone-300 dark:hover:bg-stone-600"
              onClick={()=>{}}
            >
              <Menu className="cursor-pointer text-stone-600 dark:text-stone-400"  size={24} />
            </button>
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
