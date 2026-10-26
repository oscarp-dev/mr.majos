import type { Metadata } from "next";
import { DEFAULT_LOCALE, LOCALES, localePath, type Locale } from "@/i18n/config";
import { BUSINESS } from "./business";
import { OPENING_HOURS, ORDER_LINKS, SOCIAL_LINKS } from "./site-data";

/** getDay() → día de schema.org (0 = domingo). */
const SCHEMA_DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Dominio público de la web. En producción: NEXT_PUBLIC_SITE_URL=https://dominio.com
// (en Vercel, si falta, se usa el dominio de producción del proyecto).
export const SITE_URL = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000")
);

/** Rutas públicas que van al sitemap (sin prefijo de idioma). */
export const INDEXED_PATHS = ["/", "/carta"] as const;

/** Imagen al compartir en WhatsApp, Instagram, X…: 1200×630 con el logo. */
const SHARE_IMAGE = {
  url: "/images/og-mr-majos.jpg",
  width: 1200,
  height: 630,
  alt: "Smash burger doble con bacon y queso fundido de Mr. Majo's, Alicante",
};

const OG_LOCALE: Record<Locale, string> = { es: "es_ES", en: "en_GB" };

export const absoluteUrl = (path: string) => new URL(path, SITE_URL).toString();

/** hreflang de una ruta: una entrada por idioma + x-default (español). */
export function languageAlternates(path: string) {
  return {
    ...Object.fromEntries(LOCALES.map((lang) => [lang, localePath(lang, path)])),
    "x-default": localePath(DEFAULT_LOCALE, path),
  };
}

/**
 * Metadatos de una página: título, descripción, canonical + hreflang y las
 * tarjetas de Open Graph / X. Las páginas sobrescriben `openGraph` entero, así
 * que todo lo que debe llevar cada página se monta aquí.
 */
export function pageMetadata({
  lang,
  path,
  title,
  description,
  index = true,
}: {
  lang: Locale;
  path: string;
  title: string;
  description: string;
  index?: boolean;
}): Metadata {
  const url = localePath(lang, path);
  return {
    title,
    description,
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: {
      type: "website",
      siteName: BUSINESS.brand,
      locale: OG_LOCALE[lang],
      alternateLocale: LOCALES.filter((l) => l !== lang).map((l) => OG_LOCALE[l]),
      url,
      title,
      description,
      images: [SHARE_IMAGE],
    },
    twitter: { card: "summary_large_image", title, description, images: [SHARE_IMAGE] },
    ...(index ? {} : { robots: { index: false, follow: true } }),
  };
}

/** Datos estructurados del restaurante (schema.org) para Google y compañía. */
export function restaurantJsonLd(lang: Locale, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": absoluteUrl("/#restaurant"),
    name: BUSINESS.brand,
    description,
    url: absoluteUrl(localePath(lang, "/")),
    image: absoluteUrl("/images/foto-burger-menu-del-dia.webp"),
    logo: absoluteUrl("/images/logo-mark.webp"),
    menu: absoluteUrl(localePath(lang, "/carta")),
    servesCuisine: ["Hamburguesas", "Smash burgers", "Hot dogs", "Americana"],
    priceRange: "€€",
    acceptsReservations: true,
    potentialAction: {
      "@type": "ReserveAction",
      target: ORDER_LINKS.reservas,
      result: { "@type": "FoodEstablishmentReservation", name: `Reserva en ${BUSINESS.brand}` },
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle Bazán, 45",
      postalCode: "03001",
      addressLocality: "Alicante",
      addressRegion: "Alicante",
      addressCountry: "ES",
    },
    sameAs: SOCIAL_LINKS.map((link) => link.href),
    openingHoursSpecification: OPENING_HOURS.flatMap(({ days, slots }) =>
      slots.map(([opens, closes]) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: days.map((day) => SCHEMA_DAYS[day]),
        opens,
        closes,
      }))
    ),
    // TODO: añadir telephone cuando esté el dato (BUSINESS.phone)
  };
}

/** <script type="application/ld+json">, escapando "<" para que no se cuele HTML. */
export const jsonLdScript = (data: object) => JSON.stringify(data).replace(/</g, "\\u003c");
