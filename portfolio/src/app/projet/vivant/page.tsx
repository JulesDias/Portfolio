"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const points = [
  {
    title: "Citation",
    text: "Un travail construit à partir d'une phrase de Marguerite Duras, pensée comme point de départ narratif.",
  },
  {
    title: "Mise en page",
    text: "Un jeu de tension entre lisibilité, disparition, miroir et recadrage pour installer une atmosphère.",
  },
  {
    title: "Impression",
    text: "Une expérimentation entre support éditorial, objet imprimé et rapport sensible à l'image.",
  },
];

export default function ProjetVivant() {
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
      <div className="relative w-full h-[70vh] bg-[#b4b25b] overflow-hidden">
        <div className="absolute inset-0 flex items-end justify-between px-8 md:px-16 max-w-7xl mx-auto">
          <div className="z-10 max-w-xl pb-12">
            <div className="mb-6 ml-[3px]">
              <span className="text-white font-Avenir text-sm uppercase tracking-wider font-semibold">
                Workshop • Printemps 2025
              </span>
            </div>
            <h1 className="font-Poppins text-5xl md:text-7xl font-bold text-white mb-6">
              <div className="leading-tight ml-[-3px]">Vivant</div>
              <span className="text-4xl md:text-5xl text-white block -mt-1 md:-mt-2 pt-3">
                Édition expérimentale
              </span>
            </h1>

            <p className="font-Avenir text-lg text-white mb-8 leading-relaxed">
              Un workshop éditorial autour de la mémoire, de la disparition et
              de ce qui persiste dans l&apos;image et dans le souvenir.
            </p>
            <div className="flex gap-4 font-Avenir text-sm text-white">
              <div>
                <span className="font-semibold">Durée :</span> 1 semaine et 2 jours
              </div>
              <div>•</div>
              <div>
                <span className="font-semibold">Type :</span> Projet de Groupe
              </div>
            </div>
            <div className="mt-6 text-left text-sm">
              <p className="font-Avenir text-white">
                <span className="font-semibold">Approche :</span>{" "}
                citation, mise en page, expérimentation imprimée et narration
                visuelle.
              </p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hidden md:block absolute right-[11%] bottom-[4%] w-[28%] h-[74%]"
          >
            <Image
              src="/Workshop/VIVANT.png"
              fill
              alt="Affiche du workshop Vivant"
              className="object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-Poppins text-4xl font-bold mb-6 text-gray-900">
              Le Workshop
            </h2>
            <div className="font-Avenir text-gray-700 space-y-4 leading-relaxed">
              <p>
                Ce second workshop, plus graphique, s&apos;articulait autour d&apos;un
                mot et d&apos;une citation associée. L&apos;objectif était de construire
                une série de visuels cohérents racontant une histoire commune.
              </p>
              <p>
                La phrase choisie, tirée de Marguerite Duras, agit ici comme un
                seuil entre la vie et la mort. Elle a guidé la direction de
                l&apos;image, des recadrages et de la mise en page.
              </p>
              <p>
                Le projet joue sur la complémentarité entre plusieurs supports :
                affiche, carte, détail agrandi et manipulations imprimées, pour
                installer une expérience plus silencieuse et contemplative.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#b4b25b]/20 to-[#d9d7a2]/35 p-8 rounded-2xl">
            <h3 className="font-Poppins text-2xl font-bold mb-4 text-gray-900">
              La citation
            </h3>
            <div className="font-Avenir text-gray-700 space-y-3 leading-relaxed">
              <p>
                « Et après la mort, qu&apos;est-ce qui reste ? Rien. Que les vivants
                qui se sourient, qui se souviennent. »
              </p>
              <p>
                Cette phrase a été interprétée comme une passerelle entre
                présence, mémoire et disparition, et a donné naissance à un jeu
                de miroir entre plusieurs images.
              </p>
              <p>
                Le second visuel fonctionne presque comme un contrepoint, plus
                calme, plus frontal, comme un avis de décès revisité sous forme
                d&apos;objet éditorial.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="carousel-section" className="bg-gradient-to-br from-[#b4b25b]/10 to-[#ebe9cf]/40 py-20">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="font-Poppins text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900">
            Jeu de Miroir
          </h2>
          <p className="font-Avenir text-gray-700 text-center max-w-3xl mx-auto mb-4 leading-relaxed">
            Le grand visuel installe l&apos;atmosphère générale, tandis que
            l&apos;image superposée vient en révéler un détail, comme un zoom
            sensible sur la matière et sur le souvenir.
          </p>
          <p className="font-Avenir text-gray-600 text-center max-w-2xl mx-auto mb-12 text-sm italic">
            Les versions en contraste dans le coin inférieur droit montrent le fanzine plié en quatre.
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-end">
            <div className="relative">
              <Image
                src="/Workshop/Essai Wksp.png"
                width={3508}
                height={4961}
                alt="Grand visuel du workshop Vivant"
                className="w-full h-auto"
              />

              <div className="absolute bottom-0 right-0 w-1/2 h-1/2 shadow-2xl [filter:contrast(1.6)] hover:scale-110 transition-transform duration-300 ease-out origin-bottom-right">
                <Image
                  src="/Workshop/10-10.png"
                  width={1754}
                  height={2481}
                  alt="Zoom du visuel Vivant"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex gap-8">
              <div className="w-1/2 h-1/2">
                <Image
                  src="/Workshop/Essai Wksp-14.png"
                  width={3508}
                  height={4961}
                  alt="Deuxième visuel du workshop Vivant"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-1/2 h-1/2">
                <Image
                  src="/Workshop/5.jpg"
                  width={1200}
                  height={1600}
                  alt="Carte du workshop Vivant"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-20">
        <h2 className="font-Poppins text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900">
          L&apos;objet imprimé
        </h2>
        <p className="font-Avenir text-gray-700 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
          Le workshop se déploie aussi dans la manipulation de l&apos;objet :
          affiche, carte et prise en main composent un ensemble éditorial plus
          intime.
        </p>

        <div className="flex justify-center">
          <div className="relative w-full max-w-2xl">
            <div className="bg-white rounded-2xl p-4 shadow-lg">
              <Image
                src="/Workshop/2.jpg"
                width={1200}
                height={1600}
                alt="Affiche et carte du workshop Vivant"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#b4b25b] py-20">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="font-Poppins text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Ce que ce workshop développe
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {points.map((point) => (
              <div key={point.title} className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="font-Poppins text-xl font-bold mb-3 text-gray-900">
                  {point.title}
                </h3>
                <p className="font-Avenir text-gray-600 leading-relaxed">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
