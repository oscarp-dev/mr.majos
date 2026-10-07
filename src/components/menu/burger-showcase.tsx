"use client";

import Link from "next/link";
import { useState } from "react";
import { SqueezeCarousel, type SqueezeSlide } from "@/components/ui/carousel-squeeze";
import type { ShowcaseBurger } from "@/lib/full-menu-data";

const pad = (n: number) => String(n).padStart(2, "0");

export function BurgerShowcase({ burgers }: { burgers: ShowcaseBurger[] }) {
  const [index, setIndex] = useState(0);

  const slides: SqueezeSlide[] = burgers.map((burger) => ({
    id: burger.id,
    title: burger.name,
    description: burger.description,
    image: burger.image,
    imagePosition: burger.imagePosition,
    imageAlt: `${burger.name} de Mr. Majo's`,
  }));

  return (
    <SqueezeCarousel
      slides={slides}
      label="Burgers de Mr. Majo's"
      // tall enough that the open panel stays the widest (no zoomed side panels)
      height="clamp(380px, 50cqi, 620px)"
      heroRatio={0.8}
      gap={12}
      slatWidth={14}
      slatGap={8}
      radius={20}
      duration={900}
      autoplay
      interval={4500}
      imageSizes="(max-width: 1280px) 45vw, 520px"
      onIndexChange={setIndex}
      controlsStart={
        <span className="font-display text-3xl leading-none text-mr-cream">
          <span className="text-mr-yellow">{pad(index + 1)}</span>
          <span className="text-mr-cream/30"> / {pad(burgers.length)}</span>
        </span>
      }
      renderCaption={(_, i, shown) => {
        const burger = burgers[i];
        return (
          <div className="flex flex-col gap-5 @3xl:flex-row @3xl:items-end @3xl:justify-between @3xl:gap-12">
            <div className="max-w-3xl">
              {burger.tag && (
                <span className="mb-3 inline-block rounded-lg bg-mr-yellow px-2.5 py-1 font-tag text-[11px] leading-tight tracking-wide text-mr-black shadow-[0_2px_0_0_rgba(0,0,0,1)]">
                  {burger.tag}
                </span>
              )}
              <div className="flex flex-wrap items-center gap-4">
                <h3 className="font-display text-5xl leading-[0.85] text-mr-cream @3xl:text-6xl">
                  {burger.name}
                </h3>
                <span className="rotate-6 rounded-full border-2 border-mr-black bg-mr-yellow px-4 py-2 font-tag text-lg text-mr-black shadow-[0_4px_0_0_rgba(0,0,0,1)]">
                  {burger.price}
                </span>
              </div>
              <p className="mt-3 text-base leading-snug text-mr-cream/65">
                {burger.description}
              </p>
            </div>
            <Link
              href={`/carta#${burger.id === "sugar-daddy" ? "insignia" : burger.id}`}
              tabIndex={shown ? 0 : -1}
              className="font-tag inline-flex shrink-0 items-center gap-2 self-start whitespace-nowrap rounded-full border-2 border-mr-cream/20 px-5 py-2.5 text-sm tracking-wide text-mr-cream transition-colors hover:border-mr-yellow hover:text-mr-yellow @3xl:self-end"
            >
              VER EN LA CARTA →
            </Link>
          </div>
        );
      }}
    />
  );
}
