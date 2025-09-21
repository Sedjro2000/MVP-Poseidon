'use client'
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center">
      {/* Image de fond */}
      <Image
        src="/assets/images/monimagehero.jpg"
        alt="Paysage touristique"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Contenu */}
      <div className="relative z-10 text-center px-6 md:px-12 animate-fade-up">
        <h1 className="text-3xl md:text-5xl font-heading text-white font-bold mb-4">
          Découvrez le Bénin autrement
        </h1>
        <p className="text-base md:text-lg text-neutral-200 mb-6 max-w-2xl mx-auto">
          Explorez les richesses culturelles, les sites touristiques et l'artisanat à travers une expérience unique et authentique.
          
        </p>
        <a
          href="#leaflet"
          className="inline-block w-[200px] py-3 text-lg font-medium bg-opacity-0 text-white rounded-lg border-2 border-solid border-white shadow-lg hover:bg-secondary hover:text-white transition duration-300"
        >
          Explorer maintenant
        </a>
      </div>
    </section>
  );
}