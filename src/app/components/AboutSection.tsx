'use client';

export default function AboutSection() {
  return (
    <section className="py-16 px-6 lg:px-20 bg-[#884B1D26] opacity-95 rounded-tl-[100px] rounded-tr-[100px] ">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-brown-600 mb-4">
          Découvrez la culture Béninoise
        </h2>
      </div>

      <p className="text-base lg:text-lg text-[#05073C] max-w-3xl mx-auto mb-10">
        Le Bénin est une terre de contrastes et de richesses, où chaque ville, chaque artisan, 
        chaque site touristique raconte une histoire unique. Notre plateforme vous ouvre les 
        portes de cette découverte en vous proposant une sélection des plus beaux sites à visiter 
        et des artisans à rencontrer. Que vous soyez passionné de culture, d&apos;histoire, de nature 
        ou d&apos;artisanat, vous trouverez ici l&apos;inspiration pour préparer votre prochain voyage.
      </p>
    </section>
  );
}
