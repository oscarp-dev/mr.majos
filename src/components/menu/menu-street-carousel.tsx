"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { EffectCards, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

import { GraffitiIcon, type GraffitiIconName } from "@/components/decorative/graffiti-icon";
import type { StreetRow } from "./menu-street-list";

const css = `
  .street-cards {
    padding-bottom: 40px !important;
    overflow: visible !important;
  }
  .street-cards .swiper-slide {
    border-radius: 1.25rem;
  }
  .street-cards .swiper-pagination {
    bottom: 0 !important;
  }
  .street-cards .swiper-pagination-bullet {
    background-color: var(--mr-yellow);
    opacity: 0.35;
  }
  .street-cards .swiper-pagination-bullet-active {
    opacity: 1;
    width: 22px;
    border-radius: 999px;
  }
`;

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Mobile version of the street list: a pile of stickers you flick through.
 * Burgers show their photo; the rest get a yellow poster with the category icon.
 */
export function MenuStreetCarousel({
  rows,
  icon,
}: {
  rows: StreetRow[];
  icon?: GraffitiIconName;
}) {
  const [index, setIndex] = useState(0);

  return (
    <div className="relative">
      <style>{css}</style>

      <div className="mb-5 flex items-end justify-between px-1">
        <span className="font-display text-3xl leading-none">
          <span className="text-mr-yellow">{pad(index + 1)}</span>
          <span className="text-mr-cream/30"> / {pad(rows.length)}</span>
        </span>
        <span className="font-tag text-[10px] tracking-widest text-mr-cream/40">
          DESLIZA PARA VER MÁS →
        </span>
      </div>

      <Swiper
        effect="cards"
        grabCursor
        cardsEffect={{ perSlideOffset: 9, perSlideRotate: 4, slideShadows: false }}
        pagination={{ clickable: true }}
        onSlideChange={(s) => setIndex(s.activeIndex)}
        modules={[EffectCards, Pagination]}
        className="street-cards !w-[min(78vw,300px)]"
      >
        {rows.map((row, i) => (
          <SwiperSlide key={row.id}>
            {row.image ? <PhotoCard row={row} /> : <PosterCard row={row} icon={icon} n={i + 1} />}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function PriceSticker({ row }: { row: StreetRow }) {
  return (
    <span className="absolute right-3 top-3 z-10 rotate-6 rounded-full border-2 border-mr-black bg-mr-yellow px-3 py-1.5 font-tag text-base text-mr-black shadow-[0_4px_0_0_rgba(0,0,0,1)]">
      {row.price}
      {row.priceSuffix && <span className="ml-1 text-[10px] opacity-70">{row.priceSuffix}</span>}
    </span>
  );
}

function PhotoCard({ row }: { row: StreetRow }) {
  return (
    <Link
      href={row.href}
      className="relative flex aspect-[4/5.6] flex-col overflow-hidden rounded-[1.25rem] border-4 border-mr-cream bg-[#141414]"
    >
      {/* shots with black headroom get cropped to the burger; tight shots fit whole */}
      <div className="relative aspect-[5/4] w-full shrink-0 bg-mr-black">
        <Image
          src={row.image!}
          alt={`${row.name} de Mr. Majo's`}
          fill
          sizes="300px"
          className={row.headroom ? "object-cover" : "scale-110 object-contain"}
          style={{ objectPosition: row.imagePosition ?? (row.headroom ? "center bottom" : undefined) }}
        />
        <PriceSticker row={row} />
      </div>
      <div className="flex flex-1 flex-col border-t-4 border-mr-cream p-4">
        {row.tag && (
          <span className="mb-2 self-start -rotate-2 rounded-md bg-mr-red px-2 py-0.5 font-tag text-[10px] tracking-wide text-mr-cream">
            {row.tag}
          </span>
        )}
        <h3 className="font-display text-4xl leading-[0.85] text-mr-yellow">{row.name}</h3>
        <p className="mt-2 line-clamp-3 text-xs leading-snug text-mr-cream/70">
          {row.description}
        </p>
      </div>
    </Link>
  );
}

function PosterCard({ row, icon, n }: { row: StreetRow; icon?: GraffitiIconName; n: number }) {
  return (
    <Link
      href={row.href}
      className="relative flex aspect-[4/5.6] flex-col overflow-hidden rounded-[1.25rem] border-4 border-mr-black bg-mr-yellow p-5 text-mr-black"
    >
      <PriceSticker row={row} />
      <span className="font-display text-5xl leading-none text-mr-black/15">{pad(n)}</span>
      {icon && <GraffitiIcon name={icon} className="my-auto size-32 -rotate-6 self-center" />}
      {row.tag && (
        <span className="mb-2 self-start -rotate-2 rounded-md bg-mr-black px-2 py-0.5 font-tag text-[10px] tracking-wide text-mr-yellow">
          {row.tag}
        </span>
      )}
      <h3 className="font-display text-4xl leading-[0.85]">{row.name}</h3>
      <p className="mt-2 line-clamp-2 text-xs leading-snug text-mr-black/70">{row.description}</p>
    </Link>
  );
}
