"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { ChevronRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#746358] text-neutral-50">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row md:gap-6 items-center justify-end border-b border-white">
        <h3 className="text-lg md:text-xl font-heading mb-4 md:mb-0 text-white">
          Prêt pour la découverte ?
        </h3>
        <button className="px-6 py-2 bg-neutral-50 text-brown-500 font-medium rounded-md hover:bg-neutral-100 transition">
          S&apos;inscrire
        </button>
      </div>

      {/* Middle section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Newsletter */}
        <div>
          <h4 className="text-base font-semibold mb-4 text-white">
            Abonnez vous à notre newsletter
          </h4>
          <div className="flex items-center border-b border-neutral-200 max-w-sm">
            <input
              type="email"
              placeholder="Adresse Email"
              className="w-full bg-transparent py-2 px-2 text-neutral-50 placeholder-neutral-200 focus:outline-none"
            />
            <button className="bg-neutral-50 text-white px-3 py-2 rounded-md ml-2 hover:bg-neutral-100 transition">
              <ChevronRight size={24} color="#8B5E3C" />
            </button>
          </div>
        </div>

        {/* Liens rapides */}
        <div>
          <h4 className="text-base font-semibold mb-4 text-white">Liens rapides</h4>
          <ul className="space-y-3">
            <li>
              <Link href="/" className="text-white hover:underline hover:text-white">Accueil</Link>
            </li>
            <li>
              <Link href="/sites" className="text-white hover:underline hover:text-white">Sites Touristiques</Link>
            </li>
            <li>
              <Link href="/boutiques" className="text-white hover:underline hover:text-white">Boutiques artisanales</Link>
            </li>
            <li>
              <Link href="/about" className="text-white hover:underline hover:text-white">À propos</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom section */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between border-t border-white">
        <div className="flex space-x-6 text-sm mb-4 md:mb-0">
          <Link href="#" className="text-white hover:text-white hover:underline">
            Termes & Conditions
          </Link>
          <Link href="#" className="text-white hover:text-white hover:underline">
            Politique de confidentialité
          </Link>
        </div>

        <div className="flex space-x-6 text-xl">
          <a href="#" className="text-white hover:text-neutral-200">
            <FaFacebookF />
          </a>
          <a href="#" className="text-white hover:text-neutral-200">
            <FaTwitter />
          </a>
          <a href="#" className="text-white hover:text-neutral-200">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
