"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

interface Site {
  _id: string;
  name: string;
  region: string;
  theme: string;
  description: string;
  photo?: string;
  horaires?: string;
  gps: { lat: number; lng: number };
  searchText?: string;
}

const places = [
  {
    id: 1,
    href: 'ganvie-la-cite-lacustre',
    category: "Culturel",
    title: "Ganvié, la cité lacustre",
    slug: "ganvie-cite-lacustre",
    description: "Surnommée la « Venise de l'Afrique », Ganvié est une ville sur pilotis construite au XVIIe siècle au milieu du lac Nokoué par le peuple Tofinu.",
    duration: "2 jours",
    distance: "15km",
    image: "/assets/sites/ganvie_benin_village_lacustre.jpg"
  },
  {
    id: 2,
    href: 'temple-des-pythons',
    category: "Naturel",
    title: "Temple des pythons",
    slug: "temple-des-pythons",
    description: "Point culminant du Bénin",
    duration: "2 jours",
    distance: "30km",
    image: "/assets/sites/ouidah-temple-python-3.jpg",
  },
  {
    id: 3,
    href: 'musee-fondation-zinsou',
    category: "Culturel",
    title: "Musée de la Fondation Zinsou",
    slug: "musee-de-la-fondation-zinsou",
    description: "Un centre d'art contemporain et de la culture béninoise à Cotonou, présentant des expositions d'artistes africains et internationaux.",
    duration: "2h",
    distance: "15km",
    image: "/assets/sites/default-site.jpg"
  },
  {
    id: 4,
    href: 'la-porte-du-non-retour',
    category: "Culturel",
    title: "La Porte du Non-Retour",
    slug: "la-porte-du-non-retour",
    description: "Située à Ouidah, cette arche monumentale commémore le lieu où les esclaves étaient embarqués pour être déportés vers l'Amérique.",
    duration: "1h",
    distance: "40km",
    image: "/assets/sites/default-site.jpg"
  },
  {
    id: 5,
    href: 'musee-historique-abomey',
    category: "Culturel",
    title: "Musée Historique d'Abomey",
    slug: "musee-historique-abomey",
    description: "Installé dans l'ancien Palais Royal d'Abomey, ce musée retrace l'histoire du royaume du Dahomey à travers ses objets, trônes et reliques royales.",
    duration: "2/3 heures.",
    distance: "140km ",
    image: "/assets/sites/default-site.jpg"
  },
  {
    id: 6,
    href: 'tata-somba',
    category: "Culturel",
    title: "Tata Somba",
    slug: "tata-somba",
    description: "Des habitations traditionnelles fortifiées dans le nord du Bénin (région de l'Atacora), inscrites au patrimoine mondial de l'UNESCO pour leur architecture unique.",
    duration: "Variable",
    distance: "500km",
    image: "/assets/sites/default-site.jpg"
  }
];

const categories = ["Culturel", "Naturel", "Plus populaire"];

export default function SitesTouristiquesSection() {
  const [activeCategory, setActiveCategory] = useState("Culturel");

  // Récupération de tous les sites depuis Convex
  // const sites = useQuery(api.functions.sites.getAllSites) as Site[] | undefined;

  // 🔹 Log des sites bruts
  // console.log("Sites récupérés depuis Convex :", sites);

  // Filtrage des sites selon la catégorie active
  // const filteredSites = useMemo(() => {
  //   if (!sites) {
  //     console.warn("Aucun site récupéré pour l'instant.");
  //     return [];
  //   }

  //   const result = sites.filter((site) => {
  //     if (activeCategory === "Plus populaire") {
  //       return true;
  //     }
  //     return site.theme === activeCategory;
  //   });

  //   // 🔹 Log des sites après filtrage par catégorie
  //   console.log("Sites filtrés pour la catégorie", activeCategory, ":", result);

  //   return result;
  // }, [sites, activeCategory]);

  // 🔹 Log de l'état actuel de la catégorie
  // console.log("Catégorie active :", activeCategory);

  // if (!sites) {
  //   return (
  //     <section className="bg-[#F4ECE4] py-16">
  //       <div className="max-w-7xl mx-auto px-6">
  //         <div className="flex justify-center items-center h-64">
  //           <div className="text-center">
  //             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
  //             <p className="text-gray-600">Chargement des sites...</p>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   );
  // }

   const filteredPlaces = places.filter(
    (place) =>
      activeCategory === "Plus populaire" || place.category === activeCategory
  );

  return (
    <section className="bg-[#F4ECE4] py-16" id="sites">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
          Sites touristiques à ne pas manquer
        </h2>
        <p className="text-center text-gray-600 font-sans max-w-2xl mx-auto mb-8">
          Des monuments historiques aux paysages naturels, partez à la
          découverte des sites qui font l'âme de nos villes.
        </p>

        {/* Tabs */}
        <div className="flex justify-center space-x-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                console.log("Changement de catégorie :", cat);
                setActiveCategory(cat);
              }}
              className={`px-4 py-2 rounded-full text-base font-bold font-sans ${
                activeCategory === cat
                  ? "bg-white border-brown-600 text-primary"
                  : "text-gray-600 hover:text-brown-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards */}
        {/* {filteredSites.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              Aucun site disponible dans cette catégorie.
            </p>
          </div>
        ) : ( */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {filteredPlaces.map((place) => (
              <Link
                key={place.id}
                href={`/sites/${place.slug}`}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={place.image || "/assets/sites/default-site.jpg"}
                    alt={place.title}
                    fill
                    className="object-cover rounded-xl p-2"
                  />
                </div>
                <div className="p-4">
                  <p className="text-base text-sans text-gray-500 mb-1">
                    Catégorie : {place.category}
                  </p>
                  <h3 className="font-semibold text-base text-accent hover:text-secondary mb-2">
                    {place.title}
                  </h3>
                  <p className="text-base text-gray-600 truncate hover:text-secondary whitespace-nowrap overflow-hidden mb-6">
                    {place.description}
                  </p>
                  <hr />
                  <div className="flex justify-between text-base hover:text-secondary mt-3">
                    <span className="text-accent">
                      Durée : {place.duration}
                    </span>
                    <span className="text-accent">Distance : {place.distance} </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        {/* )} */}

        <div className="flex justify-center mt-10">
          <Link href="/sites">
            <button className="bg-brown-600 text-white px-6 py-3 rounded-full font-medium hover:bg-brown-700 transition">
              Tout voir | ({places.length})
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
