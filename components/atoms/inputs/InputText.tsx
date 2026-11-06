import { useTranslations } from "use-intl";


interface TextInputProps{
    texto: string;
    TextManager: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function TextInput({texto, TextManager}: TextInputProps){

    const t = useTranslations('inputTextArea');

    const area = 'w-full bg-transparent text-zinc-100 placeholder-zinc-500 text-base resize-y outline-none leading-relaxed min-h-[260px]';

    return(
        <textarea placeholder={t('placeholder')} value={texto} onChange={TextManager} className={`${area}`}/>
    );
}