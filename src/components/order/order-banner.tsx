import { Drip } from "@/components/decorative/drip";
import { Reveal } from "@/components/motion/reveal";
import { ORDER_LINKS } from "@/lib/site-data";

// NOTE: el horario sigue siendo placeholder — sustitúyelo antes de publicar.
const STORE_ADDRESS = "Calle Bazán, 45, 03001 Alicante";
const STORE_HOURS = "L-D · 13:00 - 23:30";
const MAPS_URL =
  "https://maps.google.com/?q=Calle+Baz%C3%A1n+45+03001+Alicante";

export function OrderBanner() {
  return (
    <section id="order" className="relative overflow-hidden bg-mr-yellow pb-20 pt-14 md:pb-28 md:pt-20">
      <Drip className="absolute inset-x-0 top-0 h-8 md:h-11" />

      <div className="relative mx-auto max-w-7xl px-4 text-center md:px-8">
        <Reveal>
          <span className="font-tag text-xs tracking-widest text-mr-black/70">
            PIDE ONLINE O VEN A VERNOS
          </span>
          <h2 className="font-display bleed-full px-4 mt-3 text-[21vw] leading-[0.76] text-mr-black sm:px-6 sm:text-[15vw] md:px-8 md:text-[10.5vw]">
            PIDE YA.
            <br />
            CERO DRAMA.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-mr-black/70 md:text-base">
            Mucho chorreo, poca espera. A domicilio, para recoger o en mesa,
            te llenamos de salsa hasta el codo estés donde estés.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={ORDER_LINKS.glovo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rotate-1 items-center gap-2 rounded-full border-2 border-mr-black bg-[#00A082] px-7 py-3 font-tag text-sm tracking-wide text-white shadow-[0_4px_0_0_rgba(0,0,0,1)] transition-transform hover:-translate-y-0.5"
            >
              PEDIR EN GLOVO ↗
            </a>
            <a
              href={ORDER_LINKS.uberEats}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex -rotate-1 items-center gap-2 rounded-full border-2 border-mr-black bg-mr-black px-7 py-3 font-tag text-sm tracking-wide text-white shadow-[0_4px_0_0_rgba(0,0,0,0.4)] transition-transform hover:-translate-y-0.5"
            >
              PEDIR EN UBER<span className="-ml-1 text-[#06C167]">EATS</span>↗
            </a>
            <a
              href={ORDER_LINKS.reservas}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rotate-1 items-center rounded-full border-2 border-mr-black bg-mr-yellow px-7 py-3 font-tag text-sm tracking-wide text-mr-black transition-transform hover:-translate-y-0.5"
            >
              RESERVAR MESA ↗
            </a>
          </div>

          <p className="mt-6 font-tag text-xs tracking-widest text-mr-black/60">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="underline decoration-mr-black/30 underline-offset-4 hover:text-mr-black"
            >
              {STORE_ADDRESS}
            </a>{" "}
            · {STORE_HOURS}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
