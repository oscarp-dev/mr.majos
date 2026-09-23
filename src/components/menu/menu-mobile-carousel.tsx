"use client";

import Image from "next/image";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css";

import type { MenuItem } from "@/lib/site-data";

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

export function MenuMobileCarousel({ items }: { items: MenuItem[] }) {
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
            <div className="flex flex-col overflow-hidden rounded-2xl border-2 border-mr-black bg-[#141414]">
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="285px"
                  className="object-cover"
                />
                {item.tag && (
                  <span className="absolute left-3 top-3 -rotate-3 rounded-full bg-mr-yellow px-3 py-1 font-tag text-[10px] tracking-wide text-mr-black shadow-[0_3px_0_0_rgba(0,0,0,1)]">
                    {item.tag}
                  </span>
                )}
                <span className="absolute -right-2 -top-2 rotate-6 rounded-full border-2 border-mr-black bg-mr-yellow px-3 py-1.5 font-tag text-sm text-mr-black shadow-[0_4px_0_0_rgba(0,0,0,1)]">
                  {item.price}
                </span>
              </div>

              <div className="flex flex-col gap-1.5 p-4">
                <h3 className="font-display text-2xl leading-none text-mr-cream">
                  {item.name}
                </h3>
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
