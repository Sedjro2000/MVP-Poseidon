'use client';

import { useMemo, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet'
import L from 'leaflet'

type Place = {
  id: string
  lat: number
  lng: number
  type: 'site' | 'boutique'
  title: string
  description?: string
}

// Exemple de données 
const SAMPLE_PLACES: Place[] = [
  {
    id: 's1',
    lat: 6.3688,
    lng: 2.3912,
    type: 'site',
    title: 'Place de l\'Étoile Rouge',
    description: 'Une place emblématique de Cotonou avec des monuments historiques.',
  },
  {
    id: 's2',
    lat: 6.3533,
    lng: 2.4047,
    type: 'site',
    title: 'Fondation Zinsou',
    description: 'Centre d\'art contemporain avec des expositions temporaires.',
  },
  {
    id: 's3',
    lat: 6.3626,
    lng: 2.3971,
    type: 'site',
    title: 'Marché Dantokpa',
    description: 'L\'un des plus grands marchés d\'Afrique de l\'Ouest, un lieu vivant et coloré.',
  },

  
  {
    id: 's4',
    lat: 6.4258,
    lng: 2.4419,
    type: 'site',
    title: 'Musée de la Porte du Non-Retour',
    description: 'À Ouidah, un mémorial poignant de la traite négrière.',
  },
  {
    id: 's5',
    lat: 9.3090,
    lng: 1.6210,
    type: 'site',
    title: 'Parc National de la Pendjari',
    description: 'Réserve de la biosphère et l\'un des parcs les plus riches en faune d\'Afrique de l\'Ouest.',
  },
  {
    id: 's6',
    lat: 9.6974,
    lng: 1.6852,
    type: 'site',
    title: 'Tata Somba',
    description: 'Habitations traditionnelles du peuple Somba, un site classé au patrimoine mondial de l\'UNESCO.',
  },

 
  {
    id: 'b1',
    lat: 6.3550,
    lng: 2.3950,
    type: 'boutique',
    title: 'Centre artisanal',
    description: 'Boutique proposant des créations locales : poterie, textile et sculptures.',
  },
  {
    id: 'b2',
    lat: 6.3650,
    lng: 2.4020,
    type: 'boutique',
    title: 'Le Palais des Tissus',
    description: 'Spécialiste du tissu et des habits locaux.',
  },
  {
    id: 'b3',
    lat: 6.3720,
    lng: 2.3900,
    type: 'boutique',
    title: 'Atelier de vannerie',
    description: 'Objets tressés en fibres végétales.',
  },
];

// Création d'une icône SVG personnalisée (pin) via divIcon
function createPinIcon(color = '#F97316') {
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

const siteIcon = createPinIcon('#F97316')     // orange (site touristique)
const boutiqueIcon = createPinIcon('#8B5E3C') // brun (boutique artisanale)

export default function MapSection() {
  
  const [showSites, setShowSites] = useState(true)
  const [showBoutiques, setShowBoutiques] = useState(true)

  // centre cotonou [6.3703, 2.3912]
  const center: [number, number] =  [6.3703, 2.3912]

  // données filtrées
  const places = useMemo(
    () => SAMPLE_PLACES.filter(p => (p.type === 'site' ? showSites : showBoutiques)),
    [showSites, showBoutiques]
  )

  return (
    <section className="relative mx-auto max-w-6xl px-4 py-12">
      <div className="text-center mb-6 mt-6">
        <h2 className="text-2xl md:text-3xl text-bold font-heading text-amber-800">Votre aventure commence ici</h2>
        <p className="text-sm md:text-base text-neutral-600 max-w-3xl mx-auto mt-3">
          Naviguez sur la carte pour repérer les sites incontournables, <span className="text-primary">activités et trésors cachés</span>.
        </p>
      </div>

      {/* Barre de filtres (pills) */}
      <div className="lg:absolute lg:-top-3 lg:left-1/2 lg:-translate-x-1/2 flex justify-center mb-6">
        <div className="inline-flex items-center gap-3 bg-white rounded-full px-3 py-2 shadow-card border border-black/5">
          
          <div className="flex items-center gap-3 px-2">
            <div className="w-10 h-10 rounded-full bg-white border border-black/5 flex items-center justify-center shadow-sm">
              
              <div className="w-6 h-6 rounded-full bg-neutral-100" />
            </div>
            <div className="text-left">
              <div className="text-xs font-medium">zone géographique</div>
              <div className="text-[12px] text-neutral-500">Choisissez la région</div>
            </div>
          </div>

          {/* Filtre de site/boutique au clic */}
          <button
            onClick={() => setShowSites(s => !s)}
            className={`flex items-center gap-3 px-3 py-2 rounded-full transition ${showSites ? 'bg-orange-50' : 'bg-transparent'}`}
          >
            <div className="w-3 h-3 rounded-full bg-orange-500" />
            <div className="text-xs">Site touristique</div>
          </button>

          <button
            onClick={() => setShowBoutiques(s => !s)}
            className={`flex items-center gap-3 px-3 py-2 rounded-full transition ${showBoutiques ? 'bg-amber-50' : 'bg-transparent'}`}
          >
            <div className="w-3 h-3 rounded-full" style={{backgroundColor: '#8B5E3C'}} />
            <div className="text-xs">Artisanat</div>
          </button>

          <button className="ml-2 px-4 py-2 rounded-full bg-primary text-white text-sm">Filtrer</button>
        </div>
      </div>

      {/* Carte */}
      <div className="rounded-xl overflow-hidden shadow-card border border-black/5">
        <div className="h-[60vh] w-full">
          <MapContainer center={center} zoom={12} scrollWheelZoom={false} className="h-full w-full">
            {/* tuiles OpenStreetMap  */}
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* markers */}
            {places.map(p => (
              <Marker
                key={p.id}
                position={[p.lat, p.lng]}
                icon={p.type === 'site' ? siteIcon : boutiqueIcon}
              >
                <Popup>
                  <div className="max-w-xs">
                    <strong>{p.title}</strong>
                    <p className="text-sm text-neutral-500 mt-1">{p.description}</p>
                  </div>
                </Popup>
                <Tooltip direction="top" offset={[0, -10]} opacity={0.9}>
                  <span className="text-sm">{p.title}</span>
                </Tooltip>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </section>
  )
}
