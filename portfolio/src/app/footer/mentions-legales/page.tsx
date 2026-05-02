const sections = [
  {
    title: "Édition du site",
    content:
      "Ce site est un portfolio personnel présentant les projets et réalisations de Ludivine Rameaux. Pour toute demande relative au contenu du site, un contact peut être effectué par email à l'adresse ludi.rameaux@gmail.com.",
  },
  {
    title: "Propriété intellectuelle",
    content:
      "Les contenus, visuels, textes, compositions graphiques et projets présentés sur ce site restent protégés par le droit de la propriété intellectuelle. Toute reproduction, diffusion ou réutilisation sans autorisation préalable n'est pas autorisée.",
  },
  {
    title: "Données personnelles",
    content:
      "Ce site a une vocation de présentation. Les informations transmises volontairement via les moyens de contact sont utilisées uniquement pour répondre aux demandes reçues et ne sont pas cédées à des tiers.",
  },
  {
    title: "Liens externes",
    content:
      "Des liens vers des plateformes externes peuvent être proposés, notamment vers les réseaux sociaux. Leur consultation relève de la responsabilité de l'utilisateur et de leurs propres conditions d'utilisation.",
  },
];

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="w-full bg-PinkCustom py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-Poppins text-4xl md:text-6xl font-bold text-white mb-4">
            Mentions légales
          </h1>
          <p className="font-Montserrat text-base md:text-lg text-white max-w-2xl leading-relaxed">
            Informations générales relatives à la consultation et à la diffusion
            des contenus de ce portfolio.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid gap-6">
          {sections.map((section) => (
            <article
              key={section.title}
              className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-8"
            >
              <h2 className="font-Poppins text-2xl text-gray-900 mb-3">
                {section.title}
              </h2>
              <p className="font-Avenir text-gray-700 leading-relaxed">
                {section.content}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 bg-gray-50 rounded-2xl p-6 md:p-8">
          <p className="font-Avenir text-gray-700 leading-relaxed">
            Ces informations sont fournies dans le cadre d&apos;un site vitrine
            personnel centré sur la présentation de travaux créatifs.
          </p>
        </div>
      </section>
    </div>
  );
}
