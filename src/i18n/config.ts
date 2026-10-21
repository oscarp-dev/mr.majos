// Español en las rutas de siempre (/, /carta); inglés bajo /en (/en, /en/carta).
// El proxy reescribe las rutas sin prefijo a /es por dentro.

export const LOCALES = ["es", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "es";

/** Cookie con el idioma elegido; el proxy la usa para llevar a /en a quien ya lo eligió. */
export const LANG_COOKIE = "mm_lang";

/** Guarda una cookie propia durante un año (solo en el navegador). */
export function setCookie(name: string, value: string) {
  document.cookie = `${name}=${value}; path=/; max-age=31536000; samesite=lax`;
}

export function readCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? match[1] : null;
}

export const isLocale = (value: string): value is Locale =>
  (LOCALES as readonly string[]).includes(value);

/**
 * Prefija una ruta interna con el idioma: "/carta#perritos" → "/en/carta#perritos",
 * "/#menu" → "/en#menu". Anclas sueltas ("#menu") y URLs externas no se tocan.
 */
export function localePath(lang: Locale, path: string): string {
  if (lang === DEFAULT_LOCALE || !path.startsWith("/")) return path;
  if (path === "/") return `/${lang}`;
  if (path.startsWith("/#")) return `/${lang}${path.slice(1)}`;
  return `/${lang}${path}`;
}

/** Quita el prefijo de idioma de una ruta visible: "/en/carta" → "/carta". */
export function stripLocale(pathname: string): string {
  for (const lang of LOCALES) {
    if (pathname === `/${lang}`) return "/";
    if (pathname.startsWith(`/${lang}/`)) return pathname.slice(lang.length + 1);
  }
  return pathname;
}
