import Image from "next/image";
import Hero from "./components/Hero";
import MapSection from "./components/MapSection";
import SitesTouristiquesSection from "./components/SitesTouristiquesSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <MapSection />
      <SitesTouristiquesSection />
    </main>
  );
}
