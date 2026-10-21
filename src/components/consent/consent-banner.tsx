"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useI18n } from "@/i18n/client";
import {
  LANG_COOKIE,
  LOCALES,
  localePath,
  readCookie,
  setCookie,
  stripLocale,
  type Locale,
} from "@/i18n/config";

/** "all" | "necessary". Si algún día se añade analítica, solo se carga con "all". */
export const CONSENT_COOKIE = "mm_consent";
/** Lo lanza "Configurar cookies" del footer para volver a abrir el aviso. */
export const OPEN_CONSENT_EVENT = "mm:open-consent";
const CONSENT_CHANGE_EVENT = "mm:consent-change";

const subscribe = (onChange: () => void) => {
  window.addEventListener(CONSENT_CHANGE_EVENT, onChange);
  return () => window.removeEventListener(CONSENT_CHANGE_EVENT, onChange);
};

/** Cambia de idioma recordándolo, en la misma página (y sección) en la que estás. */
export function switchLanguage(target: Locale, pathname: string) {
  setCookie(LANG_COOKIE, target);
  window.location.assign(localePath(target, stripLocale(pathname)) + window.location.hash);
}

/**
 * Barra discreta abajo: una frase, ES | EN y rechazar / aceptar. No tapa la
 * web ni bloquea el scroll; se queda hasta que se responde. Cambiar de idioma
 * recarga la página en el otro idioma con la barra aún abierta.
 */
export function ConsentBanner() {
  const { lang, t, href } = useI18n();
  const pathname = usePathname();
  // en el servidor no hay cookies: se da por respondido para no pintar la
  // barra en el HTML y que no parpadee a quien ya contestó
  const answered = useSyncExternalStore(
    subscribe,
    () => readCookie(CONSENT_COOKIE) !== null,
    () => true
  );
  const [reopened, setReopened] = useState(false);

  useEffect(() => {
    const open = () => setReopened(true);
    window.addEventListener(OPEN_CONSENT_EVENT, open);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, open);
  }, []);

  const answer = (value: "all" | "necessary") => {
    setCookie(CONSENT_COOKIE, value);
    if (!readCookie(LANG_COOKIE)) setCookie(LANG_COOKIE, lang);
    setReopened(false);
    window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
  };

  return (
    <AnimatePresence>
      {(!answered || reopened) && (
        <motion.section
          aria-label={t.consent.label}
          initial={{ y: "150%" }}
          animate={{ y: 0 }}
          exit={{ y: "150%" }}
          transition={{ type: "spring", stiffness: 260, damping: 28 }}
          className="fixed inset-x-3 bottom-3 z-[90] mx-auto flex max-w-3xl flex-col gap-3 rounded-2xl border-2 border-mr-yellow/40 bg-mr-black/95 p-3 text-mr-cream shadow-[0_10px_40px_rgba(0,0,0,0.6)] backdrop-blur-md md:bottom-5 md:flex-row md:items-center md:gap-4 md:pl-5"
        >
          <p className="text-xs leading-snug text-mr-cream/80 md:flex-1">
            <span aria-hidden="true">🍪 </span>
            {t.consent.text}{" "}
            <Link href={href("/cookies")} className="whitespace-nowrap text-mr-yellow underline underline-offset-2">
              {t.consent.more}
            </Link>
          </p>

          <div className="flex items-center gap-2">
            <div
              role="group"
              aria-label={t.language.label}
              className="flex shrink-0 rounded-full border border-mr-cream/20 p-0.5 font-tag text-[11px] tracking-widest"
            >
              {LOCALES.map((locale) => {
                const active = locale === lang;
                return (
                  <button
                    key={locale}
                    type="button"
                    lang={locale}
                    aria-label={t.language.switchTo[locale]}
                    aria-pressed={active}
                    onClick={() => !active && switchLanguage(locale, pathname)}
                    className={`rounded-full px-2.5 py-1.5 transition-colors ${
                      active ? "bg-mr-yellow text-mr-black" : "text-mr-cream/60 hover:text-mr-cream"
                    }`}
                  >
                    {locale.toUpperCase()}
                  </button>
                );
              })}
            </div>

            {/* rechazar y aceptar con el mismo peso, como pide la AEPD */}
            <button
              type="button"
              onClick={() => answer("necessary")}
              className="font-tag ml-auto rounded-full border-2 border-mr-cream/30 px-4 py-1.5 text-xs tracking-wide transition-colors hover:border-mr-cream"
            >
              {t.consent.reject}
            </button>
            <button
              type="button"
              onClick={() => answer("all")}
              className="font-tag rounded-full border-2 border-mr-yellow bg-mr-yellow px-4 py-1.5 text-xs tracking-wide text-mr-black transition-transform hover:-translate-y-0.5"
            >
              {t.consent.accept}
            </button>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}

/** Enlace del footer que vuelve a abrir el aviso. */
export function ConsentSettingsButton({ label, className }: { label: string; className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_CONSENT_EVENT))}
      className={className}
    >
      {label}
    </button>
  );
}
