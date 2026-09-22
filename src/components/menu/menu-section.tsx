import Link from "next/link";
import { MENU_ITEMS } from "@/lib/site-data";
import { MenuCard } from "./menu-card";
import { MenuMobileCarousel } from "./menu-mobile-carousel";
import { Reveal } from "@/components/motion/reveal";
import { LineartSticker } from "@/components/decorative/lineart-sticker";

const RUNNING_LIST = MENU_ITEMS.map((item) => item.name.toUpperCase()).join(" / ");

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
          <span className="font-tag px-4 text-xs tracking-widest text-mr-yellow/70 sm:px-6 md:px-8">
            LOS DESTACADOS
          </span>
          <h2 className="font-display bleed-full px-4 text-[22vw] leading-[0.76] text-mr-cream sm:px-6 sm:text-[16vw] md:px-8 md:text-[11.5vw]">
            EL MENÚ
            <br />
            <span className="text-mr-yellow">QUE MÁS CHORREA</span>
          </h2>
        </Reveal>

        <p className="mt-4 max-w-md text-sm leading-relaxed text-mr-cream/60 md:mt-5">
          {RUNNING_LIST}
        </p>

        <div className="mt-12 sm:hidden">
          <MenuMobileCarousel items={MENU_ITEMS} />
        </div>

        <div className="mt-12 hidden grid-cols-1 gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:mt-16">
          {MENU_ITEMS.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.05}>
              <MenuCard item={item} />
            </Reveal>
          ))}
        </div>

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
