// page.tsx
'use client';

import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { motion } from "framer-motion";

// Composant pour le contenu de chaque carte
const DummyContent = ({ src }: { src: string }) => {
  return (
    <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700">
          Chaque projet est une nouvelle aventure créative.
        </span>{" "}
        Mon approche du design repose sur l'innovation, la précision et l'émotion.
      </p>
      <Image
        src={src}
        alt="Project image"
        height={500}
        width={500}
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
    </div>
  );
};

// Tableau de données pour les cartes du carousel
const data = [
  {
    category: "Yepoda",
    title: "Typographie Identitaire",
    src: "/Yepoda/StickersProduit1.png",
    href: "/projet/Yepoda",
    color: "#f7c0c5",
    content: <DummyContent src="/Yepoda/StickersProduit1.png" />,
  },
  {
    category: "ChatGPT, ton meilleur ami ?",
    title: "Fanzine 5 plis",
    src: "/GPT/BonhommeStickers.png",
    href: "/projet/GPT",
    color: "#68a585",
    content: <DummyContent src="/GPT/BonhommeStickers.png" />,
  },
  {
    category: "Pom'Potes",
    title: "Extension de Gamme",
    src: "/pompotes/Barquette-17.png",
    href: "/projet/pompotes",
    color: "#d8a99d",
    content: <DummyContent src="/pompotes/Barquette-17.png" />,
  },
  {
    category: "Workshop",
    title: "Expérimentation IA",
    src: "/Workshop/Stickers-06.png",
    href: "/projet/signaletique",
    color: "#65a9c6",
    content: <DummyContent src="/Workshop/Stickers-06.png" />,
  },
  {
    category: "Clippers",
    title: "Création d'Expériences",
    src: "/Clippers/Stickers-04.png",
    href: "/projet/sketch",
    color: "#afd274",
    content: <DummyContent src="/Clippers/Stickers-04.png" />,
  },
  {
    category: "ECE COOK",
    title: "Association de Cuisine",
    src: "/EceCook/Logo.png",
    href: "/projet/typographie",
    color: "#a95156",
    content: <DummyContent src="/EceCook/Logo.png" />,
  },
  {
    category: "Capsaï",
    title: "BrandBook",
    src: "/Capsaï/Stickers9.png",
    href: "/projet/workshop",
    color: "#e49823",
    content: <DummyContent src="/Capsaï/Stickers9.png" />,
  },
];

export default function HomePage() {
  // Génération des cartes du carousel
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col"
    >
      {/* Section d'accueil avec effet Parallax */}
      <div className="h-screen bg-white flex items-center justify-center text-black relative font-Poppins -mt-20">
          <div className="relative z-20 text-center">
            <h1 className="text-6xl sm:text-8xl font-extrabold leading-tight tracking-normal">
              Bienvenue sur mon <br />
              <span className="text-PinkCustom">portfolio</span>
            </h1>
            <p className="text-lg mt-6 font-Montserrat text-PinkCustom font-bold">
              Auteure : Ludivine Rameaux
            </p>
          </div>
      </div>

      {/* SECTION CAROUSEL */}
      <div id="carousel-section" className="w-full h-full py-12 bg-PinkCustom">
        <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-white font-Montserrat">
          Découvrez mes réalisations :
        </h2>
        <Carousel items={cards} />
      </div>
    </motion.div>
  );
}
