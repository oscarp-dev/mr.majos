import Link from "next/link";
import { HeroCollage } from "./hero-collage";
import { PaintSplash } from "@/components/decorative/paint-splash";
import { Sparkle } from "@/components/decorative/sparkle";
import { GameBoyDevice } from "@/components/decorative/game-boy-device";
import { CooltextBadge } from "./cooltext-badge";
import { BadDecisionsBadge } from "./bad-decisions-badge";
import { SpecialText } from "@/components/ui/special-text";

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-mr-black pt-8 md:pt-12">
      <PaintSplash className="-right-16 top-4 h-72 w-72 opacity-90 md:h-96 md:w-96" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
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

        <div className="mt-16 grid gap-8 md:mt-14 lg:grid-cols-12 lg:items-center lg:gap-6">
          <div className="lg:col-span-5">
            <div className="mb-3 flex items-end justify-between">
              <div>
                <p className="font-tag text-sm tracking-wide text-mr-cream">
                  MAJO ARCHIVE ↗
                </p>
              </div>
              <span className="rounded-full border border-mr-cream/20 px-3 py-1 font-tag text-[10px] tracking-widest text-mr-cream/70">
                EDICIÓN ↗ [LIMITADA]
              </span>
            </div>

            <div className="relative flex aspect-[4/5] w-full items-center justify-center md:aspect-[3/4]">
              <GameBoyDevice className="w-full -rotate-6 scale-150" />
              <BadDecisionsBadge className="-bottom-2 -left-2 md:-bottom-4 md:-left-4" />
            </div>
          </div>

          <div className="lg:col-span-7 lg:pt-10">
            <HeroCollage />
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-mr-cream/10 pt-6 md:mt-14">
          <Link
            href="#menu"
            className="font-tag group inline-flex items-center gap-2 text-sm tracking-wide text-mr-cream/80 transition-colors hover:text-mr-yellow md:text-base"
          >
            AQUÍ TIENES NUESTRO MENÚ
            <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </Link>
          <span className="font-tag text-sm tracking-wide text-mr-cream/50">
            @MR_MAJOS
          </span>
        </div>
      </div>
    </section>
  );
}
