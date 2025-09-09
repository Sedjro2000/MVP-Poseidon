'use client'

import Link from 'next/link'
import { useEffect } from 'react'


type Item = { href: string; label: string }


export default function MobileDrawer({
    open,
    onClose,
    items,
}: {
    open: boolean
    onClose: () => void
    items: Item[]
}) {

    // On empêche le scroll du body quand le menu est ouvert
    useEffect(() => {
        if (open) {
            document.documentElement.style.overflow = 'hidden'
        } else {
            document.documentElement.style.overflow = ''
        }
        return () => {
            document.documentElement.style.overflow = ''
        }
    }, [open])


    return (
        <div aria-hidden={!open} aria-modal className="md:hidden">
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={onClose}
            />


            {/* Panneau latéral gauche */}
            <aside
                role="dialog"
                aria-label="Menu"
                className={`fixed inset-y-0 left-0 z-50 w-72 max-w-[85%] bg-neutral-50 dark:bg-neutral-900 shadow-2xl border-r border-black/10 dark:border-white/10 transform transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="h-16 px-4 flex items-center justify-between border-b border-black/5 dark:border-white/10">
                    <span className="font-semibold">Trésors du Bénin</span>
                    <button
                        aria-label="Fermer le menu"
                        onClick={onClose}
                        className="rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-brand-500"
                    >
                        {/* Icône croix */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </button>
                </div>


                <nav className="bg-neutral-50 dark:bg-neutral-900 shadow-2xl border-r border-black/10 dark:border-white/10 px-2 py-4 space-y-1">
                    {items.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={onClose}
                            className="block rounded-lg px-3 py-2 text-lg font-medium text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                        >
                            {item.label}
                        </Link>
                    ))}


                    <div className="px-2 pt-4">
                        <Link
                            href="#"
                            onClick={onClose}
                            className="inline-flex w-full items-center justify-center rounded-xl px-4 py-2 font-medium shadow focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                            Mon espace
                        </Link>
                    </div>
                </nav>
            </aside>
        </div>
    )
}