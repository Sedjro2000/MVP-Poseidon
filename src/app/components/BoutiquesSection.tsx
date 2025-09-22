"use client";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    id: 1,
    title: "Bijoux & accessoires",
    image: "/assets/boutiques/bijoux.jpeg",
    href: "/categories/bijoux",
  },
  {
    id: 2,
    title: "Textiles & mode",
    image: "/assets/boutiques/textile_two.jpeg",
    href: "/categories/textiles",
  },
  {
    id: 3,
    title: "Souvenirs & objets décoratifs",
    image: "/assets/boutiques/souvenir.jpeg",
    href: "/categories/souvenirs",
  },
  {
    id: 4,
    title: "Vannerie & objets en fibres",
    image: "/assets/boutiques/vannerie.jpg",
    href: "/categories/vannerie",
  },
  {
    id: 5,
    title: "Poterie",
    image: "/assets/boutiques/poterie.jpeg",
    href: "/categories/poterie",
  },
  {
    id: 6,
    title: "Peinture & art visuel",
    image: "/assets/boutiques/peinture.jpg",
    href: "/categories/peinture",
  },
];

export default function BoutiquesSection() {
  return (
    <section className="py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-brown-600 mb-4">
          Boutiques à ne pas manquer
        </h2>

        <p className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto mb-10">
          Découvrez nos boutiques artisanales : plongez dans l&apos;univers de
          l&apos;artisanat béninois, reflet de notre histoire et de notre créativité.
          Chaque pièce est un trésor unique qui célèbre nos racines et met en
          lumière le savoir-faire de nos artisans.
        </p>

        <div className="flex justify-end mb-6">
          <Link
            href="/categories"
            className="text-base lg:text-lg text-secondary hover:text-brown-600"
          >
            Voir toutes les catégories
          </Link>
        </div>

        {/* Galerie */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className="relative rounded-xl overflow-hidden shadow group"
            >
              <Image
                src={cat.image}
                alt={cat.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 p-6 bg-black/40 flex items-end justify-start">
                <span className="text-white font-medium text-lg">
                  {cat.title}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="/boutiques"
          className="inline-block bg-brown-600 text-white text-base py-3 px-6 rounded-full shadow hover:bg-brown-50 transition"
        >
          {`Consulter les boutiques | (${categories.length})`}
        </Link>
      </div>
    </section>
  );
}
