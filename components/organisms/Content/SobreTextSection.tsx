import ArticleBlock from "@/components/molecules/content/ArticleBlock";
import FeatureList from "@/components/molecules/content/FeatureList";
import { getTranslations } from "next-intl/server";

export default async function SobreTextSection(){
    const t = await getTranslations("sobre_text");

    const diferenciais = [
        {
            title: t("diferenciais.t1"),
            description: t("diferenciais.d1")
        },
        {
            title: t("diferenciais.t2"),
            description: t("diferenciais.d2")
        },
        {
            title: t("diferenciais.t3"),
            description: t("diferenciais.d3")
        },
        {
            title: t("diferenciais.t4"),
            description: t("diferenciais.d4")
        }
    ];

    const section = 'w-full max-w-3xl mx-auto px-4 py-12 space-y-12';

    return(
        <section className={section}>

            <ArticleBlock badge={t("badge")} title={t("title")}>
                <p>
                    {t("p1_start")} <strong>{t("p1_strong")}</strong> {t("p1")}
                </p>
                <p>
                    {t("p2")}
                </p>
                
            </ArticleBlock>

            <ArticleBlock title={t("title2")}>

                <FeatureList items={diferenciais}/>
                
            </ArticleBlock>

            <ArticleBlock title={t("title3")}>
                <p>
                    {t("aprendizados")}
                </p>
            </ArticleBlock>
        </section>
    );
}