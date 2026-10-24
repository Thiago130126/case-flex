'use client';

import { useEffect, useState } from "react";
import { toast } from "sonner";
import ToolbarButton from "./ToolbarButtons";
import StatusTexto from "../molecules/navegation/TextStats";
import TextInput from "../atoms/inputs/InputText";


export default function CaseSection(){

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

    const section = 'w-full max-w-4xl mx-auto px-4 py-8';
    const cardPrincipal = 'bg-zinc-800 border border-zinc-700/60 rounded-2xl shadow-xl overflow-hidden';
    const input = 'p-4';
    const estatisticas = 'px-5 py-2.5 bg-zinc-800/40 border-t border-zinc-700/40 flex items-center justify-between text-xs text-zinc-400';
    const ferramentas = 'p-4 bg-zinc-900/70 border-t border-zinc-700/60';

    return (
        <section className={`${section}`}>

            <div className={`${cardPrincipal}`}>

                <div className={`${input}`}>
                    <TextInput texto={texto} TextManager={TextManager}/>
                </div>
                
                <div className={`${estatisticas}`}>
                    <StatusTexto texto={texto}/>
                </div>
                
                <div className={`${ferramentas}`}>
                    <ToolbarButton
                        texto={texto}
                        textoOriginal={textoOriginal}
                        setTexto={setTexto}
                        SafeText={SafeText}
                        LimparTexto={LimparTexto}
                    />
                </div>

            </div>
        </section>
    );
}