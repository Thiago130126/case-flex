import SobreTextSection from "../organisms/Content/SobreTextSection";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import { estilo_conteudo_pagina } from "./Home";

export default function Sobre(){
    const main = 'flex-1';
    const div1 = 'text-center pt-10 pb-4 border-b border-zinc-800/60 max-w-4xl mx-auto px-4';
    const h1 = 'text-3xl sm:text-4xl font-extrabold text-white tracking-tight';
    const p = 'mt-2 text-zinc-400 text-sm';
    const span = 'text-emerald-400';

    return (
        <div className={estilo_conteudo_pagina}>
            <Header/>

            <main className={main}>
                <div className={div1}>
                    <h1 className={h1}>
                        Sobre o <span className={span}>CaseFlex</span>
                    </h1>
                    <p className={p}>
                        Conheça a proposta e os princípios por trás da ferramenta.
                    </p>
                </div>

                <SobreTextSection/>

            </main>

            <Footer/>
        </div>
    );
}