'use client';

import { Link, usePathname } from "@/i18n/routes";
import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "use-intl";
import LanguageSwitcher, { active_button } from "../molecules/navegation/LanguageSwitcher";

export default function Header(){

    const pathname = usePathname();

    const t = useTranslations('header');

    const [isOpen, setIsOpen] = useState(false);

    const header_div = 'w-full bg-zinc-800/90 border-b border-zinc-700/60 backdrop-blur-sm sticky top-0 z-50';
    const div1 = 'max-w-4xl mx-auto px-4 h-16 flex items-center justify-between';

    const link = 'flex items-center gap-2 group';

    const links_navegacao = 'flex items-center gap-4 text-sm font-medium text-zinc-300';
    const link_inicio = 'hover:text-lime-300 transition-colors'
    const ponto = 'text-zinc-500';
    const links_em_desenvolvimento = 'text-zinc-500 cursor-not-allowed';

    // Desktop
    const nav_desktop = 'hidden md:flex items-center gap-5 text-sm font-medium text-zinc-300';
    const link_desktop = 'hover:text-lime-300 transition-colors';

    // Mobile
    const btn_hamburguer = 'md:hidden p-2 rounded-lg text-zinc-400 hover:text-lime-300 hover:bg-zinc-700/50 transition-colors focus:outline-none';
    const menu_mobile = 'md:hidden px-4 pt-2 pb-5 space-y-2 text-zinc-300 border-t border-zinc-700/50 bg-zinc-800/95 backdrop-blur-md animate-in slide-in-from-top duration-200';
    const link_mobile = 'block py-2 px-3 rounded-md text-base font-medium hover:text-lime-300 hover:bg-zinc-700/40 transition-colors';

    const svg = 'w-6 h-6';

    return(
        <header className={header_div}>
            <div className={div1}>
                <Link href={'/'} className={link}>
                    <Image src='/caseflex-logo.png' width={180} height={180} alt="Logo"/>
                </Link>

                <nav className={nav_desktop}>
                    <Link href={'/'} className={`${link_desktop} ${pathname === '/' ? active_button : ''}`}>
                        {t("home")}
                    </Link>
                    <span className={ponto}>•</span>
                    <Link href={'/sobre'} className={`${link_desktop} ${pathname === '/sobre' ? active_button : ''}`}>
                        {t("sobre")}
                    </Link>
                </nav>

                <button
                    type="button"
                    aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
                    onClick={() => setIsOpen(!isOpen)}
                    className={btn_hamburguer}
                >
                    {isOpen ? (
                        <svg className={svg} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    ) : (
                        <svg className={svg} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    )}
                </button>

                <LanguageSwitcher/>
            </div>

            {isOpen && (
                <nav className={menu_mobile}>
                    <Link href={'/'} className={`${link_mobile} ${pathname === '/' ? active_button : ''}`} onClick={() => setIsOpen(false)}>
                        {t("home")}
                    </Link>
                    <Link href={'/sobre'} className={`${link_mobile} ${pathname === '/sobre' ? active_button : ''}`} onClick={() => setIsOpen(false)}>
                        {t("sobre")}
                    </Link>
                </nav>
            )}
        </header>
    );
}