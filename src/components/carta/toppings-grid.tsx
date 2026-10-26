import { getI18n } from "@/i18n/server";
import { GraffitiIcon } from "@/components/decorative/graffiti-icon";
import type { ToppingGroup } from "@/lib/full-menu-data";

function GroupHeading({ group }: { group: ToppingGroup }) {
  return (
    <h3 className="mb-4 flex items-center gap-2.5">
      <GraffitiIcon name={group.icon} className="size-9 -rotate-6" />
      <span className="font-display text-2xl leading-none text-mr-cream sm:text-3xl">{group.title}</span>
    </h3>
  );
}

/** Carnes: pocas y caras, en tarjeta con icono como el resto de la carta. */
function IconCards({ group }: { group: ToppingGroup }) {
  return (
    <div>
      <GroupHeading group={group} />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {group.items.map((topping) => (
          <div
            key={topping.id}
            className="group flex flex-col items-center gap-2 rounded-xl border border-mr-cream/10 bg-white/[0.03] p-4 text-center transition-colors hover:border-mr-yellow/40"
          >
            {topping.icon && (
              <GraffitiIcon
                name={topping.icon}
                className="size-12 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
              />
            )}
            <span className="font-tag text-[11px] tracking-wide text-mr-cream/80">{topping.name}</span>
            <span className="font-tag text-sm text-mr-yellow">{topping.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Ingredientes y salsas: lista de precios con puntos guía, que con tantos se lee mejor. */
function PriceList({ group, twoColumns = false }: { group: ToppingGroup; twoColumns?: boolean }) {
  return (
    <div className="rounded-xl border border-mr-cream/10 bg-white/[0.03] p-5">
      <GroupHeading group={group} />
      <ul className={twoColumns ? "grid grid-cols-1 gap-2.5 lg:grid-cols-2 lg:gap-x-8" : "flex flex-col gap-2.5"}>
        {group.items.map((topping) => (
          <li key={topping.id} className="flex items-baseline gap-2 text-sm">
            <span className="text-mr-cream/80">{topping.name}</span>
            <span aria-hidden="true" className="min-w-4 flex-1 translate-y-[-3px] border-b border-dotted border-mr-cream/20" />
            <span className="font-tag shrink-0 text-mr-yellow">{topping.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function ToppingsGrid() {
  const { t, menu } = await getI18n();
  const [meats, ...lists] = menu.toppings;
  const total = menu.toppings.reduce((n, group) => n + group.items.length, 0);

  return (
    <section id="extras" className="scroll-mt-36">
      <div className="mb-6 flex items-end gap-3 border-b border-mr-cream/10 pb-4">
        <GraffitiIcon name="plus" className="size-12 -rotate-6 sm:size-16" />
        <h2 className="font-display text-4xl leading-[0.85] text-mr-cream sm:text-5xl">
          {t.carta.toppingsTitle}
        </h2>
        <span className="ml-auto font-tag text-xs tracking-widest text-mr-yellow/70">
          {String(total).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-col gap-8">
        <IconCards group={meats} />
        {/* en escritorio los ingredientes (muchos) van a dos columnas y las salsas a una */}
        <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 lg:grid-cols-[2fr_1fr]">
          {lists.map((group, i) => (
            <PriceList key={group.id} group={group} twoColumns={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
