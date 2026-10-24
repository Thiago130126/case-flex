import CaseButton from "../atoms/buttons/CaseButton";
import CoppyButton from "../molecules/buttons/CoppyButton";
import v from 'voca';

interface ToolbarButtonProps{
    texto: string;
    textoOriginal: string;
    setTexto: (novoTexto: string) => void;
    SafeText: (texto: string) => void;
    LimparTexto: () => void;
}

export default function ToolbarButton({
    texto,
    textoOriginal,
    setTexto,
    SafeText,
    LimparTexto
}: ToolbarButtonProps){

    const aplicarTransformacao = (novoTexto: string) => {
        setTexto(novoTexto);
        SafeText(novoTexto);
    }

    return(
        <div>
            <CaseButton onClick={() => {aplicarTransformacao(texto.toLowerCase())}}>
                Lower
            </CaseButton>

            <CaseButton onClick={() => {aplicarTransformacao(texto.toUpperCase())}}>
                Upper
            </CaseButton>

            <CaseButton onClick={() => {aplicarTransformacao(v.capitalize(texto.toLowerCase()))}}>
                Capitalize
            </CaseButton>

            <CaseButton onClick={() => {aplicarTransformacao(v.titleCase(texto))}}>
                Title
            </CaseButton>

            <CaseButton onClick={() => {aplicarTransformacao(v.camelCase(texto))}}>
                Camel
            </CaseButton>

            <CaseButton onClick={() => {aplicarTransformacao(v.snakeCase(texto))}}>
                Snake
            </CaseButton>

            <CaseButton onClick={() => {aplicarTransformacao(v.kebabCase(texto))}}>
                Kebab
            </CaseButton>

            <CaseButton onClick={() => {aplicarTransformacao(v.slugify(texto))}}>
                Slugify
            </CaseButton>

            <CaseButton onClick={() => {aplicarTransformacao(v.reverse(texto))}}>
                Reverse
            </CaseButton>

            <CaseButton onClick={() => {aplicarTransformacao(v.swapCase(texto))}}>
                Swap
            </CaseButton>

            <CaseButton onClick={() => {aplicarTransformacao(textoOriginal)}}>
                Original
            </CaseButton>

            <CaseButton onClick={() => {LimparTexto()}} variant="danger">
                Limpar Texto
            </CaseButton>

            <CoppyButton conteudo={texto}/>
        </div>
    );
}