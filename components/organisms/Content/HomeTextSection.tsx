import InfoCard from "@/components/molecules/content/InfoCard";
import { getTranslations } from "next-intl/server";

export default async function HomeTextSection(){

    const t = await getTranslations("home_text_section");

    const cards = [
        {
            title: t("card1.title"),
            description: t("card1.description")
        },
        {
            title: t("card2.title"),
            description: t("card2.description")
        },
        {
            title: t("card3.title"),
            description: t("card3.description")
        }
    ];

    const section = 'w-full max-w-4xl mx-auto px-4 py-12 border-t border border-zinc-800';
    const title_paragraph_div = 'mb-8';
    const h2 = 'text-2xl sm:text-3xl font-bold text-white mb-3';
    const span = 'text-emerald-400';
    const p = 'text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl';
    const map_card = 'grid grid-cols-1 md:grid-cols-3 gap-4';

    return(
        <section className={section}>
            <div className={title_paragraph_div}>
                <h2 className={h2}>
                    {t("h2_star")} <span className={span}>{t("h2_span")}</span>{t("h2_end")}
                </h2>
                <p className={p}>
                    {t('p_sobre')}
                </p>
            </div>

            <div className={map_card}>
                {cards.map((card) => (
                    <InfoCard key={card.title} {...card}/>
                ))}
            </div>
        </section>
    );
}