import Link from "next/link";

const contactCards = [
  {
    title: "Email",
    value: "ludi.rameaux@gmail.com",
    href: "mailto:ludi.rameaux@gmail.com",
    description:
      "Pour une prise de contact rapide, une demande de stage ou une discussion autour d'un projet.",
  },
  {
    title: "LinkedIn",
    value: "Ludivine Rameaux",
    href: "https://www.linkedin.com/in/ludivine-rameaux/",
    description:
      "Pour suivre mon parcours, mes expériences et échanger dans un cadre professionnel.",
  },
  {
    title: "Instagram",
    value: "@ludi.visuals",
    href: "https://www.instagram.com/ludi.visuals/",
    description:
      "Pour découvrir des visuels, des expérimentations et des fragments de mon univers graphique.",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="w-full bg-PinkCustom py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-Poppins text-4xl md:text-6xl font-bold text-white mb-4">
            Contact
          </h1>
          <p className="font-Montserrat text-base md:text-lg text-white max-w-2xl leading-relaxed">
            Si mon travail t&apos;intéresse, je serais ravie d&apos;échanger à propos
            d&apos;un stage, d&apos;une collaboration ou d&apos;un projet créatif.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {contactCards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              target={card.href.startsWith("http") ? "_blank" : undefined}
              rel={card.href.startsWith("http") ? "noreferrer" : undefined}
              className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="font-Montserrat text-sm uppercase tracking-wide text-PinkCustom mb-2">
                {card.title}
              </p>
              <h2 className="font-Poppins text-2xl text-gray-900 mb-3">
                {card.value}
              </h2>
              <p className="font-Avenir text-gray-700 leading-relaxed">
                {card.description}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-10 bg-gray-50 rounded-3xl p-8 md:p-10">
          <h2 className="font-Poppins text-3xl text-gray-900 mb-4">
            Continuer la visite
          </h2>
          <p className="font-Avenir text-gray-700 max-w-2xl leading-relaxed mb-6">
            En attendant notre échange, tu peux découvrir mon parcours ou
            parcourir directement mes projets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/about"
              className="inline-block bg-PinkCustom text-white px-6 py-3 rounded-full font-Poppins font-semibold shadow-md hover:shadow-lg transition-all duration-200"
            >
              Découvrir mon profil
            </Link>
            <Link
              href="/Creation"
              className="inline-block bg-white text-gray-900 px-6 py-3 rounded-full font-Poppins font-semibold border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200"
            >
              Voir mes créations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
