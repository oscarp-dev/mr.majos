import Image from "next/image";
import { CLUB_TIERS } from "@/lib/site-data";
import { Reveal } from "@/components/motion/reveal";
import { PaintSplash } from "@/components/decorative/paint-splash";
import { DraggableSticker } from "@/components/decorative/draggable-sticker";

export function ClubSection() {
  return (
    <section id="club" className="relative overflow-hidden bg-[#141414] py-20 md:py-28">
      <PaintSplash className="-left-20 bottom-0 h-80 w-80 opacity-20" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:gap-16 md:px-8">
        <Reveal>
          <div className="relative mx-auto w-full max-w-sm rotate-2 overflow-hidden rounded-2xl border-4 border-mr-black shadow-[0_16px_0_0_rgba(0,0,0,1)]">
            <Image
              src="/images/logo-mrmajos-tarjeta-fidelidad.png"
              alt="Tarjeta de fidelidad del Majo's Club"
              width={600}
              height={832}
              loading="lazy"
              sizes="(max-width: 768px) 90vw, 400px"
              className="h-auto w-full"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="font-tag text-xs tracking-widest text-mr-yellow">
            TU LEALTAD TIENE PREMIO
          </span>
          <h2 className="font-display w-screen -translate-x-1/2 ml-[50%] px-4 mt-2 text-[20vw] leading-[0.76] text-mr-cream sm:px-6 sm:text-[14vw] md:w-auto md:translate-x-0 md:ml-0 md:px-0 md:text-[8vw]">
            MAJO&apos;S CLUB
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-mr-cream/60 md:text-base">
            Cada burger o hot dog suma un sello. Junta suficientes y sube de nivel:
            más salsa, más regalos, más morro.
          </p>

          <ul className="mt-8 flex flex-col gap-3">
            {CLUB_TIERS.map((tier) => (
              <li
                key={tier.name}
                className="flex items-center justify-between gap-4 rounded-xl border border-mr-cream/10 bg-mr-black/40 px-4 py-3"
              >
                <div>
                  <p className="font-display text-lg text-mr-cream">{tier.name}</p>
                  <p className="text-xs text-mr-cream/55">{tier.perk}</p>
                </div>
                <span className="shrink-0 font-tag text-sm text-mr-yellow">
                  {tier.stamps}
                </span>
              </li>
            ))}
          </ul>

          <div className="relative mt-8 inline-block">
            <a
              href="#menu"
              className="relative z-10 inline-flex -rotate-1 items-center rounded-full bg-mr-yellow px-6 py-3 font-tag text-sm tracking-wide text-mr-black shadow-[0_4px_0_0_rgba(0,0,0,1)] transition-transform hover:-translate-y-0.5"
            >
              APÚNTATE AL CLUB
            </a>

            <DraggableSticker
              src="/images/sticker-money-bag.gif"
              alt="Sticker de un señor rico con una bolsa de dinero"
              width={480}
              height={480}
              rotate={-10}
              className="-right-16 top-1 w-16 sm:-right-20 sm:w-20"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
