import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { cn } from "cn";
import { ArrowRight, Clock } from "lucide-react";
import { MENU_DEL_DIA, ORDER_LINKS } from "@/lib/site-data";
import { SiteNav } from "@/components/nav/site-nav";
import { WarningMarquee } from "@/components/marquee/warning-marquee";
import { HeroSection } from "@/components/hero/hero-section";
import { MenuSection } from "@/components/menu/menu-section";
import { ParallaxBanner } from "@/components/parallax/parallax-banner";
import { ClubSection } from "@/components/club/club-section";
import { OrderBanner } from "@/components/order/order-banner";
import { SiteFooter } from "@/components/footer/site-footer";
import { MargaritaSection } from "@/components/promo/margarita-section";
import { getI18n } from "@/i18n/server";
import { BrandSticker } from "@/components/decorative/brand-sticker";
import { jsonLdScript, pageMetadata, restaurantJsonLd } from "@/lib/seo";

const InstagramSection = dynamic(
  () => import("@/components/instagram/instagram-section")
);

export async function generateMetadata(): Promise<Metadata> {
  const { lang, t } = await getI18n();
  return pageMetadata({ lang, path: "/", title: t.meta.title, description: t.meta.description });
}

export default async function Home() {
  const { lang, t } = await getI18n();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(restaurantJsonLd(lang, t.meta.description)) }}
      />
      <SiteNav />
      <main>
        <HeroSection />
        <WarningMarquee texts={t.marquee} />
        <MenuSection />
        <ParallaxBanner
          src="/images/foto-burger-menu-del-dia.webp"
          alt={t.menuDelDia.imageAlt}
          objectPosition="center 35%"
          eyebrow={t.menuDelDia.daysLabel}
          heading={
            <>
              {t.menuDelDia.heading}
              <br />
              <span className="mt-[0.12em] inline-block text-mr-yellow">{MENU_DEL_DIA.price}.</span>
              <span className="mt-4 flex flex-wrap items-center gap-2 font-tag text-[3.2vw] leading-none tracking-wide sm:text-[1.8vw] md:mt-5 md:text-base">
                {t.menuDelDia.days.map((day, i) => (
                  <span
                    key={day}
                    className={cn(
                      "rounded-lg border-2 border-mr-black bg-mr-cream px-2.5 py-1.5 text-mr-black shadow-[0_3px_0_0_rgba(0,0,0,1)]",
                      i % 2 ? "rotate-3" : "-rotate-2"
                    )}
                  >
                    {day}
                  </span>
                ))}
                <span className="inline-flex items-center gap-1.5 rounded-lg border-2 border-dashed border-mr-yellow px-2.5 py-1.5 text-mr-yellow">
                  <Clock className="size-[1em]" strokeWidth={3} />
                  {MENU_DEL_DIA.from} – {MENU_DEL_DIA.to}
                </span>
              </span>
              <span className="mt-3 inline-flex -rotate-2 items-center rounded-full border-2 border-mr-black bg-mr-yellow px-4 py-1.5 font-tag text-[2.6vw] tracking-wide text-mr-black shadow-[0_3px_0_0_rgba(0,0,0,1)] sm:text-[1.8vw] md:text-sm">
                {t.menuDelDia.combo}
              </span>
            </>
          }
          action={
            <a
              href={ORDER_LINKS.reservas}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-mr-black bg-mr-red px-6 py-3 font-tag text-sm tracking-wide text-mr-cream shadow-[0_4px_0_0_rgba(0,0,0,1)] transition-[translate,background-color,color] hover:-translate-y-0.5 hover:bg-mr-yellow hover:text-mr-black md:px-8 md:py-4 md:text-base"
            >
              {t.bookTable}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5 md:size-5" strokeWidth={3} />
            </a>
          }
          decoration={
            <BrandSticker name="bloque" rotate={8} className="right-4 top-6 w-28 sm:w-36 md:right-10 md:top-12 md:w-52" />
          }
          id="menu-del-dia"
          verticalAlign="center"
          imageScaleRange={[1.05, 1.0]}
          className="aspect-[4/5] h-auto min-h-0 sm:aspect-[3/2] md:h-auto"
        />
        {/* "El proceso" (ProcessSection) queda fuera de momento: su hueco es para la promo */}
        <MargaritaSection />
        <InstagramSection />
        <ParallaxBanner
          src="/images/lifestyle-pareja-coche-amarillo.webp"
          alt={t.thursday.imageAlt}
          objectPosition="center 43%"
          eyebrow={t.thursday.eyebrow}
          heading={
            <>
              {t.thursday.line1}
              <br />
              <span className="text-mr-yellow">{t.thursday.line2}</span>
              <br />
              <span className="mt-3 inline-flex -rotate-2 items-center rounded-full border-2 border-mr-black bg-mr-yellow px-4 py-1.5 font-tag text-[3vw] tracking-wide text-mr-black shadow-[0_3px_0_0_rgba(0,0,0,1)] sm:text-[2vw] md:text-sm">
                {t.thursday.badge}
              </span>
            </>
          }
          align="right"
          verticalAlign="center"
          className="aspect-[4/3] h-auto min-h-0 md:h-auto"
        />
        <ClubSection />
        <OrderBanner />
      </main>
      <SiteFooter />
    </>
  );
}
