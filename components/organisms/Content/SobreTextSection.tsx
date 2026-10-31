import ArticleBlock from "@/components/molecules/content/ArticleBlock";
import FeatureList from "@/components/molecules/content/FeatureList";

export default function SobreTextSection(){
    const diferenciais = [
        {
            title: '100% Client-Side',
            description: 'Seus textos nunca saem do seu navegador. Não há envio para servidores externos.'
        },
        {
            title: "Privacidade e Persistência",
            description: "Uso de sessionStorage para você não perder seu texto ao alternar abas acidentalmente."
        },
        {
            title: "Desenvolvimento Contínuo",
            description: "Construído com Next.js, React e Tailwind CSS com arquitetura modular."
        },
        {
            title: "Focado em Devs & Criadores",
            description: "Feito para acelerar a formatação de variáveis, constantes e slugs para a web."
        }
    ];

    const section = 'w-full max-w-3xl mx-auto px-4 py-12 space-y-12';

    const badge = 'O Projeto';
    const title = 'O que é o Case Flex';

    return(
        <section className={section}>

            <ArticleBlock badge={badge} title={title}>
                <p>
                    O <strong>CaszeFlex</strong> foi criado por um dev solo, afim de afiar suas habilidades em NextJS, React, Internacionalização, SEO e colocar projetos no ar.
                </p>
                <p>
                    Esse projeto, é o meu terceiro projeto próprio criado, em busca de me tornar um dev melhor.
                </p>

                <FeatureList items={diferenciais}/>
            </ArticleBlock>
        </section>
    );
}