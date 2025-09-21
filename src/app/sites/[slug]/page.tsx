'use client';

import {  MapContainer, TileLayer, Marker, Popup, Tooltip } from '@/app/lib/leafletComponents';
import { useState, useEffect } from 'react';
import "leaflet/dist/leaflet.css";
import Image from "next/image";
import Link from "next/link";


const site = {
    id: 1,
    name: "Musée de la Porte du Non-Retour",
    category: "Site historique",
    location: "Ouidah",
    description: 
        "La Porte du Non-Retour est un monument emblématique situé à Ouidah, au Bénin. Elle a été construite en 1995 et représente le point final du parcours des esclaves, qui étaient contraints de quitter leur terre natale sans espoir de retour. L'arche monumentale se dresse sur la plage où les navires négriers partaient vers les Amériques. Le site est un lieu de recueillement et de mémoire. Il est ouvert au public et symbolise le souvenir de l'esclavage et la résistance du peuple africain. Bien que le site soit une structure en plein air et accessible en permanence, le Musée d'Histoire de Ouidah (souvent visité en même temps) a des horaires précis.",
    price: "Accès libre avec des guides locaux",
    horaires: "Lundi - Dimanche : 9h00 - 18h00",
    contact: {
        tel: "+229 95 25 45 56",
        whatsapp: "+229 21 36 45 89",
        email: "atelier.tissage.abomey@gmail.com",
    },
    images: [
        "/assets/sites/door_no_return.jpeg",
        "/assets/sites/musee_historique.jpeg",
        "/assets/sites/place_g.jpeg",
    ],
    position: [6.3533, 2.0833], // Ouidah
};

const proximites = [
    {
        id: 1,
        href: 'ganvie-la-cite-lacustre',
        category: "Culturel",
        title: "Ganvié, la cité lacustre",
        description: "Surnommée la « Venise de l'Afrique », Ganvié est une ville sur pilotis construite au XVIIe siècle au milieu du lac Nokoué par le peuple Tofinu.",
        duration: "2j",
        distance: "15km",
        image: "/assets/sites/ganvie_benin_village_lacustre.jpg"
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
        description: "Un centre d'art contemporain et de la culture béninoise à Cotonou, présentant des expositions d'artistes africains et internationaux.",
        duration: "2h",
        distance: "15km",
        image: "/assets/sites/musee_zinsou.jpg"
    },
    {
        id: 4,
        href: 'la-porte-du-non-retour',
        category: "Culturel",
        title: "La Porte du Non-Retour",
        description: "Située à Ouidah, cette arche monumentale commémore le lieu où les esclaves étaient embarqués pour être déportés vers l'Amérique.",
        duration: "1h",
        distance: "40km",
        image: "/assets/sites/door_no_return.jpeg"
    },
];



export default function SiteDetailPage() {
    const [L, setL] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const leaflet = await import("leaflet"); // import côté client
      setL(leaflet);
    })();
  }, []);

  if (!L) return <p>Chargement de la carte...</p>;

  // Création d'une icône SVG personnalisée (pin) via divIcon
    const  createPinIcon = (color = '#F97316') => {
        const svg = `
        <svg width="28" height="40" viewBox="0 0 24 36" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C7.03 0 3 4.03 3 9c0 6.33 7.78 15.52 8.25 16.03a1.5 1.5 0 0 0 2.5 0C13.22 24.52 21 15.33 21 9c0-4.97-4.03-9-9-9z" fill="${color}"/>
        <circle cx="12" cy="9" r="3.5" fill="#fff"/>
        </svg>`
        return L.divIcon({
            html: svg,
            className: '',
            iconSize: [28, 40],
            iconAnchor: [14, 40],
            popupAnchor: [0, -38],
        })
    }

    const siteIcon = createPinIcon('#F97316') // Icon brun site touristique

    return (
        <div className="mx-auto max-w-6xl px-6 md:px-20 py-10 space-y-14">
            <nav className="flex mb-3" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li className="inline-flex items-center">
                        <a href="#" className="inline-flex items-center text-sm font-medium text-accent hover:text-secondary dark:text-gray-400 dark:hover:text-white">
                            <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                            </svg>
                            Accueil
                        </a>
                    </li>
                    <li aria-current="page">
                        <div className="flex items-center">
                            <svg className="rtl:rotate-180 w-3 h-3 text-accent mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                            </svg>
                            <span className="ms-1 text-sm font-medium text-accent md:ms-2 dark:text-gray-400">Détail site touristique</span>
                        </div>
                    </li>
                </ol>
            </nav>
            <h1 className="text-2xl md:text-3xl font-bold text-brown-500">
                Boutique “{site.name}”
            </h1>
            <div className="flex items-center gap-4 text-base text-gray-500">
                <span><span className="text-primary">Type de site</span> : <span className="text-accent">{site.category}</span></span>
                <span>•</span>
                <span><span className="text-primary">Localisation :</span> <span className="text-accent">{site.location}</span></span>
                <span className="ml-auto flex gap-4 text-accent">
                    <button className="hover:underline">Partager</button>
                    <button className="hover:underline">Favoris</button>
                </span>
            </div>

            {/* Galerie */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
                <img
                    src={site.images[0]}
                    alt="textile made in Benin"
                    className="w-full h-80 object-cover rounded-xl md:col-span-2"
                    loading='lazy'
                />
                <div className="grid grid-cols-2 gap-4 px-4 place-items-end lg:border-l-[3px] lg:border-[#e7e6e6db]">
                    <img
                        src={site.images[1]}
                        alt="model made in Benin"
                        className="w-full h-36 object-cover rounded-xl"
                        loading='lazy'
                    />
                    <img
                        src={site.images[2]}
                        alt="textile scene made in Benin"
                        className="w-full h-36 object-cover rounded-xl"
                        loading='lazy'
                    />
                </div>
                <button className="absolute top-6 right-[15%] bg-brown-600 hover:bg-brown-700 text-white p-4 text-base rounded-xl ">
                    Galeries photos
                </button>
            </div>

            {/* Description + Infos */}
            <div className="grid lg:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6">
                    <h2 className="text-xl font-semibold mb-3 text-primary">Description</h2>
                    <p className="text-accent mb-2">{site.description}</p>

                    <h3 className="font-bold text-primary">Produits proposés</h3>
                    <ul className="list-disc list-inside text-accent">
                        <li><span className="font-semibold">Visites guidées</span> : Des guides locaux et des historiens sont souvent présents sur le site pour offrir 
                            des visites détaillées. Ils expliquent l'histoire du lieu, la signification de la porte et le
                             contexte de la traite négrière. Ce sont des services payants qui ne sont pas inclus dans 
                             l'accès au site.
                        </li>
                        <li>
                            <span className="font-semibold">Boutique d'artisanat</span> : Autour du site et le long de la "route des esclaves" à Ouidah, vous trouverez 
                            des vendeurs et des petites boutiques qui proposent des souvenirs, des objets d'artisanat local et
                             d'autres produits.
                        </li>
                        <li>
                            <span className="font-semibold">Restauration</span> : Des stands de nourriture et de petites échoppes sont disponibles près de la plage pour 
                            acheter des rafraîchissements. Il n'y a pas de restaurant sur le site même.
                        </li>
                    </ul>
                </div>

                {/* Sidebar Infos */}
                <div className="bg-white rounded-xl shadow-md p-6 bprder space-y-4 lg:max-h-[80%] ">
                    <div className="mb-3 text-accent">
                        <p className="mb-2">
                            <strong className="font-semibold text-brown-500">Prix : </strong>
                        </p>
                        <p className="">{site.price}</p>
                    </div>
                    <div className="mb-3 text-accent">
                        <p className="mb-2">
                            <strong className="text-brown-500">Horaires d'ouverture :</strong>
                        </p>
                        <p className="mb-2">{site.horaires}</p>
                    </div>
                    <div className="mb-6 text-accent">
                        <div className="mb-2">
                            <p><strong className="text-brown-500">Contact :</strong></p>
                            
                            <p className="mb-2">Whatsapp: {site.contact.whatsapp}</p>
                            
                            <p className="mb-2">Téléphone: {site.contact.tel}</p>
                            
                            <p className="mb-2">Email: {site.contact.email}</p>
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
                        center={site.position as [number, number]}
                        zoom={13}
                        scrollWheelZoom={false}
                        className="h-80 w-full rounded-xl"
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker key={site.id} position={site.position as [number, number]} icon={siteIcon}>
                            <Popup>
                                <div className="max-w-xs truncate overflow-scroll text-ellipsis">
                                    <strong>{site.name}</strong>
                                    <p className="text-sm text-gray-500 mt-1">{site.description}</p>
                                </div>
                            </Popup>
                            <Tooltip direction="top" offset={[0, -10]} opacity={0.9}>
                                <span className="text-sm text-accent">{site.name}</span>
                            </Tooltip>
                        </Marker>
                    </MapContainer>
                </div>
            </section>

            {/* Proximité */}
            <section className="mb-10">
                <h2 className="text-xl font-bold mb-6 text-brown-500">À proximité de ce lieu</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {proximites.map((proximity_item) => (
                        <Link
                            key={proximity_item.id}
                            href={proximity_item.href}
                            className="border bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
                        >
                            <div className="relative h-48 w-full">
                                <Image 
                                    src={proximity_item.image}
                                    alt={proximity_item.title}
                                    fill
                                    className="object-cover rounded-xl p-2"
                                    loading="lazy"
                                />
                            </div>
                            <div className="p-4 space-y-2">
                                <p className="text-xs text-sans text-gray-500 mb-1">
                                    Catégorie : {proximity_item.category}
                                </p>
                                <h3 className="font-semibold text-base text-accent mb-2">{proximity_item.title}</h3>
                                <p className="text-sm text-gray-600 truncate whitespace-nowrap overflow-hidden mb-6"> {proximity_item.description} </p>
                                <hr />
                                <div className="flex justify-between text-base text-accent mt-3">
                                    <span className="text-accent">Durée : {proximity_item.duration}</span>
                                    <span className="text-accent">Distance : {proximity_item.distance}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
