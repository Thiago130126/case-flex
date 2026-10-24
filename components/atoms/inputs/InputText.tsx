'use client';

import { useEffect, useState } from "react";
import { contadorCaracteres } from "../../../utils/contadorCaracteres";
import { ContadorPalavras } from "../../../utils/contadorPalavras";
import { toast } from "sonner";
import CoppyButton from "../../molecules/buttons/CoppyButton";
import v from 'voca';
import CaseButton from "../buttons/CaseButton";

export default function TextInput(){

    const [texto, setTexto] = useState('');

    const [textoOriginal, setTextoOriginal] = useState('');

    const TextManager = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
                        <CaseButton onClick={() => {
                            setTexto(texto.toLowerCase());
                            SafeText(texto.toLowerCase())
                        }}>
                            Lower
                        </CaseButton>
                        
                        <CaseButton onClick={() => {
                            setTexto(texto.toUpperCase());
                            SafeText(texto.toUpperCase())
                        }}>
                            Upper
                        </CaseButton>

                        <CaseButton onClick={() => {
                            setTexto(v.capitalize(texto.toLowerCase()));
                            SafeText(v.capitalize(texto.toLowerCase()))
                        }}>
                            Capitalize
                        </CaseButton>

                        <CaseButton onClick={() => {
                            setTexto(v.titleCase(texto));
                            SafeText(v.titleCase(texto))
                        }}>
                            Title
                        </CaseButton>

                        <CaseButton onClick={() => {
                            setTexto(v.camelCase(texto));
                            SafeText(v.camelCase(texto))
                        }}>
                            Camel
                        </CaseButton>

                        <CaseButton onClick={() => {
                            setTexto(v.snakeCase(texto));
                            SafeText(v.snakeCase(texto))
                        }}>
                            Snake
                        </CaseButton>

                        <CaseButton onClick={() => {
                            setTexto(v.kebabCase(texto));
                            SafeText(v.kebabCase(texto))
                        }}>
                            Kebab
                        </CaseButton>

                        <CaseButton onClick={() => {
                            setTexto(v.slugify(texto));
                            SafeText(v.slugify(texto))
                        }}>
                            Slugify
                        </CaseButton>

                        <CaseButton onClick={() => {
                            setTexto(v.reverse(texto));
                            SafeText(v.reverse(texto))
                        }}>
                            Reverse
                        </CaseButton>

                        <CaseButton onClick={() => {
                            setTexto(v.swapCase(texto));
                            SafeText(v.swapCase(texto))
                        }}>
                            Swap
                        </CaseButton>

                        <CaseButton onClick={() => {
                            setTexto(textoOriginal);
                            SafeText(textoOriginal)
                        }}>
                            Original
                        </CaseButton>

                        <CaseButton onClick={() => {
                            LimparTexto();
                        }}>
                            Limpar Texto
                        </CaseButton>

                        <CoppyButton conteudo={texto}/>
                </div>
            </div>
        </div>
    );
}