import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { CountUp } from "@/components/motion/count-up";

const STATS = [
  { value: 180, suffix: "g", label: "de carne prensada al momento" },
  { value: 45, suffix: "s", label: "de sellado a fuego vivo" },
  { value: 100, suffix: "%", label: "a mano, plancha por plancha" },
] as const;

const PROCESS_STEPS = [
  "Se prensa al momento, sin prisa.",
  "Se sella a fuego vivo hasta soltar el jugo.",
  "Se tuesta el pan en su propia grasa.",
  "Se baña en salsa sin piedad.",
] as const;

export function ProcessSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-mr-yellow py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 md:grid-cols-2 md:items-center md:gap-16 md:px-8 xl:max-w-[92rem] xl:gap-24">
        <Reveal>
          <span className="font-tag text-xs tracking-widest text-mr-black/70">
            EL PROCESO
          </span>
          <h2 className="font-display w-screen -translate-x-1/2 ml-[50%] px-4 mt-3 text-[clamp(2.75rem,15vw,4.5rem)] leading-[0.82] text-mr-black sm:px-6 sm:text-[clamp(3rem,10vw,5.5rem)] md:w-auto md:translate-x-0 md:ml-0 md:px-0 md:text-[clamp(3.25rem,6.2vw,6.5rem)]">
            <span className="block">TODO EMPIEZA</span>
            <span className="block ml-[8%] -rotate-2 sm:ml-[10%] md:ml-[14%]">
              EN LA PLANCHA
            </span>
            <span className="block ml-[3%] rotate-1 sm:ml-[4%] md:ml-[5%]">
              Y ACABA EN
            </span>
            <span className="block text-mr-red ml-[14%] -rotate-1 sm:ml-[18%] md:ml-[24%]">
              SALSA HASTA
            </span>
            <span className="block text-mr-red ml-[1%] rotate-2 sm:ml-[2%] md:ml-[3%]">
              QUE CHORREA.
            </span>
          </h2>
          <ol className="mt-6 max-w-md">
            {PROCESS_STEPS.map((step, i) => (
              <li
                key={step}
                className="flex items-baseline gap-3 border-b border-mr-black/15 py-2.5 first:pt-0 last:border-b-0"
              >
                <span className="font-display shrink-0 text-lg text-mr-red md:text-xl">
                  0{i + 1}
                </span>
                <span className="font-tag text-xs tracking-wide text-mr-black/80 md:text-sm">
                  {step}
                </span>
              </li>
            ))}
          </ol>

          <dl className="mt-8 grid grid-cols-3 gap-2 border-t border-mr-black/15 pt-6 sm:gap-4">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-3xl text-mr-black sm:text-4xl md:text-5xl">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </dt>
                <dd className="mt-1 text-[10px] leading-snug text-mr-black/60 sm:text-xs">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border-2 border-mr-black shadow-[0_14px_0_0_rgba(0,0,0,1)] md:aspect-square">
            <Image
              src="/images/foto-hotdog-bacon.jpg"
              alt="Plancha smash de Mr. Majo's"
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-mr-black/25">
              <div className="flex size-16 items-center justify-center rounded-full bg-mr-yellow text-mr-black shadow-[0_6px_0_0_rgba(0,0,0,1)] md:size-20">
                <svg viewBox="0 0 24 24" className="ml-1 size-7 md:size-8" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <span className="absolute bottom-4 left-4 font-tag text-xs tracking-wide text-mr-cream/80">
              VÍDEO EN LOOP — PLANCHA EN VIVO
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
