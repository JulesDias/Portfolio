"use client";

import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col items-center min-h-screen px-8 sm:px-20 py-16 bg-gradient-to-b bg-white text-gray-900">
      {/* Titre */}
      <h1 className="text-5xl sm:text-6xl font-kiera tracking-tight text-center mb-16">
        À propos de moi
      </h1>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-10 max-w-5xl mb-16">
        <Image
          src="/image.png"
          alt="Ludivine Rameaux"
          width={350}
          height={350}
          className="rounded-full shadow-2xl"
        />

        <p className="text-2xl sm:text-2xl font-Montserrat max-w-xl leading-relaxed text-center sm:text-left">
          Passionnée de design et d'innovation, je cherche à transformer les
          idées en visuels impactants. Mon approche allie créativité, précision
          et une recherche constante d'esthétisme. J'aime jouer avec les formes,
          les couleurs et les textures pour donner vie à des projets uniques.
        </p>
      </div>

      <p className="text-lg sm:text-xl font-Montserrat max-w-xl leading-relaxed text-center sm:text-left mb-16">
        Actuellement étudiante à Strate, école de design, je me spécialise dans
        le design d'identité.
      </p>

      {/* Section Vidéo */}
      <video
        className="w-1/2 h-full rounded-xl shadow-lg"
        src="/DroneViewStrate.mp4"
        title="Présentation de Ludivine Rameaux"
        loop
        muted
        autoPlay
        playsInline
      />
    </div>
  );
}
