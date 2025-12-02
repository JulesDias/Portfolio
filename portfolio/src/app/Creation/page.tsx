"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Données des projets du portfolio avec couleurs de rubans
const projects = [
  {
    title: "Typographie Identitaire",
    slug: "Yepoda",
    category: "Yepoda",
    color: "#f7c0c5",
    image: "/Yepoda/StickersProduit1.png",
  },
  {
    title: "Fanzine 5 plis",
    slug: "GPT",
    category: "ChatGPT, ton meilleur ami ?",
    color: "#68a585",
    image: "/GPT/BonhommeStickers.png",
  },
  {
    title: "Extension de Gamme",
    slug: "pompotes",
    category: "Pom'Potes",

    color: "#d8a99d",
    image: "/pompotes/Barquette-17.png",
  },
  {
    title: "Workshop",
    slug: "signaletique",
    category: "",
    color: "#65a9c6",
    image: "/Workshop/Stickers-06.png",
  },
  {
    title: "Création d'Expériences",
    slug: "sketch",
    category: "Clippers",
    color: "#afd274",
    image: "/Clippers/Stickers-04.png",
  },
  {
    title: "Association de Cuisine",
    slug: "typographie",
    category: "ECE COOK",
    color: "#a95156",
    image: "/EceCook/Logo.png",
  },
  {
    title: "BrandBook",
    slug: "workshop",
    category: "Capsaï",
    color: "#e49823",
    image: "/Capsaï/Stickers9.png",
  },
];

export default function CreationPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white relative overflow-x-hidden"
    >
      {/* En-tête de page */}
      <section className="w-full bg-PinkCustom py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-Poppins text-4xl md:text-6xl font-bold text-white mb-4">
            Mes créations
          </h1>
          <p className="font-Montserrat text-base md:text-lg text-white max-w-2xl leading-relaxed">
            Découvrez une sélection de mes projets de design graphique, identité visuelle, packaging et expériences créatives.
            Chaque projet raconte une histoire unique et reflète ma passion pour le design.
          </p>
        </div>
      </section>

      {/* Liste des projets - Rubans colorés */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-12">
        <div className="flex flex-col gap-6 md:gap-8">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <Link
                key={project.slug}
                href={`/projet/${project.slug}`}
                className="relative group"
              >
                {/* Conteneur du ruban */}
                <div
                  className="relative rounded-full h-16 md:h-20 px-8 md:px-12 flex items-center shadow-md transition-all duration-200 ease-out cursor-pointer hover:scale-[1.02] hover:shadow-xl hover:brightness-105 mx-auto w-full max-w-4xl"
                  style={{ backgroundColor: project.color }}
                >
                  {/* Texte du projet */}
                  <div className={`flex flex-col ${isEven ? 'ml-16 md:ml-24' : 'mr-16 md:mr-24 ml-auto text-right'}`}>
                    <span className="text-white font-semibold text-lg md:text-xl font-Poppins">
                      {project.title}
                    </span>
                    <span className="text-white/80 text-sm md:text-base font-Montserrat">
                      {project.category}
                    </span>
                  </div>

                  {/* Sticker image */}
                  <div
                    className={`absolute ${isEven
                      ? '-left-6 md:-left-8'
                      : '-right-6 md:-right-8'
                      } top-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 transition-transform duration-200 group-hover:scale-110`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={96}
                      height={96}
                      className="w-full h-full object-contain drop-shadow-lg"
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-20 text-center">
        <h2 className="font-Poppins text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Intéressé par mon travail ?
        </h2>
        <p className="font-Montserrat text-base md:text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          N'hésitez pas à me contacter pour discuter de vos projets ou en savoir plus sur mon parcours.
        </p>
        <Link
          href="/about"
          className="inline-block bg-PinkCustom text-white px-8 py-4 rounded-full font-bold font-Poppins hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
        >
          En savoir plus sur moi
        </Link>
      </section>
    </motion.div>
  );
}
