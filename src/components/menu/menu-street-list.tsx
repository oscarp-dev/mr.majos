"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, type PointerEvent } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { GraffitiIcon } from "@/components/decorative/graffiti-icon";
import type { HomeCategory, ShowcaseBurger } from "@/lib/full-menu-data";
import { MenuStreetCarousel } from "./menu-street-carousel";

export type StreetRow = {
  id: string;
  name: string;
  description: string;
  price: string;
  priceSuffix?: string;
  tag?: string;
  image?: string;
  imagePosition?: string;
  headroom?: boolean;
  href: string;
};

const pad = (n: number) => String(n).padStart(2, "0");

function toRows(category: HomeCategory, burgers: ShowcaseBurger[]): StreetRow[] {
  if (category.id === "burgers") {
    return burgers.map((b) => ({
      ...b,
      href: `/carta#${b.id === "sugar-daddy" ? "insignia" : b.id}`,
    }));
  }
  return category.items.map((item) => ({ ...item, href: `/carta#${category.id}` }));
}

/**
 * Home menu as a giant street-poster list: outlined names that fill in on
 * hover while the dish follows the cursor as a slapped-on sticker. On touch
 * the row opens in place with the photo instead.
 */
export function MenuStreetList({
  categories,
  burgers,
}: {
  categories: HomeCategory[];
  burgers: ShowcaseBurger[];
}) {
  const [categoryId, setCategoryId] = useState(categories[0].id);
  const category = categories.find((c) => c.id === categoryId) ?? categories[0];
  const rows = toRows(category, burgers);
  const rest = category.total - category.items.length;

  return (
    <div>
      {/* category stickers */}
      <div
        role="tablist"
        aria-label="Categorías de la carta"
        className="-mx-4 flex gap-3 overflow-x-auto px-4 py-3 [scrollbar-width:none] md:mx-0 md:flex-wrap md:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {categories.map((c, i) => {
          const selected = c.id === category.id;
          return (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls="menu-street-panel"
              onClick={() => setCategoryId(c.id)}
              className={`flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-xl border-2 px-4 py-2 font-tag text-sm tracking-wide transition-all duration-200 hover:rotate-0 hover:scale-105 ${
                i % 2 ? "rotate-2" : "-rotate-2"
              } ${
                selected
                  ? "border-mr-black bg-mr-yellow text-mr-black shadow-[0_4px_0_0_rgba(0,0,0,1)]"
                  : "border-dashed border-mr-cream/25 text-mr-cream/70 hover:border-mr-cream/60 hover:text-mr-cream"
              }`}
            >
              {c.icon && <GraffitiIcon name={c.icon} className="-my-2 size-8" />}
              {c.shortTitle ?? c.title}
              <span className={selected ? "text-mr-black/50" : "text-mr-cream/30"}>
                {pad(c.id === "burgers" ? burgers.length : c.items.length)}
              </span>
            </button>
          );
        })}
      </div>

      <div id="menu-street-panel" role="tabpanel" className="mt-8 md:mt-12">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="md:hidden">
              <MenuStreetCarousel rows={rows} icon={category.icon} />
            </div>
            <div className="hidden md:block">
              <StreetList rows={rows} category={category} />
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <span className="font-tag text-xs tracking-widest text-mr-cream/40">
                DESDE {category.from} · LO MÁS PEDIDO
              </span>
              <Link
                href={`/carta#${category.id}`}
                className="font-tag group/more inline-flex items-center gap-2 text-sm tracking-wide text-mr-yellow transition-colors hover:text-mr-cream"
              >
                {rest > 0
                  ? `+${rest} ${category.id === "burgers" ? "BURGERS " : ""}MÁS EN LA CARTA`
                  : "VER EN LA CARTA"}
                <span className="transition-transform group-hover/more:translate-x-1">→</span>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function StreetList({ rows, category }: { rows: StreetRow[]; category: HomeCategory }) {
  const [active, setActive] = useState<number | null>(0);
  const [hovering, setHovering] = useState(false);
  const pointerType = useRef("mouse");
  const listRef = useRef<HTMLUListElement>(null);

  // cursor-following sticker; it leans into the direction it's dragged
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 26, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 260, damping: 26, mass: 0.6 });
  const rotate = useTransform(useVelocity(sx), [-1600, 0, 1600], [-14, -4, 10], {
    clamp: true,
  });

  const track = (e: PointerEvent) => {
    pointerType.current = e.pointerType;
    const box = listRef.current?.getBoundingClientRect();
    if (!box || e.pointerType !== "mouse") return;
    x.set(e.clientX - box.left);
    y.set(e.clientY - box.top);
  };

  const current = active === null ? null : rows[active];

  return (
    <ul
      ref={listRef}
      onPointerMove={track}
      onPointerEnter={(e) => {
        if (e.pointerType !== "mouse") return;
        // start the sticker under the cursor instead of flying in from the corner
        track(e);
        sx.jump(x.get());
        sy.jump(y.get());
        setHovering(true);
      }}
      onPointerLeave={() => setHovering(false)}
      className="relative border-t-2 border-mr-cream/15"
    >
      {/* floating sticker (desktop) */}
      <motion.div
        aria-hidden="true"
        style={{ x: sx, y: sy, rotate }}
        className="pointer-events-none absolute left-0 top-0 z-20 hidden md:block"
      >
        <AnimatePresence>
          {hovering && current && (
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ type: "spring", stiffness: 380, damping: 24 }}
              className="absolute -translate-x-1/2 -translate-y-1/2"
            >
              {current.image ? (
                <div className="relative h-[300px] w-[240px] overflow-hidden rounded-2xl border-4 border-mr-cream bg-mr-black shadow-[8px_10px_0_0_var(--mr-yellow)]">
                  <Image
                    src={current.image}
                    alt=""
                    fill
                    sizes="240px"
                    className="object-cover"
                    style={{ objectPosition: current.imagePosition }}
                  />
                  <span className="absolute -right-1 bottom-3 rotate-6 rounded-l-full border-2 border-r-0 border-mr-black bg-mr-yellow px-3 py-1 font-tag text-base text-mr-black">
                    {current.price}
                  </span>
                </div>
              ) : (
                category.icon && (
                  <GraffitiIcon name={category.icon} className="size-48 drop-shadow-[6px_8px_0_rgba(0,0,0,0.6)]" />
                )
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {rows.map((row, i) => {
        const open = active === i;
        return (
          <li key={row.id} className="border-b-2 border-mr-cream/15">
            <button
              type="button"
              aria-expanded={open}
              onPointerEnter={(e) => e.pointerType === "mouse" && setActive(i)}
              onClick={() =>
                setActive(open && pointerType.current !== "mouse" ? null : i)
              }
              className="group flex w-full cursor-pointer items-center gap-3 py-4 text-left md:gap-6 md:py-5"
            >
              <span
                className={`font-tag w-7 shrink-0 text-xs tracking-widest transition-colors md:w-10 md:text-sm ${
                  open ? "text-mr-yellow" : "text-mr-cream/30"
                }`}
              >
                {pad(i + 1)}
              </span>

              <span className="min-w-0 flex-1">
                <span
                  className={`font-display block truncate text-[11vw] leading-[0.9] transition-all duration-300 sm:text-6xl md:text-7xl lg:text-8xl ${
                    open
                      ? "text-mr-yellow md:translate-x-4"
                      : "text-mr-cream md:text-transparent md:[-webkit-text-stroke:1.5px_var(--mr-cream)]"
                  }`}
                >
                  {row.name}
                </span>
              </span>

              {row.tag && (
                <span
                  className={`hidden shrink-0 rounded-md px-2 py-1 font-tag text-[10px] tracking-wide transition-colors lg:inline-block ${
                    open ? "bg-mr-red text-mr-cream" : "bg-mr-cream/10 text-mr-cream/50"
                  }`}
                >
                  {row.tag}
                </span>
              )}

              <span
                className={`shrink-0 whitespace-nowrap rounded-full border-2 px-3 py-1 font-tag text-sm transition-all duration-300 md:px-4 md:py-1.5 md:text-base ${
                  open
                    ? "rotate-6 border-mr-black bg-mr-yellow text-mr-black shadow-[0_4px_0_0_rgba(0,0,0,1)]"
                    : "border-mr-cream/20 text-mr-cream/70"
                }`}
              >
                {row.price}
                {row.priceSuffix && (
                  <span className="ml-1 text-[10px] opacity-70">{row.priceSuffix}</span>
                )}
              </span>
            </button>

            {/* details: open row (description everywhere, photo on touch) */}
            <div
              className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="flex gap-4 pb-5 pl-10 md:pl-[4.5rem] md:pr-[40%]">
                  {row.image && (
                    <div className="relative aspect-[4/5] w-28 shrink-0 -rotate-3 overflow-hidden rounded-xl border-2 border-mr-cream bg-mr-black shadow-[4px_5px_0_0_var(--mr-yellow)] md:hidden">
                      <Image
                        src={row.image}
                        alt={`${row.name} de Mr. Majo's`}
                        fill
                        sizes="112px"
                        className="object-cover"
                        style={{ objectPosition: row.imagePosition }}
                      />
                    </div>
                  )}
                  <div>
                    {row.tag && (
                      <span className="mb-2 inline-block rounded-md bg-mr-red px-2 py-0.5 font-tag text-[10px] tracking-wide text-mr-cream lg:hidden">
                        {row.tag}
                      </span>
                    )}
                    <p className="text-sm leading-snug text-mr-cream/65 md:text-base">
                      {row.description}
                    </p>
                    <Link
                      href={row.href}
                      tabIndex={open ? 0 : -1}
                      className="font-tag mt-3 inline-flex items-center gap-2 text-xs tracking-widest text-mr-yellow hover:text-mr-cream"
                    >
                      VER EN LA CARTA →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
