import { getRequestConfig } from "next-intl/server";
import { routing } from "./routes";

export default getRequestConfig(async ({ locale }) => {

    const resolvedLocale = locale && routing.locales.includes(locale as any)
        ? locale
        : routing.defaultLocale;

    return {
        locale: resolvedLocale,
        messages: (await import(`../messages/${resolvedLocale}.json`)).default
    };
});