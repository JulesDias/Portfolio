"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Composant Carousel avec flèches
function ArrowCarousel() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselImages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = 400;
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
          className="w-8 h-8 text-[#e69925]"
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
                src={`/Capsaï/VisuCarousel${num}.jpg`}
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
          className="w-8 h-8 text-[#e69925]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
}

export default function ProjetCapsai() {
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
      <div className="relative w-full h-[70vh] bg-[#e69925] overflow-hidden">
        <div className="absolute inset-0 flex items-end justify-between px-8 md:px-16 max-w-7xl mx-auto">
          <div className="z-10 max-w-xl pb-12">
            <div className="mb-6 ml-[3px]">
              <span className="text-white font-Avenir text-sm uppercase tracking-wider font-semibold">
                Brandbook • Printemps 2025
              </span>
            </div>
            <h1 className="font-Poppins text-5xl md:text-7xl font-bold text-white mb-6">
              <div className="leading-tight ml-[-3px]">Capsaï</div>
              <span className="text-4xl md:text-5xl text-white block -mt-1 md:-mt-2 pt-3">
                Marque de Sauce Pimentée
              </span>
            </h1>

            <p className="font-Avenir text-lg text-white mb-8 leading-relaxed">
              Un univers de marque qui explore le piment sous un angle inédit, axé sur le bien-être et les bienfaits de la capsaïcine.
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
            <div className="mt-6 text-left text-sm">
              <p className="font-Avenir text-white">
                <span className="font-semibold">Logiciels utilisés :</span>{" "}
                Illustrator, Photoshop, Rhino, Keyshot & InDesign
              </p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hidden md:block absolute right-[15%] bottom-[10%] w-[25%] h-[70%]"
          >
            <Image
              src="/Capsaï/Stickers9.png"
              fill
              alt="Logo Capsaï"
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
                Ce projet de brandbook s'est déroulé en deux grandes étapes : la <strong>création d'une marque et de sa direction artistique</strong>, puis la conception, la mise en page et l'impression du document qui la représente.
              </p>
              <p>
                Le sujet imposait d'imaginer une <strong>marque de sauce pimentée sans utiliser les codes classiques</strong> du feu, de la chaleur ou de la brûlure.
              </p>
              <p>
                Il s'agissait donc d'aborder le piment sous un angle inédit, en explorant ses <strong>aspects sensoriels, culturels et émotionnels</strong> plutôt que son intensité.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#e69925]/20 to-[#e86054]/30 p-8 rounded-2xl">
            <h3 className="font-Poppins text-2xl font-bold mb-4 text-gray-900">
              La Démarche
            </h3>
            <div className="font-Avenir text-gray-700 space-y-3 leading-relaxed">
              <p>
                Le travail a mêlé <strong>recherche, conception d'identité visuelle, développement de la gamme de sauces</strong> et réalisation du brandbook.
              </p>
              <p>
                Une démarche visant à garantir une <strong>cohérence complète</strong> entre l'univers de marque, son ton et son expression graphique.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section La Marque */}
      <div className="bg-gradient-to-br from-[#e69925]/10 to-[#e86054]/20 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="font-Poppins text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900">
            La Marque
          </h2>
          <p className="font-Avenir text-gray-700 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Le principe de la marque <strong>«Capsaï»</strong> repose sur les bienfaits de la capsaïcine, molécule à l'origine du piquant. Cette charte graphique permet donc de mettre en avant l'idée de <strong>rituel et de bien-être</strong> avec un mouvement et une horizontalité.
          </p>

          {/* Visuels principaux - côte à côte */}
          <div className="flex justify-center items-center gap-4">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="flex-shrink-0 bg-white rounded-xl p-3 shadow-lg">
                <Image
                  src={`/Capsaï/VisuelCapsai${num}.png`}
                  width={350}
                  height={350}
                  alt={`Visuel Capsaï ${num}`}
                  className="w-auto h-[500px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section Palette de Couleurs */}
      <div className="max-w-7xl mx-auto px-8 py-20">
        <h2 className="font-Poppins text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
          Palette de Couleurs
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Couleur 1 */}
          <div className="text-center">
            <div className="w-full h-32 rounded-xl shadow-lg mb-4" style={{backgroundColor: '#e69925'}}></div>
            <p className="font-Poppins font-semibold text-gray-900">#e69925</p>
            <p className="font-Avenir text-sm text-gray-600">RVB : 230 153 37</p>
            <p className="font-Avenir text-sm text-gray-600">CMJN : 9 45 92 1</p>
          </div>

          {/* Couleur 2 */}
          <div className="text-center">
            <div className="w-full h-32 rounded-xl shadow-lg mb-4" style={{backgroundColor: '#e86054'}}></div>
            <p className="font-Poppins font-semibold text-gray-900">#e86054</p>
            <p className="font-Avenir text-sm text-gray-600">RVB : 232 96 84</p>
            <p className="font-Avenir text-sm text-gray-600">CMJN : 3 74 63 0</p>
          </div>

          {/* Couleur 3 */}
          <div className="text-center">
            <div className="w-full h-32 rounded-xl shadow-lg mb-4" style={{backgroundColor: '#909d12'}}></div>
            <p className="font-Poppins font-semibold text-gray-900">#909d12</p>
            <p className="font-Avenir text-sm text-gray-600">RVB : 144 157 18</p>
            <p className="font-Avenir text-sm text-gray-600">CMJN : 50 22 100 6</p>
          </div>

          {/* Couleur 4 */}
          <div className="text-center">
            <div className="w-full h-32 rounded-xl shadow-lg mb-4" style={{backgroundColor: '#126cc2'}}></div>
            <p className="font-Poppins font-semibold text-gray-900">#126cc2</p>
            <p className="font-Avenir text-sm text-gray-600">RVB : 18 108 194</p>
            <p className="font-Avenir text-sm text-gray-600">CMJN : 85 54 0 0</p>
          </div>

          {/* Couleur 5 */}
          <div className="text-center">
            <div className="w-full h-32 rounded-xl shadow-lg mb-4" style={{backgroundColor: '#f1ead7'}}></div>
            <p className="font-Poppins font-semibold text-gray-900">#f1ead7</p>
            <p className="font-Avenir text-sm text-gray-600">RVB : 241 234 215</p>
            <p className="font-Avenir text-sm text-gray-600">CMJN : 7 7 18 0</p>
          </div>

          {/* Couleur 6 */}
          <div className="text-center">
            <div className="w-full h-32 rounded-xl shadow-lg mb-4" style={{backgroundColor: '#e4e8d1'}}></div>
            <p className="font-Poppins font-semibold text-gray-900">#e4e8d1</p>
            <p className="font-Avenir text-sm text-gray-600">RVB : 228 232 209</p>
            <p className="font-Avenir text-sm text-gray-600">CMJN : 13 4 22 0</p>
          </div>

          {/* Couleur 7 */}
          <div className="text-center">
            <div className="w-full h-32 rounded-xl shadow-lg mb-4" style={{backgroundColor: '#f1dee4'}}></div>
            <p className="font-Poppins font-semibold text-gray-900">#f1dee4</p>
            <p className="font-Avenir text-sm text-gray-600">RVB : 241 222 228</p>
            <p className="font-Avenir text-sm text-gray-600">CMJN : 6 16 7 0</p>
          </div>

          {/* Couleur 8 */}
          <div className="text-center">
            <div className="w-full h-32 rounded-xl shadow-lg mb-4" style={{backgroundColor: '#f3e3be'}}></div>
            <p className="font-Poppins font-semibold text-gray-900">#f3e3be</p>
            <p className="font-Avenir text-sm text-gray-600">RVB : 243 227 190</p>
            <p className="font-Avenir text-sm text-gray-600">CMJN : 6 11 31 0</p>
          </div>
        </div>
      </div>

      {/* Section Le Brandbook */}
      <div className="bg-gradient-to-br from-[#e69925]/10 to-[#e86054]/20 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="font-Poppins text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
            Le Brandbook
          </h2>

          {/* Pages du Brandbook */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <Image
                src="/Capsaï/VisuPage1.png"
                width={600}
                height={800}
                alt="Page 1 du Brandbook"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <Image
                src="/Capsaï/VisuPage2.png"
                width={600}
                height={800}
                alt="Page 2 du Brandbook"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <Image
                src="/Capsaï/VisuPage3.png"
                width={600}
                height={800}
                alt="Page 3 du Brandbook"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <Image
                src="/Capsaï/VisuPage4.png"
                width={600}
                height={800}
                alt="Page 4 du Brandbook"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section Packaging 3D */}
      <div className="max-w-7xl mx-auto px-8 py-20">
        <h2 className="font-Poppins text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
          Packaging 3D
        </h2>
        
        <div className="flex justify-center gap-6 mb-12">
          <div className="bg-white rounded-xl p-4 shadow-lg max-w-2xl">
            <Image
              src="/Capsaï/Visu3DBoites.jpg"
              width={800}
              height={600}
              alt="Visualisation 3D des Boites"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="bg-white rounded-xl p-4 shadow-lg max-w-2xl">
            <Image
              src="/Capsaï/Visu3D2.jpg"
              width={800}
              height={600}
              alt="Visualisation 3D 2"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Section Carousel - Galerie d'images */}
      <div className="bg-gradient-to-br from-[#e69925]/10 to-[#e86054]/20 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="font-Poppins text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
            Galerie du Projet
          </h2>
          
          <ArrowCarousel />
        </div>
      </div>

      {/* Section finale - Points clés */}
      <div className="bg-[#e69925] py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="font-Poppins text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-white">
            Un Projet de Branding Complet
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-[#e69925]/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🌶️</span>
              </div>
              <h3 className="font-Poppins text-xl font-bold mb-3 text-gray-900">
                Approche Inédite
              </h3>
              <p className="font-Avenir text-gray-600 leading-relaxed">
                Une exploration du piment sous un angle sensoriel et culturel, loin des codes classiques de chaleur et de brûlure.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-[#e69925]/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💫</span>
              </div>
              <h3 className="font-Poppins text-xl font-bold mb-3 text-gray-900">
                Bien-être & Rituel
              </h3>
              <p className="font-Avenir text-gray-600 leading-relaxed">
                Un univers centré sur les bienfaits de la capsaïcine, avec une identité visuelle horizontale et fluide.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-[#e69925]/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="font-Poppins text-xl font-bold mb-3 text-gray-900">
                Brandbook Complet
              </h3>
              <p className="font-Avenir text-gray-600 leading-relaxed">
                De la conception de l'identité visuelle à la mise en page et l'impression du document final.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-[#e69925]/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="font-Poppins text-xl font-bold mb-3 text-gray-900">
                Cohérence Visuelle
              </h3>
              <p className="font-Avenir text-gray-600 leading-relaxed">
                Une palette de couleurs chaleureuse et une direction artistique qui garantit une harmonie totale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
