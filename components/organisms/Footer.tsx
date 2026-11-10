import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function Footer(){

    const t = await getTranslations('footer');

    const footer_div = 'w-full bg-zinc-950 border-t border-zinc-800 py-10 mt-12 text-sm text-zinc-400';
    const next = 'text-emerald-400 font-medium';
    const tailwind = 'text-lime-300 font-medium';
    const copy = 'pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500';
    const line = 'border-t border-zinc-800/80';
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
    const version = 'font-medium text-emerald-200';

    return (
        <footer className={`${footer_div}`}>
            <div className={div1}>

                <div className={div_conteudo}>
                    <div>
                        <h3 className={h3}>
                            {t("h3")}<span className={h3_span}>{t("h3_span")}</span>
                        </h3>
                        <p className={p}>
                            {t("pequeno_texto")}
                        </p>
                    </div>

                    <div className={div_paginas}>
                        <div className={div_interna_paginas}>
                            <span className={span_logo}>{t("title_column2")}</span>
                            <span className={paginas_links}>camelCase</span>
                            <span className={paginas_links}>snake_Case</span>
                            <span className={paginas_links}>Kebab-Case</span>
                            <span className={paginas_links}>Slugify</span>
                        </div>

                        <div className="flex flex-col gap-2">
                            <span className={span_logo}>
                                {t("h3")}<span className={span_logo_2}>{t("h3_span")}</span>
                            </span>
                            <span className={paginas_links}>{t("link_sobre")}</span>
                            <span className={paginas_links}>{t("link_politica-privacidade")}</span>
                            <span className={paginas_links}>Boring Site</span>
                            <span className={paginas_links}>{t("link_conversor_case")}</span>
                        </div>
                    </div>
                </div>

                <div className={`${div_conteudo} ${line}`}>
                    <div>
                        <p className={copy}>
                            &copy;{t("copy")}
                        </p>
                        <p>
                            {t("dev")} <Link href={'https://nextjs.org/'} target="_blank" className={next}>{t("next")}</Link> & <Link href={'https://tailwindcss.com/'} target="_blank" className={tailwind}>{t("tailwind")}</Link>
                        </p>
                    </div>
                    
                    <div>
                        <p className={`${copy}`}>
                            <span className={version}>
                                {process.env.NEXT_PUBLIC_VERSION}
                            </span>
                        </p>
                    </div>

                </div>
            </div>
        </footer>
    );
}