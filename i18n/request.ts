import { getRequestConfig } from "next-intl/server";
import { routing } from "./routes";
import * as rootParams from 'next/root-params';

export default getRequestConfig(async ({ locale }) => {

    if(!locale){
        const paramValue = await rootParams.locale();

        if(paramValue && routing.locales.includes(paramValue as any)){
            locale = paramValue;
        }else{
            locale = routing.defaultLocale;
        }
    }

    if(!routing.locales.includes(locale as any)){
        locale = routing.defaultLocale;
    }

    return {
        locale,
        messages: (await import(`../messages/${locale}.json`)).default
    };
});