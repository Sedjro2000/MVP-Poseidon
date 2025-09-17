'use client';

import dynamic from "next/dynamic";
import Hero from "./components/Hero";
import SitesTouristiquesSection from "./components/SitesTouristiquesSection";
import BoutiquesSection from "./components/BoutiquesSection";
import AboutSection from "./components/AboutSection";

// MapSection dynamique côté client
const MapSection = dynamic(() => import("./components/MapSection"), { ssr: false });

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <MapSection />
      <SitesTouristiquesSection />
      <BoutiquesSection />
    </main>
  );
}
