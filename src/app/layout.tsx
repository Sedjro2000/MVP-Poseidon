// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'leaflet/dist/leaflet.css';
import { lusitana } from "./font";
import Navbar from "./components/Navbar";
import ConvexClientProvider from "./providers/ConvexClientProvider";

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
    <html lang="fr">
      <body
        className={`${lusitana.className} antialiased bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100`}
      >
        <ConvexClientProvider>
          <Navbar />
          <main>
            {children}
          </main>
        </ConvexClientProvider>
      </body>
    </html>
  );
}