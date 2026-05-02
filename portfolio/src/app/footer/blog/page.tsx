import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="w-full bg-PinkCustom py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-Poppins text-4xl md:text-6xl font-bold text-white mb-4">
            Blog
          </h1>
          <p className="font-Montserrat text-base md:text-lg text-white max-w-2xl leading-relaxed">
            Un espace pensé pour partager des coulisses de projets, des
            inspirations visuelles et des réflexions autour du design.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-12 text-center">
          <p className="font-Montserrat text-sm uppercase tracking-[0.2em] text-PinkCustom mb-4">
            Bientôt disponible
          </p>
          <h2 className="font-Poppins text-3xl md:text-4xl text-gray-900 mb-4">
            Les premiers articles arrivent
          </h2>
          <p className="font-Avenir text-gray-700 leading-relaxed max-w-2xl mx-auto mb-8">
            Cette page accueillera prochainement des contenus autour du
            packaging, de la typographie, de la direction artistique et de mon
            processus créatif.
          </p>

          <div className="grid gap-4 md:grid-cols-3 text-left mb-10">
            <div className="bg-gray-50 rounded-2xl p-5">
              <h3 className="font-Poppins text-xl text-gray-900 mb-2">
                Coulisses
              </h3>
              <p className="font-Avenir text-gray-700 leading-relaxed">
                Recherches, intentions et étapes de création derrière les
                projets du portfolio.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-5">
              <h3 className="font-Poppins text-xl text-gray-900 mb-2">
                Inspirations
              </h3>
              <p className="font-Avenir text-gray-700 leading-relaxed">
                Références graphiques, univers de marque et matières visuelles
                qui nourrissent ma pratique.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-5">
              <h3 className="font-Poppins text-xl text-gray-900 mb-2">
                Réflexions
              </h3>
              <p className="font-Avenir text-gray-700 leading-relaxed">
                Notes plus personnelles sur le design, l&apos;édition, le récit et
                l&apos;image.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/Creation"
              className="inline-block bg-PinkCustom text-white px-6 py-3 rounded-full font-Poppins font-semibold shadow-md hover:shadow-lg transition-all duration-200"
            >
              Explorer les projets
            </Link>
            <Link
              href="/footer/contact"
              className="inline-block bg-white text-gray-900 px-6 py-3 rounded-full font-Poppins font-semibold border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200"
            >
              Me contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
