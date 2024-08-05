"use client";
import Image from "next/image";
import type { Metadata } from "next";
import { ChevronDown } from "lucide-react";

// export const metadata: Metadata = {
//   title: "Home",
// };

const Home = () => {
  return (
    <div className="content-center h-full flex flex-col">
      <main className="w-full h-3/4 lg:h-full flex flex-col lg:flex-row items-center justify-around lg:justify-between">
        {/* Photo Section */}
        <div className="lg:w-auto mx-12">
          <Image
            src="/(assets)/cindy_profile_1.jpg"
            alt="Picture of Cindy"
            width={300}
            height={300}
            quality={100}
            className="hover:scale-105 duration-200 rounded-full w-full"
          />
        </div>

        {/* Text Section */}
        <div className="w-auto text-left flex-col mx-12 hover:scale-105 duration-200">
          <h1 className="text-4xl lg:text-5xl text-stone-600 dark:text-stone-300 font-bold mt-4 md:mt-6">
            Hey, I’m Cindy!
          </h1>
          <p className="text-lg lg:text-2xl text-stone-500 dark:text-stone-400 font-medium mt-2 md:mt-6">
            👩‍🎓 Student@UofT | 💻 Aspiring Software Engineer
            {/* | 🍲 Foodie | 📸 Photography | 🎶 Music */}
          </p>
          <p className="text-base lg:text-lg text-stone-400 dark:text-stone-500 mt-6">
            Welcome to my digital corner! I’m excited to share my journey and
            creations with you! Feel free to explore and learn more about me :)
          </p>
        </div>
      </main>
      {/* Scroll down icon */}
      <div className="flex flex-col items-center justify-around lg:my-12">
        <button onClick={() => {}}>
          <ChevronDown />
        </button>
      </div>
    </div>
  );
};

export default Home;
