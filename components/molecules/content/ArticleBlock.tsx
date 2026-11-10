interface ArticleProps{
    badge?: string;
    title: string;
    children: React.ReactNode;
}

export default function ArticleBlock({badge, title, children}: ArticleProps){
    const article = 'space-y-4';
    const span_badge = 'inline-block px-2.5 py-1 text-xs font-semibold uppercase tracking-wider rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20';
    const h2 = 'text-2xl sm:text-3xl font-bold text-white tracking-tight';
    const div_children = 'text-zinc-300 text-sm sm:text-base leading-relaxed space-y-3';

    return(
        <article className={article}>
            {badge && (
                <span className={span_badge}>
                    {badge}
                </span>
            )}

            <h2 className={h2}>
                {title}
            </h2>

            <div className={div_children}>
                {children}
            </div>
        </article>
    );
}