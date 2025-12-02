"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

// Composant Carousel avec flèches - défilement linéaire
function ArrowCarousel() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselImages = [1, 2, 3, 4, 5, 6, 7, 8];

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = 400; // Distance de défilement
      const newPosition =
        direction === "left"
          ? scrollPosition - scrollAmount
          : scrollPosition + scrollAmount;

      containerRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
      setScrollPosition(newPosition);
    }
  };

  const handleScroll = () => {
    if (containerRef.current) {
      setScrollPosition(containerRef.current.scrollLeft);
    }
  };

  const canScrollLeft = scrollPosition > 0;
  const canScrollRight = containerRef.current
    ? scrollPosition <
      containerRef.current.scrollWidth - containerRef.current.clientWidth - 10
    : true;

  return (
    <div className="relative w-full">
      {/* Bouton gauche */}
      <button
        onClick={() => scroll("left")}
        disabled={!canScrollLeft}
        className={`absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-4 rounded-full shadow-lg transition-all duration-200 hover:scale-110 ${
          !canScrollLeft ? "opacity-30 cursor-not-allowed" : ""
        }`}
        aria-label="Précédent"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-8 h-8 text-[#68A585]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      {/* Conteneur scrollable */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="flex gap-6 overflow-x-auto scroll-smooth py-4 px-4 md:px-16 scrollbar-hide w-full"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {carouselImages.map((num) => (
          <div
            key={num}
            className="flex-shrink-0 w-[250px] md:w-[350px] bg-white pt-1 pb-1 pr-4 pl-4 rounded-3xl shadow-xl"
          >
            <div className="relative w-full h-[350px] md:h-[450px]">
              <Image
                src={`/GPT/Carousel${num}.jpg`}
                fill
                alt={`Visuel ${num}`}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Bouton droite */}
      <button
        onClick={() => scroll("right")}
        disabled={!canScrollRight}
        className={`absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-4 rounded-full shadow-lg transition-all duration-200 hover:scale-110 ${
          !canScrollRight ? "opacity-30 cursor-not-allowed" : ""
        }`}
        aria-label="Suivant"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-8 h-8 text-[#68A585]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

export default function ProjetGPT() {
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
      {/* Hero Section avec image principale */}
      <div className="relative w-full h-[70vh] bg-[#68A585] overflow-hidden">
        <div className="absolute inset-0 flex items-end justify-between px-8 md:px-16 max-w-7xl mx-auto">
          <div className="z-10 max-w-xl pb-12">
            <div className="mb-6 ml-[3px]">
              <span className="text-white font-Avenir text-sm uppercase tracking-wider font-semibold">
                Fanzine • Printemps 2025
              </span>
            </div>
            <h1 className="font-Poppins text-5xl md:text-7xl font-bold text-white mb-6">
              <div className="leading-tight ml-[-3px]">ChatGPT</div>
              <span className="text-4xl md:text-5xl text-gray-100 block -mt-1 md:-mt-2">
                Ton meilleur ami ?
              </span>
            </h1>

            <p className="font-Avenir text-lg text-white mb-8 leading-relaxed">
              Fanzine en 5 plis imprimé en risographie pour sensibiliser les
              collégiens aux dangers et dérives de l'intelligence artificielle.
            </p>
            <div className="flex gap-4 font-Avenir text-sm text-white">
              <div>
                <span className="font-semibold">Durée :</span> 3 mois
              </div>
              <div>•</div>
              <div>
                <span className="font-semibold">Type :</span> Projet de Groupe
              </div>
            </div>
            {/* Logiciels utilisés */}
            <div className="text-left text-sm">
              <p className="font-Avenir text-white mt-6">
                <span className="font-semibold">Logiciels utilisés :</span>{" "}
                Procreate & Adobe Illustrator (dessin) • Photoshop (impression)
              </p>
            </div>
          </div>

          <div className="hidden md:block relative w-[35%] h-full">
            <Image
              src="/GPT/BonhommeStickers.png"
              fill
              alt="Fanzine ChatGPT"
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Section mobile hero image */}
      <div className="md:hidden w-full py-10 bg-[#68A585]">
        <div className="relative w-full h-[400px]">
          <Image
            src="/GPT/BonhommeStickers.png"
            fill
            alt="Fanzine ChatGPT"
            className="object-contain drop-shadow-2xl"
          />
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
                Ce projet vise à concevoir un <strong>fanzine en 5 plis</strong>
                , imprimé en risographie avec seulement{" "}
                <strong>trois couleurs</strong> et deux contraintes principales
                : le thème et le ton.
              </p>
              <p>
                À travers notre sujet,{" "}
                <strong>« ChatGPT : ton meilleur ami ? »</strong>, l'objectif
                était de créer un support pédagogique et visuel, destiné à
                sensibiliser les collégiens aux dangers et dérives liés à
                l'usage de l'intelligence artificielle.
              </p>
              <p>
                Le fanzine se compose de deux volets complémentaires : un livret
                sous forme BD et au dos un poster dans le même univers
                graphique.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#68A585]/20 to-[#20946E]/30 p-8 rounded-2xl relative overflow-visible">
            <div className="absolute -top-8 -right-8 w-32 h-32 rotate-12 z-10">
              <Image
                src="/GPT/imageBulleContext.png"
                width={200}
                height={200}
                alt="Bulle contextuelle"
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </div>
            <h3 className="font-Poppins text-2xl font-bold mb-4 text-gray-900">
              Démarche Créative
            </h3>
            <div className="font-Avenir text-gray-700 space-y-3 leading-relaxed">
              <p>
                L'objectif de cette histoire était de s'adresser à un public de{" "}
                <strong>collégiens</strong> qui commence à découvrir et
                s'approprier l'intelligence artificielle.
              </p>
              <p>
                Le choix d'une <strong>mascotte</strong> et d'un{" "}
                <strong>style graphique enfantin</strong> s'est imposé pour
                rendre le message plus accessible et engageant.
              </p>
              <p>
                La tendance <strong>"Starter Pack"</strong> a été réinterprétée
                pour renforcer le ton ludique et contemporain du projet.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section Visuels BD */}
      <div id="carousel-section" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="font-Poppins text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            La Bande Dessinée
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src="/GPT/VisuelBD1.png"
                width={800}
                height={600}
                alt="Visuel BD ChatGPT 1"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src="/GPT/VisuelBD3.png"
                width={800}
                height={600}
                alt="Visuel BD ChatGPT 2"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section Carousel avec flèches */}
      <div className="py-16 bg-[#68A585] w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="font-Poppins text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Résultat
          </h2>
        </div>
        <ArrowCarousel />
      </div>

      {/* Section Processus */}
      <div className="max-w-7xl mx-auto px-8 py-20">
        <h2 className="font-Poppins text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
          Processus Créatif
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#68A585] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="font-Poppins text-white text-2xl font-bold">
                1
              </span>
            </div>
            <h3 className="font-Poppins text-xl font-bold mb-3 text-gray-900">
              Recherche
            </h3>
            <p className="font-Avenir text-gray-600 leading-relaxed">
              Recherche de contenu et analyse approfondie du sujet de l'IA et
              ses dérives pour les jeunes utilisateurs.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-[#68A585] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="font-Poppins text-white text-2xl font-bold">
                2
              </span>
            </div>
            <h3 className="font-Poppins text-xl font-bold mb-3 text-gray-900">
              Conception
            </h3>
            <p className="font-Avenir text-gray-600 leading-relaxed">
              Création d'une mascotte et d'un univers graphique ludique adapté
              au public collégien.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-[#68A585] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="font-Poppins text-white text-2xl font-bold">
                3
              </span>
            </div>
            <h3 className="font-Poppins text-xl font-bold mb-3 text-gray-900">
              Impression
            </h3>
            <p className="font-Avenir text-gray-600 leading-relaxed">
              Mise en page expérimentale et impression en risographie avec
              contraintes techniques de 3 couleurs.
            </p>
          </div>
        </div>
      </div>

      {/* Section Palette & Stickers */}
      <div className="bg-gradient-to-br from-[#68A585]/10 to-[#20946E]/20 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="font-Poppins text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            Identité Visuelle
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-stretch mb-12">
            {/* Palette de couleurs */}
            <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col">
              <h3 className="font-Poppins text-2xl font-bold mb-6 text-gray-900">
                Palette Risographie
              </h3>
              <p className="font-Avenir text-gray-700 mb-6 leading-relaxed">
                La couleur verte, symbole de ChatGPT, a été obtenue par mélange
                du jaune et du bleu disponibles en risographie. Trois couleurs
                principales composent l'identité du projet :
              </p>
              <div className="space-y-4 flex-grow">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-[#68A585] shadow-md"></div>
                  <div>
                    <p className="font-Poppins font-bold text-gray-900">
                      #68A585
                    </p>
                    <p className="font-Avenir text-sm text-gray-600">
                      Vert principal
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-[#20946E] shadow-md"></div>
                  <div>
                    <p className="font-Poppins font-bold text-gray-900">
                      #20946E
                    </p>
                    <p className="font-Avenir text-sm text-gray-600">
                      Vert foncé
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-[#231F20] shadow-md"></div>
                  <div>
                    <p className="font-Poppins font-bold text-gray-900">
                      #231F20
                    </p>
                    <p className="font-Avenir text-sm text-gray-600">Noir</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stickers mascotte */}
            <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center justify-center">
              <h3 className="font-Poppins text-2xl font-bold mb-6 text-gray-900">
                La Mascotte
              </h3>
              <div className="grid grid-cols-2 gap-6 w-full">
                <div className="w-full h-full flex items-center justify-center">
                  <Image
                    src="/GPT/Illustration1Bonhomme.png"
                    width={400}
                    height={400}
                    alt="Stickers mascotte ChatGPT 1"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-full h-full flex items-center justify-center -translate-y-[25px]">
                  <Image
                    src="/GPT/IllustrationBonhomme2.png"
                    width={400}
                    height={400}
                    alt="Stickers mascotte ChatGPT 2"
                    className="w-full h-full object-contain scale-[1.85]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section finale - Points clés */}
      <div className="max-w-7xl mx-auto px-8 py-20">
        <h2 className="font-Poppins text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
          Un Objet Ludique et Pédagogique
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#68A585]">
            <div className="w-12 h-12 bg-[#68A585]/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📚</span>
            </div>
            <h3 className="font-Poppins text-xl font-bold mb-3 text-gray-900">
              Support Pédagogique
            </h3>
            <p className="font-Avenir text-gray-600 leading-relaxed">
              Un fanzine informatif et attractif, à la croisée du design
              éditorial et de la vulgarisation scientifique.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#68A585]">
            <div className="w-12 h-12 bg-[#68A585]/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="font-Poppins text-xl font-bold mb-3 text-gray-900">
              Approche Visuelle
            </h3>
            <p className="font-Avenir text-gray-600 leading-relaxed">
              Un style graphique enfantin et une mascotte pour rendre le message
              accessible et engageant auprès des collégiens.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#68A585]">
            <div className="w-12 h-12 bg-[#68A585]/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🖨️</span>
            </div>
            <h3 className="font-Poppins text-xl font-bold mb-3 text-gray-900">
              Contraintes Techniques
            </h3>
            <p className="font-Avenir text-gray-600 leading-relaxed">
              Impression en risographie avec seulement 3 couleurs, un défi
              technique qui a enrichi le processus créatif.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#68A585]">
            <div className="w-12 h-12 bg-[#68A585]/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">💡</span>
            </div>
            <h3 className="font-Poppins text-xl font-bold mb-3 text-gray-900">
              Message Impactant
            </h3>
            <p className="font-Avenir text-gray-600 leading-relaxed">
              Sensibilisation aux dangers de l'IA à travers un ton ludique et
              contemporain inspiré des "Starter Pack".
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
