"use client";

import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br bg-PinkCustom py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Photo */}
            <div className="flex-shrink-0">
              <Image
                src="/image.png"
                alt="Ludivine Rameaux"
                width={350}
                height={350}
                className="rounded-full shadow-2xl"
              />
            </div>

            {/* Intro */}
            <div className="flex-1">
              <h1 className="font-Poppins text-5xl md:text-6xl font-bold mb-4 text-white">
                Ludivine Rameaux
              </h1>
              <h2 className="font-Poppins text-2xl md:text-3xl text-white mb-6">
                Designer graphique & d'identité visuelle
              </h2>
              <p className="font-Avenir text-lg text-white leading-relaxed mb-6">
                Passionnée par le design graphique, avec une sensibilité particulière pour l'édition et le packaging, je recherche un stage de fin d'études à partir de juin 2026 afin d'approfondir ma pratique et contribuer à des projets porteurs de sens.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 font-Avenir text-white">
                <a href="mailto:ludi.rameaux@gmail.com" className="hover:text-pink-400 transition-colors">
                  📧 ludi.rameaux@gmail.com
                </a>
                <span className="hidden sm:block">•</span>
                <a href="tel:0608263742" className="hover:text-pink-400 transition-colors">
                  📱 06 08 26 37 42
                </a>
                <span className="hidden sm:block">•</span>
                <span>📍 Montesson, Yvelines</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Formation */}
      <div className="max-w-7xl mx-auto px-8 py-20">
        <h2 className="font-Poppins text-4xl font-bold mb-12 text-gray-900">
          Parcours Scolaire
        </h2>

        <div className="space-y-8">
          <div className="border-l-4 border-PinkCustom pl-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <h3 className="font-Poppins text-xl font-bold text-gray-900">
                Master en Design Industriel, Filière d'Identité
              </h3>
              <span className="font-Avenir text-gray-600">Septembre 2021 - Aujourd'hui</span>
            </div>
            <p className="font-Avenir text-gray-700 mb-1">Strate, École de Design</p>
            <p className="font-Avenir text-gray-600 italic">5ème année de Master - Sèvres</p>
          </div>

          <div className="border-l-4 border-PinkCustom pl-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <h3 className="font-Poppins text-xl font-bold text-gray-900">
                Design and Visual Culture, Master
              </h3>
              <span className="font-Avenir text-gray-600">Septembre 2024 - Janvier 2025</span>
            </div>
            <p className="font-Avenir text-gray-700 mb-1">IADE, Creative University</p>
            <p className="font-Avenir text-gray-600 italic">Erasmus - Lisbonne</p>
          </div>
        </div>
      </div>

      {/* Expériences */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="font-Poppins text-4xl font-bold mb-12 text-gray-900">
            Expériences Professionnelles
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-Poppins text-xl font-bold text-gray-900 mb-2">
                DXOMARK - Designer Graphique
              </h3>
              <p className="font-Avenir text-gray-600 mb-4">Février - Juillet 2024 • Boulogne-Billancourt</p>
              <p className="font-Avenir text-gray-700 leading-relaxed">
                Production d'éléments graphiques print et web pour la communication interne et externe de l'entreprise, travail sur la cohérence visuelle des supports et création de logo
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-Poppins text-xl font-bold text-gray-900 mb-2">
                WLC Concept
              </h3>
              <p className="font-Avenir text-gray-600 mb-4">Juin 2023 • Le Vésinet</p>
              <p className="font-Avenir text-gray-700 leading-relaxed">
                Participation aux projets de l'entreprise, de la production à l'installation des panneaux acoustiques et alimentation des réseaux sociaux
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-Poppins text-xl font-bold text-gray-900 mb-2">
                Fragment d'Art - Artisan Mosaïste
              </h3>
              <p className="font-Avenir text-gray-600 mb-4">Juin 2023</p>
              <p className="font-Avenir text-gray-700 leading-relaxed">
                Création de motifs et de lignes avec de la mosaïque pour réaliser un aplat. Reproduction minutieuse du pattern à plusieurs reprises.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-Poppins text-xl font-bold text-gray-900 mb-2">
                Prisma Media
              </h3>
              <p className="font-Avenir text-gray-600 mb-4">Juin 2019 • Gennevilliers</p>
              <p className="font-Avenir text-gray-700 leading-relaxed">
                Observation des différentes étapes de confection du magazine GEO, découverte des logiciels de mise en page et de retouche photo
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Missions & Engagements */}
      <div className="max-w-7xl mx-auto px-8 py-20">
        <h2 className="font-Poppins text-4xl font-bold mb-12 text-gray-900">
          Missions & Engagements
        </h2>

        <div className="space-y-6">
          <div className="border-l-4 border-PinkCustom pl-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <h3 className="font-Poppins text-xl font-bold text-gray-900">
                Saint Erembert - Surveillante de DST
              </h3>
              <span className="font-Avenir text-gray-600">Septembre 2025 - Juin 2026</span>
            </div>
            <p className="font-Avenir text-gray-700">
              Encadrement et surveillance d'examens et de devoirs surveillés, gestion du temps et organisation des salles
            </p>
          </div>

          <div className="border-l-4 border-PinkCustom pl-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <h3 className="font-Poppins text-xl font-bold text-gray-900">
                Strate - Ambassadrice & Département Communication
              </h3>
              <span className="font-Avenir text-gray-600">Septembre 2022 - Juin 2026</span>
            </div>
            <p className="font-Avenir text-gray-700">
              Ambassadrice et représentante de l'école à différents évènements, rédaction d'articles, transmission des valeurs de Strate auprès des futurs étudiants
            </p>
          </div>

          <div className="border-l-4 border-PinkCustom pl-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <h3 className="font-Poppins text-xl font-bold text-gray-900">
                Association «Le Club» - Journaliste et Trésorière
              </h3>
              <span className="font-Avenir text-gray-600">Septembre 2022 - Janvier 2024</span>
            </div>
            <p className="font-Avenir text-gray-700">
              Rédaction d'articles, organisation d'évènements et membre fondateur de l'association sportive
            </p>
          </div>
        </div>
      </div>

      {/* Compétences */}
      <div className="bg-gradient-to-br from-PinkCustom/10 to-OtherPinkCustom/20 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="font-Poppins text-4xl font-bold mb-12 text-gray-900">
            Compétences & Savoir-faire
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-Poppins text-xl font-bold text-gray-900 mb-4">Outils</h3>
              <ul className="font-Avenir text-gray-700 space-y-2">
                <li>• Suite Adobe (Illustrator, InDesign, Photoshop, Lightroom, After Effect)</li>
                <li>• Rhino - Sketch Up - Keyshot</li>
                <li>• Pack Office - Figma (notions)</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-Poppins text-xl font-bold text-gray-900 mb-4">Savoir-faire</h3>
              <ul className="font-Avenir text-gray-700 space-y-2">
                <li>• Identité visuelle</li>
                <li>• Mise en page</li>
                <li>• Typographie</li>
                <li>• Conception graphique</li>
                <li>• Colorimétrie</li>
                <li>• Maquettes 3D</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-Poppins text-xl font-bold text-gray-900 mb-4">Qualités humaines</h3>
              <ul className="font-Avenir text-gray-700 space-y-2">
                <li>• Autonomie</li>
                <li>• Rigueur</li>
                <li>• Empathie</li>
                <li>• Organisation</li>
                <li>• Sens de l'observation</li>
                <li>• Communication</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-Poppins text-xl font-bold text-gray-900 mb-4">Langues</h3>
              <ul className="font-Avenir text-gray-700 space-y-2">
                <li>• Français - Natif</li>
                <li>• Anglais - B2</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-Poppins text-xl font-bold text-gray-900 mb-4">Centres d'intérêt</h3>
              <ul className="font-Avenir text-gray-700 space-y-2">
                <li>• Culture sportive</li>
                <li>• Voyages (Bénin, Australie 2025)</li>
                <li>• Photographie</li>
                <li>• Jeux Vidéo</li>
                <li>• Dessin et Peinture</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Section Vidéo */}
      <div className="max-w-7xl mx-auto px-8 py-20">
        <h2 className="font-Poppins text-4xl font-bold mb-12 text-center text-gray-900">
          Mon École
        </h2>
        <video
          className="w-full md:w-3/4 lg:w-1/2 mx-auto rounded-xl shadow-lg"
          src="/DroneViewStrate.mp4"
          title="Strate École de Design"
          loop
          muted
          autoPlay
          playsInline
        />
      </div>
    </div>
  );
}
