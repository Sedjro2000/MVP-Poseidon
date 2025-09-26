'use client';

import { MapContainer, TileLayer, Marker, Popup, Tooltip } from '@/app/lib/leafletComponents';
import { useState, useEffect } from 'react';
import "leaflet/dist/leaflet.css";
import Image from "next/image";
import Link from "next/link";
import type * as Leaflet from "leaflet";

// Types
interface Boutique {
  id: string | number;
  name: string;
  category: string;
  location: string;
  images: string[];
  description: string;
  price: string;
  horaires: string;
  close: string;
  contact: {
    whatsapp: string;
    tel: string;
    email: string;
  };
  position: [number, number];
}

interface Proximite {
  id: string | number;
  href: string;
  image: string;
  title: string;
  category: string;
  description: string;
  duration: string;
  distance: string;
}

// Données mock
const boutique: Boutique = {
  id: 1,
  name: "Atelier Tissage d’Abomey",
  category: "Textile",
  location: "Abomey",
  description:
    "Plongez au cœur du savoir-faire béninois avec l’Atelier Tissage d’Abomey. Depuis plusieurs générations, cette boutique familiale perpétue la tradition du pagne tissé à la main. Chaque pièce est unique, fabriquée avec passion et symbolise l’identité culturelle du royaume d’Abomey.",
  price: "à partir de 2500 FCFA",
  horaires: "Lundi - Samedi : 9h00 - 18h00",
  close: "Dimanche : Fermé",
  contact: {
    tel: "+229 95 25 45 56",
    whatsapp: "+229 21 36 45 89",
    email: "atelier.tissage.abomey@gmail.com",
  },
  images: [
    "/assets/boutiques/textile_one.jpeg",
    "/assets/boutiques/textile_two.jpeg",
    "/assets/boutiques/textile_two.jpeg",
    "/assets/boutiques/poterie_one.jpeg",
    "/assets/boutiques/poterie_two.jpeg",
  ],
  position: [9.337, 2.633], // Abomey
};

const proximites: Proximite[] = [
  {
    id: 1,
    href: 'ganvie-la-cite-lacustre',
    category: "Culturel",
    title: "Ganvié, la cité lacustre",
    description:
      "Surnommée la « Venise de l’Afrique », Ganvié est une ville sur pilotis construite au XVIIe siècle au milieu du lac Nokoué par le peuple Tofinu.",
    duration: "2j",
    distance: "15km",
    image: "/assets/sites/ganvie_benin_village_lacustre.jpg",
  },
  {
    id: 2,
    href: 'temple-des-pythons',
    category: "Naturel",
    title: "Temple des pythons",
    description: "Point culminant du Bénin",
    duration: "2j",
    distance: "30km",
    image: "/assets/sites/temple-pythons.jpg",
  },
  {
    id: 3,
    href: 'musee-fondation-zinsou',
    category: "Culturel",
    title: "Musée de la Fondation Zinsou",
    description:
      "Un centre d’art contemporain et de la culture béninoise à Cotonou, présentant des expositions d’artistes africains et internationaux.",
    duration: "2h",
    distance: "15km",
    image: "/assets/sites/musee_zinsou.jpg",
  },
  {
    id: 4,
    href: 'la-porte-du-non-retour',
    category: "Culturel",
    title: "La Porte du Non-Retour",
    description:
      "Située à Ouidah, cette arche monumentale commémore le lieu où les esclaves étaient embarqués pour être déportés vers l’Amérique.",
    duration: "1h",
    distance: "40km",
    image: "/assets/sites/door_no_return.jpeg",
  },
];

export default function BoutiqueDetailPage() {
  const [L, setL] = useState<typeof Leaflet | null>(null);

  useEffect(() => {
    (async () => {
      const leaflet = await import("leaflet");
      setL(leaflet);
    })();
  }, []);

  if (!L) return <p>Chargement de la carte...</p>;

  // Création d'une icône SVG personnalisée
  function createPinIcon(color = '#F97316') {
    if (!L) return undefined;
    const svg = `
      <svg width="28" height="40" viewBox="0 0 24 36" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C7.03 0 3 4.03 3 9c0 6.33 7.78 15.52 8.25 16.03a1.5 1.5 0 0 0 2.5 0C13.22 24.52 21 15.33 21 9c0-4.97-4.03-9-9-9z" fill="${color}"/>
        <circle cx="12" cy="9" r="3.5" fill="#fff"/>
      </svg>`;
    return L.divIcon({
      html: svg,
      className: '',
      iconSize: [28, 40],
      iconAnchor: [14, 40],
      popupAnchor: [0, -38],
    });
  }

  const boutiqueIcon = createPinIcon('#8B5E3C');

  return (
    <div className="mx-auto max-w-6xl px-6 md:px-20 py-10 space-y-14">
      {/* Fil d’Ariane */}
      <nav className="flex mb-3" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              href="/"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-secondary dark:text-gray-400 dark:hover:text-white"
            >
              <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              Accueil
            </Link>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
              </svg>
              <Link href="/boutiques" className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                Boutiques
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
              </svg>
              <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Détail Boutique</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Titre */}
      <h1 className="text-2xl md:text-3xl font-bold text-brown-500">
        Boutique “{boutique.name}”
      </h1>

      {/* Infos */}
      <div className="flex items-center flex-wrap gap-4 text-base text-gray-500">
        <span>
          <span className="text-primary">Catégorie artisanat</span> :
          <span className="text-accent"> {boutique.category} </span>
        </span>
        <span className='hidden md:block'>•</span>
        <span>
          <span className="text-primary">Localisation :</span>
          <span className="text-accent"> {boutique.location} </span>
        </span>
        <span className="ml-auto flex gap-4 text-accent">
          <button className="hover:underline">Partager</button>
          <button className="hover:underline">Favoris</button>
        </span>
      </div>

      {/* Galerie */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
        <Image
          src={boutique.images[0]}
          alt="textile made in Benin"
          width={800}
          height={600}
          className="w-full h-80 object-cover rounded-xl md:col-span-2"
        />
        <div className="grid grid-cols-2 gap-4">
          <Image
            src={boutique.images[1]}
            alt="model made in Benin"
            width={400}
            height={300}
            className="w-full h-36 object-cover rounded-xl"
          />
          <Image
            src={boutique.images[2]}
            alt="textile scene made in Benin"
            width={400}
            height={300}
            className="w-full h-36 object-cover rounded-xl"
          />
        </div>
        <button className="absolute bottom-6 right-6 bg-brown-600 hover:bg-brown-700 text-white p-4 text-base rounded-lg">
          Voir le catalogue
        </button>
      </div>

      {/* Description + Infos */}
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-xl font-semibold mb-3 text-primary">Description</h2>
          <p className="text-accent mb-2">{boutique.description}</p>

          <h3 className="font-bold text-primary">Produits proposés</h3>
          <ul className="list-disc list-inside text-accent">
            <li>Pagne tissé traditionnel</li>
            <li>Écharpes et foulards artisanaux</li>
            <li>Accessoires textiles assortis</li>
            <li>Souvenirs & objets décoratifs</li>
          </ul>
        </div>

        {/* Sidebar Infos */}
        <div className="bg-white rounded-xl shadow-md p-6 border space-y-4">
          <div className="mb-3 text-accent">
            <p className="mb-2">
              <strong className="font-semibold text-brown-500">Prix : </strong>
            </p>
            <p>{boutique.price}</p>
          </div>
          <div className="mb-3 text-accent">
            <p className="mb-2">
              <strong className="text-brown-500">Horaires d’ouverture :</strong>
            </p>
            <p className="mb-2">{boutique.horaires}</p>
            <p>{boutique.close}</p>
          </div>
          <div className="mb-6 text-accent">
            <div className="mb-2">
              <p>
                <strong className="text-brown-500">Contact :</strong>
              </p>
              <p className="mb-2">Whatsapp: {boutique.contact.whatsapp}</p>
              <p className="mb-2">Téléphone: {boutique.contact.tel}</p>
              <p className="mb-2">Email: {boutique.contact.email}</p>
            </div>
          </div>
          <button className="bg-brown-600 hover:bg-brown-700 text-white w-full p-3 rounded-md">
            Ajouter à mon itinéraire
          </button>
        </div>
      </div>

      {/* Carte */}
      <section>
        <div className="heading mb-6">
          <h2 className="text-xl text-brown-500 font-bold mb-6">
            Voir cette boutique sur la carte
          </h2>
        </div>
        <div className="w-full rounded-xl overflow-hidden shadow-card border border-black/5">
          <MapContainer
            center={boutique.position}
            zoom={13}
            scrollWheelZoom={false}
            className="h-80 w-full rounded-xl"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              key={boutique.id}
              position={boutique.position}
              icon={boutiqueIcon}
            >
              <Popup>
                <div className="max-w-xs">
                  <strong>{boutique.name}</strong>
                  <p className="text-sm text-gray-500 mt-1">
                    {boutique.description}
                  </p>
                </div>
              </Popup>
              <Tooltip direction="top" offset={[0, -10]} opacity={0.9}>
                <span className="text-sm text-accent">{boutique.name}</span>
              </Tooltip>
            </Marker>
          </MapContainer>
        </div>
      </section>

      {/* Proximité */}
      <section>
        <h2 className="text-xl font-bold mb-6 text-brown-500">
          À proximité de ce lieu
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {proximites.map((proximity_item) => (
            <Link
              key={proximity_item.id}
              href={proximity_item.href}
              className="border bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={proximity_item.image}
                  alt={proximity_item.title}
                  fill
                  className="object-cover rounded-xl p-2"
                />
              </div>
              <div className="p-4 space-y-2">
                <p className="text-xs text-sans text-gray-500 mb-1">
                  Catégorie : {proximity_item.category}
                </p>
                <h3 className="font-semibold text-base text-accent mb-2">
                  {proximity_item.title}
                </h3>
                <p className="text-sm text-gray-600 truncate whitespace-nowrap overflow-hidden mb-6">
                  {proximity_item.description}
                </p>
                <hr />
                <div className="flex justify-between text-base text-accent mt-3">
                  <span>Durée : {proximity_item.duration}</span>
                  <span>Distance : {proximity_item.distance}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
