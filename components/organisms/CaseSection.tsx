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

    return (
        <div>
            <TextInput texto={texto} TextManager={TextManager}/>

            <StatusTexto texto={texto}/>

            <ToolbarButton
                texto={texto}
                textoOriginal={textoOriginal}
                setTexto={setTexto}
                SafeText={SafeText}
                LimparTexto={LimparTexto}
            />
        </div>
    );
}