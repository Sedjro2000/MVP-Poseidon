import Image from "next/image";
import Hero from "./components/Hero";
import MapSection from "./components/MapSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <MapSection />
    </main>
  );
}
