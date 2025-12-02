"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjetEceCook() {
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
      <div className="relative w-full h-[70vh] bg-[#a95156] overflow-hidden">
        <div className="absolute inset-0 flex items-end justify-between px-8 md:px-16 max-w-7xl mx-auto">
          <div className="z-10 max-w-xl pb-12">
            <div className="mb-6 ml-[3px]">
              <span className="text-white font-Avenir text-sm uppercase tracking-wider font-semibold">
                Identité Visuelle • Automne 2024
              </span>
            </div>
            <h1 className="font-Poppins text-5xl md:text-7xl font-bold text-white mb-6">
              <div className="leading-tight">ECE Cook</div>
              <span className="text-4xl md:text-5xl text-white block -mt-1 md:-mt-2">
                Association de Cuisine
              </span>
            </h1>

            <p className="font-Avenir text-lg text-white mb-8 leading-relaxed">
              Création d'un kakémono et d'une bannière LinkedIn pour une association étudiante, en mettant en avant un esprit gourmand et convivial.
            </p>
            <div className="flex gap-4 font-Avenir text-sm text-white">
              <div>
                <span className="font-semibold">Durée :</span> 2 jours
              </div>
              <div>•</div>
              <div>
                <span className="font-semibold">Type :</span> Projet Individuel
              </div>
            </div>
            {/* Logiciels utilisés */}
            <div className="mt-6 text-left text-sm">
              <p className="font-Avenir text-white">
                <span className="font-semibold">Logiciels utilisés :</span>{" "}
                Adobe Illustrator & Lightroom
              </p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hidden md:block absolute right-[15%] bottom-0 w-[25%] h-full"
          >
            <Image
              src="/EceCook/Logo.png"
              fill
              alt="Logo ECE Cook"
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
              Le Projet
            </h2>
            <div className="font-Avenir text-gray-700 space-y-4 leading-relaxed">
              <p>
                Il s'agit ici d'un <strong>projet personnel</strong> dont le but était d'aider une association étudiante pour ses visuels.
              </p>
              <p>
                Ils avaient besoin d'un <strong>kakémono clair</strong> et d'une nouvelle <strong>bannière pour LinkedIn</strong> en reprenant leur identité déjà existante.
              </p>
              <p>
                L'objectif était de mettre en avant un esprit <strong>gourmand et vivant</strong> pour faire ressortir l'ADN de l'association : le bon vivant et les bons moments.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#a95156]/20 to-[#8b3f43]/30 p-8 rounded-2xl">
            <h3 className="font-Poppins text-2xl font-bold mb-4 text-gray-900">
              Enjeux Créatifs
            </h3>
            <div className="font-Avenir text-gray-700 space-y-3 leading-relaxed">
              <p>
                Le travail s'est donc concentré sur une <strong>mise en page lisible et dynamique</strong>, associée à des éléments graphiques évocateurs du thème culinaire.
              </p>
              <p>
                L'enjeu était de <strong>fluidifier leur communication</strong> sans dénaturer leur identité, en conservant cet esprit festif et accessible propre à l'association.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section Kakémono */}
      <div id="carousel-section" className="bg-gradient-to-br from-[#a95156]/10 to-[#8b3f43]/20 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="font-Poppins text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            Kakémono
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center overflow-hidden">
              <div className="relative w-full" style={{ aspectRatio: '1/1.5' }}>
                <Image
                  src="/EceCook/BrouillonKakemono.png"
                  fill
                  alt="Kakémono ECE Cook 1"
                  className="object-cover scale-110"
                />
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center">
              <div className="relative w-full" style={{ aspectRatio: '1/1.5' }}>
                <Image
                  src="/EceCook/KakémonoECECook_V2.png"
                  fill
                  alt="Kakémono ECE Cook 2"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Bannière LinkedIn */}
      <div className="max-w-7xl mx-auto px-8 py-20">
        <h2 className="font-Poppins text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
          Bannière LinkedIn
        </h2>
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <Image
            src="/EceCook/BannièreCOOK.png"
            width={1600}
            height={400}
            alt="Bannière LinkedIn ECE Cook"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Section Processus */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="font-Poppins text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            Approche de Design
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#a95156] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-Poppins text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="font-Poppins text-xl font-bold mb-3 text-gray-900">
                Analyse
              </h3>
              <p className="font-Avenir text-gray-600 leading-relaxed">
                Étude de l'identité existante de l'association pour comprendre leurs valeurs et leur ADN.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#a95156] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-Poppins text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="font-Poppins text-xl font-bold mb-3 text-gray-900">
                Création
              </h3>
              <p className="font-Avenir text-gray-600 leading-relaxed">
                Conception de visuels dynamiques et lisibles avec des éléments graphiques culinaires.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#a95156] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-Poppins text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="font-Poppins text-xl font-bold mb-3 text-gray-900">
                Déploiement
              </h3>
              <p className="font-Avenir text-gray-600 leading-relaxed">
                Adaptation aux différents formats : kakémono vertical et bannière LinkedIn horizontale.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section finale - Points clés */}
      <div className="bg-[#a95156] py-20">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="font-Poppins text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Un Projet Rapide et Efficace
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-[#a95156]/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🍽️</span>
              </div>
              <h3 className="font-Poppins text-xl font-bold mb-3 text-gray-900">
                Esprit Gourmand
              </h3>
              <p className="font-Avenir text-gray-600 leading-relaxed">
                Des visuels qui mettent en avant la convivialité et le plaisir de partager de bons moments autour de la cuisine.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-[#a95156]/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="font-Poppins text-xl font-bold mb-3 text-gray-900">
                Identité Préservée
              </h3>
              <p className="font-Avenir text-gray-600 leading-relaxed">
                Une communication fluidifiée tout en conservant l'esprit festif et accessible de l'association.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-[#a95156]/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📐</span>
              </div>
              <h3 className="font-Poppins text-xl font-bold mb-3 text-gray-900">
                Mise en Page Dynamique
              </h3>
              <p className="font-Avenir text-gray-600 leading-relaxed">
                Un design lisible et énergique avec des éléments graphiques évocateurs du thème culinaire.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-[#a95156]/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-Poppins text-xl font-bold mb-3 text-gray-900">
                Réalisation Rapide
              </h3>
              <p className="font-Avenir text-gray-600 leading-relaxed">
                Un projet personnel accompli en 2 jours pour répondre efficacement aux besoins de l'association.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
