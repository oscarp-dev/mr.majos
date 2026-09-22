import Image from "next/image";
import { cn } from "cn";

type CardProps = {
  className?: string;
  rotate?: string;
};

function PhotoCard({
  src,
  alt,
  className,
  rotate = "rotate-0",
  tag,
  tagPosition = "bottom-right",
}: CardProps & {
  src: string;
  alt: string;
  tag?: string;
  tagPosition?: "bottom-right" | "top-left";
}) {
  return (
    <div
      className={cn(
        "relative aspect-[4/5] w-full overflow-hidden rounded-xl border-2 border-mr-black bg-mr-black shadow-[0_8px_0_0_rgba(0,0,0,1)]",
        rotate,
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        loading="lazy"
        sizes="(max-width: 768px) 45vw, 220px"
        className="object-cover"
      />
      {tag && (
        <span
          className={cn(
            "absolute rounded-full bg-mr-black/80 px-3 py-1 font-tag text-[10px] tracking-wide text-mr-yellow",
            tagPosition === "top-left" ? "left-3 top-3" : "bottom-3 right-3"
          )}
        >
          {tag}
        </span>
      )}
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

      <div className="flex items-center gap-1.5">
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className={cn(
              "size-2.5 rounded-full border border-mr-cream/50",
              i < 2 ? "bg-mr-cream" : "bg-transparent"
            )}
          />
        ))}
        <span className="ml-1 font-tag text-[10px] tracking-wide text-mr-cream/60">
          2/5 SELLOS
        </span>
      </div>

      <p className="text-xs leading-snug text-mr-cream/85">
        Cada burger suma un sello. Junta 5 y la próxima ronda de salsa extra
        va por la casa.
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

function OrderCard({ className, rotate = "-rotate-2" }: CardProps) {
  return (
    <div
      className={cn(
        "relative z-10 flex flex-col gap-2 rounded-xl border-2 border-mr-black bg-mr-yellow p-3.5 shadow-[0_6px_0_0_rgba(0,0,0,1)] lg:w-40",
        rotate,
        className
      )}
    >
      <span className="font-tag text-sm leading-none text-mr-black">
        PIDE YA
      </span>
      <span className="text-[10px] leading-snug text-mr-black/70">
        Online o en el local
      </span>
      <a
        href="#order"
        className="inline-flex w-fit items-center gap-1 rounded-full bg-mr-black px-2.5 py-1 font-tag text-[10px] tracking-wide text-mr-yellow"
      >
        CLICK AQUÍ
      </a>
    </div>
  );
}

export function HeroCollage() {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-5">
      <div className="col-span-2 flex flex-col gap-4 sm:col-span-1 lg:gap-5">
        <ClubTeaserCard rotate="rotate-2" className="lg:z-10 lg:-mb-8" />
        <PhotoCard
          src="/images/foto-burger-mano-2.jpg"
          alt="Clienta de Mr. Majo's mordiendo una burger en su coche"
          rotate="-rotate-1"
          tag="LOOKBOOK 02"
          className="aspect-[3/4]"
        />
      </div>
      <div className="relative col-span-2 sm:col-span-1">
        <PhotoCard
          src="/images/burger-la-gringa-real.jpg"
          alt="La Gringa — burger clásica de Mr. Majo's con doble bacon"
          rotate="-rotate-1"
          tag="LA GRINGA"
          tagPosition="top-left"
          className="lg:aspect-auto lg:h-full"
        />
        <Image
          src="/images/badge-circular-amarillo-sin-anillo.png"
          alt="Sello Mr. Majo's"
          width={112}
          height={112}
          className="pointer-events-none absolute -right-3 -top-3 z-10 h-20 w-20 rotate-6 select-none drop-shadow-[0_4px_0_rgba(0,0,0,1)]"
        />
        <OrderCard className="absolute -bottom-4 -right-4 hidden lg:flex" />
      </div>
      <OrderCard className="col-span-2 flex sm:col-span-2 lg:hidden" />
    </div>
  );
}
