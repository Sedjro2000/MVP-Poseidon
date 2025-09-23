'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import MobileDrawer from "./MobileDrawer";

const navItems = [
    { href: '/', label: 'Accueil' },
    { href: '/sites', label: 'Sites touristiques' },
    { href: '/boutiques', label: 'Artisanat et boutiques' },
    { href: '/ville', label: 'Villes' },
]

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    // Fermeture du menu avec la touche echap
    useEffect(() => {
        const onkey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setOpen(false)
        }
        window.addEventListener('keydown', onkey)
        return () => window.removeEventListener('keydown', onkey)
    }, [])

    return (
        <header className="sticky shadow-nav bg-white top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 dark:bg-neutral-900/80 border-b border-black/5 dark-white/10 ">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="font-semibold text-lg tracking-tight">
                    <span className="text-brand-600">Trésors</span><span className="text-neutral-800 dark:text-neutral-100"> du Bénin</span>
                </Link>

                
                <nav className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={
                                `relative whitespace-nowrap text-lg font-medium text-neutral-700 dark:text-neutral-200 transition
                                after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-secondary after:transition-all after:duration-300
                                ${pathname === item.href ? 'after:w-full text-secondary' : 'hover:after:w-full'}`
                            }
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link
                        href="#"
                        className="whitespace-nowrap inline-flex items-center rounded-[50px] px-4 py-2 text-lg text-white font-medium bg-primary hover:bg-white hover:text-primary hover:border-2 hover:border-solid hover:border-primary transition duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                        Mon espace
                    </Link>
                </nav>


                {/* Bouton hamburger (mobile) */}
                <button
                    aria-label="Ouvrir le menu"
                    aria-haspopup="dialog"
                    aria-expanded={open}
                    onClick={() => setOpen(true)}
                    className="md:hidden inline-flex items-center justify-center rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-brand-500"
                >
                    {/* Icône hamburger en SVG (sans dépendances) */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </button>
            </div>
            <MobileDrawer open={open} onClose={() => setOpen(false)} items={navItems} />
        </header>
    )
}