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
        '/slugify': '/slugify'
    }
});

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);

