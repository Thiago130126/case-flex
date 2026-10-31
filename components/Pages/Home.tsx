import CaseSection from "../organisms/CaseSection";
import HomeTextSection from "../organisms/Content/HomeTextSection";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";

export const estilo_conteudo_pagina = 'min-h-screen flex flex-col justify-between bg-zinc-900 text-zinc-100';

export default function HomePage(){
    
    const main = 'flex-1 flex flex-col justify-center';
    const container = 'text-center pt-8 pb-2';
    const h2 = 'text-3xl font-extrabold tracking-tight text-white sm:text-4xl'

    
    return (
        <div className={`${estilo_conteudo_pagina}`}>
            <Header/>

            <main className={`${main}`}>
                <div className={container}>
                    <h2 className={h2}>
                        Conversor de Case Online
                    </h2>
                </div>
                <CaseSection/>

                <HomeTextSection/>
            </main>

            <Footer/>
        </div>
    );
}