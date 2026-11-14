import BoringSite from "@/components/Pages/BoringSite";
import Sobre from "@/components/Pages/Sobre";
import { getCanonicalpath, Locale } from "@/i18n/routes";
import { notFound } from "next/navigation";

interface SlugPageProps{
    params: Promise<{
        locale: string;
        slug: string;
    }>;
}


export default async function Page({params}: SlugPageProps){
    const {locale, slug} = await params;

    const canonicalPath = getCanonicalpath(locale as Locale, slug);

    if(!canonicalPath){
        notFound();
    }

    switch(canonicalPath){
        case '/sobre':
            return <Sobre/>;
        
        case '/boring-site':
            return <BoringSite/>
        
        default:
            notFound();
    }
}