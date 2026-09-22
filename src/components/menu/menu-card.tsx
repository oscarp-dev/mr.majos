"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "cn";
import type { MenuItem } from "@/lib/site-data";
import { DraggableSticker } from "@/components/decorative/draggable-sticker";

export function MenuCard({ item }: { item: MenuItem }) {
  return (
    <div className="relative">
      <motion.div
        whileHover={{ y: -6, rotate: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={cn(
          "group relative flex flex-col overflow-hidden rounded-2xl border-2 border-mr-black bg-[#141414]",
          item.rotate
        )}
      >
        <div className="relative aspect-square w-full overflow-hidden">
          <Image
            src={item.image}
            alt={item.name}
            fill
            loading="lazy"
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {item.tag && (
            <span className="absolute left-3 top-3 inline-block max-w-[60%] -rotate-3 rounded-xl bg-mr-yellow px-3 py-1 font-tag text-[11px] leading-tight text-mr-black shadow-[0_3px_0_0_rgba(0,0,0,1)]">
              {item.tag}
            </span>
          )}
          <span className="absolute -right-2 -top-2 rotate-6 rounded-full border-2 border-mr-black bg-mr-yellow px-4 py-2 font-tag text-base text-mr-black shadow-[0_4px_0_0_rgba(0,0,0,1)]">
            {item.price}
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-1.5 p-5">
          <h3 className="font-display text-2xl leading-none text-mr-cream">
            {item.name}
          </h3>
          <p className="text-sm leading-snug text-mr-cream/65">{item.description}</p>
        </div>
      </motion.div>

      {item.id === "sugarmommy" && (
        <DraggableSticker
          src="/images/sticker-holo-lips.gif"
          alt="Sticker labios holográficos"
          width={600}
          height={398}
          rotate={9}
          className="-right-4 top-[36%] w-20 sm:w-24"
        />
      )}
    </div>
  );
}
