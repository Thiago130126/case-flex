import Link from "next/link";

export default function Header(){

    const header_div = 'w-full bg-zinc-800/90 border-b border-zinc-700/60 backdrop-blur-sm sticky top-0 z-50';
    const div1 = 'max-w-4xl mx-auto px-4 h-16 flex items-center justify-between';
    const link = 'flex items-center gap-2 group';
    const span_logo = 'text-xl font-bold tracking-tight text-emerald-400 group-hover:text-emerald-300 transition-colors';
    const span_logo_2 = 'text-lime-300 hover:text-lime-200';

    const links_navegacao = 'flex items-center gap-4 text-sm font-medium text-zinc-300';
    const link_inicio = 'hover:text-lime-300 transition-colors'
    const ponto = 'text-zinc-500';
    const resto_links = 'text-zinc-500 cursor-not-allowed';

    return(
        <header className={header_div}>
            <div className={div1}>
                <Link href={'/'} className={link}>
                    <span className={span_logo}>
                        Case<span className={span_logo_2}>Flex</span>
                    </span>
                </Link>

                <nav className={links_navegacao}>
                    <Link href={'/'} className={link_inicio}>Inicio</Link>
                    <span className={ponto}>•</span>
                    <span className={resto_links}>
                        Sobre (em breve)
                    </span>
                </nav>
            </div>
        </header>
    );
}