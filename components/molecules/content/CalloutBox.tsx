interface CalloutProps{
    title?: string;
    children: React.ReactNode;
}

export default function CalloutBox({ title, children }: CalloutProps){

    const container = 'my-6 p-4 md:p-5 rounded-r-xl border-l-4 border-lime-400 bg-zinc-900/80 border-y border-r border-zinc-800/80 shadow-sm';
    const title_style = 'text-xs md:text-sm font-semibold tracking-wider uppercase text-lime-300 mb-2';
    const content_style = 'text-sm md:text-base text-zinc-300 leading-relaxed italic';

    return(
        <aside className={container}>
            {title && <h4 className={title_style}>{title}</h4>}
            <div className={content_style}>
                {children}
            </div>
        </aside>
    );
}