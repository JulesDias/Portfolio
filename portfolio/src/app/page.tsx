"use client";

import Image from "next/image";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { useDarkMode } from "@/components/DarkModeContext"; 

export default function Home() {
  const { isDarkMode } = useDarkMode();

  return (
    <ParallaxProvider>
      <div className={`flex flex-col items-center min-h-screen px-8 sm:px-20 py-16 ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'} font-Cinema`}>
        <main className="flex flex-col items-center gap-20 w-full max-w-5xl">
          <h1 className="text-4xl sm:text-5xl font-bold mt-8">
            Ludivine Rameaux
          </h1>
          <Parallax speed={-10}>
            <Image src="/PhotoProfile.jpeg" alt="Hero" width={350} height={200} className="rounded-full shadow-2xl" priority />
          </Parallax>

          <Parallax speed={5}>
            <p className={`text-center text-xl sm:text-2xl ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} font-light max-w-3xl leading-relaxed`}>
              Un design percutant est celui qui raconte une histoire et éveille une émotion.
            </p>
          </Parallax>

          <Parallax speed={-15}>
            <Image src="/photo.jpg" alt="Portfolio" width={400} height={300} className="rounded-2xl shadow-lg" />
          </Parallax>
        </main>
      </div>
    </ParallaxProvider>
  );
}
