import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteNav } from "@/components/nav/site-nav";
import { SiteFooter } from "@/components/footer/site-footer";
import { FeaturedDishCard } from "@/components/carta/featured-dish-card";
import { MenuCategorySection } from "@/components/carta/menu-category-section";
import { ToppingsGrid } from "@/components/carta/toppings-grid";
import { CartaCategoryNav } from "@/components/carta/carta-category-nav";
import { FULL_MENU } from "@/lib/full-menu-data";

export const metadata: Metadata = {
  title: "La Carta Completa — Mr. Majo's",
  description:
    "Toda la carta de Mr. Majo's: burgers, perritos gigantes, acompañamientos, veggie & kids, postres, bebidas y extras.",
};

const NAV_CATEGORIES = [
  ...FULL_MENU.map((category) => ({
    id: category.id,
    label: category.shortTitle ?? category.title,
    icon: category.icon,
  })),
  { id: "extras", label: "Extras", icon: "plus" as const },
];

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

          <div className="relative">
            <h1 className="font-display bleed-full mt-4 px-4 text-[16vw] leading-[0.78] text-mr-cream sm:px-6 sm:text-[11vw] md:px-8 md:text-[7.5vw]">
              LA CARTA
              <br />
              <span className="text-mr-yellow">COMPLETA</span>
            </h1>

            <div className="pointer-events-none absolute -top-4 right-2 hidden w-36 rotate-6 overflow-hidden rounded-2xl border-2 border-mr-black shadow-[0_6px_0_0_rgba(0,0,0,1)] md:block lg:w-44">
              <Image
                src="/images/IMG_3614_menu.PNG"
                alt="Burger de Mr. Majo's con huevo y bacon y su banderita"
                width={908}
                height={1274}
                priority
                sizes="176px"
                className="h-auto w-full"
              />
            </div>
          </div>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-mr-cream/60 sm:text-base">
            Smash de ternera, vaca madurada 30 días, pollo crunchy y pan brioche
            artesano. Todo lo que sale de nuestra plancha, sin filtros.
          </p>

          {/* direct child of the page column so `sticky` spans the whole carta */}
          <CartaCategoryNav categories={NAV_CATEGORIES} className="mt-8" />

          <div className="mt-10 flex flex-col gap-20 md:mt-14">
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
