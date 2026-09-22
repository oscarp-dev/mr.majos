import { Drip } from "@/components/decorative/drip";
import { Reveal } from "@/components/motion/reveal";

// NOTE: horario y link de pedido online siguen siendo placeholders —
// sustitúyelos por los datos reales antes de publicar.
const ORDER_ONLINE_URL = "#";
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
              href={ORDER_ONLINE_URL}
              className="inline-flex rotate-1 items-center rounded-full border-2 border-mr-black bg-mr-black px-7 py-3 font-tag text-sm tracking-wide text-mr-yellow shadow-[0_4px_0_0_rgba(0,0,0,0.4)] transition-transform hover:-translate-y-0.5"
            >
              PEDIR ONLINE
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex -rotate-1 items-center rounded-full border-2 border-mr-black bg-mr-yellow px-7 py-3 font-tag text-sm tracking-wide text-mr-black transition-transform hover:-translate-y-0.5"
            >
              CÓMO LLEGAR
            </a>
          </div>

          <p className="mt-6 font-tag text-xs tracking-widest text-mr-black/60">
            {STORE_ADDRESS} · {STORE_HOURS}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
