import { getRequestConfig } from "next-intl/server";
import { routing } from "./routes";

export default getRequestConfig(async ({ requestLocale }) => {

    let locale = await requestLocale;

    if(!routing.locales.includes(locale as any) || !locale){
        locale = routing.defaultLocale;
    }

    return {
        locale,
        messages: (await import(`../messages/${locale}.json`)).default
    };
});