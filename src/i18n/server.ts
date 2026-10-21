import { lang } from "next/root-params";
import { getMenu } from "@/lib/full-menu-data";
import { DEFAULT_LOCALE, isLocale, localePath, type Locale } from "./config";
import { MESSAGES } from "./messages";

/** Idioma, textos y carta de la ruta actual, para Server Components. */
export async function getI18n() {
  const value = await lang();
  const locale: Locale = isLocale(value) ? value : DEFAULT_LOCALE;
  return {
    lang: locale,
    t: MESSAGES[locale],
    menu: getMenu(locale),
    href: (path: string) => localePath(locale, path),
  };
}
