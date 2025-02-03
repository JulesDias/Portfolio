"use client";

import Image from "next/image";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { useDarkMode } from "@/components/DarkModeContext";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { motion } from "framer-motion";

export default function Home() {
  const { isDarkMode } = useDarkMode();

  // Générer les cartes du carousel
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ParallaxProvider>
        <div
          className={`flex flex-col items-center min-h-screen px-8 sm:px-20 py-16 overflow-x-hidden ${
            isDarkMode
              ? "bg-gray-900 text-gray-100"
              : "bg-gray-100 text-gray-900"
          } font-Cinema`}
        >
          <main className="flex flex-col items-center gap-20 w-full max-w-5xl">
            {/* Titre */}
            <h1 className="text-4xl sm:text-5xl font-bold mt-8">
              Ludivine Rameaux
            </h1>

            {/* Image de profil en Parallax */}
            <Parallax speed={-10}>
              <Image
                src="/PhotoProfile.jpeg"
                alt="Hero"
                width={350}
                height={200}
                className="rounded-full shadow-2xl"
                priority
              />
            </Parallax>

            {/* Texte avec effet Parallax */}
            <Parallax speed={5}>
              <p
                className={`text-center text-xl sm:text-2xl ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                } font-light max-w-3xl leading-relaxed`}
              >
                Un design percutant est celui qui raconte une histoire et
                éveille une émotion.
              </p>
            </Parallax>

            {/* Bandeau avec texte en Parallax */}
            <Parallax speed={-15}>
              <div className="w-screen h-96 bg-gray-300 dark:bg-gray-700 bg-opacity-50 dark:bg-opacity-50 flex items-center justify-between px-4 sm:px-10 md:px-20 backdrop-blur-md">
              <p
                className={`text-left text-base sm:text-lg md:text-xl ${
                isDarkMode ? "text-gray-100" : "text-gray-900"
                }`}
              >
                Découvrez mes projets ci-dessous
              </p>
              <div className="relative w-96 h-96 sm:w-96 sm:h-96 md:w-96 md:h-96">
                <Image
                src="/Usain.jpg"
                alt="Description of image"
                layout="fill"
                objectFit="contain"
                className="rounded-3xl"
                />
              </div>
              </div>
            </Parallax>

            {/* 🖼️ SECTION CAROUSEL */}
            <div className="w-full h-full py-20">
              <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
                Découvrez mes réalisations.
              </h2>
              <Carousel items={cards} />
            </div>
          </main>
        </div>
      </ParallaxProvider>
    </motion.div>
  );
}

// 🎨 Contenu des cartes du carousel
const DummyContent = ({ src }: { src: string }) => {
  return (
    <div
      className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
    >
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Chaque projet est une nouvelle aventure créative.
        </span>{" "}
        Mon approche du design repose sur l'innovation, la précision et
        l'émotion.
      </p>
      <Image
        src={src}
        alt="Project image"
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
    </div>
  );
};

const data = [
  {
    category: "Web Design",
    title: "Création d'expériences interactives.",
    src: "/photo.jpg",
    content: <DummyContent src="/photo.jpg" />,
  },
  {
    category: "Typographie",
    title: "L'identité visuelle au service de l'émotion.",
    src: "/Draco.jpg",
    content: <DummyContent src="/Draco.jpg" />,
  },
  {
    category: "UX/UI",
    title: "L'expérience utilisateur avant tout.",
    src: "/chambre.jpg",
    content: <DummyContent src="/chambre.jpg" />,
  },
  {
    category: "Illustration",
    title: "Donner vie aux idées avec le digital.",
    src: "/espace.jpg",
    content: <DummyContent src="/espace.jpg" />,
  },
  {
    category: "Motion Design",
    title: "Quand l'animation sublime le message.",
    src: "/barquette.jpg",
    content: <DummyContent src="/barquette.jpg" />,
  },
  {
    category: "Créativité",
    title: "Un regard unique sur chaque projet.",
    src: "/couleur.jpg",
    content: <DummyContent src="/couleur.jpg" />,
  },
];
