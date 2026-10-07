"use client";

import { useEffect, useRef, useState } from "react";
import AnimatedBackground from "@/components/ui/animated-tabs";
import { cn } from "@/lib/utils";
import { GraffitiIcon, type GraffitiIconName } from "@/components/decorative/graffiti-icon";

type NavCategory = { id: string; label: string; icon?: GraffitiIconName };

/**
 * Sticky category bar for /carta. The yellow pill slides to whichever section
 * is in view (scroll-spy) and to whatever the user taps. Sits just under the
 * site nav (62px mobile / 70px md).
 */
export function CartaCategoryNav({
  categories,
  className,
}: {
  categories: NavCategory[];
  className?: string;
}) {
  const [active, setActive] = useState(categories[0]?.id);
  const scroller = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = categories
      .map((c) => document.getElementById(c.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      // a thin band a third of the way down the viewport
      { rootMargin: "-30% 0px -65% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [categories]);

  // keep the active pill in view on narrow screens without touching page scroll
  useEffect(() => {
    const bar = scroller.current;
    const pill = bar?.querySelector<HTMLElement>(`[data-id="${active}"]`);
    if (!bar || !pill) return;
    bar.scrollTo({
      left: pill.offsetLeft - bar.clientWidth / 2 + pill.clientWidth / 2,
      behavior: "smooth",
    });
  }, [active]);

  return (
    <div
      className={cn(
        "sticky top-[62px] z-40 -mx-4 border-b border-mr-cream/10 bg-mr-black/90 px-4 py-3 backdrop-blur-md md:top-[70px] md:-mx-8 md:px-8",
        className
      )}
    >
      <div
        ref={scroller}
        className="relative flex gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <AnimatedBackground
          defaultValue={active}
          onValueChange={(id) => id && setActive(id)}
          className="rounded-full border-2 border-mr-black bg-mr-yellow shadow-[0_3px_0_0_rgba(0,0,0,1)]"
          transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
        >
          {categories.map((category) => (
            <a
              key={category.id}
              data-id={category.id}
              href={`#${category.id}`}
              className="shrink-0 items-center whitespace-nowrap rounded-full px-4 py-2 font-tag text-xs tracking-wide text-mr-cream/70 transition-colors duration-200 hover:text-mr-cream data-[checked=true]:text-mr-black"
            >
              {category.icon && (
                <GraffitiIcon name={category.icon} className="-my-1 mr-1.5 size-6" />
              )}
              {category.label}
            </a>
          ))}
        </AnimatedBackground>
      </div>
    </div>
  );
}
