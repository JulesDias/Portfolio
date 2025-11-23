"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { motion } from "framer-motion";

// Composant pour l'image de chaque projet avec gestion du ratio
const ProjectImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="flex flex-1 w-full h-full min-h-[12rem] rounded-xl overflow-hidden bg-neutral-100">
    <Image
      src={src}
      alt={alt}
      width={800}
      height={600}
      className="w-full h-full object-cover transition-transform duration-500 group-hover/bento:scale-105"
    />
  </div>
);

// Données des projets du portfolio
const projects = [
  {
    title: "Travail d'interprétation",
    category: "Croquis",
    description: "Dessins d'observation et interprétation artistique",
    image: "/photo.jpg",
    href: "/projet/sketch",
    className: "md:col-span-2",
  },
  {
    title: "A la plume et à l'encre",
    category: "Typographie",
    description: "Créations typographiques manuscrites",
    image: "/Draco.jpg",
    href: "/projet/typographie",
    className: "md:col-span-1",
  },
  {
    title: "La liaison",
    category: "Parfum",
    description: "Projet de conception de parfum",
    image: "/chambre.jpg",
    href: "/projet/chambre",
    className: "md:col-span-1",
  },
  {
    title: "Résurgence",
    category: "Signalétique",
    description: "Système de signalétique pour l'île Seguin",
    image: "/resurgence/miroir_seine5_5.png",
    href: "/projet/signaletique",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Les Barquettes Pom'Potes",
    category: "Packaging",
    description: "Extension de gamme - Biscuits fourrés aux fruits",
    image: "/pompotes/barquette.png",
    href: "/projet/pompotes",
    className: "md:col-span-1",
  },
  {
    title: "Travaux Libres",
    category: "Jeux",
    description: "Conception de jeux créatifs",
    image: "/jeuCouleur.jpg",
    href: "/projet/jeux",
    className: "md:col-span-2",
  },
  {
    title: "Dessin d'observation",
    category: "Dessin",
    description: "Études et croquis à la main",
    image: "/Begude.jpg",
    href: "/projet/dessin",
    className: "md:col-span-1",
  },
  {
    title: "Espace Design",
    category: "Architecture",
    description: "Aménagement d'espaces",
    image: "/Espace.jpg",
    href: "/projet/espace",
    className: "md:col-span-1",
  },
  {
    title: "Performance Usain",
    category: "Sport",
    description: "Design et performance sportive",
    image: "/Usain.jpg",
    href: "/projet/usain",
    className: "md:col-span-1",
  },
];

export default function CreationPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-b from-white to-OtherGreenCustom py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-kiera text-black mb-6 tracking-wide">
            Mes <span className="text-greenCustom italic">Créations</span>
          </h1>
          <p className="text-lg md:text-xl font-Montserrat text-gray-700 max-w-3xl">
            Découvrez l'ensemble de mes projets créatifs : packaging, signalétique,
            typographie, design et bien plus encore.
          </p>
        </div>
      </div>

      {/* Bento Grid Section */}
      <div id="carousel-section" className="w-full bg-white py-16 md:py-20 px-4 md:px-10">
        <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[20rem]">
          {projects.map((project, i) => (
            <Link href={project.href} key={i} className={project.className}>
              <BentoGridItem
                title={
                  <div className="space-y-1">
                    <span className="text-xs md:text-sm text-greenCustom font-bold font-Montserrat uppercase tracking-wide">
                      {project.category}
                    </span>
                    <div className="text-base md:text-xl font-bold font-Montserrat text-neutral-800">
                      {project.title}
                    </div>
                  </div>
                }
                description={
                  <span className="font-Montserrat text-sm text-neutral-600">
                    {project.description}
                  </span>
                }
                header={<ProjectImage src={project.image} alt={project.title} />}
                className="cursor-pointer hover:border-greenCustom border-2 transition-all duration-300 h-full"
              />
            </Link>
          ))}
        </BentoGrid>
      </div>

      {/* CTA Section */}
      <div className="w-full bg-gradient-to-b from-OtherGreenCustom to-white py-16 md:py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-kiera mb-6 text-black">
            Intéressé par mon travail ?
          </h2>
          <p className="text-lg md:text-xl font-Montserrat text-gray-700 mb-8 max-w-2xl mx-auto">
            N'hésitez pas à me contacter pour discuter de vos projets ou en savoir plus sur mon parcours.
          </p>
          <Link
            href="/about"
            className="inline-block bg-greenCustom text-white px-8 py-4 rounded-lg font-bold font-Montserrat hover:bg-DarkGreenCustom transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            En savoir plus sur moi
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
