'use client';

import { Locale, usePathname, useRouter } from "@/i18n/routes";
import { useLocale } from "next-intl";
import { useTransition } from "react";

const languages: {code: Locale, label: string}[] = [
    {code: 'pt', label: 'PT'},
    {code: 'en', label: 'EN'},
    {code: 'es', label: 'ES'}
]

export default function LanguageSwitcher(){

    const currentLocale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    function ChangeLocale(newLocale: Locale){
        if(newLocale === currentLocale) return;

        startTransition(() => {
            router.replace(pathname, {locale: newLocale});
        });
    }

    const div = `inline-flex items-center p-1 rounded-lg bg-zinc-900/80 border border-zinc-700/60 ${isPending ? 'opacity-60 pointer-events-none' : ''}`;
    const button = `px-2.5 py-1 text-xs font-semibold rounded-md transition-all`;
    const active_button = 'bg-zinc-800 text-lime-300 shadow-sm';
    const not_active = 'text-zinc-400 hover:text-zinc-200';

    return(
        <div className={div}>
            {languages.map(({ code, label }) => {
                const isActive = currentLocale === code;

                return(
                    <button
                        key={code}
                        type="button"
                        disabled={isPending}
                        onClick={() => ChangeLocale(code)}
                        className={`${button} ${isActive ? active_button : not_active}`}
                    >
                        {label}
                    </button>
                )
            })}

        </div>
    );
}