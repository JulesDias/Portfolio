"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[70vh] bg-gray-100 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center px-8 md:px-16 max-w-7xl mx-auto">
          <div className="z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-Poppins text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                Page en construction
              </h1>
              <p className="font-Avenir text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Cette page est actuellement en cours de création.
                <br />
                Revenez bientôt pour découvrir son contenu.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Section Animation Canvas */}
      <div id="carousel-section" className="max-w-4xl mx-auto px-8 py-20">
        <div className="flex flex-col items-center justify-center">
          {/* Canvas - Site web qui se construit */}
          <div className="relative w-full max-w-2xl aspect-[16/10] bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
            <svg viewBox="0 0 800 500" className="w-full h-full">
              {/* Fond navigateur */}
              <rect width="800" height="500" fill="#F9FAFB" />

              {/* Barre de navigation du navigateur */}
              <motion.rect
                x="0"
                y="0"
                width="800"
                height="0"
                fill="#E5E7EB"
                initial={{ height: 0 }}
                animate={{ height: [0, 40, 40, 0] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.15, 0.85, 1],
                }}
              />

              {/* Boutons navigateur (rouge, jaune, vert) */}
              {[0, 1, 2].map((i) => (
                <motion.circle
                  key={i}
                  cx={20 + i * 20}
                  cy="20"
                  r="0"
                  fill={["#EF4444", "#F59E0B", "#10B981"][i]}
                  initial={{ r: 0, opacity: 0 }}
                  animate={{
                    r: [0, 6, 6, 0],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.15 + i * 0.05,
                    times: [0, 0.15, 0.85, 1],
                  }}
                />
              ))}

              {/* Barre d'URL */}
              <motion.rect
                x="100"
                y="12"
                width="0"
                height="16"
                rx="8"
                fill="white"
                initial={{ width: 0 }}
                animate={{ width: [0, 500, 500, 0] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3,
                  times: [0, 0.15, 0.85, 1],
                }}
              />

              {/* Header du site */}
              <motion.rect
                x="0"
                y="50"
                width="800"
                height="0"
                fill="#6B7280"
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: [0, 60, 60, 0],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                  times: [0, 0.15, 0.85, 1],
                }}
              />

              {/* Logo (carré) */}
              <motion.rect
                x="30"
                y="65"
                width="0"
                height="0"
                rx="4"
                fill="#10B981"
                initial={{ width: 0, height: 0, opacity: 0 }}
                animate={{
                  width: [0, 30, 30, 0],
                  height: [0, 30, 30, 0],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.6,
                  times: [0, 0.15, 0.85, 1],
                }}
              />

              {/* Menu items (lignes) */}
              {[0, 1, 2].map((i) => (
                <motion.rect
                  key={i}
                  x={680 - i * 100}
                  y="75"
                  width="0"
                  height="10"
                  rx="5"
                  fill="white"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{
                    width: [0, 70, 70, 0],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.7 + i * 0.1,
                    times: [0, 0.15, 0.85, 1],
                  }}
                />
              ))}

              {/* Hero section */}
              <motion.rect
                x="50"
                y="130"
                width="700"
                height="0"
                rx="8"
                fill="#E5E7EB"
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: [0, 120, 120, 0],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                  times: [0, 0.15, 0.85, 1],
                }}
              />

              {/* Titre hero (lignes de texte) */}
              {[0, 1, 2].map((i) => (
                <motion.rect
                  key={i}
                  x="100"
                  y={160 + i * 20}
                  width="0"
                  height="12"
                  rx="6"
                  fill="#6B7280"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{
                    width: [0, [400, 500, 350][i], [400, 500, 350][i], 0],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.2 + i * 0.1,
                    times: [0, 0.15, 0.85, 1],
                  }}
                />
              ))}

              {/* Cartes de contenu (grille 3 colonnes) */}
              {[0, 1, 2].map((i) => (
                <g key={i}>
                  {/* Carte */}
                  <motion.rect
                    x={50 + i * 240}
                    y="280"
                    width="0"
                    height="0"
                    rx="8"
                    fill="white"
                    stroke="#E5E7EB"
                    strokeWidth="2"
                    initial={{ width: 0, height: 0, opacity: 0 }}
                    animate={{
                      width: [0, 210, 210, 0],
                      height: [0, 180, 180, 0],
                      opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.5 + i * 0.15,
                      times: [0, 0.15, 0.85, 1],
                    }}
                  />

                  {/* Image dans la carte */}
                  <motion.rect
                    x={60 + i * 240}
                    y="290"
                    width="0"
                    height="0"
                    rx="4"
                    fill="#D1D5DB"
                    initial={{ width: 0, height: 0, opacity: 0 }}
                    animate={{
                      width: [0, 190, 190, 0],
                      height: [0, 100, 100, 0],
                      opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.6 + i * 0.15,
                      times: [0, 0.15, 0.85, 1],
                    }}
                  />

                  {/* Lignes de texte dans la carte */}
                  {[0, 1].map((j) => (
                    <motion.rect
                      key={j}
                      x={70 + i * 240}
                      y={410 + j * 20}
                      width="0"
                      height="8"
                      rx="4"
                      fill="#9CA3AF"
                      initial={{ width: 0, opacity: 0 }}
                      animate={{
                        width: [0, j === 0 ? 150 : 100, j === 0 ? 150 : 100, 0],
                        opacity: [0, 1, 1, 0],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1.7 + i * 0.15 + j * 0.05,
                        times: [0, 0.15, 0.85, 1],
                      }}
                    />
                  ))}
                </g>
              ))}

              {/* Curseur de souris qui se déplace */}
              <motion.g
                initial={{ x: 100, y: 80, opacity: 0 }}
                animate={{
                  x: [100, 400, 700, 150, 500, 100],
                  y: [80, 170, 80, 350, 350, 80],
                  opacity: [0, 1, 1, 1, 1, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                }}
              >
                <path
                  d="M0,0 L0,16 L4,12 L7,18 L9,17 L6,11 L12,10 Z"
                  fill="#374151"
                  stroke="white"
                  strokeWidth="1"
                />
              </motion.g>
            </svg>
          </div>

          {/* Texte sous l'animation */}
          <motion.p
            className="mt-8 font-Avenir text-gray-500 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Construction du site...
          </motion.p>
        </div>
      </div>
    </div>
  );
}
