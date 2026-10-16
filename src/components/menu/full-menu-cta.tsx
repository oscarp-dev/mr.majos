import Link from "next/link";
import { GraffitiIcon } from "@/components/decorative/graffiti-icon";
import { BURGER_SHOWCASE, FULL_MENU, HOME_CATEGORIES } from "@/lib/full-menu-data";

// Lo que el home NO enseña: así el cartel se actualiza solo al tocar la carta.
const totalDishes = FULL_MENU.reduce((n, c) => n + c.items.length, 0) + 1; // + plato insignia
const shownDishes =
  BURGER_SHOWCASE.length +
  HOME_CATEGORIES.filter((c) => c.id !== "burgers").reduce((n, c) => n + c.items.length, 0);
const moreDishes = totalDishes - shownDishes;

const homeIds = new Set(HOME_CATEGORIES.map((c) => c.id));
const hiddenCategories = FULL_MENU.filter((c) => !homeIds.has(c.id));
const hiddenNames = hiddenCategories.map((c) => (c.shortTitle ?? c.title).toLowerCase());
const hiddenList =
  hiddenNames.length > 1
    ? `${hiddenNames.slice(0, -1).join(", ")} y ${hiddenNames.at(-1)}`
    : hiddenNames[0];

/**
 * Cierre del menú del home: un cartelón amarillo que deja claro que lo de
 * arriba es solo una muestra y empuja a la carta completa.
 */
export function FullMenuCta() {
  const marquee = FULL_MENU.map((c) => (c.shortTitle ?? c.title).toUpperCase());

  return (
    <Link
      href="/carta"
      aria-label={`Ver la carta completa: ${moreDishes} platos más`}
      className="group relative block -rotate-1 overflow-hidden rounded-3xl border-4 border-mr-black bg-mr-yellow text-mr-black shadow-[8px_10px_0_0_var(--mr-cream)] transition-[transform,box-shadow] duration-300 hover:rotate-0 hover:shadow-[4px_5px_0_0_var(--mr-cream)] focus-visible:rotate-0 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-mr-yellow md:rotate-[-0.6deg]"
    >
      {/* cinta con todas las secciones de la carta */}
      <div aria-hidden="true" className="overflow-hidden border-b-4 border-mr-black bg-mr-black py-2">
        <div className="animate-marquee flex w-max">
          {[0, 1].map((copy) => (
            <span key={copy} className="font-tag flex shrink-0 text-xs tracking-widest text-mr-yellow">
              {[...marquee, ...marquee].map((name, i) => (
                <span key={i} className="px-3">
                  {name} <span className="pl-3 text-mr-cream/50">★</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between md:gap-10 md:p-10">
        <div>
          <span className="font-tag inline-block -rotate-2 rounded-md bg-mr-red px-2.5 py-1 text-[11px] tracking-widest text-mr-cream">
            ESTO ES SOLO UN ADELANTO
          </span>
          <p className="font-display mt-4 text-[15vw] leading-[0.92] sm:text-7xl md:text-8xl">
            +{moreDishes} PLATOS
            <br />
            MÁS EN LA CARTA
          </p>
          <p className="mt-3 max-w-md text-sm font-medium leading-snug text-mr-black/70 md:text-base">
            Todas las burgers, perritos, acompañamientos y postres
            {hiddenCategories.length > 0 && <>, además de {hiddenList}</>}
            .
          </p>
        </div>

        <div className="flex shrink-0 flex-col items-start gap-5 md:items-end">
          <div aria-hidden="true" className="flex -space-x-1">
            {FULL_MENU.map(
              (c, i) =>
                c.icon && (
                  <GraffitiIcon
                    key={c.id}
                    name={c.icon}
                    className={`size-11 transition-transform duration-300 group-hover:-translate-y-1 md:size-12 ${
                      i % 2 ? "rotate-6" : "-rotate-6"
                    }`}
                  />
                )
            )}
          </div>
          <span className="font-tag inline-flex items-center gap-3 rounded-full bg-mr-black py-2 pl-6 pr-2 text-base tracking-wide text-mr-yellow shadow-[0_5px_0_0_rgba(0,0,0,0.35)] md:text-lg">
            VER LA CARTA COMPLETA
            <span className="grid size-10 place-items-center rounded-full bg-mr-yellow text-xl text-mr-black transition-transform duration-300 group-hover:translate-x-1 group-hover:-rotate-12">
              →
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}
