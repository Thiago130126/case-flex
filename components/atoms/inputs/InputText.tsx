interface TextInputProps{
    texto: string;
    TextManager: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function TextInput({texto, TextManager}: TextInputProps){

    const area = 'w-full bg-transparent text-zinc-100 placeholder-zinc-500 text-base resize-y outline-none leading-relaxed';

    return(
        <textarea placeholder="Digite seu texto aqui..." value={texto} onChange={TextManager} className={`${area}`}/>
    );
}