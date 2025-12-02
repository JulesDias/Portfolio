"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ProjetPompotes() {
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
            <div className="relative w-full h-[70vh] bg-[#D8A99D] overflow-hidden">
                <div className="absolute inset-0 flex items-end justify-between px-8 md:px-16 max-w-7xl mx-auto">
                    <div className="z-10 max-w-xl pb-12">
                        <div className="mb-6 ml-[3px]">
                            <span className="text-white font-Avenir text-sm uppercase tracking-wider font-semibold">
                                Extension de Gamme • Automne 2023
                            </span>
                        </div>
                        <h1 className="font-Poppins text-5xl md:text-7xl font-bold text-white mb-6">
                            <div className="leading-tight">Pom'Potes</div>
                            <span className="text-4xl md:text-5xl text-white block -mt-1 md:-mt-2">Les Barquettes</span>
                        </h1>

                        <p className="font-Avenir text-lg text-white mb-8 leading-relaxed">
                            Extension de gamme vers le goûter solide : des biscuits fourrés aux fruits qui conservent l'ADN fruité et familial de Pom'Potes.
                        </p>
                        <div className="flex gap-4 font-Avenir text-sm text-white">
                            <div>
                                <span className="font-semibold">Durée :</span> 3 mois
                            </div>
                            <div>•</div>
                            <div>
                                <span className="font-semibold">Type:</span> Projet Individuel
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block relative w-[45%] h-full">
                        <Image
                            src="/pompotes/MockUpPompotesVisuel.png"
                            fill
                            alt="Packaging Pom'Potes Barquettes"
                            className="object-contain drop-shadow-2xl"
                        />
                    </div>
                </div>
            </div>

            {/* Section mobile hero image */}
            <div className="md:hidden w-full py-10 bg-[#D8A99D]">
                <div className="relative w-full h-[400px]">
                    <Image
                        src="/pompotes/MockUpPompotesVisuel.png"
                        fill
                        alt="Packaging Pom'Potes Barquettes"
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
                                Ce projet consiste à imaginer une <strong>extension de gamme réaliste</strong> composée de 3 nouveaux produits pour une marque d'agroalimentaire existante.
                            </p>
                            <p>
                                Après avoir choisi une marque de grande ou moyenne surface, l'objectif était de concevoir une gamme cohérente avec son univers, en passant par l'analyse de la marque, de la concurrence, puis la création du packaging et de son effet de masse en rayon.
                            </p>
                        </div>
                    </div>

                    <div className="bg-[#D8A99D] p-8 rounded-2xl">
                        <h3 className="font-Poppins text-2xl font-bold mb-4 text-white">
                            Pourquoi Pom'Potes ?
                        </h3>
                        <div className="font-Avenir text-white space-y-3 leading-relaxed">
                            <p>
                                J'ai choisi <strong>Pom'Potes</strong> pour son univers coloré et son identité visuelle forte : les fruits, la mascotte, le paysage.
                            </p>
                            <p>
                                Un format ludique et pratique, qui conserve l'ADN fruité et familial de Pom'Potes, tout en explorant une nouvelle forme de consommation.
                            </p>
                        </div>

                        {/* Visuels Pom'Potes */}
                        <div className="grid grid-cols-2 gap-4 mt-6">
                            <div className="rounded-xl overflow-hidden">
                                <Image
                                    src="/pompotes/VisuelPompotes1.jpg"
                                    width={400}
                                    height={300}
                                    alt="Visuel Pom'Potes 1"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            <div className="rounded-xl overflow-hidden">
                                <Image
                                    src="/pompotes/VisuelPompotes2.jpg"
                                    width={400}
                                    height={300}
                                    alt="Visuel Pom'Potes 2"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section Visuels produits */}
            <div id="carousel-section" className="bg-[#D8A99D] py-20">
                <div className="max-w-7xl mx-auto px-8">
                    <h2 className="font-Poppins text-4xl md:text-5xl font-bold text-center mb-16 text-white">
                        La Gamme
                    </h2>
                    <div className="flex flex-col items-center gap-8 mb-16">
                        {/* Première barquette - légèrement à gauche avec taille réduite */}
                        <div className="w-full md:w-1/2 md:translate-x-[-10%] bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow">
                            <Image
                                src="/pompotes/Barquette-17.png"
                                width={600}
                                height={450}
                                alt="Barquette Pom'Potes Fraise"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                        {/* Deuxième barquette - légèrement à droite avec taille réduite */}
                        <div className="w-full md:w-1/2 md:translate-x-[10%] bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow">
                            <Image
                                src="/pompotes/Barquette-18.png"
                                width={600}
                                height={450}
                                alt="Barquette Pom'Potes Pomme"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                        {/* Troisième barquette - légèrement à gauche avec taille réduite */}
                        <div className="w-full md:w-1/2 md:translate-x-[-10%] bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow">
                            <Image
                                src="/pompotes/Barquette-19.png"
                                width={600}
                                height={450}
                                alt="Barquette Pom'Potes Poire"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Section Processus */}
            <div className="max-w-7xl mx-auto px-8 py-20">
                <h2 className="font-Poppins text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
                    Processus de Création
                </h2>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-greenCustom rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="font-Poppins text-white text-2xl font-bold">1</span>
                        </div>
                        <h3 className="font-Poppins text-xl font-bold mb-3 text-gray-900">
                            Analyse
                        </h3>
                        <p className="font-Avenir text-gray-600 leading-relaxed">
                            Étude de la marque Pom'Potes, de son identité visuelle, de ses valeurs et de son positionnement sur le marché.
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 bg-greenCustom rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="font-Poppins text-white text-2xl font-bold">2</span>
                        </div>
                        <h3 className="font-Poppins text-xl font-bold mb-3 text-gray-900">
                            Concurrence
                        </h3>
                        <p className="font-Avenir text-gray-600 leading-relaxed">
                            Analyse des produits similaires sur le marché du goûter pour identifier les opportunités et se démarquer.
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 bg-greenCustom rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="font-Poppins text-white text-2xl font-bold">3</span>
                        </div>
                        <h3 className="font-Poppins text-xl font-bold mb-3 text-gray-900">
                            Création
                        </h3>
                        <p className="font-Avenir text-gray-600 leading-relaxed">
                            Conception des packagings avec l'identité visuelle de Pom'Potes et mise en rayon pour l'effet de masse.
                        </p>
                    </div>
                </div>

                {/* Images d'analyse */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="rounded-2xl overflow-hidden">
                        <Image
                            src="/pompotes/AnalysePackagingPomPotes.png"
                            width={800}
                            height={600}
                            alt="Analyse packaging Pom'Potes 1"
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="rounded-2xl overflow-hidden">
                        <Image
                            src="/pompotes/AnalysePackagingPomPotes2.png"
                            width={800}
                            height={600}
                            alt="Analyse packaging Pom'Potes 2"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </div>

            {/* Section MockUp et Effet de masse */}
            <div className="bg-gradient-to-br from-gray-50 to-white py-20">
                <div className="max-w-7xl mx-auto px-8">
                    <h2 className="font-Poppins text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
                        Mise en Situation
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* MockUp */}
                        <div>
                            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                                <Image
                                    src="/pompotes/MockUp Pom'Potes3.png"
                                    width={700}
                                    height={500}
                                    alt="MockUp Pom'Potes"
                                    className="w-full h-auto"
                                />
                            </div>
                            <p className="text-center mt-4 font-Avenir text-gray-600">
                                MockUp Produit
                            </p>
                        </div>

                        {/* Effet de masse */}
                        <div>
                            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                                <Image
                                    src="/pompotes/EffetDeMasse.png"
                                    width={700}
                                    height={500}
                                    alt="Effet de masse en rayon"
                                    className="w-full h-auto"
                                />
                            </div>
                            <p className="text-center mt-4 font-Avenir text-gray-600">
                                Effet de Masse
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section finale - Points clés */}
            <div className="bg-[#D8A99D] py-20">
                <div className="max-w-7xl mx-auto px-8">
                    <h2 className="font-Poppins text-4xl md:text-5xl font-bold text-center mb-16 text-white">
                        L'ADN Pom'Potes Préservé
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <div className="w-12 h-12 bg-greenCustom/20 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-2xl">🍎</span>
                            </div>
                            <h3 className="font-Poppins text-xl font-bold mb-3 text-gray-900">
                                Identité fruitée
                            </h3>
                            <p className="font-Avenir text-gray-600 leading-relaxed">
                                Conservation des codes couleurs et de l'univers visuel joyeux et familial de la marque.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <div className="w-12 h-12 bg-greenCustom/20 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-2xl">🎨</span>
                            </div>
                            <h3 className="font-Poppins text-xl font-bold mb-3 text-gray-900">
                                Design ludique
                            </h3>
                            <p className="font-Avenir text-gray-600 leading-relaxed">
                                Un packaging attractif qui attire l'œil des enfants et rassure les parents sur la qualité.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <div className="w-12 h-12 bg-greenCustom/20 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-2xl">📦</span>
                            </div>
                            <h3 className="font-Poppins text-xl font-bold mb-3 text-gray-900">
                                Format pratique
                            </h3>
                            <p className="font-Avenir text-gray-600 leading-relaxed">
                                Des barquettes faciles à transporter pour le goûter à l'école ou en sortie.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <div className="w-12 h-12 bg-greenCustom/20 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-2xl">🌈</span>
                            </div>
                            <h3 className="font-Poppins text-xl font-bold mb-3 text-gray-900">
                                Effet de masse
                            </h3>
                            <p className="font-Avenir text-gray-600 leading-relaxed">
                                Une présentation en rayon optimisée pour maximiser la visibilité et l'impact visuel.
                            </p>
                        </div>
                    </div>

                    {/* Logiciels utilisés */}
                    <div className="mt-12 text-center">
                        <p className="font-Avenir text-white">
                            <span className="font-semibold">Logiciels utilisés :</span> Adobe Illustrator & Photoshop
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
