"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isHidden, setIsHidden] = useState(false);
  const pathname = usePathname();

  // Définir les couleurs en fonction des pages
  const getHomeColor = () => {
    if (pathname === "/") return "text-PinkCustom";
    if (pathname === "/about") return "text-PinkCustom";
    if (pathname === "/Creation") return "text-PinkCustom";
    if (pathname?.startsWith("/projet/Yepoda")) return "text-[#f7c0c5]";
    if (pathname?.startsWith("/projet/GPT")) return "text-[#68a585]";
    if (pathname?.startsWith("/projet/pompotes")) return "text-[#d8a99d]";
    if (pathname?.startsWith("/projet/signaletique")) return "text-[#65a9c6]";
    if (pathname?.startsWith("/projet/sketch")) return "text-[#afd274]";
    if (pathname?.startsWith("/projet/typographie")) return "text-[#a95156]";
    if (pathname?.startsWith("/projet/workshop")) return "text-[#e49823]";
    return "text-PinkCustom"; // couleur par défaut
  };

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
          <Link href="/" className={getHomeColor()}>Home</Link>
          <Link href="/about" className="text-gray-900">Qui suis-je ?</Link>
          <Link href="/Creation" className="text-gray-900">Mes Créations</Link>
        </nav>
      </div>
    </header>
  );
}
