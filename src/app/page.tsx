'use client'; // ← transforme ce composant en Client Component

import dynamic from "next/dynamic";
import Hero from "./components/Hero";
import SitesTouristiquesSection from "./components/SitesTouristiquesSection";

// MapSection dynamique côté client
const MapSection = dynamic(() => import("./components/MapSection"), { ssr: false });

export default function Home() {
  return (
    <main>
      <Hero />
      <MapSection />
      <SitesTouristiquesSection />
    </main>
  );
}
