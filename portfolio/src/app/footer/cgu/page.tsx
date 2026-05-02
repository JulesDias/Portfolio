const rules = [
  {
    title: "Objet",
    content:
      "Les présentes conditions ont pour objectif de préciser les règles générales de consultation et d'utilisation de ce portfolio personnel.",
  },
  {
    title: "Accès au site",
    content:
      "Le site est accessible librement, sous réserve d'une utilisation normale, respectueuse et conforme à sa finalité de présentation de travaux et d'informations professionnelles.",
  },
  {
    title: "Usage des contenus",
    content:
      "La consultation du site n'emporte aucun droit de réutilisation des contenus. Les visuels et textes présentés ne peuvent être repris, diffusés ou modifiés sans autorisation préalable.",
  },
  {
    title: "Responsabilité",
    content:
      "Les informations publiées sont proposées à titre informatif et peuvent évoluer. Malgré le soin apporté à leur rédaction, aucune garantie d'exhaustivité absolue n'est apportée.",
  },
];

export default function CguPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="w-full bg-PinkCustom py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-Poppins text-4xl md:text-6xl font-bold text-white mb-4">
            Conditions générales d&apos;utilisation
          </h1>
          <p className="font-Montserrat text-base md:text-lg text-white max-w-2xl leading-relaxed">
            Cadre général de consultation du site et rappel des bonnes
            pratiques liées à l&apos;utilisation des contenus du portfolio.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid gap-6">
          {rules.map((rule) => (
            <article
              key={rule.title}
              className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-8"
            >
              <h2 className="font-Poppins text-2xl text-gray-900 mb-3">
                {rule.title}
              </h2>
              <p className="font-Avenir text-gray-700 leading-relaxed">
                {rule.content}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 bg-gray-50 rounded-2xl p-6 md:p-8">
          <p className="font-Avenir text-gray-700 leading-relaxed">
            En cas de question sur l&apos;utilisation d&apos;un contenu ou sur une
            demande d&apos;autorisation, le moyen de contact à privilégier est
            l&apos;adresse ludi.rameaux@gmail.com.
          </p>
        </div>
      </section>
    </div>
  );
}
