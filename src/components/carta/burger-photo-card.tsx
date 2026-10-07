import Image from "next/image";
import { cn } from "cn";
import type { FullMenuItem } from "@/lib/full-menu-data";

const TAG_STYLE: Record<string, string> = {
  yellow: "bg-mr-yellow text-mr-black",
  red: "bg-mr-red text-mr-cream",
  green: "bg-emerald-400 text-mr-black",
};

/**
 * Burger con foto de estudio. Las fotos tienen fondo negro puro, así que la
 * zona de foto va sobre `bg-black` y se funde con la tarjeta. `wide` la pone
 * en horizontal (foto a la izquierda) para la Custom Burger, cuya foto es
 * apaisada.
 */
export function BurgerPhotoCard({
  item,
  wide = false,
}: {
  item: FullMenuItem;
  wide?: boolean;
}) {
  const tagClass = TAG_STYLE[item.tagVariant ?? "yellow"];

  return (
    <article
      id={item.id}
      className={cn(
        "group relative flex scroll-mt-36 flex-col overflow-hidden rounded-2xl border-2 bg-[#141414] transition-transform duration-300 hover:-translate-y-1.5",
        item.highlight === "dashed"
          ? "border-dashed border-mr-yellow/60"
          : "border-mr-black",
        wide && "sm:col-span-2 sm:flex-row"
      )}
    >
      <div
        className={cn(
          "relative w-full overflow-hidden bg-black",
          wide ? "aspect-[11/10] sm:w-1/2 sm:shrink-0 sm:self-center" : "aspect-[4/5]"
        )}
      >
        {item.image && (
          <Image
            src={item.image}
            alt={`${item.name} de Mr. Majo's`}
            fill
            sizes={
              wide
                ? "(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 40vw"
                : "(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw"
            }
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            style={{ objectPosition: item.imagePosition }}
          />
        )}
        {!wide && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#141414] to-transparent" />
        )}
      </div>

      <div
        className={cn(
          "flex flex-1 flex-col gap-2 p-5",
          wide && "sm:justify-center sm:p-8"
        )}
      >
        {item.tag && (
          <span
            className={cn(
              "inline-block self-start rounded-lg px-2.5 py-1 font-tag text-[10px] leading-tight tracking-wide shadow-[0_2px_0_0_rgba(0,0,0,1)]",
              tagClass
            )}
          >
            {item.tag}
          </span>
        )}
        <div className="flex items-start justify-between gap-3">
          <h3
            className={cn(
              "font-display leading-[0.9] text-mr-cream",
              wide ? "text-3xl sm:text-5xl" : "text-3xl"
            )}
          >
            {item.name}
          </h3>
          <span className="shrink-0 rotate-3 whitespace-nowrap rounded-full border-2 border-mr-black bg-mr-yellow px-3.5 py-1.5 font-tag text-base text-mr-black shadow-[0_3px_0_0_rgba(0,0,0,1)]">
            {item.price}
            {item.priceSuffix && (
              <span className="ml-1 text-[10px] text-mr-black/70">
                {item.priceSuffix}
              </span>
            )}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-mr-cream/60">
          {item.description}
        </p>

        {(item.footerLeft || item.footerRight) && (
          <div
            className={cn(
              "flex items-center justify-between gap-3 border-t border-mr-cream/10 pt-3 font-tag text-[11px] tracking-wide",
              wide ? "mt-4" : "mt-auto"
            )}
          >
            <span className="text-mr-yellow/80">{item.footerLeft}</span>
            <span className="text-mr-cream/40">{item.footerRight}</span>
          </div>
        )}
      </div>
    </article>
  );
}
