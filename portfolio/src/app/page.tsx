// page.tsx
'use client';

import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel"; // Assurez-vous que ces imports pointent vers le bon chemin
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
    category: "Croquis",
    title: "Travail d'interprétation",
    src: "/photo.jpg",
    href: "/projet/sketch", // lien spécifique
    content: <DummyContent src="/photo.jpg" />,
  },
  {
    category: "Typographie",
    title: "A la plume et à l'encre",
    src: "/Draco.jpg",
    href: "/projet/typographie",
    content: <DummyContent src="/Draco.jpg" />,
  },
  {
    category: "Projet",
    title: "La liaison, parfum",
    src: "/chambre.jpg",
    href: "/projet/chambre",
    content: <DummyContent src="/chambre.jpg" />,
  },
  {
    category: "Projet",
    title: "Résurgence, Signalétique",
    src: "/resurgence/miroir_seine5_5.png",
    href: "/projet/signaletique",
    content: <DummyContent src="/resurgence/miroir_seine5_5.png" />,
  },
  {
    category: "Packaging",
    title: "Pom’Potes",
    src: "/barquette.png",
    href: "/projet/packaging",
    content: <DummyContent src="/barquette.png" />,
  },
  {
    category: "Création de jeux",
    title: "Travaux Libres",
    src: "/jeuCouleur.jpg",
    href: "/projet/jeux",
    content: <DummyContent src="jeuCouleur.jpg" />,
  },
  {
    category: "A la main",
    title: "Dessin d'observation",
    src: "/Begude.jpg",
    href: "/projet/dessin",
    content: <DummyContent src="/Begude.jpg" />,
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
      <div className="h-screen bg-white flex items-center justify-center text-black relative font-kiera">
        <Parallax speed={50}>
          <div className="relative z-20 text-center">
            <h1 className="text-6xl sm:text-8xl font-extrabold leading-tight tracking-widest">
              Bienvenu sur mon <br />
              <span className="italic text-greenCustom">portfolio</span>
            </h1>
            <p className="text-lg mt-6 font-Montserrat text-DarkGreenCustom font-bold">
              Auteure: Ludivine Rameaux
            </p>
          </div>
        </Parallax>
      </div>

      {/* SECTION CAROUSEL */}
      <div id="carousel-section" className="w-full h-full py-20 bg-OtherGreenCustom">
        <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 font-Montserrat">
          Découvrez mes réalisations.
        </h2>
        <Carousel items={cards} />
      </div>
    </motion.div>
  );
}
