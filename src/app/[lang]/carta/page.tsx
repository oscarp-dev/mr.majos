import type { Metadata } from "next";
import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiteNav } from "@/components/nav/site-nav";
import { SiteFooter } from "@/components/footer/site-footer";
import { FeaturedDishCard } from "@/components/carta/featured-dish-card";
import { MenuCategorySection } from "@/components/carta/menu-category-section";
import { ToppingsGrid } from "@/components/carta/toppings-grid";
import { CartaCategoryNav } from "@/components/carta/carta-category-nav";
import { UnlimitedFriesStrip } from "@/components/promo/unlimited-fries-strip";
import { getI18n } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getI18n();
  return {
    title: t.meta.cartaTitle,
    description: t.meta.cartaDescription,
    alternates: { languages: { es: "/carta", en: "/en/carta" } },
  };
}

export default async function CartaPage() {
  const { t, menu, href } = await getI18n();

  const navCategories = [
    ...menu.categories.map((category) => ({
      id: category.id,
      label: category.shortTitle ?? category.title,
      icon: category.icon,
    })),
    { id: "extras", label: t.carta.extras, icon: "plus" as const },
  ];

  return (
    <>
      <SiteNav />
      <main className="bg-mr-black pb-20 pt-8 md:pt-12">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Link
            href={href("/#menu")}
            className="font-tag inline-flex items-center gap-1 text-xs tracking-wide text-mr-cream/60 transition-colors hover:text-mr-yellow"
          >
            {t.carta.back}
          </Link>

          <div className="relative">
            <h1 className="font-display bleed-full mt-4 px-4 text-[16vw] leading-[0.78] text-mr-cream sm:px-6 sm:text-[11vw] md:px-8 md:text-[7.5vw]">
              {t.carta.title}
              <br />
              <span className="text-mr-yellow">{t.carta.titleAccent}</span>
            </h1>

            <div className="pointer-events-none absolute -top-4 right-2 hidden w-36 rotate-6 overflow-hidden rounded-2xl border-2 border-mr-black shadow-[0_6px_0_0_rgba(0,0,0,1)] md:block lg:w-44">
              <Image
                src="/images/IMG_3614_menu.webp"
                alt={t.carta.heroAlt}
                width={908}
                height={1274}
                preload
                sizes="176px"
                className="h-auto w-full"
              />
            </div>
          </div>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-mr-cream/60 sm:text-base">
            {t.carta.intro}
          </p>

          {/* direct child of the page column so `sticky` spans the whole carta */}
          <CartaCategoryNav categories={navCategories} className="mt-8" />

          <div className="mt-10 flex flex-col gap-20 md:mt-14">
            <FeaturedDishCard />

            {menu.categories.map((category) => (
              <Fragment key={category.id}>
                {/* la promo justo antes de Acompañamientos: el momento de "¿y de acompañar?" */}
                {category.id === "acompanamientos" && <UnlimitedFriesStrip />}
                <MenuCategorySection category={category} />
              </Fragment>
            ))}

            <ToppingsGrid />
          </div>

          <div className="mt-14 flex flex-col gap-2 rounded-2xl border border-dashed border-mr-cream/20 p-5 text-sm leading-relaxed text-mr-cream/60 md:flex-row md:items-center md:justify-between md:gap-8">
            <p>
              <span aria-hidden="true">⚠️ </span>
              {t.carta.allergens}
            </p>
            <p className="font-tag shrink-0 text-xs tracking-widest text-mr-yellow/80">
              {t.carta.vat.toUpperCase()}
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
