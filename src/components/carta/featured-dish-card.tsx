import Image from "next/image";
import { getI18n } from "@/i18n/server";

export async function FeaturedDishCard() {
  const { t, menu } = await getI18n();
  const dish = menu.featured;

  return (
    <article
      id="insignia"
      className="grid scroll-mt-36 overflow-hidden rounded-3xl border-2 border-mr-yellow bg-black md:grid-cols-2"
    >
      <div className="relative order-first aspect-[4/5] w-full sm:mx-auto sm:max-w-md md:order-last md:max-w-none md:aspect-auto md:min-h-[560px]">
        <Image
          src={dish.image}
          alt={t.menu.dishAlt(dish.name)}
          fill
          preload
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover md:object-contain"
        />
        {/* fade into the copy column so the black backdrop reads as one surface */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent md:inset-y-0 md:left-0 md:right-auto md:h-auto md:w-24 md:bg-gradient-to-r" />
        <span className="absolute right-4 top-4 rotate-6 rounded-full border-2 border-mr-black bg-mr-yellow px-5 py-2.5 font-tag text-xl text-mr-black shadow-[0_4px_0_0_rgba(0,0,0,1)]">
          {dish.price}
        </span>
      </div>

      <div className="flex flex-col justify-center p-6 sm:p-10">
        <div className="flex flex-wrap items-center gap-2">
          {dish.badges.map((badge, i) => (
            <span
              key={badge}
              className={
                i === 0
                  ? "-rotate-2 rounded-xl bg-mr-yellow px-3 py-1 font-tag text-[11px] tracking-wide text-mr-black shadow-[0_3px_0_0_rgba(0,0,0,1)]"
                  : "rounded-full border border-mr-yellow/40 px-3 py-1 font-tag text-[11px] tracking-widest text-mr-yellow"
              }
            >
              {badge}
            </span>
          ))}
        </div>

        <p className="mt-6 font-tag text-xs tracking-widest text-mr-yellow/70">
          {dish.eyebrow}
        </p>
        <h2 className="font-display text-6xl leading-[0.82] text-mr-cream sm:text-7xl lg:text-8xl">
          {dish.name}
        </h2>

        <p className="mt-5 max-w-xl text-sm leading-relaxed text-mr-cream/65 sm:text-base">
          {dish.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {dish.chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-mr-cream/15 px-3 py-1 font-tag text-[11px] tracking-wide text-mr-cream/70"
            >
              {chip}
            </span>
          ))}
        </div>

        <div className="mt-6 border-t border-mr-cream/10 pt-4">
          <span className="font-tag text-[11px] tracking-widest text-mr-yellow/80">
            ✓ {dish.footer}
          </span>
        </div>
      </div>
    </article>
  );
}
