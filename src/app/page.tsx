import dynamic from "next/dynamic";
import { SiteNav } from "@/components/nav/site-nav";
import { WarningMarquee } from "@/components/marquee/warning-marquee";
import { HeroSection } from "@/components/hero/hero-section";
import { MenuSection } from "@/components/menu/menu-section";
import { ProcessSection } from "@/components/process/process-section";
import { ParallaxBanner } from "@/components/parallax/parallax-banner";
import { ClubSection } from "@/components/club/club-section";
import { OrderBanner } from "@/components/order/order-banner";
import { SiteFooter } from "@/components/footer/site-footer";

const InstagramSection = dynamic(
  () => import("@/components/instagram/instagram-section")
);

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <HeroSection />
        <WarningMarquee />
        <MenuSection />
        <ParallaxBanner
          src="/images/foto-burger-menu-del-dia.jpg"
          alt="Burger doble de Mr. Majo's con el pick de la casa"
          objectPosition="center 35%"
          eyebrow="TODOS LOS DÍAS"
          heading={
            <>
              MENÚ DEL DÍA.
              <br />
              <span className="text-mr-yellow">13,70€.</span>
              <br />
              <span className="mt-3 inline-flex -rotate-2 items-center rounded-full border-2 border-mr-black bg-mr-yellow px-4 py-1.5 font-tag text-[2.6vw] tracking-wide text-mr-black shadow-[0_3px_0_0_rgba(0,0,0,1)] sm:text-[1.8vw] md:text-sm">
                BEBIDA + BURGER + PATATAS + POSTRE
              </span>
            </>
          }
          verticalAlign="center"
          imageScaleRange={[1.05, 1.0]}
          className="aspect-[4/3] h-auto min-h-0 sm:aspect-[3/2] md:h-auto"
        />
        <ProcessSection />
        <InstagramSection />
        <ParallaxBanner
          src="/images/lifestyle-pareja-coche-amarillo.jpg"
          alt="Pareja comiendo burgers de Mr. Majo's en un descapotable amarillo clásico"
          objectPosition="center 43%"
          eyebrow="SOLO LOS JUEVES"
          heading={
            <>
              JUEVES DE
              <br />
              <span className="text-mr-yellow">2X1 EN BURGERS.</span>
              <br />
              <span className="mt-3 inline-flex -rotate-2 items-center rounded-full border-2 border-mr-black bg-mr-yellow px-4 py-1.5 font-tag text-[3vw] tracking-wide text-mr-black shadow-[0_3px_0_0_rgba(0,0,0,1)] sm:text-[2vw] md:text-sm">
                PIDE 2, PAGA 1
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
