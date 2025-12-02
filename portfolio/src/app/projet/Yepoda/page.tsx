"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

// Composant AutoScrollCarousel
function AutoScrollCarousel({ images }: { images: string[] }) {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let scrollPosition = 0;

        const scroll = () => {
            if (scrollContainer) {
                scrollPosition += 0.3; // vitesse réduite

                // Reset au début quand on atteint la moitié (car les images sont dupliquées)
                if (scrollPosition >= scrollContainer.scrollWidth / 2) {
                    scrollPosition = 0;
                }

                scrollContainer.scrollLeft = scrollPosition;
            }
        };

        const intervalId = setInterval(scroll, 16); // ~60fps

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    // Dupliquer les images pour créer l'effet de boucle infinie
    const duplicatedImages = [...images, ...images];

    return (
        <div
            className="relative overflow-hidden py-8"
        >
            <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-hidden"
                style={{ scrollBehavior: 'auto' }}
            >
                {duplicatedImages.map((img, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-[400px] md:w-[500px]"
                    >
                        <div className="bg-white p-8 rounded-3xl shadow-lg h-[600px] flex items-center justify-center">
                            <Image
                                src={img}
                                alt={`Analyse Yepoda ${(index % images.length) + 1}`}
                                width={600}
                                height={800}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function ProjetYepoda() {
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
            <div className="relative w-full h-[70vh] bg-PinkCustom overflow-hidden">
                <div className="absolute inset-0 flex items-end justify-between px-8 md:px-16 max-w-7xl mx-auto">
                    <div className="z-10 max-w-xl pb-12">
                        <div className="mb-6 ml-[3px]">
                            <span className="text-white font-Avenir text-sm uppercase tracking-wider font-semibold">
                                Typographie • Printemps 2025
                            </span>
                        </div>
                        <h1 className="font-Poppins text-5xl md:text-7xl font-bold text-white mb-6">
                            <div className="leading-tight">Yepoda</div>
                            <span className="text-4xl md:text-5xl text-white block -mt-1 md:-mt-2">Typographie Identitaire</span>
                        </h1>

                        <p className="font-Avenir text-lg text-white mb-8 leading-relaxed">
                            Création d'une typographie sur mesure pour traduire l'esprit coloré et contemporain de la marque Yepoda.
                        </p>
                        <div className="flex gap-4 font-Avenir text-sm text-white">
                            <div>
                                <span className="font-semibold">Durée:</span> 3 mois
                            </div>
                            <div>•</div>
                            <div>
                                <span className="font-semibold">Type:</span> Projet Individuel
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block relative w-[45%] h-full">
                        <Image
                            src="/Yepoda/StickersProduit2.png"
                            fill
                            alt="Logo Yepoda"
                            className="object-contain drop-shadow-2xl rotate-12"
                        />
                    </div>
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
                                Ce projet vise à concevoir une <strong>typographie identitaire</strong> pour une marque à forte personnalité visuelle, mais sans police propre.
                            </p>
                            <p>
                                L'objectif était de créer un alphabet capable de traduire l'esprit et les valeurs de la marque, tout en restant cohérent avec son univers graphique.
                            </p>
                            <p>
                                Le travail a débuté par une analyse de l'identité de Yepoda, de son logo et de ses courbes, afin de définir les bases d'une typographie harmonieuse.
                            </p>
                        </div>
                    </div>

                    <div className="bg-PinkCustom p-8 rounded-2xl">
                        <h3 className="font-Poppins text-2xl font-bold mb-4 text-white">
                            Pourquoi Yepoda ?
                        </h3>
                        <div className="font-Avenir text-white space-y-3 leading-relaxed">
                            <p>
                                J'ai choisi <strong>Yepoda</strong> pour son univers coloré et contemporain, offrant une large liberté créative.
                            </p>
                            <p>
                                La marque reflète une identité jeune, dynamique et positive, parfaite pour explorer la création d'une typographie expressive et cohérente.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section Analyse de la marque - Carousel Auto-Scroll */}
            <div id="carousel-section" className="bg-gray-50 py-20">
                <div className="w-full">
                    <h2 className="font-Poppins text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900 px-8">
                        Analyse de la Marque
                    </h2>
                    <AutoScrollCarousel images={[
                        "/Yepoda/VisuelCarousel1.jpg",
                        "/Yepoda/VisuelCarousel2.webp",
                        "/Yepoda/VisuelCarousel3.jpg",
                        "/Yepoda/VisuelCarousel4.jpg",
                        "/Yepoda/VisuelCarousel5.jpg",
                        "/Yepoda/VisuelCarousel6.jpg",
                    ]} />
                </div>
            </div>

            {/* Section Processus */}
            <div className="max-w-7xl mx-auto px-8 py-20">
                <h2 className="font-Poppins text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
                    Processus de Création
                </h2>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-PinkCustom rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="font-Poppins text-white text-2xl font-bold">1</span>
                        </div>
                        <h3 className="font-Poppins text-xl font-bold mb-3 text-gray-900">
                            Analyse
                        </h3>
                        <p className="font-Avenir text-gray-600 leading-relaxed">
                            Étude approfondie de l'identité de Yepoda, de son logo et de ses courbes pour définir les bases typographiques.
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 bg-PinkCustom rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="font-Poppins text-white text-2xl font-bold">2</span>
                        </div>
                        <h3 className="font-Poppins text-xl font-bold mb-3 text-gray-900">
                            Création
                        </h3>
                        <p className="font-Avenir text-gray-600 leading-relaxed">
                            Conception des lettres capitales et minuscules, ainsi que des signes de ponctuation dans Illustrator et Glyphs.
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 bg-PinkCustom rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="font-Poppins text-white text-2xl font-bold">3</span>
                        </div>
                        <h3 className="font-Poppins text-xl font-bold mb-3 text-gray-900">
                            Mise en situation
                        </h3>
                        <p className="font-Avenir text-gray-600 leading-relaxed">
                            Test de la typographie sur différents supports pour en valider la pertinence visuelle et fonctionnelle.
                        </p>
                    </div>
                </div>

                {/* Recherches typographiques */}
                <div className="w-full md:w-2/3 mx-auto rounded-2xl overflow-hidden shadow-lg">
                    <Image
                        src="/Yepoda/RechercheTypoSketch.png"
                        width={1600}
                        height={900}
                        alt="Recherches typographiques Yepoda"
                        className="w-full h-auto"
                    />
                </div>
            </div>

            {/* Section Manifeste avec font Yepoda */}
            <div className="bg-PinkCustom py-20">
                <div className="max-w-5xl mx-auto px-8">
                    <h2 className="font-Poppins text-4xl md:text-5xl font-bold text-center mb-12 text-white">
                        L'Esprit de la Typographie
                    </h2>
                    <div className="bg-white p-12 rounded-2xl shadow-xl">
                        <p className="font-Yepoda text-2xl md:text-3xl text-gray-800 leading-relaxed text-center">
                            Yepoda s'inspire de la nature et du quotidien.<br />
                            Les formes sont simples, les couleurs apaisantes, les gestes sincères.<br />
                            Cette typographie reflète un univers équilibré, entre énergie et douceur.<br />
                            Elle respire, elle sourit, elle invite à prendre le temps.<br />
                            Une écriture lumineuse, pensée pour célébrer la simplicité et le bien-être.
                        </p>
                    </div>
                </div>
            </div>

            {/* Section Alphabet complet */}
            <div className="max-w-7xl mx-auto px-8 py-20">
                <h2 className="font-Poppins text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
                    L'Alphabet Complet
                </h2>
                <div className="bg-white p-12 rounded-2xl shadow-lg">
                    <div className="space-y-6">
                        <div className="text-center">
                            <h3 className="font-Poppins text-xl font-bold mb-4 text-gray-900">Majuscules</h3>
                            <p className="font-Yepoda text-5xl md:text-6xl text-gray-800 tracking-wider">
                                ABCDEFGHIJKLMNOPQRSTUVWXYZ
                            </p>
                        </div>

                        <div className="text-center">
                            <h3 className="font-Poppins text-xl font-bold mb-4 text-gray-900">Minuscules</h3>
                            <p className="font-Yepoda text-5xl md:text-6xl text-gray-800 tracking-wider">
                                abcdefghijklmnopqrstuvwxyz
                            </p>
                        </div>

                        <div className="text-center">
                            <h3 className="font-Poppins text-xl font-bold mb-4 text-gray-900">Chiffres & Ponctuation</h3>
                            <p className="font-Yepoda text-5xl md:text-6xl text-gray-800 tracking-wider">
                                0123456789 .,;:!?'"()-_#*@+%
                            </p>
                        </div>
                        <div className="text-center">
                            <h3 className="font-Poppins text-xl font-bold mb-4 text-gray-900">Caractères Spéciaux</h3>
                            <p className="font-Yepoda text-5xl md:text-6xl text-gray-800 tracking-wider">
                                ÀÉÈÊËÎÏÔÙÛÜÇ
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section Mises en situation */}
            <div className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-8">
                    <h2 className="font-Poppins text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
                        Mises en Situation
                    </h2>

                    <div className="space-y-8">
                        {/* Billboard */}
                        <div className="rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/Yepoda/Billboard_Mockup.png"
                                width={1600}
                                height={900}
                                alt="Billboard Yepoda"
                                className="w-full h-auto"
                            />
                        </div>

                        {/* Panneau pub */}
                        <div className="rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/Yepoda/MockupPanneauPub.png"
                                width={1600}
                                height={900}
                                alt="Panneau publicitaire Yepoda"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Section finale - Points clés */}
            <div className="bg-PinkCustom py-20">
                <div className="max-w-7xl mx-auto px-8">
                    <h2 className="font-Poppins text-4xl md:text-5xl font-bold text-center mb-16 text-white">
                        Une Typographie sur Mesure
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <div className="w-12 h-12 bg-pink-400/20 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-2xl">✨</span>
                            </div>
                            <h3 className="font-Poppins text-xl font-bold mb-3 text-gray-900">
                                Identité Cohérente
                            </h3>
                            <p className="font-Avenir text-gray-600 leading-relaxed">
                                Une typographie qui traduit fidèlement l'esprit jeune, dynamique et positif de Yepoda.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <div className="w-12 h-12 bg-pink-400/20 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-2xl">🎨</span>
                            </div>
                            <h3 className="font-Poppins text-xl font-bold mb-3 text-gray-900">
                                Univers Coloré
                            </h3>
                            <p className="font-Avenir text-gray-600 leading-relaxed">
                                Des formes inspirées du logo et de l'identité visuelle existante pour une harmonie parfaite.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <div className="w-12 h-12 bg-pink-400/20 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-2xl">📝</span>
                            </div>
                            <h3 className="font-Poppins text-xl font-bold mb-3 text-gray-900">
                                Alphabet Complet
                            </h3>
                            <p className="font-Avenir text-gray-600 leading-relaxed">
                                Majuscules, minuscules et ponctuation créés pour une utilisation polyvalente sur tous supports.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <div className="w-12 h-12 bg-pink-400/20 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-2xl">🖼️</span>
                            </div>
                            <h3 className="font-Poppins text-xl font-bold mb-3 text-gray-900">
                                Applications Multiples
                            </h3>
                            <p className="font-Avenir text-gray-600 leading-relaxed">
                                Testée et validée sur divers supports : packaging, affichage, publicité et digital.
                            </p>
                        </div>
                    </div>

                    {/* Logiciels utilisés */}
                    <div className="mt-12 text-center">
                        <p className="font-Avenir text-white">
                            <span className="font-semibold">Logiciels utilisés :</span> Adobe Illustrator (formes vectorielles) • Glyphs (création du fichier) • Photoshop (mise en situation)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
