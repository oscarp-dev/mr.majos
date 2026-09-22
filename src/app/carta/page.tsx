import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/nav/site-nav";
import { SiteFooter } from "@/components/footer/site-footer";
import { FeaturedDishCard } from "@/components/carta/featured-dish-card";
import { MenuCategorySection } from "@/components/carta/menu-category-section";
import { ToppingsGrid } from "@/components/carta/toppings-grid";
import { FULL_MENU } from "@/lib/full-menu-data";

export const metadata: Metadata = {
  title: "La Carta Completa — Mr. Majo's",
  description:
    "Toda la carta de Mr. Majo's: burgers, perritos gigantes, acompañamientos, veggie & kids, postres, bebidas y extras.",
};

export default function CartaPage() {
  return (
    <>
      <SiteNav />
      <main className="bg-mr-black pb-20 pt-8 md:pt-12">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Link
            href="/#menu"
            className="font-tag inline-flex items-center gap-1 text-xs tracking-wide text-mr-cream/60 transition-colors hover:text-mr-yellow"
          >
            ← VOLVER AL INICIO
          </Link>

          <h1 className="font-display bleed-full mt-4 px-4 text-[16vw] leading-[0.78] text-mr-cream sm:px-6 sm:text-[11vw] md:px-8 md:text-[7.5vw]">
            LA CARTA
            <br />
            <span className="text-mr-yellow">COMPLETA</span>
          </h1>

          <nav className="mt-8 flex flex-wrap gap-2">
            {FULL_MENU.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="rounded-full border border-mr-cream/15 px-4 py-1.5 font-tag text-xs tracking-wide text-mr-cream/70 transition-colors hover:border-mr-yellow hover:text-mr-yellow"
              >
                {category.icon} {category.title}
              </a>
            ))}
            <a
              href="#extras"
              className="rounded-full border border-mr-cream/15 px-4 py-1.5 font-tag text-xs tracking-wide text-mr-cream/70 transition-colors hover:border-mr-yellow hover:text-mr-yellow"
            >
              ➕ Extras
            </a>
          </nav>

          <div className="mt-12 flex flex-col gap-16 md:mt-16">
            <FeaturedDishCard />

            {FULL_MENU.map((category) => (
              <MenuCategorySection key={category.id} category={category} />
            ))}

            <ToppingsGrid />
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
