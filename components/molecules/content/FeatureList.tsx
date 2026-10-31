interface FeatureListProps{
    items: {title: string; description: string}[];
}

export default function FeatureList({items}: FeatureListProps){
    const div1 = 'grid sm:grid-cols-2 gap-4 mt-6';
    const div2 = 'bg-zinc-800/40 border border-zinc-700/50 rounded-xl p-4';
    const div3 = 'flex items-center gap-2 mb-1.5';
    const span = 'w-2 h-2 rounded-full bg-lime-300';
    const h4 = 'font-semibold text-white text-sm';
    const p = 'text-xs text-zinc-400 leading-relaxed';

    return (
        <div className={div1}>
            {items.map((item, idx) => (
                <div key={idx} className={div2}>
                    <div className={div3}>
                        <span className={span}/>
                        <h4 className={h4}>
                            {item.title}
                        </h4>
                    </div>
                    <p className={p}>
                        {item.description}
                    </p>
                </div>
            ))}
        </div>
    );
}