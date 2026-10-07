import Link from "next/link";
import { BURGER_SHOWCASE, HOME_CATEGORIES } from "@/lib/full-menu-data";
import { MenuStreetList } from "./menu-street-list";
import { Reveal } from "@/components/motion/reveal";
import { LineartSticker } from "@/components/decorative/lineart-sticker";
import { DraggableSticker } from "@/components/decorative/draggable-sticker";

export function MenuSection() {
  return (
    <section id="menu" className="relative overflow-hidden bg-mr-black py-20 md:py-28">
      <LineartSticker
        variant="white"
        size={140}
        rotate="rotate-12"
        className="pointer-events-none absolute -right-6 top-10 hidden w-32 opacity-20 md:block"
      />

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <span className="font-tag relative z-10 block px-4 text-xs tracking-widest text-mr-yellow/70 sm:px-6 md:px-8">
            UN ADELANTO DE LA CARTA
          </span>
          <h2 className="font-display bleed-full mt-1 px-4 pt-[0.08em] text-[22vw] leading-[0.76] text-mr-cream sm:px-6 sm:text-[16vw] md:px-8 md:text-[11.5vw]">
            EL MENÚ
            <br />
            <span className="text-mr-yellow">QUE MÁS CHORREA</span>
          </h2>
        </Reveal>

        <Reveal delay={0.05} className="relative mt-10 md:mt-14">
          <DraggableSticker
            src="/images/sticker-holo-lips.gif"
            alt="Sticker labios holográficos"
            width={600}
            height={398}
            rotate={9}
            className="-top-16 right-[8%] hidden w-24 md:block"
          />
          <MenuStreetList categories={HOME_CATEGORIES} burgers={BURGER_SHOWCASE} />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 flex justify-center md:mt-16">
            <Link
              href="/carta"
              className="font-tag inline-flex items-center gap-2 rounded-full border-2 border-mr-black bg-mr-yellow px-6 py-3 text-sm tracking-wide text-mr-black shadow-[0_4px_0_0_rgba(0,0,0,1)] transition-transform hover:-translate-y-0.5"
            >
              VER LA CARTA COMPLETA →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
