"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

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
                            <div className="leading-tight ml-[3px]">ChatGPT</div>
                            <span className="text-4xl md:text-5xl text-gray-100 block -mt-1 md:-mt-2">Ton meilleur ami ?</span>
                        </h1>

                        <p className="font-Avenir text-lg text-white mb-8 leading-relaxed">
                            Fanzine en 5 plis imprimé en risographie pour sensibiliser les collégiens aux dangers et dérives de l'intelligence artificielle.
                        </p>
                        <div className="flex gap-4 font-Avenir text-sm text-white">
                            <div>
                                <span className="font-semibold">Durée :</span> 3 mois
                            </div>
                            <div>•</div>
                            <div>
                                <span className="font-semibold">Type:</span> Projet de Groupe
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block relative w-[45%] h-full">
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
                                Ce projet vise à concevoir un <strong>fanzine en 5 plis</strong>, imprimé en risographie avec seulement <strong>trois couleurs</strong> et deux contraintes principales : le thème et le ton.
                            </p>
                            <p>
                                À travers notre sujet, <strong>« ChatGPT : ton meilleur ami ? »</strong>, l'objectif était de créer un support pédagogique et visuel, destiné à sensibiliser les collégiens aux dangers et dérives liés à l'usage de l'intelligence artificielle.
                            </p>
                            <p>
                                Le fanzine se compose de deux volets complémentaires : un livret sous forme BD et au dos un poster dans le même univers graphique.
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
                                L'objectif de cette histoire était de s'adresser à un public de <strong>collégiens</strong> qui commence à découvrir et s'approprier l'intelligence artificielle.
                            </p>
                            <p>
                                Le choix d'une <strong>mascotte</strong> et d'un <strong>style graphique enfantin</strong> s'est imposé pour rendre le message plus accessible et engageant.
                            </p>
                            <p>
                                La tendance <strong>"Starter Pack"</strong> a été réinterprétée pour renforcer le ton ludique et contemporain du projet.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section Visuels BD */}
            <div id="carousel-section" className="bg-[#68A585]/10 py-20">
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
                                src="/GPT/VisuelBD2.png"
                                width={800}
                                height={600}
                                alt="Visuel BD ChatGPT 2"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                    <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                        <Image
                            src="/GPT/BD_CompleteGPT.png"
                            width={1600}
                            height={600}
                            alt="Visuel BD Complete ChatGPT"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>
            </div>

            {/* Section Processus */}
            <div className="max-w-7xl mx-auto px-8 py-20">
                <h2 className="font-Poppins text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
                    Processus Créatif
                </h2>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-[#68A585] rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="font-Poppins text-white text-2xl font-bold">1</span>
                        </div>
                        <h3 className="font-Poppins text-xl font-bold mb-3 text-gray-900">
                            Recherche
                        </h3>
                        <p className="font-Avenir text-gray-600 leading-relaxed">
                            Recherche de contenu et analyse approfondie du sujet de l'IA et ses dérives pour les jeunes utilisateurs.
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 bg-[#68A585] rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="font-Poppins text-white text-2xl font-bold">2</span>
                        </div>
                        <h3 className="font-Poppins text-xl font-bold mb-3 text-gray-900">
                            Conception
                        </h3>
                        <p className="font-Avenir text-gray-600 leading-relaxed">
                            Création d'une mascotte et d'un univers graphique ludique adapté au public collégien.
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 bg-[#68A585] rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="font-Poppins text-white text-2xl font-bold">3</span>
                        </div>
                        <h3 className="font-Poppins text-xl font-bold mb-3 text-gray-900">
                            Impression
                        </h3>
                        <p className="font-Avenir text-gray-600 leading-relaxed">
                            Mise en page expérimentale et impression en risographie avec contraintes techniques de 3 couleurs.
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

                    <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
                        {/* Palette de couleurs */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <h3 className="font-Poppins text-2xl font-bold mb-6 text-gray-900">
                                Palette Risographie
                            </h3>
                            <p className="font-Avenir text-gray-700 mb-6 leading-relaxed">
                                La couleur verte, symbole de ChatGPT, a été obtenue par mélange du jaune et du bleu disponibles en risographie. Trois couleurs principales composent l'identité du projet :
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-lg bg-[#68A585] shadow-md"></div>
                                    <div>
                                        <p className="font-Poppins font-bold text-gray-900">#68A585</p>
                                        <p className="font-Avenir text-sm text-gray-600">Vert principal</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-lg bg-[#20946E] shadow-md"></div>
                                    <div>
                                        <p className="font-Poppins font-bold text-gray-900">#20946E</p>
                                        <p className="font-Avenir text-sm text-gray-600">Vert foncé</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-lg bg-[#231F20] shadow-md"></div>
                                    <div>
                                        <p className="font-Poppins font-bold text-gray-900">#231F20</p>
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
                            <Image
                                src="/GPT/Illustration1Bonhomme.png"
                                width={400}
                                height={400}
                                alt="Stickers mascotte ChatGPT"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>

                    {/* Logiciels utilisés */}
                    <div className="text-center">
                        <p className="font-Avenir text-gray-600">
                            <span className="font-semibold">Logiciels utilisés :</span> Procreate & Adobe Illustrator (dessin) • Photoshop (impression)
                        </p>
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
                            Un fanzine informatif et attractif, à la croisée du design éditorial et de la vulgarisation scientifique.
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
                            Un style graphique enfantin et une mascotte pour rendre le message accessible et engageant auprès des collégiens.
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
                            Impression en risographie avec seulement 3 couleurs, un défi technique qui a enrichi le processus créatif.
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
                            Sensibilisation aux dangers de l'IA à travers un ton ludique et contemporain inspiré des "Starter Pack".
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
