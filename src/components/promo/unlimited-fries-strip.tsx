import Image from "next/image";
import { CHECKER, PAPER } from "./unlimited-fries-section";

const STEPS = [
  { n: "01", text: "Pide tu burger o perrito" },
  { n: "02", text: "Súmale +1€" },
  { n: "03", text: "Pide más patatas. Y más." },
];

const MARQUEE = Array.from({ length: 6 }, () => ["PATATAS ILIMITADAS", "+1€", "SIN LÍMITE", "REFILL INFINITO"]).flat();

/**
 * La promo de patatas ilimitadas dentro de la carta, con el mismo lenguaje
 * que el póster del home: papel crema, cuadros de ajedrez, sticker +1€ y la
 * mascota flotando. Va justo antes de Acompañamientos ("¿y de acompañar?").
 */
export function UnlimitedFriesStrip() {
  return (
    <aside
      aria-label="Promo patatas ilimitadas por 1 euro más"
      className="relative overflow-hidden rounded-3xl border-4 border-mr-black text-mr-black shadow-[6px_8px_0_0_var(--mr-yellow)]"
      style={{ backgroundColor: PAPER }}
    >
      <div aria-hidden="true" className={`h-5 md:h-6 ${CHECKER}`} />

      <div className="grid items-center gap-5 px-5 pb-6 pt-6 sm:px-8 md:grid-cols-[0.75fr_1.25fr] md:gap-10 md:px-12 md:py-9">
        {/* mascota flotando + sticker de precio */}
        <div className="relative mx-auto w-full max-w-[13rem] sm:max-w-[15rem] md:max-w-[17rem]">
          <div className="animate-float [--float-rot:-3deg]">
            <Image
              src="/images/promo/patatas-ilimitadas.webp"
              alt="Mascota de Mr. Majo's: patata surfera con el lema Patatas Ilimitadas"
              width={1015}
              height={954}
              sizes="(max-width: 768px) 240px, 272px"
              className="h-auto w-full"
            />
          </div>
          <div className="absolute -right-3 bottom-0 grid size-20 -rotate-12 place-items-center rounded-full border-[3px] border-mr-black bg-mr-red text-center text-mr-cream shadow-[4px_5px_0_0_var(--mr-black)] sm:size-24 md:-right-4 md:size-28">
            <div className="-mt-0.5">
              <span className="font-display block text-4xl leading-[0.8] sm:text-5xl">+1€</span>
              <span className="font-tag mt-0.5 block text-[7px] tracking-widest sm:text-[8px]">Y NO SE ACABAN</span>
            </div>
          </div>
        </div>

        {/* copy */}
        <div className="text-center md:text-left">
          <span className="font-tag inline-block -rotate-2 rounded-md bg-mr-black px-3 py-1 text-[10px] tracking-widest text-mr-yellow md:text-[11px]">
            ¿Y DE ACOMPAÑAR?
          </span>

          <p className="font-display mt-3 text-[10vw] leading-[0.9] sm:text-6xl lg:text-7xl">
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
          </p>

          <p className="mx-auto mt-3 max-w-md text-sm font-medium leading-relaxed text-mr-black/75 md:mx-0 md:text-base">
            Por solo un euro más, tu ración de patatas pasa a ser ilimitada:
            te las rellenamos las veces que haga falta.
          </p>

          <ol className="mt-5 grid grid-cols-3 gap-2 text-left sm:gap-3">
            {STEPS.map((step, i) => (
              <li
                key={step.n}
                className={`rounded-2xl border-[3px] border-mr-black p-2.5 shadow-[0_4px_0_0_var(--mr-black)] sm:p-3 ${
                  i === 1 ? "-rotate-2 bg-mr-yellow" : i === 2 ? "rotate-1 bg-mr-cream" : "rotate-[-0.5deg] bg-mr-cream"
                }`}
              >
                <span className="font-display block text-2xl leading-none text-mr-red sm:text-3xl">{step.n}</span>
                <span className="font-tag mt-1.5 block text-[10px] leading-snug tracking-wide sm:text-xs">
                  {step.text.toUpperCase()}
                </span>
              </li>
            ))}
          </ol>

          <p className="font-tag mt-4 text-[10px] tracking-widest text-mr-black/45">
            * PROMO VÁLIDA PARA CONSUMIR EN EL LOCAL.
          </p>
        </div>
      </div>

      {/* cinta inferior */}
      <div aria-hidden="true" className="border-y-4 border-mr-black bg-mr-yellow py-2">
        <div className="animate-marquee flex w-max">
          {[0, 1].map((copy) => (
            <span key={copy} className="font-display flex shrink-0 text-xl leading-none md:text-2xl">
              {MARQUEE.map((word, i) => (
                <span key={i} className="flex items-center px-3">
                  {word}
                  <span className="pl-6 text-mr-red">✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
      <div aria-hidden="true" className={`h-5 md:h-6 ${CHECKER}`} />
    </aside>
  );
}
