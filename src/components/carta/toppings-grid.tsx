import { TOPPINGS } from "@/lib/full-menu-data";

export function ToppingsGrid() {
  return (
    <section id="extras" className="scroll-mt-24">
      <div className="mb-5 flex items-center gap-3">
        <span className="text-2xl">➕</span>
        <h2 className="font-display text-2xl text-mr-cream sm:text-3xl">
          Extras &amp; Toppings
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {TOPPINGS.map((topping) => (
          <div
            key={topping.id}
            className="flex flex-col items-center gap-1.5 rounded-xl border border-mr-cream/10 bg-white/[0.03] p-4 text-center"
          >
            <span className="text-2xl">{topping.icon}</span>
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
