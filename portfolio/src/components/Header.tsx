"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const carouselSection = document.getElementById("carousel-section");
      if (carouselSection) {
        const offsetTop = carouselSection.offsetTop;
        const windowScroll = window.scrollY;

        if (windowScroll >= offsetTop - 100) {
          setIsHidden(true);
        } else {
          setIsHidden(false);
        }
      } else {
        // Si carousel-section n'existe pas sur la page, toujours afficher le header
        setIsHidden(false);
      }
    };

    // Vérifier immédiatement au chargement de la page
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full p-6 flex justify-center items-center bg-white sticky top-0 z-50 transition-all duration-500 ${isHidden ? "opacity-0 -translate-y-full" : "opacity-100 translate-y-0"
        }`}
      style={{
        background:
          "linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))",
      }}
    >
      <div className="flex items-end space-x-4">
        <nav className="flex items-end space-x-4 font-Poppins text-lg font-bold leading-2">
          <Link href="/" className="text-PinkCustom">Home</Link>
          <Link href="/about" className="text-gray-900">Qui suis-je ?</Link>
          <Link href="/Creation" className="text-gray-900">Mes Créations</Link>
        </nav>
      </div>
    </header>
  );
}
