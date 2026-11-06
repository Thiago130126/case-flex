import { contadorCaracteres } from "@/utils/contadorCaracteres";
import { ContadorPalavras } from "@/utils/contadorPalavras";
import { useTranslations } from "next-intl";

interface StatusTextoProps{
    texto: string;
}

export default function StatusTexto({texto}: StatusTextoProps){
    const container = 'flex gap-6 text-sm text-zinc-400';
    const span_contador = 'font-semibold text-lime-200'

    const t = useTranslations("textStats");

    return (
        <div className={`${container}`}>
            <p>{t("caracteres")}: <span className={`${span_contador}`}>{contadorCaracteres(texto)}</span></p>
            <p>{t("palavras")}: <span className={`${span_contador}`}>{ContadorPalavras(texto)}</span></p>
        </div>
    );
}