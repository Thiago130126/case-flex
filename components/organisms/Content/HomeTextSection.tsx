import InfoCard from "@/components/molecules/content/InfoCard";

export default function HomeTextSection(){

    const cards = [
        {
            title: "Por que existem?",
            description: 
                "Em linguagens de programação, nomes de variáveis, funções e arquivos não podem conter espaços. As convenções de nomenclatura foram criadas para manter o código legível e padronizado."
        },
        {
            title: "Código vs. Web",
            description:
                "Diferentes ambientes exigem estilos diferentes. Enquanto APIs e bancos de dados usam formatos como snake_case, URLs na web costumam exigir kebab-case ou slugify para SEO amigável.",
        },
        {
            title: "Padronização de Equipe",
            description:
                "Cada linguagem adota um padrão de mercado (ex: JavaScript prefere camelCase, Python usa snake_case). Respeitar essas convenções evita bugs e facilita a leitura em equipe.",
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
                    O que são <span className={span}>Cases</span> de texto?
                </h2>
                <p className={p}>
                    "Cases" são convenções e regras de formatação para combinar palavras sem usar espaços simples, garantindo clareza sintática e estética em código-fonte, banco de dados e sistemas digitais.
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