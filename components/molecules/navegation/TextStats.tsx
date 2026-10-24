import { contadorCaracteres } from "@/utils/contadorCaracteres";
import { ContadorPalavras } from "@/utils/contadorPalavras";

interface StatusTextoProps{
    texto: string;
}

export default function StatusTexto({texto}: StatusTextoProps){
    const container = 'flex gap-6 text-sm text-zinc-400';
    const span_contador = 'font-semibold text-lime-200'

    return (
        <div className={`${container}`}>
            <p>Caracteres: <span className={`${span_contador}`}>{contadorCaracteres(texto)}</span></p>
            <p>Palavras: <span className={`${span_contador}`}>{ContadorPalavras(texto)}</span></p>
        </div>
    );
}