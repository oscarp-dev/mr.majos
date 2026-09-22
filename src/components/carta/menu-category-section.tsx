import type { FullMenuCategory } from "@/lib/full-menu-data";
import { MenuItemCard } from "./menu-item-card";

export function MenuCategorySection({ category }: { category: FullMenuCategory }) {
  return (
    <section id={category.id} className="scroll-mt-24">
      <div className="mb-5 flex items-center gap-3">
        {category.icon && <span className="text-2xl">{category.icon}</span>}
        <div>
          <h2 className="font-display text-2xl text-mr-cream sm:text-3xl">
            {category.title}
          </h2>
          {category.description && (
            <p className="mt-0.5 text-sm text-mr-cream/50">
              {category.description}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {category.items.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
