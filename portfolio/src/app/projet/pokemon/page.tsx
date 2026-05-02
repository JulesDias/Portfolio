"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const pokemonCards = [
  {
    src: "/Workshop/ChatCharlotte.png",
    title: "Félinfleur",
    description: "Un compagnon floral et lumineux, pensé comme une carte sensible et joyeuse.",
  },
  {
    src: "/Workshop/ChatLéna.png",
    title: "Aquacat",
    description: "Une variation aquatique aux couleurs vives, inspirée de l'univers marin.",
  },
  {
    src: "/Workshop/ChienJules.png",
    title: "Bullow Armor",
    description: "Une créature protectrice et métallique, construite autour d'une présence plus massive.",
  },
  {
    src: "/Workshop/Saxo-03.png",
    title: "Fluffypuff",
    description: "Un personnage plus mystérieux, entre douceur du compagnon et imaginaire fantastique.",
  },
];

const processItems = [
  {
    title: "Observer",
    text: "Photographier l'animal de compagnie et en repérer les signes distinctifs pour nourrir la transformation.",
  },
  {
    title: "Transformer",
    text: "Utiliser l'IA pour imaginer un Pokémon inédit, puis affiner son identité visuelle et son type.",
  },
  {
    title: "Intégrer",
    text: "Mettre en scène la carte générée dans une interface inspirée de Pokémon GO pour créer une expérience complète.",
  },
];

export default function ProjetPokemon() {
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
      <div className="relative w-full h-[70vh] bg-[#65a9c6] overflow-hidden">
        <div className="absolute inset-0 flex items-end justify-between px-8 md:px-16 max-w-7xl mx-auto">
          <div className="z-10 max-w-xl pb-12">
            <div className="mb-6 ml-[3px]">
              <span className="text-white font-Avenir text-sm uppercase tracking-wider font-semibold">
                Workshop • Printemps 2025
              </span>
            </div>
            <h1 className="font-Poppins text-5xl md:text-7xl font-bold text-white mb-6">
              <div className="leading-tight ml-[-3px]">Pokémon</div>
              <span className="text-4xl md:text-5xl text-white block -mt-1 md:-mt-2 pt-3">
                Expérimentation IA
              </span>
            </h1>

            <p className="font-Avenir text-lg text-white mb-8 leading-relaxed">
              Une expérience en réalité augmentée qui imagine comment un animal
              de compagnie pourrait devenir un Pokémon personnalisé.
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
                <span className="font-semibold">Logiciels utilisés :</span>{" "}
                Figma (maquette) • Photoshop & Illustrator (visuels) • ChatGPT
                (expérimentation IA)
              </p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hidden md:block absolute right-[14%] bottom-[6%] w-[24%] h-[62%]"
          >
            <Image
              src="/Workshop/Stickers-06.png"
              fill
              alt="Illustration du workshop Pokémon"
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
                Ce premier workshop avait pour but d&apos;expérimenter avec
                l&apos;intelligence artificielle à travers une expérience de marque
                personnalisée et interactive.
              </p>
              <p>
                Nous avons choisi de travailler à partir de l&apos;univers de
                <strong> Pokémon GO</strong>, en le reliant à la thématique des
                animaux de compagnie pour repenser le lien entre jeu, affect et
                technologie.
              </p>
              <p>
                Le principe est simple : l&apos;utilisateur photographie son animal,
                qui est ensuite analysé afin de générer un Pokémon original,
                accompagné de sa carte, de son type et de ses caractéristiques.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#65a9c6]/20 to-[#8fc7df]/30 p-8 rounded-2xl">
            <h3 className="font-Poppins text-2xl font-bold mb-4 text-gray-900">
              L&apos;intention
            </h3>
            <div className="font-Avenir text-gray-700 space-y-3 leading-relaxed">
              <p>
                L&apos;enjeu était de détourner un imaginaire très populaire pour en
                faire une expérience plus intime, centrée sur l&apos;attachement que
                l&apos;on peut avoir pour un compagnon du quotidien.
              </p>
              <p>
                Le résultat mélange <strong>culture pop, fiction et design
                d&apos;interface</strong>, avec une approche à la fois ludique et
                spéculative.
              </p>
              <p>
                « Après tout, qui n&apos;a jamais rêvé de voir son animal devenir un
                Pokémon ? »
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="carousel-section" className="bg-gradient-to-br from-[#65a9c6]/10 to-[#8fc7df]/20 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="font-Poppins text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900">
            Application & Carte Pokémon
          </h2>
          <p className="font-Avenir text-gray-700 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            L&apos;expérience prend la forme d&apos;une interface inspirée de Pokémon GO,
            dans laquelle la créature générée, sa carte et son contexte
            d&apos;apparition coexistent dans une même narration visuelle.
          </p>

          <div className="bg-white rounded-3xl p-4 md:p-6 shadow-xl">
            <Image
              src="/Workshop/PG.png"
              width={1920}
              height={1080}
              alt="Mockup de l'application Pokémon avec cartes personnalisées"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-20">
        <h2 className="font-Poppins text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900">
          Galerie de Créatures
        </h2>
        <p className="font-Avenir text-gray-700 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
          Chaque carte développe un univers singulier, avec son propre ton,
          sa palette et sa personnalité, tout en restant cohérente dans
          l&apos;ensemble de la série.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {pokemonCards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
            >
              <Image
                src={card.src}
                width={2680}
                height={3745}
                alt={card.title}
                className="w-full h-auto"
              />
              <div className="p-5">
                <h3 className="font-Poppins text-2xl font-bold text-gray-900 mb-2">
                  {card.title}
                </h3>
                <p className="font-Avenir text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="font-Poppins text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            Déroulé de l&apos;expérience
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {processItems.map((item, index) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 bg-[#65a9c6] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-Poppins text-white text-2xl font-bold">
                    {index + 1}
                  </span>
                </div>
                <h3 className="font-Poppins text-xl font-bold mb-3 text-gray-900">
                  {item.title}
                </h3>
                <p className="font-Avenir text-gray-600 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#65a9c6] py-20">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="font-Poppins text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Ce que ce workshop explore
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-Poppins text-xl font-bold mb-3 text-gray-900">
                Personnalisation
              </h3>
              <p className="font-Avenir text-gray-600 leading-relaxed">
                Une expérience qui part du réel pour produire une créature unique
                et émotionnellement investie.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-Poppins text-xl font-bold mb-3 text-gray-900">
                Interface
              </h3>
              <p className="font-Avenir text-gray-600 leading-relaxed">
                Un travail d&apos;articulation entre carte, application et mise en
                scène pour rendre l&apos;usage crédible.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-Poppins text-xl font-bold mb-3 text-gray-900">
                Imaginaire pop
              </h3>
              <p className="font-Avenir text-gray-600 leading-relaxed">
                Une façon de détourner un univers familier pour le réinvestir
                avec humour, soin et affection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
