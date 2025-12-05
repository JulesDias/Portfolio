"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjetClipper() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    window.scrollTo(0, 0);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[70vh] bg-[#afd274] overflow-hidden">
        <div className="absolute inset-0 flex items-end justify-between px-8 md:px-16 max-w-7xl mx-auto">
          <div className="z-10 max-w-xl pb-12">
            <div className="mb-6 ml-[3px]">
              <span className="text-white font-Avenir text-sm uppercase tracking-wider font-semibold">
                Packaging & Expérience • Printemps 2024
              </span>
            </div>
            <h1 className="font-Poppins text-5xl md:text-7xl font-bold text-white mb-6">
              <div className="leading-tight ml-[-3px]">Clipper</div>
              <span className="text-4xl md:text-5xl text-white block -mt-1 md:-mt-2 pt-3">
                Le Kit du Petit Chimiste
              </span>
            </h1>

            <p className="font-Avenir text-lg text-white mb-8 leading-relaxed">
              Un kit expérimental qui transforme la préparation du thé en moment ludique, créatif et participatif.
            </p>
            <div className="flex gap-4 font-Avenir text-sm text-white">
              <div>
                <span className="font-semibold">Durée :</span> 3 mois
              </div>
              <div>•</div>
              <div>
                <span className="font-semibold">Type :</span> Projet Individuel
              </div>
            </div>
            <div className="mt-6 text-left text-sm">
              <p className="font-Avenir text-white">
                <span className="font-semibold">Logiciels utilisés :</span>{" "}
                Rhino, Keyshot, Illustrator & Photoshop
              </p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hidden md:block absolute right-[15%] bottom-0 w-[35%] h-full"
          >
            <Image
              src="/Clippers/Stickers-04.png"
              fill
              alt="Logo Clipper"
              className="object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Section Concept */}
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-Poppins text-4xl font-bold mb-6 text-gray-900">
              Le Concept
            </h2>
            <div className="font-Avenir text-gray-700 space-y-4 leading-relaxed">
              <p>
                Ce projet proposait d'imaginer une <strong>expérience autour du thé ou du café</strong>, à travers un concept de packaging original ainsi que d'un kit.
              </p>
              <p>
                J'ai choisi de m'inspirer de l'identité colorée et illustrée de la marque <strong>Clipper</strong>. Son univers graphique m'a inspiré pour créer un kit expérimental qui détourne les codes de la dégustation traditionnelle.
              </p>
              <p>
                Le concept, intitulé <strong>« Le kit du petit chimiste »</strong>, transforme la préparation du thé en moment ludique, créatif et participatif.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#afd274]/20 to-[#8db858]/30 p-8 rounded-2xl">
            <h3 className="font-Poppins text-2xl font-bold mb-4 text-gray-900">
              L'Expérience
            </h3>
            <div className="font-Avenir text-gray-700 space-y-3 leading-relaxed">
              <p>
                On y découvre <strong>trois thés aux couleurs distinctes</strong>, explorant les propriétés colorantes naturelles des essences, accompagnés d'une éprouvette servant de boule à thé et d'un bécher transformé en tasse.
              </p>
              <p>
                L'ensemble invite à <strong>expérimenter, mélanger et observer</strong>, tout en conservant la dimension chaleureuse et accessible chère à Clipper.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3D avec Stickers */}
      <div id="carousel-section" className="bg-gradient-to-br from-[#afd274]/10 to-[#8db858]/20 py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="font-Poppins text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-gray-900">
            Visuels 3D
          </h2>
          <div className="relative">
            {/* Image 3D Globale au centre */}
            <div className="flex justify-center mb-12">
              <div className="w-full max-w-3xl px-4 md:px-0">
                <Image
                  src="/Clippers/Visu3DGlobal.png"
                  width={800}
                  height={600}
                  alt="Vue 3D Globale Clipper"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Sticker Avant - En haut à droite - Caché sur mobile */}
            <div className="hidden md:block absolute -top-20 right-[-6px] lg:-top-40 lg:right-10 w-64 lg:w-[450px] z-30">
              <div className="transform rotate-[-8deg]">
                <Image
                  src="/Clippers/Visu3dAvant.png"
                  width={500}
                  height={600}
                  alt="Vue 3D Avant"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Sticker Arrière - En bas à gauche - Caché sur mobile */}
            <div className="hidden md:block absolute -bottom-16 left-0 lg:-bottom-24 lg:left-16 w-64 lg:w-[420px] z-10">
              <div className="transform rotate-[6deg]">
                <Image
                  src="/Clippers/Visu3Darriere.png"
                  width={550}
                  height={650}
                  alt="Vue 3D Arrière"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Univers */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        <h2 className="font-Poppins text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 text-gray-900">
          Univers
        </h2>
        <p className="font-Avenir text-gray-700 text-center max-w-3xl mx-auto mb-12 leading-relaxed px-4">
          Inspiré de l'univers du laboratoire, ce kit transforme la préparation du thé en une expérience sensorielle et ludique. Pensé pour initier à la découverte du thé, il invite à expérimenter à travers <strong>trois thés colorés</strong> : le Rooibos rouge, le Matcha bleu qui change de teinte au contact du citron, et le thé vert.
        </p>

        <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-3 md:gap-4">
          <div className="bg-white rounded-xl p-2 md:p-3 shadow-lg hover:shadow-xl transition-shadow md:w-[calc(25%-1rem)]">
            <Image
              src="/Clippers/UniversClippers1.webp"
              width={300}
              height={200}
              alt="Univers Clipper 1"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="bg-white rounded-xl p-2 md:p-3 shadow-lg hover:shadow-xl transition-shadow md:w-[calc(25%-1rem)]">
            <Image
              src="/Clippers/UniversClippers2.jpg"
              width={300}
              height={200}
              alt="Univers Clipper 2"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="bg-white rounded-xl p-2 md:p-3 shadow-lg hover:shadow-xl transition-shadow md:w-[calc(25%-1rem)]">
            <Image
              src="/Clippers/UniversClippers4.webp"
              width={300}
              height={200}
              alt="Univers Clipper 3"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="bg-white rounded-xl p-2 md:p-3 shadow-lg hover:shadow-xl transition-shadow md:w-[calc(25%-1rem)]">
            <Image
              src="/Clippers/UniversClippers4.jpg"
              width={300}
              height={200}
              alt="Univers Clipper 4"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Section Le Kit */}
      <div className="bg-gradient-to-br from-[#afd274]/10 to-[#8db858]/20 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="font-Poppins text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900">
            Les Illustrations du Kit
          </h2>
          <p className="font-Avenir text-gray-700 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Le Kit contient trois tubes à essai avec les différents thés, un autre tube servant de boule à thé en verre ainsi qu'un bécher en tant que tasse.
          </p>

          {/* Container avec les deux sections côte à côte */}
          <div className="flex justify-center items-center gap-[10px]">
            {/* Image Devanture Packaging */}
            <div className="flex-shrink-0">
              <Image
                src="/Clippers/DevanturePackaging.png"
                width={600}
                height={350}
                alt="Devanture Packaging"
                className="h-[350px] w-auto object-contain"
              />
            </div>
            {/* Images LeKit */}
            <div className="flex justify-center items-center gap-[10px]">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className={`flex-shrink-0 ${num === 1 ? 'mr-[25px]' : ''}`}>
                  <Image
                    src={`/Clippers/LeKit${num}.png`}
                    width={250}
                    height={350}
                    alt={`Le Kit ${num}`}
                    className="h-[350px] w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section finale - Points clés */}
      <div className="bg-[#afd274] py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="font-Poppins text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-white">
            Un Projet Expérimental et Ludique
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-[#afd274]/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🧪</span>
              </div>
              <h3 className="font-Poppins text-xl font-bold mb-3 text-gray-900">
                Univers du Laboratoire
              </h3>
              <p className="font-Avenir text-gray-600 leading-relaxed">
                Une approche créative qui transforme la dégustation de thé en expérience scientifique ludique et participative.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-[#afd274]/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="font-Poppins text-xl font-bold mb-3 text-gray-900">
                Identité Colorée
              </h3>
              <p className="font-Avenir text-gray-600 leading-relaxed">
                Trois thés aux couleurs distinctes explorant les propriétés colorantes naturelles des essences.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-[#afd274]/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📦</span>
              </div>
              <h3 className="font-Poppins text-xl font-bold mb-3 text-gray-900">
                Packaging Innovant
              </h3>
              <p className="font-Avenir text-gray-600 leading-relaxed">
                Un kit complet avec tubes à essai, éprouvette-infuseur et bécher-tasse pour une expérience immersive.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-[#afd274]/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-Poppins text-xl font-bold mb-3 text-gray-900">
                Modélisation 3D
              </h3>
              <p className="font-Avenir text-gray-600 leading-relaxed">
                Conception complète avec Rhino et rendus réalistes via Keyshot pour un résultat professionnel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
