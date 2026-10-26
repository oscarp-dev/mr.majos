import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { getI18n } from "@/i18n/server";
import { BrandSticker } from "@/components/decorative/brand-sticker";
import { ORDER_LINKS } from "@/lib/site-data";
import { CHECKER } from "./unlimited-fries-section";

// chorretones en vertical: el mismo trazo que <Drip>, girado y repetido en mosaico
const SIDE_DRIP =
  "M0,0 L0,400 L14,400 Q36,380 14,360 Q32,340 14,320 Q42,300 14,280 Q29,260 14,240 Q38,220 14,200 Q34,180 14,160 Q30,140 14,120 Q40,100 14,80 Q28,60 14,40 Q36,20 14,0 Z";

function SideDrips({ side }: { side: "left" | "right" }) {
  const id = `side-drip-${side}`;
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-y-0 z-10 flex ${side === "left" ? "left-0" : "right-0 -scale-x-100"}`}
    >
      <div className={`h-full w-[14px] md:w-9 ${CHECKER}`} />
      <svg className="-ml-px h-full w-3 md:w-6">
        <defs>
          <pattern id={id} width="100%" height="220" patternUnits="userSpaceOnUse" viewBox="0 0 46 400" preserveAspectRatio="none">
            <path d={SIDE_DRIP} fill="var(--mr-black)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>
    </div>
  );
}

function PromoBurst({ label, className }: { label: string; className?: string }) {
  const points = Array.from({ length: 36 }, (_, i) => {
    const r = i % 2 ? 41 : 50;
    const a = (i / 36) * Math.PI * 2;
    return `${(Math.cos(a) * r).toFixed(1)},${(Math.sin(a) * r).toFixed(1)}`;
  }).join(" ");

  return (
    <svg viewBox="-56 -56 112 112" aria-hidden="true" className={className}>
      <polygon points={points} fill="var(--mr-red)" stroke="var(--mr-black)" strokeWidth="3" strokeLinejoin="round" />
      <text
        x="0"
        y="7"
        textAnchor="middle"
        fill="var(--mr-cream)"
        style={{ fontFamily: "var(--font-retro)", fontSize: 21 }}
      >
        {label}
      </text>
    </svg>
  );
}

/**
 * Promo de margaritas (2 por 12,90€) con el lenguaje de su cartel del local:
 * amarillo con cuadrícula, cuadros negros que chorrean, serifa retro, tabla de
 * precios y sello PROMO. En carta solo hay la clásica frozen: dos copas, como el 2x.
 */
export async function MargaritaSection() {
  const { t, href } = await getI18n();
  const m = t.margaritas;

  return (
    <section
      id="margaritas"
      aria-labelledby="margaritas-title"
      className="relative scroll-mt-[62px] overflow-hidden bg-mr-yellow text-mr-black md:scroll-mt-[70px]"
    >
      {/* cuadrícula del cartel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.13)_1.5px,transparent_1.5px),linear-gradient(to_bottom,rgba(0,0,0,0.13)_1.5px,transparent_1.5px)] bg-[size:56px_56px] md:bg-[size:72px_72px]"
      />

      {/* columnas de cuadros negros que chorrean hacia dentro */}
      <SideDrips side="left" />
      <SideDrips side="right" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-8 py-16 md:px-20 md:py-20 lg:grid-cols-[1fr_1.15fr] lg:gap-8 2xl:max-w-[88rem]">
        <Reveal>
          <span className="font-display inline-block -rotate-3 rounded-lg bg-mr-black px-4 py-1.5 text-2xl tracking-wide text-mr-yellow shadow-[4px_4px_0_0_var(--mr-red)] md:text-3xl">
            {m.eyebrow}
          </span>

          <h2
            id="margaritas-title"
            className="font-retro mt-5 text-[17vw] leading-[0.85] tracking-tight sm:text-8xl lg:text-[7.5rem]"
          >
            {m.title}
          </h2>

          <p className="font-tag mt-6 inline-flex items-center gap-1.5 text-sm tracking-widest md:text-base">
            <span aria-hidden="true" className="size-3 rounded-full border-2 border-mr-black bg-[#c9d97e]" />
            {m.flavor.toUpperCase()}
          </p>

          {/* tabla de precios como la del cartel */}
          <dl className="font-retro mt-7 grid w-full max-w-sm grid-cols-[1fr_auto] border-[3px] border-mr-black text-2xl md:text-3xl">
            <dt className="border-b-[3px] border-r-[3px] border-mr-black bg-mr-cream px-4 py-2">{m.one}</dt>
            <dd className="border-b-[3px] border-mr-black bg-mr-cream px-4 py-2 text-right">7,90€</dd>
            <dt className="border-r-[3px] border-mr-black bg-mr-black px-4 py-2 text-mr-yellow">{m.two}</dt>
            <dd className="bg-mr-black px-4 py-2 text-right text-mr-yellow">12,90€</dd>
          </dl>

          <p className="font-tag mt-6 text-sm tracking-wide text-mr-black/70">{m.hook}</p>
          <p className="font-retro text-5xl leading-none text-mr-red md:text-6xl">{m.deal}</p>

          <p className="mt-5 max-w-md text-sm font-medium leading-relaxed text-mr-black/75 md:text-base">
            {m.text}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={ORDER_LINKS.reservas}
              target="_blank"
              rel="noopener noreferrer"
              className="group font-tag inline-flex items-center gap-2 rounded-full border-2 border-mr-black bg-mr-black px-6 py-3 text-sm tracking-wide text-mr-yellow shadow-[0_4px_0_0_var(--mr-red)] transition-transform hover:-translate-y-0.5 md:text-base"
            >
              {m.cta}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" strokeWidth={3} />
            </a>
            <a
              href={href("/carta#margaritas-frozen")}
              className="font-tag inline-flex items-center rounded-full border-2 border-mr-black px-6 py-3 text-sm tracking-wide transition-colors hover:bg-mr-black hover:text-mr-cream md:text-base"
            >
              {m.menu}
            </a>
          </div>

          <p className="font-tag mt-5 text-[10px] tracking-widest text-mr-black/50">
            {m.responsible.toUpperCase()}
          </p>
        </Reveal>

        <Reveal delay={0.08} className="relative mx-auto w-full max-w-xl md:max-w-2xl">
          {/* debajo de las copas y quieto (las copas ya flotan): solo un brillo de vez en cuando */}
          <BrandSticker
            name="firma"
            rotate={-4}
            idle="shine"
            className="left-1/2 top-full mt-5 w-40 -translate-x-1/2 sm:w-48 md:mt-8 md:w-56"
          />
          <div role="img" aria-label={m.illustration} className="relative aspect-[6/5]">
            <PromoBurst
              label={m.promo}
              className="absolute -right-2 -top-14 z-20 w-24 rotate-12 drop-shadow-[3px_4px_0_var(--mr-black)] sm:w-28 md:-top-12 md:w-32"
            />

            {/* como en el cartel: dos copas juntas, la de delante algo más grande */}
            {[
              "left-0 bottom-[4%] w-[49%] [--float-rot:-4deg]",
              "left-[38%] bottom-0 z-10 w-[54%] [--float-rot:3deg]",
            ].map((place, i) => (
              <div key={place} className={`absolute ${place}`}>
                <div className="animate-float" style={{ animationDelay: `${i * -1.6}s` }}>
                  <Image
                    src="/images/promo/margarita-clasica.webp"
                    alt=""
                    width={836}
                    height={1098}
                    sizes="(max-width: 768px) 50vw, 360px"
                    className="h-auto w-full drop-shadow-[6px_10px_0_rgba(0,0,0,0.16)]"
                  />
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
