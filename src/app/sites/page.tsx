import SiteCard from "../components/SiteCard";
import Link from "next/link";

const sites = [
   {
    id: 1,
    href: 'ganvie-la-cite-lacustre',
    category: "Culturel",
    title: "Ganvié, la cité lacustre",
    slug: "ganvie-cite-lacustre",
    description: "Surnommée la « Venise de l&apos;Afrique », Ganvié est une ville sur pilotis construite au XVIIe siècle au milieu du lac Nokoué par le peuple Tofinu.",
    duration: "2 jours",
    distance: "15km",
    image: "/assets/sites/ganvie_benin_village_lacustre.jpg"
  },
  {
    id: 2,
    href: "place-de-l-amazone",
    category: "Culturel",
    title: "Place de l'Amazone",
    slug: "place-de-l-amazone",
    description: "Une place emblématique à Cotonou, dominée par la statue monumentale de l&apos;Amazone, symbolisant la bravoure des femmes guerrières du Dahomey.",
    duration: "1/2h",
    distance: "2025,8 m",
    image: "/assets/sites/place_amazone.jpeg"
  },
  {
    id: 3,
    href: 'temple-des-pythons',
    category: "Naturel",
    title: "Temple des pythons",
    slug: "temple-des-pythons",
    description: "Point culminant du Bénin",
    duration: "2 jours",
    distance: "30km",
    image: "/assets/sites/temple-pythons.jpg",
  },
  {
    id: 4,
    href: 'musee-fondation-zinsou',
    category: "Culturel",
    title: "Musée de la Fondation Zinsou",
    slug: "musee-de-la-fondation-zinsou",
    description: "Un centre d&apos;art contemporain et de la culture béninoise à Cotonou, présentant des expositions d&apos;artistes africains et internationaux.",
    duration: "2h",
    distance: "15km",
    image: "/assets/sites/musee_zinsou.jpg"
  },
  {
    id: 5,
    href: 'la-porte-du-non-retour',
    category: "Culturel",
    title: "La Porte du Non-Retour",
    slug: "la-porte-du-non-retour",
    description: "Située à Ouidah, cette arche monumentale commémore le lieu où les esclaves étaient embarqués pour être déportés vers l&apos;Amérique.",
    duration: "1h",
    distance: "40km",
    image: "/assets/sites/door_no_return.jpeg"
  },

];

export default function Boutiques() {
  return (
    <div className="container max-w-6xl mx-auto px-6 py-10">
        <nav className="flex mb-3" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li className="inline-flex items-center">
                    <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-secondary dark:text-gray-400 dark:hover:text-white">
                        <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                        </svg>
                        Accueil
                    </Link>
                </li>
                <li aria-current="page">
                    <div className="flex items-center">
                        <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Sites touristiques</span>
                    </div>
                </li>
            </ol>
        </nav>

      <h1 className="text-2xl text-accent font-bold mb-8">
        Voir les sites touristiques
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Sidebar gauche */}
        <aside className="col-span-2 border lg:max-h-[21%] rounded-xl p-5 bg-white shadow-sm ">
          <h2 className="text-sm font-semibold mb-3">Vos préférences</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <input type="checkbox" /> Historique
            </li>
            <li>
              <input type="checkbox" /> Culturel
            </li>
            <li>
              <input type="checkbox" /> Naturel
            </li>
            <li>
              <input type="checkbox" /> Réligieux
            </li>
          </ul>
        </aside>

        {/* Liste boutiques */}
        <main className="col-span-9 space-y-6">
            <p className="font-base text-accent"> {`${sites.length} résultats`} </p>
          {sites.map((site_item) => (
            <SiteCard key={site_item.id} site={site_item} />
          ))}

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {[1, 2, 3, 4, 5].map((page, i) => (
              <button
                key={i}
                className={`w-8 h-8 flex items-center justify-center rounded-full border text-sm ${
                  page === 1
                    ? "bg-brown-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
