import { NextResponse, type NextRequest } from "next/server";
import { DEFAULT_LOCALE, LANG_COOKIE, isLocale } from "@/i18n/config";

// Español sin prefijo (/ y /carta) e inglés en /en. Las rutas sin prefijo se
// reescriben a /es por dentro, y /es/... redirige a la versión sin prefijo.
// Quien ya eligió otro idioma (cookie mm_lang) va directo a su versión.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/en" || pathname.startsWith("/en/")) return;

  const url = request.nextUrl.clone();

  if (pathname === "/es" || pathname.startsWith("/es/")) {
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url);
  }

  const rest = pathname === "/" ? "" : pathname;
  const preferred = request.cookies.get(LANG_COOKIE)?.value;
  if (preferred && preferred !== DEFAULT_LOCALE && isLocale(preferred)) {
    url.pathname = `/${preferred}${rest}`;
    return NextResponse.redirect(url);
  }

  url.pathname = `/${DEFAULT_LOCALE}${rest}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // fuera: internos de Next y cualquier fichero con extensión (imágenes, favicon…)
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
