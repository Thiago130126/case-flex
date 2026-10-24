import CaseSection from "../organisms/CaseSection";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";

export default function HomePage(){

    const home_page = 'bg-indigo-100'

    return (
        <div className={`${home_page}`}>
            <Header/>

            <CaseSection/>

            <Footer/>
        </div>
    );
}