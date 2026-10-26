import type { FullMenuCategory } from "@/lib/full-menu-data";
import { BurgerPhotoCard } from "./burger-photo-card";
import { MenuItemCard } from "./menu-item-card";
import { GraffitiIcon } from "@/components/decorative/graffiti-icon";
import { DrinkGroups } from "./drink-groups";

export function MenuCategorySection({ category }: { category: FullMenuCategory }) {
  const count = category.groups
    ? category.groups.reduce((n, g) => n + g.sections.reduce((m, s) => m + s.items.length, 0), 0)
    : category.items.length;

  return (
    <section id={category.id} className="scroll-mt-36">
      <div className="mb-6 flex items-end gap-3 border-b border-mr-cream/10 pb-4">
        {category.icon && (
          <GraffitiIcon name={category.icon} className="size-12 -rotate-6 sm:size-16" />
        )}
        <div className="min-w-0">
          {/* títulos largos de una sola palabra: en móviles de 320px no caben a text-4xl */}
          <h2 className="font-display text-4xl leading-[0.85] text-mr-cream break-words max-[359px]:text-[1.7rem] sm:text-5xl">
            {category.title}
          </h2>
          {category.description && (
            <p className="mt-1.5 text-sm text-mr-cream/50">
              {category.description}
            </p>
          )}
        </div>
        <span className="ml-auto font-tag text-xs tracking-widest text-mr-yellow/70">
          {String(count).padStart(2, "0")}
        </span>
      </div>

      {category.groups ? (
        <DrinkGroups groups={category.groups} />
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {category.items.map((item) =>
            item.image ? (
              <BurgerPhotoCard
                key={item.id}
                item={item}
                wide={item.id === "custom-burger"}
              />
            ) : (
              <MenuItemCard key={item.id} item={item} />
            )
          )}
        </div>
      )}
    </section>
  );
}
