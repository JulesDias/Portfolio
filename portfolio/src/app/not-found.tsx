"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-pink-50 to-PinkCustom/20 flex items-center justify-center px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-2xl"
            >
                {/* Code d'erreur 404 stylisé */}
                <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-8"
                >
                    <h1 className="font-Poppins text-9xl md:text-[12rem] font-extrabold text-PinkCustom leading-none">
                        404
                    </h1>
                </motion.div>

                {/* Message d'erreur */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="space-y-4 mb-12"
                >
                    <h2 className="font-Poppins text-3xl md:text-4xl font-bold text-gray-900">
                        Page introuvable
                    </h2>
                    <p className="font-Avenir text-lg text-gray-600 leading-relaxed">
                        Oups ! Il semblerait que cette page n'existe pas ou ait été déplacée.
                        <br />
                        Retournons ensemble vers des créations qui existent vraiment.
                    </p>
                </motion.div>

                {/* Boutons de navigation */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Link href="/">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-PinkCustom text-white font-Poppins font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            Retour à l'accueil
                        </motion.button>
                    </Link>

                    <Link href="/about">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white text-PinkCustom font-Poppins font-semibold rounded-full shadow-lg hover:shadow-xl border-2 border-PinkCustom transition-all duration-300"
                        >
                            Découvrir mon profil
                        </motion.button>
                    </Link>
                </motion.div>

                {/* Élément décoratif */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-16"
                >
                </motion.div>
            </motion.div>
        </div>
    );
}
