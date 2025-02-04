import Image from "next/image";

export default function ProjetResurgence() {
  return (
    <div className="min-h-screen bg-white text-black p-10 flex flex-col md:flex-row">
      {/* Section de gauche */}
      <div className="w-full md:w-1/2 p-5">
        <div className="border-l-8 border-ClearBlueCustom pl-4">
          <h1 className="text-6xl font-Cinematografica tracking-widest">
            <span className="text-black text-9xl">RÉSURGENCE,</span>
            <br />
            <span className="text-black">SIGNALÉTIQUE</span>
          </h1>
        </div>
        <p className="font-bold mt-4 font-Montserrat">En Groupe, 2023</p>
        <p className="mt-2 text-lg font-Montserrat">
          Uniformiser l’identité visuelle des nouveaux ensembles de l’île
          Seguin.
        </p>
        <div className="relative mt-10">
          <Image
            src="/resurgence/logoResurgence.png"
            width={500}
            height={200}
            alt="logo"
            className=""
          />
        </div>
        <p className="mt-5 text-lg font-Montserrat">
          <strong>Résurgence</strong> est un système de signalétique composé de
          divers éléments permettant d’accompagner, au travers de l’île Seguin,
          les trajets quotidiens tout comme les flâneries ponctuelles en offrant
          une expérience inédite tournée autour de l’eau et de résurgences.
        </p>
      </div>

      {/* Section de droite */}
      <div className="w-full md:w-1/2 p-5 relative flex flex-col items-center">
        <h2 className="text-6xl font-Cinematografica">MOODBOARD</h2>
        <div className="relative w-full h-[600px] flex flex-col items-center">
          <Image
            src="/resurgence/blob.svg"
            width={800}
            height={600}
            alt="blob"
            className="absolute"
          />
            <div className="relative z-10 flex flex-col space-y-6 mt-10">
            <Image
              src="/resurgence/Montagne.jpg"
              width={200}
              height={200}
              alt="Montagne"
              className="rounded-lg"
            />
            </div>
        </div>
      </div>
    </div>
  );
}
