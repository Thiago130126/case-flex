import { contadorCaracteres } from "@/utils/contadorCaracteres";
import { ContadorPalavras } from "@/utils/contadorPalavras";

export default function StatusTexto(texto: string){
    return (
        <div>
            <p>Quantidade de caracteres: {contadorCaracteres(texto)}</p>
            <p>Quantidade de palavras: {ContadorPalavras(texto)}</p>
        </div>
    );
}