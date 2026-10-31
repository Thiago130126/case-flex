interface InfoCardProps{
    title: string;
    description: string;
}

export default function InfoCard({title, description}: InfoCardProps){

    const InfoCard = 'bg-zinc-800/60 border border-zinc-700/50 rounded-xl p-5 hover:border-emerald-500/40 transition-colors';
    const h3 = 'text-lg font-semibold text-emerald-400 mg-2';
    const p = 'text-sm text-zinc-300 leading-relaxed mb-3';

    return(
        <div className={InfoCard}>
            <h3 className={h3}>
                {title}
            </h3>

            <p className={p}>
                {description}
            </p>
        </div>
    );
}