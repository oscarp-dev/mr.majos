import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { SOCIAL_LINKS } from "@/lib/site-data";

// No hay credenciales de la API de Instagram conectadas en este proyecto:
// el "perfil" usa fotos reales de producto a modo de mock visual del feed.
// Sustituir por el feed real (API oficial o un embed) cuando haya acceso.
// Sin cifras de seguidores ni likes: serían inventadas.

type Post = { src: string; caption: string; position?: string };

const POSTS: Post[] = [
  { src: "/images/instagram/yankee-gorra.webp", caption: "Yankee mode: ON 🧢", position: "center 30%" },
  { src: "/images/foto-burger-mano-3.webp", caption: "Hot dog vibes 🕶️" },
  { src: "/images/instagram/bano-de-queso.webp", caption: "Baño de queso, sin miedo 🧀" },
  { src: "/images/instagram/americano-mordisco.webp", caption: "El Americano no se comparte" },
  { src: "/images/instagram/nutella-chorreando.webp", caption: "Nute Teques: Nutella hirviendo 🍫" },
  { src: "/images/instagram/patatas-cesta.webp", caption: "Patatas ILIMITADAS 🍟" },
  { src: "/images/foto-burger-mano-1.webp", caption: "Crunchy con guantes 🧤" },
  { src: "/images/foto-burger-mano-2.webp", caption: "Burger & Corvette 💛", position: "center 30%" },
  { src: "/images/instagram/burger-dos-manos.webp", caption: "A dos manos o no vale 🍔", position: "center 60%" },
];

// Historias destacadas → secciones de la carta.
const HIGHLIGHTS = [
  { label: "Burgers", src: "/images/burgers/gringa.webp", href: "/carta#burgers", position: "center 78%" },
  { label: "Perritos", src: "/images/perritos/yankee-estudio.webp", href: "/carta#perritos", position: "center 55%" },
  { label: "Teques", src: "/images/carta/majos-teques.webp", href: "/carta#acompanamientos", position: "center 68%" },
  { label: "Veggie", src: "/images/carta/veggie-orale.webp", href: "/carta#veggie-kids", position: "center 62%" },
  { label: "Postres", src: "/images/carta/nute-teques.webp", href: "/carta#postres", position: "center 55%" },
  { label: "Menú del día", src: "/images/foto-burger-menu-del-dia.webp", href: "/#menu-del-dia" },
];

const INSTAGRAM_URL =
  SOCIAL_LINKS.find((l) => l.label === "Instagram")?.href ?? "https://instagram.com/mr_majos";

// Anillo de "story" con los colores de la marca en vez del degradado de Instagram.
const STORY_RING = "bg-[conic-gradient(from_210deg,var(--mr-yellow),var(--mr-red),var(--mr-yellow))]";

function InstaIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function GridIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="1.5" />
      <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
    </svg>
  );
}

function ReelsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <path d="M3 8.5h18M8 3l3 5.5M14 3l3 5.5" />
      <path d="M10 12.5v5l4.2-2.5z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function InstagramSection() {
  return (
    <section className="bg-mr-black py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <span className="font-tag text-xs tracking-widest text-mr-yellow">@MR_MAJOS</span>
          <h2 className="font-display bleed-full px-4 mt-2 text-[17vw] leading-[0.76] text-mr-cream sm:px-6 sm:text-[13vw] md:px-8 md:text-[9vw]">
            TANTO CHORREO
            <br />
            <span className="text-mr-yellow">QUE ROMPE INSTAGRAM</span>
          </h2>
        </Reveal>
      </div>

      <Reveal delay={0.05} className="mx-auto mt-10 max-w-5xl px-2 sm:px-4 md:mt-14 md:px-8">
        <div className="insta-profile rounded-3xl border border-mr-cream/10 bg-[#111] pt-6 shadow-[0_30px_80px_-30px_rgba(255,199,0,0.18)] md:pt-10">
          {/* cabecera del perfil */}
          <div className="flex items-start gap-5 px-4 md:gap-12 md:px-12">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram de Mr. Majo's"
              className={`shrink-0 rounded-full p-[3px] ${STORY_RING}`}
            >
              <span className="block rounded-full bg-[#111] p-[3px]">
                <Image
                  src="/images/badge-circular-amarillo-sin-anillo.webp"
                  alt="Mr. Majo's"
                  width={300}
                  height={300}
                  className="size-20 rounded-full object-cover md:size-36"
                />
              </span>
            </a>

            <div className="min-w-0 flex-1 pt-1 md:pt-3">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="text-xl font-semibold text-mr-cream md:text-2xl">mr_majos</span>
                <div className="flex gap-2">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg bg-mr-yellow px-5 py-1.5 text-sm font-semibold text-mr-black transition-colors hover:bg-mr-cream"
                  >
                    Seguir
                  </a>
                  <Link
                    href="/#order"
                    className="rounded-lg bg-mr-cream/10 px-4 py-1.5 text-sm font-semibold text-mr-cream transition-colors hover:bg-mr-cream/20"
                  >
                    Pedir
                  </Link>
                </div>
              </div>

              <div className="mt-3 hidden text-sm leading-relaxed text-mr-cream/85 sm:block md:mt-5 md:text-base">
                <Bio />
              </div>
            </div>
          </div>

          {/* en móvil la bio va debajo, como en la app */}
          <div className="mt-4 px-4 text-sm leading-relaxed text-mr-cream/85 sm:hidden">
            <Bio />
          </div>

          {/* historias destacadas */}
          <div className="mt-6 flex gap-4 overflow-x-auto px-4 pb-1 [scrollbar-width:none] md:mt-10 md:gap-8 md:px-12 [&::-webkit-scrollbar]:hidden">
            {HIGHLIGHTS.map((h) => (
              <Link key={h.label} href={h.href} className="group flex w-16 shrink-0 flex-col items-center gap-1.5 md:w-20">
                <span className="rounded-full border border-mr-cream/25 p-[3px] transition-colors group-hover:border-mr-yellow">
                  <span className="relative block size-14 overflow-hidden rounded-full bg-black md:size-[4.5rem]">
                    <Image
                      src={h.src}
                      alt=""
                      fill
                      sizes="80px"
                      className="scale-[1.6] object-cover transition-transform duration-500 group-hover:scale-[1.75]"
                      style={{ objectPosition: h.position, transformOrigin: h.position }}
                    />
                  </span>
                </span>
                <span className="w-full truncate text-center text-[11px] font-medium text-mr-cream/85 md:text-xs">
                  {h.label}
                </span>
              </Link>
            ))}
          </div>

          {/* pestañas */}
          <div className="mt-6 flex justify-center gap-12 border-t border-mr-cream/10 md:mt-8 md:gap-16">
            <span className="-mt-px flex items-center gap-1.5 border-t border-mr-cream py-3 text-[11px] font-semibold tracking-[0.15em] text-mr-cream md:py-4 md:text-xs">
              <GridIcon className="size-3.5" />
              PUBLICACIONES
            </span>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 py-3 text-[11px] font-semibold tracking-[0.15em] text-mr-cream/45 transition-colors hover:text-mr-cream md:py-4 md:text-xs"
            >
              <ReelsIcon className="size-3.5" />
              REELS
            </a>
          </div>

          {/* feed */}
          <div className="grid grid-cols-3 gap-0.5 overflow-hidden rounded-b-3xl md:gap-1">
            {POSTS.map((post, i) => (
              <a
                key={post.src}
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label={`${post.caption} — ver en Instagram`}
                className="group relative aspect-[4/5] overflow-hidden bg-[#1a1a1a] outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-mr-yellow"
              >
                <Image
                  src={post.src}
                  alt={`${post.caption} — Mr. Majo's`}
                  fill
                  loading={i < 3 ? "eager" : "lazy"}
                  sizes="(max-width: 1024px) 33vw, 330px"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                  style={{ objectPosition: post.position }}
                />
                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/55 p-4 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <InstaIcon className="size-7 text-mr-yellow" />
                  <p className="font-display text-lg leading-[0.95] text-mr-cream md:text-2xl">{post.caption}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Bio() {
  return (
    <>
      <p className="font-semibold text-mr-cream">Mr. Majo&apos;s</p>
      <p>Smash burgers &amp; perritos gigantes 🍔🌭</p>
      <p>Patatas ILIMITADAS 🍟 · Alicante 📍</p>
      <Link href="/carta" className="font-semibold text-mr-yellow hover:underline">
        🔗 Ver la carta completa
      </Link>
    </>
  );
}
