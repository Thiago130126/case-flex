export default function Footer(){
    const footer_div = 'w-full bg-zinc-950 border-t border-zinc-800 py-10 mt-12 text-sm text-zinc-400'
    const next = 'text-emerald-400 font-medium';
    const tailwind = 'text-lime-300 font-medium';
    const copy = 'pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500';
    const span_logo = 'text-xl font-bold tracking-tight text-emerald-400';
    const span_logo_2 = 'text-lime-300';
    const div1 = 'max-w-4xl mx-auto px-4 flex flex-col gap-8';
    const div_conteudo = 'flex flex-col sm:flex-row justify-between gap-6';
    const div_paginas = 'flex gap-10 text-xs';
    const div_interna_paginas = 'flex flex-col gap-2';
    const h3 = 'text-emerald-400 font-bold text-base mb-2';
    const h3_span = 'text-lime-300';
    const p = 'max-w-xs text-xs text-zinc-400 leading-relaxed';
    const paginas_links = 'hover:text-emerald-400 cursor-pointer';

    return (
        <footer className={`${footer_div}`}>
            <div className={div1}>

                <div className={div_conteudo}>
                    <div>
                        <h3 className={h3}>
                            Case<span className={h3_span}>Flex</span>
                        </h3>
                        <p className={p}>
                            Utilitário online e rápido para alternar formatos de texto e convenções de nomenclatura de código.
                        </p>
                    </div>

                    <div className={div_paginas}>
                        <div className={div_interna_paginas}>
                            <span className={paginas_links}>Formatos Populares</span>
                            <span className={paginas_links}>camelCase</span>
                            <span className={paginas_links}>snake_Case</span>
                            <span className={paginas_links}>Kebab-Case</span>
                        </div>

                        <div className="flex flex-col gap-2">
                            <span className={span_logo}>
                                Case<span className={span_logo_2}>Flex</span>
                            </span>
                            <span className={paginas_links}>Sobre</span>
                            <span className={paginas_links}>Políticas de Privacidade</span>
                        </div>
                    </div>
                </div>

                <div>
                    <p className={copy}>
                        &copy;2026 CaseFlex. Todos os direitos reservados.
                    </p>
                    <p>
                        Desenvolvido com <span className={next}>Next.js</span> & <span className={tailwind}>Tailwind CSS</span>
                    </p>
                </div>

            </div>
        </footer>
    );
}