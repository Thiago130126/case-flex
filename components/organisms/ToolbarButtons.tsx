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

    const toolbar = 'flex flex-wrap items-center gap-2'
    
    return(
        <div className={`${toolbar}`}>
            <CaseButton onClick={() => {aplicarTransformacao(texto.toLowerCase())}} variant="primary">
                Lower
            </CaseButton>

            <CaseButton onClick={() => {aplicarTransformacao(texto.toUpperCase())}} variant="primary">
                Upper
            </CaseButton>

            <CaseButton onClick={() => {aplicarTransformacao(v.capitalize(texto.toLowerCase()))}}>
                Capitalize
            </CaseButton>

            <CaseButton onClick={() => {aplicarTransformacao(v.titleCase(texto))}}>
                Title
            </CaseButton>

            <CaseButton onClick={() => {aplicarTransformacao(v.camelCase(texto))}} variant="outline">
                Camel
            </CaseButton>

            <CaseButton onClick={() => {aplicarTransformacao(v.snakeCase(texto))}} variant="outline">
                Snake
            </CaseButton>

            <CaseButton onClick={() => {aplicarTransformacao(v.kebabCase(texto))}} variant="outline">
                Kebab
            </CaseButton>

            <CaseButton onClick={() => {aplicarTransformacao(v.slugify(texto))}} variant="outline">
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