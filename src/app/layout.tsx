// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import 'leaflet/dist/leaflet.css';
import { lusitana } from "./font";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "MVP Poseidon - Tourisme au Bénin",
  description: "Découvrez les merveilles touristiques du Bénin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${lusitana.className} antialiased bg-white text-neutral-900  `}
      >
       
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        
      </body>
    </html>
  );
}