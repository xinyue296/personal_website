"use client";
import Image from "next/image";
import type { Metadata } from "next";
import { ChevronDown } from "lucide-react";
import RollingText from "@/components/RollingText";

// export const metadata: Metadata = {
//   title: "Home",
// };

const Home = () => {
  return (
    <div className="content-center h-full flex flex-col">
      <div className="w-full h-3/4 lg:h-full flex flex-col lg:flex-row items-center justify-around">
        {/* Photo Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mx-8">
          <Image
            src="/(assets)/cindy_profile_1.jpg"
            alt="Picture of Cindy"
            width={300} // Default size for small screens
            height={300} // Default size for small screens
            quality={100}
            className="hover:scale-105 duration-200 rounded-full w-64 lg:w-96" // Responsive width
          />
        </div>

        {/* Text Section */}
        <div className="w-full flex flex-col text-center lg:text-left hover:scale-105 duration-200 mx-8">
          <h1 className="text-4xl md:text-5xl 2xl:text-6xl font-bold text-stone-700 dark:text-stone-300 mt-2 md:mt-4">
            Hey, I’m Cindy,
          </h1>
          {/* Rolling text */}
          <div className="text-4xl md:text-5xl 2xl:text-6xl text-stone-500 dark:text-stone-400 mt-1 md:mt-2">
            <RollingText />
          </div>
          <p className="text-lg lg:text-xl text-stone-600 dark:text-stone-500 mt-6">
            Welcome to my digital corner!
            <br className="block md:hidden" /> Feel free to connect or explore.
          </p>
        </div>
      </div>
      {/* Scroll down icon */}
      <div className="flex flex-col items-center justify-center w-full my-8">
        <button onClick={() => {}}>
          <ChevronDown className="h-8 w-8 text-stone-800 dark:text-stone-300 animate-[bounce_3s_ease-in-out_infinite]" />
        </button>
      </div>
    </div>
  );
};

export default Home;
