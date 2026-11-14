import BoringTextSection from "../organisms/Content/BoringTextSection";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import { estilo_conteudo_pagina } from "./Home";

export default function BoringSite(){

    const main = 'flex-1 flex flex-col justify-center';
    const div1 = 'text-center pt-10 pb-4 border-b border-zinc-800/60 max-w-4xl mx-auto px-4';

    return(
        <div className={estilo_conteudo_pagina}>
            <Header/>

            <main className={main}>
                <div className={div1}>
                    <BoringTextSection/>
                </div>
            </main>

            <Footer/>
        </div>
    );
}