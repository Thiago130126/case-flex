import { contadorCaracteres } from "@/utils/contadorCaracteres";
import { ContadorPalavras } from "@/utils/contadorPalavras";

interface StatusTextoProps{
    texto: string;
}

export default function StatusTexto({texto}: StatusTextoProps){
    return (
        <div>
            <p>Quantidade de caracteres: {contadorCaracteres(texto)}</p>
            <p>Quantidade de palavras: {ContadorPalavras(texto)}</p>
        </div>
    );
}