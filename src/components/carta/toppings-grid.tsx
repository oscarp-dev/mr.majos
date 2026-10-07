import { TOPPINGS } from "@/lib/full-menu-data";
import { GraffitiIcon } from "@/components/decorative/graffiti-icon";

export function ToppingsGrid() {
  return (
    <section id="extras" className="scroll-mt-36">
      <div className="mb-6 flex items-end gap-3 border-b border-mr-cream/10 pb-4">
        <GraffitiIcon name="plus" className="size-12 -rotate-6 sm:size-16" />
        <h2 className="font-display text-4xl leading-[0.85] text-mr-cream sm:text-5xl">
          Extras &amp; Toppings
        </h2>
        <span className="ml-auto font-tag text-xs tracking-widest text-mr-yellow/70">
          {String(TOPPINGS.length).padStart(2, "0")}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {TOPPINGS.map((topping) => (
          <div
            key={topping.id}
            className="group flex flex-col items-center gap-2 rounded-xl border border-mr-cream/10 bg-white/[0.03] p-4 text-center transition-colors hover:border-mr-yellow/40"
          >
            <GraffitiIcon
              name={topping.icon}
              className="size-12 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
            />
            <span className="font-tag text-[11px] tracking-wide text-mr-cream/80">
              {topping.name}
            </span>
            <span className="font-tag text-sm text-mr-yellow">
              {topping.price}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
