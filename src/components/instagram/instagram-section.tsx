import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";

// No hay credenciales de la API de Instagram conectadas en este proyecto:
// este grid usa fotos reales de producto a modo de mock visual del feed.
// Sustituir por el feed real (API oficial o un embed) cuando haya acceso.
const MOCK_POSTS = [
  "/images/foto-burger-mano-3.jpg",
  "/images/foto-hotdog-bacon.jpg",
  "/images/foto-burger-plato.jpg",
  "/images/foto-burger-mano-1.jpg",
  "/images/hero-golden-coulant.jpg",
  "/images/foto-hotdog-mordida.jpg",
  "/images/foto-burger-mano-2.jpg",
  "/images/hero-sugarmommy-burger.jpg",
] as const;

function InstaIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-10" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function InstagramSection() {
  return (
    <section className="bg-mr-black py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="font-tag text-xs tracking-widest text-mr-yellow">
              @MR_MAJOS
            </span>
            <a
              href="https://instagram.com/mr_majos"
              target="_blank"
              rel="noreferrer"
              className="rotate-1 rounded-full border-2 border-mr-cream/20 px-5 py-2 font-tag text-sm tracking-wide text-mr-cream transition-colors hover:border-mr-yellow hover:text-mr-yellow"
            >
              SEGUIR
            </a>
          </div>
          <h2 className="font-display bleed-full px-4 mt-2 text-[17vw] leading-[0.76] text-mr-cream sm:px-6 sm:text-[13vw] md:px-8 md:text-[9vw]">
            TANTO CHORREO
            <br />
            <span className="text-mr-yellow">QUE ROMPE INSTAGRAM</span>
          </h2>
        </Reveal>
      </div>

      <div className="mx-auto mt-10 max-w-[88rem] px-4 md:mt-14 md:px-8">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {MOCK_POSTS.map((src, i) => (
            <div
              key={src + i}
              className="group relative aspect-square overflow-hidden rounded-lg border border-mr-cream/10"
            >
              <Image
                src={src}
                alt="Post de Instagram de Mr. Majo's"
                fill
                loading="lazy"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 22vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-mr-black/0 text-mr-cream opacity-0 transition-all duration-300 group-hover:bg-mr-black/50 group-hover:opacity-100">
                <InstaIcon />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
