import Image from "next/image";
import { cn } from "cn";
import { ArrowRight, ArrowUpRight, Gift, Hamburger, Heart } from "lucide-react";
import { AnimatedBorder } from "@/components/ui/animated-border";
import { ORDER_LINKS, SOCIAL_LINKS } from "@/lib/site-data";

type CardProps = {
  className?: string;
  rotate?: string;
};

const INSTAGRAM_URL =
  SOCIAL_LINKS.find((l) => l.label === "Instagram")?.href ?? "#";

const IG_COLORS = ["#feda75", "#fa7e1e", "#d62976", "#962fbf", "#4f5bd5"];
const IG_GRADIENT =
  "bg-[linear-gradient(45deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5)]";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function InstagramCard({
  src,
  alt,
  className,
  rotate = "rotate-0",
}: CardProps & { src: string; alt: string }) {
  return (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Síguenos en Instagram: @mr_majos"
      className={cn(
        "group block w-full rounded-xl shadow-[0_8px_0_0_rgba(0,0,0,1)] transition-transform duration-300 hover:-translate-y-1",
        rotate,
        className
      )}
    >
      <AnimatedBorder
        colors={IG_COLORS}
        width={3}
        duration={5}
        className="h-full bg-mr-black"
        contentClassName="bg-mr-black"
      >
        <Image
          src={src}
          alt={alt}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 45vw, 220px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent"
        />

        <span
          className={cn(
            "absolute left-2.5 top-2.5 grid size-8 lg:top-11 place-items-center rounded-lg text-white shadow-[0_3px_0_0_rgba(0,0,0,1)]",
            IG_GRADIENT
          )}
        >
          <InstagramIcon className="size-5" />
        </span>
        <Heart
          aria-hidden="true"
          className="absolute right-3 top-3 size-6 lg:top-12 fill-[#ff3040] text-[#ff3040] drop-shadow-[0_2px_0_rgba(0,0,0,1)] motion-safe:animate-pulse"
        />

        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-3">
          <span className="font-display text-lg leading-none text-mr-cream lg:text-xl">
            @MR_MAJOS
          </span>
          <span
            className={cn(
              "flex items-center justify-between rounded-full px-3 py-1.5 font-tag text-[11px] tracking-wide text-white shadow-[0_3px_0_0_rgba(0,0,0,1)] transition-[filter] group-hover:brightness-110",
              IG_GRADIENT
            )}
          >
            SÍGUENOS
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={3} />
          </span>
        </div>
      </AnimatedBorder>
    </a>
  );
}

const STAMP_TOTAL = 9;

// Tarjeta de sellos tipo "punch card": 9 huecos + el premio en el décimo.
function StampCard({ filled }: { filled: number }) {
  return (
    <div className="relative rounded-xl border-2 border-dashed border-mr-cream/30 bg-mr-black/20 p-2">
      <div className="mb-1.5 flex items-baseline justify-between">
        <span className="font-tag text-[9px] tracking-widest text-mr-cream/60">
          TUS SELLOS
        </span>
        <span className="font-display text-sm leading-none text-mr-cream">
          {filled}
          <span className="text-mr-cream/50">/{STAMP_TOTAL}</span>
        </span>
      </div>
      <ol className="grid grid-cols-5 gap-1">
        {Array.from({ length: STAMP_TOTAL }, (_, i) => {
          const done = i < filled;
          const next = i === filled;
          return (
            <li
              key={i}
              aria-label={done ? `Sello ${i + 1} conseguido` : `Sello ${i + 1} pendiente`}
              className={cn(
                "grid aspect-square place-items-center rounded-full",
                done
                  ? "border-2 border-mr-black bg-mr-cream text-mr-red shadow-[0_2px_0_0_rgba(0,0,0,1)]"
                  : "border border-dashed border-mr-cream/40 font-tag text-[9px] text-mr-cream/45",
                done && (i % 2 ? "rotate-12" : "-rotate-6"),
                next && "border-mr-yellow text-mr-yellow motion-safe:animate-pulse"
              )}
            >
              {done ? <Hamburger className="size-3/5" strokeWidth={2.5} /> : i + 1}
            </li>
          );
        })}
        <li
          aria-label="Premio: burger o hot dog gratis"
          className="grid aspect-square rotate-6 place-items-center rounded-full border-2 border-mr-black bg-mr-yellow text-mr-black shadow-[0_2px_0_0_rgba(0,0,0,1)]"
        >
          <Gift className="size-3/5" strokeWidth={2.5} />
        </li>
      </ol>
    </div>
  );
}

function ClubTeaserCard({ className, rotate = "rotate-3" }: CardProps) {
  return (
    <div
      className={cn(
        "relative z-10 flex w-full flex-col gap-2.5 overflow-hidden rounded-2xl border-2 border-mr-black bg-mr-red p-5 shadow-[0_10px_0_0_rgba(0,0,0,1)]",
        rotate,
        className
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 -top-8 size-28 rounded-full border-[3px] border-dashed border-mr-cream/20"
      />

      <span className="font-tag text-[10px] tracking-widest text-mr-cream/70">
        TU LEALTAD TIENE PREMIO
      </span>

      <span className="font-display text-2xl leading-none text-mr-cream">
        MAJO&apos;S CLUB
      </span>

      <StampCard filled={4} />

      <p className="text-xs leading-snug text-mr-cream/85">
        Cada burger suma un sello. Por cada 9, te llevas una burger o hot
        dog gratis, by the face.
      </p>

      <a
        href="#club"
        className="relative z-10 mt-1 inline-flex w-fit -rotate-1 items-center gap-1 rounded-full border-2 border-mr-black bg-mr-black px-3.5 py-1.5 font-tag text-[11px] tracking-wide text-mr-yellow shadow-[0_3px_0_0_rgba(0,0,0,1)] transition-transform hover:-translate-y-0.5"
      >
        ACCEDER →
      </a>
    </div>
  );
}

// El póster es muy vertical: en móvil (tarjeta alta) se recorta, en desktop
// (tarjeta casi cuadrada) se muestra entero con los bordes fundidos a negro.
function MenuDelDiaCard({ className, rotate = "rotate-0" }: CardProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-xl border-2 border-mr-black bg-black shadow-[0_8px_0_0_rgba(0,0,0,1)]",
        rotate,
        className
      )}
    >
      <Image
        src="/images/IMG_3632.PNG"
        alt="Menú del día de Mr. Majo's: burger con huevo y bacon, patatas, refresco y postre"
        width={941}
        height={1672}
        loading="lazy"
        sizes="(max-width: 1024px) 50vw, 340px"
        className="absolute inset-0 h-full w-full object-cover object-[50%_60%] lg:left-1/2 lg:w-auto lg:max-w-none lg:-translate-x-1/2 lg:scale-110 lg:[mask-image:linear-gradient(to_right,transparent,#000_14%,#000_86%,transparent)]"
      />
    </div>
  );
}

function ReserveCard({ className, rotate = "-rotate-3" }: CardProps) {
  return (
    <a
      href={ORDER_LINKS.reservas}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative z-10 flex w-44 flex-col overflow-hidden rounded-2xl border-2 border-mr-black bg-mr-yellow text-mr-black shadow-[0_8px_0_0_rgba(0,0,0,1)] transition-[translate,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0_12px_0_0_rgba(0,0,0,1)] lg:w-52",
        rotate,
        className
      )}
    >
      <div className="flex flex-col gap-1.5 p-3.5 pb-3">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-mr-black px-2 py-0.5 font-tag text-[9px] tracking-widest text-mr-yellow">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full rounded-full bg-mr-red opacity-75 motion-safe:animate-ping" />
            <span className="relative inline-flex size-1.5 rounded-full bg-mr-red" />
          </span>
          HOY · MENÚ DEL DÍA
        </span>
        <span className="font-display text-[2rem] leading-none tracking-tight lg:text-4xl">
          13,70€
        </span>
        <span className="text-[10px] leading-snug text-mr-black/70">
          Burger + patatas + bebida + postre
        </span>
      </div>
      <div
        aria-hidden="true"
        className="mx-3 border-t-2 border-dashed border-mr-black/40"
      />
      <span className="m-2.5 flex items-center justify-between rounded-xl bg-mr-red px-3 py-2 font-tag text-xs tracking-wide text-mr-cream shadow-[0_3px_0_0_rgba(0,0,0,1)] transition-colors group-hover:bg-mr-black group-hover:text-mr-yellow">
        RESERVA TU MESA
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" strokeWidth={3} />
      </span>
    </a>
  );
}

export function HeroCollage() {
  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-5">
      <div className="flex flex-col gap-3 lg:gap-5">
        <ClubTeaserCard rotate="rotate-2" className="lg:z-10 lg:-mb-8" />
        <InstagramCard
          src="/images/foto-burger-mano-2.jpg"
          alt="Clienta de Mr. Majo's mordiendo una burger en su coche"
          rotate="-rotate-1"
          className="aspect-[3/4]"
        />
      </div>
      <div className="relative">
        <MenuDelDiaCard rotate="-rotate-1" className="h-full" />
        <Image
          src="/images/badge-circular-amarillo-sin-anillo.png"
          alt="Sello Mr. Majo's"
          width={112}
          height={112}
          className="pointer-events-none absolute -right-3 -top-3 z-10 h-20 w-20 rotate-6 select-none drop-shadow-[0_4px_0_rgba(0,0,0,1)]"
        />
        <ReserveCard className="absolute -bottom-6 -right-4" />
      </div>
    </div>
  );
}
