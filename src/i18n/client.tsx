"use client";

import { createContext, useContext, type ReactNode } from "react";
import { DEFAULT_LOCALE, localePath, type Locale } from "./config";
import { MESSAGES } from "./messages";

const LocaleContext = createContext<Locale>(DEFAULT_LOCALE);

export function LocaleProvider({ lang, children }: { lang: Locale; children: ReactNode }) {
  return <LocaleContext.Provider value={lang}>{children}</LocaleContext.Provider>;
}

/** Idioma y textos de la ruta actual, para Client Components. */
export function useI18n() {
  const lang = useContext(LocaleContext);
  return {
    lang,
    t: MESSAGES[lang],
    href: (path: string) => localePath(lang, path),
  };
}
