"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FullscreenNavOverlay } from "@/components/ui/immersive-full-screen-nav";
import { NavPanel } from "./nav-panel";

export function SiteNav() {
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
            href="#top"
            aria-label="Mr. Majo's — inicio"
            className="flex shrink-0 items-center gap-2.5"
          >
            <Image
              src="/images/badge-circular-amarillo-sin-anillo.png"
              alt="Mr. Majo's"
              width={96}
              height={96}
              priority
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
                SMASH BURGERS &bull; ALICANTE
              </span>
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
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
