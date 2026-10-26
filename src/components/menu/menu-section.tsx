import { FullMenuCta } from "./full-menu-cta";
import { MenuStreetList } from "./menu-street-list";
import { Reveal } from "@/components/motion/reveal";
import { LineartSticker } from "@/components/decorative/lineart-sticker";
import { DraggableSticker } from "@/components/decorative/draggable-sticker";
import { getI18n } from "@/i18n/server";

export async function MenuSection() {
  const { t, menu } = await getI18n();

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
            {t.menu.eyebrow}
          </span>
          <h2 className="font-display bleed-full mt-1 px-4 pt-[0.08em] text-[22vw] leading-[0.76] text-mr-cream sm:px-6 sm:text-[16vw] md:px-8 md:text-[11.5vw]">
            {t.menu.title}
            <br />
            <span className="text-mr-yellow">{t.menu.titleAccent}</span>
          </h2>
        </Reveal>

        <Reveal delay={0.05} className="relative mt-10 md:mt-14">
          <DraggableSticker
            src="/images/sticker-holo-lips.gif"
            alt={t.menu.stickerAlt}
            width={600}
            height={398}
            rotate={9}
            className="-top-16 right-[8%] hidden w-24 md:block"
          />
          <MenuStreetList categories={menu.homeCategories} />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14 md:mt-20">
            <FullMenuCta />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
