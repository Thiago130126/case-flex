'use client';

import { useEffect, useState } from "react";
import { contadorCaracteres } from "../../../utils/contadorCaracteres";
import { ContadorPalavras } from "../../../utils/contadorPalavras";
import { toast } from "sonner";
import ToLower from "../buttons/ToLower";
import ToOriginal from "../buttons/ToOriginal";
import ClearButton from "../buttons/ToClear";
import UpperButton from "../buttons/ToUpper";
import CoppyButton from "../buttons/CoppyButton";
import v from 'voca';
import CapitalizeButton from "../buttons/ToCapitalize";
import TitleCapitalizeButton from "../buttons/ToTitleCap";
import CamelButton from "../buttons/CamelCaseBt";
import SnakeButton from "../buttons/SnakeCaseBt";
import KebabButton from "../buttons/KebabCase";
import SlugfyButton from "../buttons/SlugfyBt";
import ReverseButton from "../buttons/ReverseBt";

export default function TextInput(){

    const [texto, setTexto] = useState('');

    const [textoOriginal, setTextoOriginal] = useState('');

    

    const TextManager = (e) => {
        setTexto(e.target.value);
        sessionStorage.setItem("textoSalvo", e.target.value);
        setTextoOriginal(e.target.value);
        sessionStorage.setItem("textoOriginal", e.target.value);
    }
    const SafeText = (text: string) => {
        sessionStorage.setItem("textoSalvo", text);
    }

    const LimparTexto = () => {
        setTexto('');
        setTextoOriginal('');
        sessionStorage.setItem("textoSalvo", '');
        sessionStorage.setItem("textoOriginal", '');
    }

    useEffect(() => {
        function AcessarStorage(){
            try{
                const textoSalvo = sessionStorage.getItem("textoSalvo");
                if (textoSalvo !== null){
                    setTexto(textoSalvo);
                }
                const textoOriginal = sessionStorage.getItem("textoOriginal");
                if(textoOriginal !== null){
                    setTextoOriginal(textoOriginal);
                }
            }catch(error){
                toast.error("Falha internao ao acessar session storage");
                console.log("Falha internao ao acessar session storage: ", error);
            }
        }
        AcessarStorage();
    }, []);

    return(
        <div>
            <textarea placeholder="Digite seu texto aqui..." value={texto} onChange={TextManager}/>

            <div>
                <div>
                    <p>Quantidade de caracteres: {contadorCaracteres(texto)}</p>
                    <p>Quantidade de palavras: {ContadorPalavras(texto)}</p>
                </div>
                <div>
                    <p>Já aqui, ficarão os botões para alterar a case dos textos</p>
                    <strong>
                        <ToLower onSuccess={() => {setTexto(texto.toLowerCase()); SafeText(texto.toLocaleLowerCase())} }/>
                        <UpperButton onSuccess={() => {
                            setTexto(texto.toUpperCase());
                            SafeText(texto.toUpperCase());
                        }}/>
                        <CapitalizeButton onSuccess={() => {
                            setTexto(v.capitalize(texto));
                            SafeText(v.capitalize(texto));
                        }}/>
                        <TitleCapitalizeButton onSuccess={() => {
                            setTexto(v.titleCase(texto));
                            SafeText(v.titleCase(texto));
                        }}/>
                        <CamelButton onSuccess={() => {
                            setTexto(v.camelCase(texto));
                            SafeText(v.camelCase(texto));
                        }}/>
                        <SnakeButton onSuccess={() => {
                            setTexto(v.snakeCase(texto));
                            SafeText(v.snakeCase(texto));
                        }}/>
                        <KebabButton onSuccess={() => {
                            setTexto(v.kebabCase(texto));
                            SafeText(v.kebabCase(texto));
                        }}/>
                        <SlugfyButton onSuccess={() => {
                            setTexto(v.slugify(texto));
                            SafeText(v.slugify(texto));
                        }}/>
                        <ReverseButton onSuccess={() => {
                            setTexto(v.reverse(texto));
                            SafeText(v.reverse(texto));
                        }}/>
                        <ToOriginal onSuccess={() => {setTexto(textoOriginal); SafeText(textoOriginal)}}/>
                        <ClearButton onSuccess={() => {LimparTexto()}}/>
                        <CoppyButton conteudo={texto}/>
                    </strong>
                </div>
            </div>
        </div>
    );
}