import { HeroCollage } from "./hero-collage";
import { PaintSplash } from "@/components/decorative/paint-splash";
import { Sparkle } from "@/components/decorative/sparkle";
import { CooltextBadge } from "./cooltext-badge";
import { BadDecisionsBadge } from "./bad-decisions-badge";
import { SpecialText } from "@/components/ui/special-text";

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-mr-black pt-8 md:pt-12">
      <PaintSplash className="-right-16 top-4 h-72 w-72 opacity-90 md:h-96 md:w-96" />

      <div className="relative mx-auto max-w-7xl px-4 pb-10 md:px-8 md:pb-14">
        <div className="bleed-full relative z-30 px-4 pt-6 sm:px-6 md:px-8">
          <h1 className="font-display relative mt-3 -rotate-1 text-center text-[26vw] leading-[0.74] text-mr-cream sm:text-[20vw] md:mt-4 md:text-[16vw] lg:text-[15.5vw]">
            <span className="inline-block md:-translate-x-3">THE REAL</span>
            <br />
            <SpecialText
              delay={0.3}
              speed={45}
              className="justify-center whitespace-nowrap text-[24vw] text-mr-yellow sm:text-[21vw] md:translate-x-4 md:text-[17.5vw] lg:text-[16.5vw]"
            >
              FOOD P*RN
            </SpecialText>
          </h1>

          <Sparkle className="absolute -top-1 right-6 hidden size-12 md:block md:right-8 md:size-14" />

          <CooltextBadge className="inset-x-0 top-full mx-auto mt-4 sm:mt-2 md:inset-x-auto md:right-[6%] md:top-auto md:bottom-4 md:mx-0" />
        </div>

        {/* la rejilla 2×2 de móvil, en tablet, no pasa de max-w-xl para no inflar las tarjetas */}
        <div className="relative mx-auto mb-16 mt-16 max-w-xl md:mt-20 lg:mb-0 lg:max-w-6xl">
          <HeroCollage />
          <BadDecisionsBadge className="-bottom-20 -left-2 sm:-bottom-24 lg:-left-4 lg:-top-6 lg:bottom-auto" />
        </div>

      </div>
    </section>
  );
}
