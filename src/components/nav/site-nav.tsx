"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Globe } from "lucide-react";
import { switchLanguage } from "@/components/consent/consent-banner";
import { useI18n } from "@/i18n/client";
import { LOCALES, localePath, stripLocale } from "@/i18n/config";
import { FullscreenNavOverlay } from "@/components/ui/immersive-full-screen-nav";
import { NavPanel } from "./nav-panel";

/** ES | EN: lleva a la misma página en el otro idioma y lo recuerda. */
function LanguageSwitch({ inverted }: { inverted: boolean }) {
  const { lang, t } = useI18n();
  const pathname = usePathname();
  const base = stripLocale(pathname);

  return (
    <div
      role="group"
      aria-label={t.language.label}
      className={`flex items-center gap-0.5 rounded-full border p-0.5 font-tag text-[11px] tracking-widest transition-colors duration-300 md:text-xs ${
        inverted ? "border-mr-black/30" : "border-mr-cream/20"
      }`}
    >
      <Globe
        aria-hidden="true"
        className={`ml-1.5 hidden size-4 sm:block ${inverted ? "text-mr-black/60" : "text-mr-cream/60"}`}
      />
      {LOCALES.map((locale) => {
        const active = locale === lang;
        return (
          // <a> y no <Link>: cambiar de idioma cambia de layout raíz (recarga
          // completa) y antes hay que guardar la cookie para que el proxy no
          // devuelva al idioma anterior
          <a
            key={locale}
            href={localePath(locale, base)}
            onClick={(e) => {
              e.preventDefault();
              if (!active) switchLanguage(locale, pathname);
            }}
            hrefLang={locale}
            lang={locale}
            aria-label={t.language.switchTo[locale]}
            aria-current={active ? "true" : undefined}
            className={`rounded-full px-2.5 py-1 transition-colors duration-300 md:px-3 md:py-1.5 ${
              active
                ? inverted
                  ? "bg-mr-black text-mr-yellow"
                  : "bg-mr-yellow text-mr-black"
                : inverted
                  ? "text-mr-black/60 hover:text-mr-black"
                  : "text-mr-cream/60 hover:text-mr-cream"
            }`}
          >
            {locale.toUpperCase()}
          </a>
        );
      })}
    </div>
  );
}

export function SiteNav() {
  const { t, href } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-mr-black">
      {/* solid, full-width, and stacked above the overlay (z-[101] > the
          overlay's z-[100]) — otherwise the overlay, nested as a sibling
          inside this header, would paint over the header's own background
          in the gaps around the logo/button. Black by default so the menu
          opening into a full yellow takeover reads as a deliberate, special
          moment instead of "still yellow, nothing changed". */}
      <div
        className={`relative z-[101] transition-colors duration-300 ${open ? "bg-mr-yellow" : "bg-mr-black"}`}
      >
        <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
          <Link
            href={href("/#top")}
            aria-label={t.nav.homeLabel}
            className="flex shrink-0 items-center gap-2.5"
          >
            <Image
              src="/images/badge-circular-amarillo-sin-anillo.webp"
              alt="Mr. Majo's"
              width={96}
              height={96}
              preload
              className={`h-9 w-9 shrink-0 rounded-full border-2 transition-colors duration-300 md:h-11 md:w-11 ${
                open ? "border-mr-black/60" : "border-mr-cream/70"
              }`}
            />
            <span className="flex flex-col leading-none">
              <span
                className={`font-display text-base tracking-wide transition-colors duration-300 md:text-lg ${
                  open ? "text-mr-black" : "text-mr-cream"
                }`}
              >
                MR. MAJO&apos;S
              </span>
              <span
                className={`font-tag text-[8px] tracking-widest transition-colors duration-300 md:text-[9px] ${
                  open ? "text-mr-black/70" : "text-mr-yellow"
                }`}
              >
                {t.nav.subtitle}
              </span>
            </span>
          </Link>

          <div className="flex items-center gap-2 md:gap-3">
          <LanguageSwitch inverted={open} />

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? t.nav.close : t.nav.open}
            className={`flex size-9 flex-col items-center justify-center gap-1.5 rounded-md border transition-colors duration-300 md:size-11 ${
              open ? "border-mr-black/30" : "border-mr-cream/20"
            }`}
          >
            <span
              className={`h-0.5 w-5 transition-all duration-300 md:w-6 ${
                open ? "translate-y-[3.5px] rotate-45 bg-mr-black" : "bg-mr-cream"
              }`}
            />
            <span
              className={`h-0.5 w-5 transition-all duration-300 md:w-6 ${
                open ? "-translate-y-[3.5px] -rotate-45 bg-mr-black" : "bg-mr-cream"
              }`}
            />
          </button>
          </div>
        </div>
      </div>

      <FullscreenNavOverlay
        open={open}
        onClose={() => setOpen(false)}
        overlayBg="var(--mr-yellow)"
        clipOrigin="top"
        openDuration={0.6}
      >
        {(isOpen) => <NavPanel isOpen={isOpen} onNavigate={() => setOpen(false)} />}
      </FullscreenNavOverlay>
    </header>
  );
}
