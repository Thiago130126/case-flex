import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const locales = ["pt", "en", "es"] as const;

export type Locale = (typeof locales)[number];

export const routing = defineRouting({
    locales: locales,
    defaultLocale: 'en',
    localePrefix: 'always',
    pathnames: {
        '/':'/',
        '/sobre': {
            pt: '/sobre',
            en: '/about',
            es: '/sobre'
        },
        '/camel-case': '/camel-case',
        '/snake-case': '/snake-case',
        '/kebab-case': '/kebab-case',
        '/slugify': '/slugify',
        '/politica-privacidade': {
            pt: '/politica-privacidade',
            en: '/privacy-policy',
            es: '/politica-privacidad'
        },
        '/conversor-case': {
            pt: '/conversor-case',
            en: '/converter-case',
            es: '/conversor-case'
        },
        '/boring-site': '/boring-site'
    }
});

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);

export type CanonicalPath = keyof typeof routing.pathnames;

export function getCanonicalpath(locale: Locale, slug:string): CanonicalPath | null{
    const currentPath = `/${slug}`;

    for(const [canonical, translations] of Object.entries(routing.pathnames)) {
        if (typeof translations === 'string' && translations === currentPath){
            return canonical as CanonicalPath;
        }
        if(typeof translations === 'object' && translations[locale] === currentPath){
            return canonical as CanonicalPath;
        }
    }

    return null;
}
