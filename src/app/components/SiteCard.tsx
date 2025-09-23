'use client';
import { useState } from "react";
import { Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Site {
    id: number;
    href: string;
    category: string,
    title: string;
    slug: string;
    description: string;
    duration: string;
    distance: string;
    image: string;
}

interface SiteCardProps {
    site: Site;
}
interface Boutique {
    id: number;
    name: string;
    slug: string,
    image: string;
    distance: string;
    description: string;
}

interface BoutiqueCardProps {
    boutique: Boutique;
}
export default function SiteCard({ site } : SiteCardProps) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="flex flex-col md:flex-row items-start gap-4 border rounded-xl p-5 shadow-sm relative bg-white">
      
      <button
        onClick={() => setLiked(!liked)}
        className="absolute top-3 left-3"
      >
        <Heart
          className={`w-5 h-5 ${
            liked ? "text-red-500 fill-red-500" : "text-gray-400"
          }`}
        />
      </button>

      {/* Image site */}
      <Image
        width={500}
        height={300}
        src={site.image}
        alt={site.title}
        className="w-32 h-32 object-cover rounded-xl"
      />

      {/* Détails */}
      <div className="flex-1 ">
        <p className="text-sm text-gray-500">Ville</p>
        <h3 className="text-lg font-semibold">{site.title}</h3>
        <p className="text-sm text-gray-500 mb-3">{site.distance}</p>
        <p className="text-sm text-gray-600">{site.description}</p>

      </div>
      <div className="flex flex-col gap-3 mt-4 lg:px-3 lg:border-l-[3px] lg:border-[#e7e6e6db]">
        <button
          className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
            liked
              ? "bg-red-100 text-red-600 border border-red-400"
              : "bg-red-500 text-white"
          }`}
          onClick={() => setLiked(!liked)}
        >
          {liked ? "Retirer des favoris" : "Ajouter aux favoris"}
        </button>

        <button className="px-4 py-2 rounded-lg border text-sm font-medium whitespace-nowrap">
          Ajouter à un itinéraire
        </button>

        <Link href={`sites/${site.slug}`} className="px-4 py-2 rounded-lg bg-brown-600 text-white text-center text-sm hover:border-brown-500 hover:bg-brown-50 font-medium whitespace-nowrap transition">
          Voir détails
        </Link>
      </div>
    </div>
  );
}
