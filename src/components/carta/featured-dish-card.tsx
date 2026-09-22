import { FEATURED_DISH } from "@/lib/full-menu-data";

export function FeaturedDishCard() {
  return (
    <div className="rounded-3xl border-2 border-mr-yellow bg-gradient-to-br from-[#1c1c1c] to-mr-black p-6 sm:p-8">
      <div className="flex flex-wrap items-center gap-2">
        {FEATURED_DISH.badges.map((badge) => (
          <span
            key={badge}
            className="rounded-full border border-mr-yellow/40 px-3 py-1 font-tag text-[11px] tracking-widest text-mr-yellow"
          >
            {badge}
          </span>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="font-tag text-xs tracking-widest text-mr-yellow/70">
            {FEATURED_DISH.eyebrow}
          </p>
          <h2 className="font-display text-4xl text-mr-cream sm:text-5xl">
            {FEATURED_DISH.name}
          </h2>
        </div>
        <span className="rounded-full border border-mr-yellow px-4 py-1.5 font-tag text-lg text-mr-yellow">
          {FEATURED_DISH.price}
        </span>
      </div>

      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mr-cream/65 sm:text-base">
        {FEATURED_DISH.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {FEATURED_DISH.chips.map((chip) => (
          <span
            key={chip}
            className="rounded-full border border-mr-cream/15 px-3 py-1 font-tag text-[11px] tracking-wide text-mr-cream/70"
          >
            {chip}
          </span>
        ))}
      </div>

      <div className="mt-5 border-t border-mr-cream/10 pt-4">
        <span className="font-tag text-[11px] tracking-widest text-mr-yellow/80">
          ✓ {FEATURED_DISH.footer}
        </span>
      </div>
    </div>
  );
}
