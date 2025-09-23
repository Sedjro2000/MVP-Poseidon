import BoutiqueCard from "../components/BoutiqueCard";
import Link from "next/link";

const boutiques = [
  {
    id: 1,
    name: "Atelier tissage d'Abomey",
    slug: "atelier-tissage-abomey",
    image: "/assets/boutiques/garment.png",
    distance: "À 45.5km",
    description: "Plongez au coeur du savoir-faire béninois avec l'atelier Tissage d'Abomey. Depuis plusieurs générations, cette boutique familiale perpétue la tradition du pagne tissé à la main."
  },
  {
    id: 2,
    name: "Atelier tissage d'Abomey",
    slug: "atelier-tissage",
    image: "/assets/boutiques/people_textile.png",
    distance: "À 45.5km",
    description: "Plongez au coeur du savoir-faire béninois avec l'atelier Tissage d'Abomey. Depuis plusieurs générations, cette boutique familiale perpétue la tradition du pagne tissé à la main."
  },
  {
    id: 3,
    name: "Atelier tissage d'Abomey",
    slug: "atelier-tissage-abomey",
    image: "/assets/boutiques/textile_two.jpeg",
    distance: "À 45.5km",
    description: "Plongez au coeur du savoir-faire béninois avec l'atelier Tissage d'Abomey. Depuis plusieurs générations, cette boutique familiale perpétue la tradition du pagne tissé à la main."
  },
  {
    id: 4,
    name: "Atelier tissage d'Abomey",
    slug: "atelier-tissage-abomey",
    image: "/assets/boutiques/poterie_two.jpeg",
    distance: "À 45.5km",
    description: "Plongez au coeur du savoir-faire béninois avec l'atelier Tissage d'Abomey. Depuis plusieurs générations, cette boutique familiale perpétue la tradition du pagne tissé à la main."
  },
  {
    id: 5,
    name: "Atelier tissage d'Abomey",
    slug: "atelier-tissage-abomey",
    image: "/assets/boutiques/textile_three.jpeg",
    distance: "À 45.5km",
    description: "Plongez au coeur du savoir-faire béninois avec l'atelier Tissage d'Abomey. Depuis plusieurs générations, cette boutique familiale perpétue la tradition du pagne tissé à la main."
  },

];

export default function Boutiques() {
  return (
    <div className="container mx-auto px-6 py-10">
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
                        <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Boutique Artisanal</span>
                    </div>
                </li>
            </ol>
        </nav>

      <h1 className="text-2xl text-accent font-bold mb-8">
        Voir les boutiques artisanales
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Sidebar gauche */}
        <aside className="col-span-2 border rounded-xl p-5 bg-white shadow-sm ">
          <h2 className="text-sm font-semibold mb-3">Vos préférences</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <input type="checkbox" /> Bijoux & accessoires
            </li>
            <li>
              <input type="checkbox" /> Textile & mode
            </li>
            <li>
              <input type="checkbox" /> Poterie & céramique
            </li>
            <li>
              <input type="checkbox" /> Ébénisterie & rotin
            </li>
            <li>
              <input type="checkbox" /> Souvenirs & objets décoratifs
            </li>
          </ul>
        </aside>

        {/* Liste boutiques */}
        <main className="col-span-9 space-y-6">
            <p className="font-base text-accent"> {`${boutiques.length} résultats`} </p>
          {boutiques.map((boutique_item) => (
            <BoutiqueCard key={boutique_item.id} boutique={boutique_item} />
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
