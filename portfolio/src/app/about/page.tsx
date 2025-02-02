"use client";

import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import Image from "next/image";

export default function About() {
  return (
    <ParallaxProvider>
      <div className="flex flex-col items-center min-h-screen px-8 sm:px-20 py-16 bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-700 text-gray-900 dark:text-gray-200">
        
        {/* Titre */}
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-center mb-16">
          À propos de moi
        </h1>

        {/* Section Image + Texte */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-10 max-w-5xl">
          {/* Effet Parallax sur l'image */}
          <Parallax speed={-10}>
            <Image
              src="/image.png" // Remplace par l'image de Ludivine
              alt="Ludivine Rameaux"
              width={350}
              height={350}
              className="rounded-full shadow-2xl"
            />
          </Parallax>

          {/* Texte descriptif */}
          <Parallax speed={5}>
            <p className="text-lg sm:text-xl font-light max-w-xl leading-relaxed text-center sm:text-left">
              Passionnée de design et d'innovation, je cherche à transformer les idées en visuels impactants. 
              Mon approche allie créativité, précision et une recherche constante d'esthétisme. 
              J'aime jouer avec les formes, les couleurs et les textures pour donner vie à des projets uniques.
            </p>
          </Parallax>
        </div>

        <Parallax speed={-5} className="mt-16 w-full max-w-4xl">
            <p className="text-lg sm:text-xl font-light max-w-xl leading-relaxed text-center sm:text-left">
                Actuellement étudiante à Strate, école de design, je me spécialise dans le design identitaire.
            </p>
        </Parallax>

        {/* Section Vidéo */}
        <Parallax speed={-5} className="mt-16 w-full max-w-4xl">
          <div className="relative w-full h-64 sm:h-96">
            <video
              className="w-full h-full rounded-xl shadow-lg"
              src="/DroneViewStrate.mp4"
              title="Présentation de Ludivine Rameaux"
              loop
              muted
              autoPlay
              playsInline
            />
          </div>
        </Parallax>

      </div>
    </ParallaxProvider>
  );
}
