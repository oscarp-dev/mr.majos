"use client";

import Image from "next/image";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css";

import type { ShowcaseBurger } from "@/lib/full-menu-data";

const css = `
  .menu-coverflow {
    padding-bottom: 44px !important;
  }
  .menu-coverflow .swiper-slide {
    width: 285px;
  }
  .menu-coverflow .swiper-pagination-bullet {
    background-color: #ffc700;
    opacity: 0.4;
  }
  .menu-coverflow .swiper-pagination-bullet-active {
    opacity: 1;
  }
`;

export function MenuMobileCarousel({ items }: { items: ShowcaseBurger[] }) {
  return (
    <div className="relative w-full">
      <style>{css}</style>
      <Swiper
        effect="coverflow"
        grabCursor
        slidesPerView="auto"
        centeredSlides
        loop
        autoplay={{ delay: 2800, disableOnInteraction: true }}
        coverflowEffect={{
          rotate: 35,
          stretch: 0,
          depth: 90,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        className="menu-coverflow"
        modules={[EffectCoverflow, Pagination, Autoplay]}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col overflow-hidden rounded-2xl border-2 border-mr-black bg-black">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="285px"
                  className="object-cover"
                  style={{ objectPosition: item.imagePosition }}
                />
              </div>

              <div className="flex flex-col gap-1.5 bg-[#141414] p-4">
                {item.tag && (
                  <span className="self-start rounded-lg bg-mr-yellow px-2.5 py-1 font-tag text-[10px] leading-tight tracking-wide text-mr-black shadow-[0_2px_0_0_rgba(0,0,0,1)]">
                    {item.tag}
                  </span>
                )}
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-2xl leading-none text-mr-cream">
                    {item.name}
                  </h3>
                  <span className="shrink-0 rotate-3 rounded-full border-2 border-mr-black bg-mr-yellow px-3 py-1 font-tag text-sm text-mr-black shadow-[0_3px_0_0_rgba(0,0,0,1)]">
                    {item.price}
                  </span>
                </div>
                <p className="line-clamp-2 text-sm leading-snug text-mr-cream/60">
                  {item.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
