"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedBackground from "@/components/ui/animated-tabs";
import { GraffitiIcon } from "@/components/decorative/graffiti-icon";
import type { FullMenuCategory, HomeCategory, ShowcaseBurger } from "@/lib/full-menu-data";
import { BurgerShowcase } from "./burger-showcase";
import { MenuMobileCarousel } from "./menu-mobile-carousel";

const shortTitle = (category: FullMenuCategory) => category.shortTitle ?? category.title;

/** "+6 burgers más en la carta" — or a plain link when the sample is the whole category. */
function MoreLink({ category, shown }: { category: HomeCategory; shown: number }) {
  const rest = category.total - shown;
  const what = category.id === "burgers" ? "BURGERS " : "";
  return (
    <Link
      href={`/carta#${category.id}`}
      className="font-tag group/more inline-flex items-center gap-2 text-sm tracking-wide text-mr-yellow transition-colors hover:text-mr-cream"
    >
      {rest > 0 ? `+${rest} ${what}MÁS EN LA CARTA` : "VER EN LA CARTA"}
      <span className="transition-transform group-hover/more:translate-x-1">→</span>
    </Link>
  );
}

/**
 * Home menu: a SAMPLE of the carta (the full list lives on /carta). One tab
 * per picked category so burgers and the rest read as the same menu; burgers
 * keep the photo carousel, the others get a poster + menu-board list.
 */
export function MenuTabs({
  categories,
  burgers,
}: {
  categories: HomeCategory[];
  burgers: ShowcaseBurger[];
}) {
  const [active, setActive] = useState(categories[0].id);
  const category = categories.find((c) => c.id === active) ?? categories[0];

  return (
    <div>
      <div
        role="tablist"
        aria-label="Categorías de la carta"
        className="-mx-4 flex gap-1 overflow-x-auto px-4 pb-2 [scrollbar-width:none] md:mx-0 md:flex-wrap md:px-0 [&::-webkit-scrollbar]:hidden"
      >
        <AnimatedBackground
          defaultValue={active}
          onValueChange={(id) => id && setActive(id)}
          className="rounded-full border-2 border-mr-black bg-mr-yellow shadow-[0_3px_0_0_rgba(0,0,0,1)]"
          transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
        >
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              role="tab"
              data-id={c.id}
              aria-controls="menu-tab-panel"
              className="shrink-0 cursor-pointer items-center whitespace-nowrap rounded-full px-4 py-2.5 font-tag text-sm tracking-wide text-mr-cream/70 transition-colors duration-200 hover:text-mr-cream data-[checked=true]:text-mr-black"
            >
              {c.icon && <GraffitiIcon name={c.icon} className="-my-1.5 mr-2 size-8" />}
              {shortTitle(c)}
            </button>
          ))}
        </AnimatedBackground>
      </div>

      <div id="menu-tab-panel" role="tabpanel" className="mt-8 md:mt-10">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {category.id === "burgers" ? (
              <>
                <div className="md:hidden">
                  <MenuMobileCarousel items={burgers} />
                </div>
                <div className="hidden md:block">
                  <BurgerShowcase burgers={burgers} />
                </div>
                <div className="mt-8 border-t border-mr-cream/10 pt-5">
                  {/* the showcase adds the Sugar Daddy on top of the picked burgers */}
                  <MoreLink category={category} shown={category.items.length} />
                </div>
              </>
            ) : (
              <CategoryPanel category={category} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function CategoryPanel({ category }: { category: HomeCategory }) {
  return (
    <div className="grid gap-8 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-12">
      {/* poster */}
      <div className="relative flex flex-col overflow-hidden rounded-3xl border-2 border-mr-black bg-mr-yellow p-6 text-mr-black shadow-[0_6px_0_0_rgba(0,0,0,1)] sm:p-8 md:min-h-[440px]">
        <span className="font-tag text-xs tracking-widest text-mr-black/70">
          LO MÁS PEDIDO · DESDE {category.from}
        </span>

        {category.icon && (
          <GraffitiIcon
            name={category.icon}
            className="my-6 size-32 -rotate-6 self-center sm:size-40 md:my-auto md:size-52"
          />
        )}

        <h3 className="font-display text-5xl leading-[0.85] sm:text-6xl">
          {shortTitle(category)}
        </h3>
        {category.description && (
          <p className="mt-3 text-sm leading-snug text-mr-black/70">{category.description}</p>
        )}

        <Link
          href={`/carta#${category.id}`}
          className="font-tag mt-6 inline-flex items-center gap-2 self-start rounded-full border-2 border-mr-black bg-mr-black px-5 py-2.5 text-sm tracking-wide text-mr-yellow transition-transform hover:-translate-y-0.5"
        >
          VER EN LA CARTA →
        </Link>
      </div>

      {/* menu board */}
      <ul className="flex flex-col">
        {category.items.map((item) => (
          <li key={item.id} className="group border-b border-mr-cream/10 py-4 first:pt-0">
            <Link href={`/carta#${category.id}`} className="block">
              <div className="flex items-end gap-3">
                <h4 className="font-display text-2xl leading-[0.9] text-mr-cream transition-colors group-hover:text-mr-yellow md:text-3xl">
                  {item.name}
                </h4>
                <span
                  aria-hidden="true"
                  className="mb-1.5 hidden min-w-6 flex-1 border-b-2 border-dotted border-mr-cream/20 sm:block"
                />
                <span className="ml-auto shrink-0 rotate-3 whitespace-nowrap rounded-full border-2 border-mr-black bg-mr-yellow px-3 py-1 font-tag text-sm text-mr-black shadow-[0_3px_0_0_rgba(0,0,0,1)] sm:ml-0">
                  {item.price}
                  {item.priceSuffix && (
                    <span className="ml-1 text-[10px] text-mr-black/70">{item.priceSuffix}</span>
                  )}
                </span>
              </div>
              <p className="mt-2 line-clamp-2 text-sm leading-snug text-mr-cream/60">
                {item.tag && (
                  <span className="mr-2 inline-block rounded-md bg-mr-cream/10 px-1.5 py-0.5 align-[1px] font-tag text-[10px] tracking-wide text-mr-yellow">
                    {item.tag}
                  </span>
                )}
                {item.description}
              </p>
            </Link>
          </li>
        ))}
        <li className="pt-5">
          <MoreLink category={category} shown={category.items.length} />
        </li>
      </ul>
    </div>
  );
}
