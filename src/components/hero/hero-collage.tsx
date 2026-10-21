import Image from "next/image";
import { cn } from "cn";
import { ArrowDown, ArrowUpRight, Clock, Gift, Hamburger, Heart } from "lucide-react";
import { AnimatedBorder } from "@/components/ui/animated-border";
import { MENU_DEL_DIA, SOCIAL_LINKS } from "@/lib/site-data";
import { MenuDelDiaStatus } from "./menu-del-dia-status";
import { getI18n } from "@/i18n/server";

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

async function InstagramCard({
  src,
  className,
  rotate = "rotate-0",
}: CardProps & { src: string }) {
  const { t } = await getI18n();

  return (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.hero.instagramAria}
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
          alt={t.hero.instagramAlt}
          fill
          loading="eager"
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
            {t.hero.follow}
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={3} />
          </span>
        </div>
      </AnimatedBorder>
    </a>
  );
}

const STAMP_TOTAL = 9;

// Tarjeta de sellos tipo "punch card": 9 huecos + el premio en el décimo.
async function StampCard({ filled }: { filled: number }) {
  const { t } = await getI18n();

  return (
    <div className="relative rounded-xl border-2 border-dashed border-mr-cream/30 bg-mr-black/20 p-2">
      <div className="mb-1.5 flex items-baseline justify-between">
        <span className="font-tag text-[9px] tracking-widest text-mr-cream/60">
          {t.hero.stamps}
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
              aria-label={done ? t.hero.stampDone(i + 1) : t.hero.stampPending(i + 1)}
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
          aria-label={t.hero.stampPrize}
          className="grid aspect-square rotate-6 place-items-center rounded-full border-2 border-mr-black bg-mr-yellow text-mr-black shadow-[0_2px_0_0_rgba(0,0,0,1)]"
        >
          <Gift className="size-3/5" strokeWidth={2.5} />
        </li>
      </ol>
    </div>
  );
}

async function ClubTeaserCard({ className, rotate = "rotate-3" }: CardProps) {
  const { t } = await getI18n();

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
        {t.hero.clubEyebrow}
      </span>

      <span className="font-display text-2xl leading-none text-mr-cream">
        MAJO&apos;S CLUB
      </span>

      <StampCard filled={4} />

      <p className="text-xs leading-snug text-mr-cream/85">
        {t.hero.clubText}
      </p>

      <a
        href="#club"
        className="relative z-10 mt-1 inline-flex w-fit -rotate-1 items-center gap-1 rounded-full border-2 border-mr-black bg-mr-black px-3.5 py-1.5 font-tag text-[11px] tracking-wide text-mr-yellow shadow-[0_3px_0_0_rgba(0,0,0,1)] transition-transform hover:-translate-y-0.5"
      >
        {t.hero.clubCta}
      </a>
    </div>
  );
}

// El póster es muy vertical: en móvil (tarjeta alta) se recorta, en desktop
// (tarjeta casi cuadrada) se muestra entero con los bordes fundidos a negro.
async function MenuDelDiaCard({ className, rotate = "rotate-0" }: CardProps) {
  const { t } = await getI18n();

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-xl border-2 border-mr-black bg-black shadow-[0_8px_0_0_rgba(0,0,0,1)]",
        rotate,
        className
      )}
    >
      <Image
        src="/images/IMG_3632.webp"
        alt={t.hero.menuDelDiaAlt}
        width={941}
        height={1672}
        loading="eager"
        sizes="(max-width: 1024px) 50vw, 340px"
        className="absolute inset-0 h-full w-full object-cover object-[50%_60%] lg:left-1/2 lg:w-auto lg:max-w-none lg:-translate-x-1/2 lg:scale-110 lg:[mask-image:linear-gradient(to_right,transparent,#000_14%,#000_86%,transparent)]"
      />
    </div>
  );
}

async function MenuDelDiaTeaser({ className, rotate = "-rotate-3" }: CardProps) {
  const { t } = await getI18n();

  return (
    <a
      href="#menu-del-dia"
      className={cn(
        "group relative z-10 flex w-full flex-col overflow-hidden rounded-2xl border-2 border-mr-black bg-mr-yellow text-mr-black shadow-[0_8px_0_0_rgba(0,0,0,1)] transition-[translate,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0_12px_0_0_rgba(0,0,0,1)] lg:w-52",
        rotate,
        className
      )}
    >
      <div className="flex flex-col gap-1.5 p-3.5 pb-3">
        <MenuDelDiaStatus />
        <span className="font-display text-[2rem] leading-none tracking-tight lg:text-4xl">
          {MENU_DEL_DIA.price}
        </span>
        <span className="text-[10px] leading-snug text-mr-black/70">
          {t.menuDelDia.includes}
        </span>
        <div className="mt-1 flex flex-col gap-1">
          <div className="flex gap-1">
            {t.menuDelDia.days.map((day, i) => (
              <span
                key={day}
                className={cn(
                  "rounded-md border-2 border-mr-black bg-mr-cream px-1.5 py-0.5 font-tag text-[10px] leading-none tracking-wide",
                  i % 2 ? "rotate-2" : "-rotate-2"
                )}
              >
                {day}
              </span>
            ))}
          </div>
          <span className="inline-flex items-center gap-1 font-tag text-[11px] tracking-wide">
            <Clock className="size-3" strokeWidth={3} />
            {MENU_DEL_DIA.from} – {MENU_DEL_DIA.to}
          </span>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="mx-3 mt-auto border-t-2 border-dashed border-mr-black/40"
      />
      <span className="m-2.5 flex items-center justify-between gap-1 whitespace-nowrap rounded-xl bg-mr-red px-2.5 py-2 font-tag text-[11px] tracking-wide min-[400px]:px-3 min-[400px]:text-xs text-mr-cream shadow-[0_3px_0_0_rgba(0,0,0,1)] transition-colors group-hover:bg-mr-black group-hover:text-mr-yellow">
        {t.hero.seeMenuDelDia}
        <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" strokeWidth={3} />
      </span>
    </a>
  );
}

export async function HeroCollage() {
  const { t } = await getI18n();

  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-5">
      {/* Por debajo de lg las columnas se disuelven (contents) y las cuatro
          tarjetas forman una rejilla 2×2 con filas alineadas: club + póster
          arriba, Instagram + teaser abajo. En desktop vuelven las columnas y
          el teaser flota sobre el póster. */}
      <div className="contents lg:flex lg:flex-col lg:gap-5">
        <ClubTeaserCard rotate="rotate-2" className="max-lg:order-1 lg:z-10 lg:-mb-8" />
        <InstagramCard
          src="/images/foto-burger-mano-2.webp"
          rotate="-rotate-1"
          className="aspect-[3/4] self-stretch max-lg:order-3"
        />
      </div>
      <div className="contents lg:relative lg:block">
        <MenuDelDiaCard rotate="-rotate-1" className="min-h-64 max-lg:order-2 lg:h-full" />
        <Image
          src="/images/badge-circular-amarillo-sin-anillo.webp"
          alt={t.hero.sealAlt}
          width={112}
          height={112}
          className="pointer-events-none absolute -right-2 -top-4 z-10 hidden h-14 w-14 rotate-6 select-none drop-shadow-[0_4px_0_rgba(0,0,0,1)] lg:-right-3 lg:-top-3 lg:block lg:h-20 lg:w-20"
        />
        <MenuDelDiaTeaser className="max-lg:order-4 lg:absolute lg:-bottom-6 lg:-right-4" />
      </div>
    </div>
  );
}
