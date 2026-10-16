import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { ORDER_LINKS } from "@/lib/site-data";

// El papel del póster es el mismo crema que el fondo de la ilustración
// (IMG_3957), así el dibujo se funde con la sección sin recuadro.
export const PAPER = "#f9f0e1";

// Cuadros de ajedrez como los laterales del dibujo.
export const CHECKER =
  "bg-[conic-gradient(var(--mr-black)_25%,transparent_0_50%,var(--mr-black)_0_75%,transparent_0)] bg-[length:28px_28px] md:bg-[length:36px_36px]";

const STEPS = [
  { n: "01", text: "Pide tu burger o perrito" },
  { n: "02", text: "Súmale +1€" },
  { n: "03", text: "Pide más patatas. Y más." },
];

const MARQUEE = Array.from({ length: 6 }, () => ["PATATAS ILIMITADAS", "+1€", "SIN LÍMITE", "REFILL INFINITO"]).flat();

export function UnlimitedFriesSection() {
  return (
    <section
      id="patatas-ilimitadas"
      aria-labelledby="patatas-ilimitadas-title"
      className="relative overflow-hidden text-mr-black"
      style={{ backgroundColor: PAPER }}
    >
      <div aria-hidden="true" className={`h-7 md:h-9 ${CHECKER}`} />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-[1.05fr_1fr] md:gap-14 md:px-8 md:py-24">
        {/* ilustración + sticker de precio */}
        <Reveal className="relative mx-auto w-full max-w-[560px]">
          <div className="animate-float [--float-rot:-2deg]">
            <Image
              src="/images/promo/patatas-ilimitadas.webp"
              alt="Mascota de Mr. Majo's: una patata con gafas de sol y tabla de surf bajo el lema Patatas Ilimitadas"
              width={1015}
              height={954}
              sizes="(max-width: 768px) 92vw, 560px"
              className="h-auto w-full"
            />
          </div>

          <div className="absolute -right-1 bottom-[4%] grid size-28 -rotate-12 place-items-center rounded-full border-4 border-mr-black bg-mr-red text-center text-mr-cream shadow-[6px_7px_0_0_var(--mr-black)] sm:size-36 md:-right-4 md:size-40">
            <div className="-mt-1">
              <span className="font-display block text-6xl leading-[0.8] sm:text-7xl md:text-[5.5rem]">+1€</span>
              <span className="font-tag mt-1 block text-[9px] tracking-widest sm:text-[10px] md:text-xs">
                Y NO SE ACABAN
              </span>
            </div>
          </div>
        </Reveal>

        {/* copy */}
        <Reveal delay={0.08}>
          <span className="font-tag inline-block -rotate-2 rounded-md bg-mr-black px-3 py-1 text-[11px] tracking-widest text-mr-yellow md:text-xs">
            PROMO DE LA CASA
          </span>

          <h2
            id="patatas-ilimitadas-title"
            className="font-display mt-5 text-[16vw] leading-[0.9] sm:text-8xl md:text-[5.25rem] lg:text-[6.5rem]"
          >
            SÚMALE{" "}
            <span className="relative inline-block text-mr-red">
              1€
              <svg
                aria-hidden="true"
                viewBox="0 0 120 14"
                preserveAspectRatio="none"
                className="absolute bottom-0 left-0 h-[0.1em] w-full text-mr-black"
              >
                <path d="M2 9 C 30 2, 60 13, 118 4" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </span>
            .
            <br />
            LAS PATATAS
            <br />
            NO SE ACABAN.
          </h2>

          <p className="mt-5 max-w-md text-base font-medium leading-relaxed text-mr-black/75 md:text-lg">
            Por solo un euro más, tu ración de patatas pasa a ser ilimitada:
            te las rellenamos las veces que haga falta. Tú solo levanta la mano.
          </p>

          <ol className="mt-7 grid grid-cols-3 gap-2 sm:gap-3">
            {STEPS.map((step, i) => (
              <li
                key={step.n}
                className={`rounded-2xl border-[3px] border-mr-black p-2.5 shadow-[0_4px_0_0_var(--mr-black)] sm:p-3.5 ${
                  i === 1 ? "-rotate-2 bg-mr-yellow" : i === 2 ? "rotate-1 bg-mr-cream" : "rotate-[-0.5deg] bg-mr-cream"
                }`}
              >
                <span className="font-display block text-2xl leading-none text-mr-red sm:text-3xl">{step.n}</span>
                <span className="font-tag mt-1.5 block text-[10px] leading-snug tracking-wide sm:text-xs md:text-[13px]">
                  {step.text.toUpperCase()}
                </span>
              </li>
            ))}
          </ol>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={ORDER_LINKS.reservas}
              target="_blank"
              rel="noopener noreferrer"
              className="group font-tag inline-flex items-center gap-2 rounded-full border-2 border-mr-black bg-mr-black px-6 py-3 text-sm tracking-wide text-mr-yellow shadow-[0_4px_0_0_var(--mr-red)] transition-transform hover:-translate-y-0.5 md:text-base"
            >
              RESERVAR MESA
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" strokeWidth={3} />
            </a>
            <Link
              href="/carta"
              className="font-tag inline-flex items-center rounded-full border-2 border-mr-black px-6 py-3 text-sm tracking-wide transition-colors hover:bg-mr-black hover:text-mr-cream md:text-base"
            >
              VER LA CARTA
            </Link>
          </div>

          <p className="font-tag mt-4 text-[10px] tracking-widest text-mr-black/45">
            * PROMO VÁLIDA PARA CONSUMIR EN EL LOCAL.
          </p>
        </Reveal>
      </div>

      {/* cinta inferior */}
      <div aria-hidden="true" className="-rotate-1 scale-[1.03] border-y-4 border-mr-black bg-mr-yellow py-3">
        <div className="animate-marquee flex w-max">
          {[0, 1].map((copy) => (
            <span key={copy} className="font-display flex shrink-0 text-3xl leading-none md:text-4xl">
              {MARQUEE.map((word, i) => (
                <span key={i} className="flex items-center px-4">
                  {word}
                  <span className="pl-8 text-mr-red">✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
      <div aria-hidden="true" className={`mt-6 h-7 md:mt-8 md:h-9 ${CHECKER}`} />
    </section>
  );
}
