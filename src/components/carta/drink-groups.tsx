import { ChevronDown } from "lucide-react";
import { getI18n } from "@/i18n/server";
import type { DrinkGroup } from "@/lib/full-menu-data";
import { OpenDetailsOnHash } from "./open-details-on-hash";

// "3,90€ / 14,90€" → 3.9: para el "desde" vale el primer precio
const firstPrice = (price: string) => Number(price.match(/\d+(?:,\d+)?/)?.[0].replace(",", ".") ?? 0);
const formatPrice = (n: number) => `${n.toFixed(2).replace(".", ",")}€`;

/**
 * Bebidas plegadas por grupo: a la vista solo el título, cuántas hay y desde
 * cuánto; al tocar se abre la lista de precios. <details> nativo, sin JS; solo
 * para llegar por ancla abierto (/carta#margaritas-frozen) hace falta OpenDetailsOnHash.
 */
export async function DrinkGroups({ groups }: { groups: DrinkGroup[] }) {
  const { t } = await getI18n();

  return (
    <div className="grid grid-cols-1 items-start gap-3 md:grid-cols-2 md:gap-4">
      <OpenDetailsOnHash />
      {groups.map((group) => {
        const items = group.sections.flatMap((s) => s.items);
        const from = formatPrice(Math.min(...items.map((i) => firstPrice(i.price))));

        return (
          <details
            key={group.id}
            id={group.id}
            className="group scroll-mt-36 rounded-xl border border-mr-cream/10 bg-white/[0.03] transition-colors open:border-mr-yellow/40 hover:border-mr-yellow/40"
          >
            <summary className="flex cursor-pointer list-none items-center gap-3 p-5 [&::-webkit-details-marker]:hidden">
              <span className="min-w-0 flex-1">
                <span className="block font-display text-2xl leading-none text-mr-cream sm:text-3xl">
                  {group.title}
                </span>
                <span className="mt-1.5 block font-tag text-[11px] tracking-widest text-mr-yellow/80">
                  {t.carta.drinksSummary(items.length, from)}
                </span>
              </span>
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-mr-cream/20 text-mr-cream transition-[rotate,background-color,color] duration-300 group-open:rotate-180 group-open:border-mr-yellow group-open:bg-mr-yellow group-open:text-mr-black">
                <ChevronDown className="size-5" strokeWidth={2.5} aria-hidden="true" />
              </span>
            </summary>

            <div className="flex flex-col gap-5 border-t border-mr-cream/10 px-5 pb-5 pt-4">
              {group.sections.map((section, i) => (
                <div key={section.title ?? i}>
                  {section.title && (
                    <p className="mb-2.5 font-tag text-[11px] tracking-widest text-mr-cream/50">{section.title}</p>
                  )}
                  <ul className="flex flex-col gap-2.5">
                    {section.items.map((item) => (
                      <li key={item.id} className="flex items-baseline gap-2 text-sm">
                        <span className="text-mr-cream/80">
                          {item.name}
                          {item.detail && <span className="block text-xs text-mr-cream/45">{item.detail}</span>}
                        </span>
                        <span aria-hidden="true" className="min-w-4 flex-1 translate-y-[-3px] border-b border-dotted border-mr-cream/20" />
                        <span className="font-tag shrink-0 text-mr-yellow">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </details>
        );
      })}
    </div>
  );
}
