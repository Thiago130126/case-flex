import CaseSection from "../organisms/CaseSection";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";

export default function HomePage(){

    const home_page = 'min-h-screen flex flex-col justify-between bg-zinc-900 text-zinc-100';
    const main = 'flex-1 flex flex-col justify-center';
    const container = 'text-center pt-8 pb-2';
    const h2 = 'text-3xl font-extrabold tracking-tight text-white sm:text-4xl'

    return (
        <div className={`${home_page}`}>
            <Header/>

            <main className={`${main}`}>
                <div className={container}>
                    <h2 className={h2}>
                        Conversor de Case Online
                    </h2>
                </div>
                <CaseSection/>
            </main>

            

            <Footer/>
        </div>
    );
}