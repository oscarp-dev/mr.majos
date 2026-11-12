import type { Metadata } from "next";
import { DEFAULT_LOCALE, LOCALES, localePath, type Locale } from "@/i18n/config";
import { BUSINESS } from "./business";
import type { Menu } from "./full-menu-data";
import { OPENING_HOURS, ORDER_LINKS, SOCIAL_LINKS } from "./site-data";

/** getDay() → día de schema.org (0 = domingo). */
const SCHEMA_DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Dominio público de la web: www.mrmajos.es (mrmajos.es redirige ahí en Vercel).
// NEXT_PUBLIC_SITE_URL lo sobrescribe; en desarrollo, localhost.
export const SITE_URL = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.NODE_ENV === "production" ? "https://www.mrmajos.es" : "http://localhost:3000")
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
    hasMenu: absoluteUrl(localePath(lang, "/carta")),
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
    telephone: BUSINESS.phoneIntl,
  };
}

/** "13,70€" → "13.70"; precios dobles ("3,90€ / 14,90€") se quedan con el primero. */
const schemaPrice = (price: string) => {
  const match = price.match(/\d+(?:[.,]\d+)?/);
  return match ? Number(match[0].replace(",", ".")).toFixed(2) : undefined;
};

/** Carta completa en schema.org (Menu → MenuSection → MenuItem), para /carta. */
export function menuJsonLd(lang: Locale, menu: Menu) {
  const item = (name: string, description: string | undefined, price: string) => {
    const amount = schemaPrice(price);
    return {
      "@type": "MenuItem",
      name,
      ...(description ? { description } : {}),
      ...(amount
        ? { offers: { "@type": "Offer", price: amount, priceCurrency: "EUR" } }
        : {}),
    };
  };

  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    "@id": absoluteUrl(`${localePath(lang, "/carta")}#menu`),
    name: `${BUSINESS.brand} — ${lang === "es" ? "Carta" : "Menu"}`,
    url: absoluteUrl(localePath(lang, "/carta")),
    inLanguage: lang,
    mainEntityOfPage: absoluteUrl(localePath(lang, "/carta")),
    provider: { "@id": absoluteUrl("/#restaurant") },
    hasMenuSection: menu.categories.map((category) => ({
      "@type": "MenuSection",
      name: category.title,
      ...(category.description ? { description: category.description } : {}),
      hasMenuItem: [
        // el plato insignia va aparte en la carta, pero es una smash más
        ...(category.id === "smash"
          ? [item(menu.featured.name, menu.featured.description, menu.featured.price)]
          : []),
        ...category.items.map((i) => item(i.name, i.description, i.price)),
        ...(category.groups ?? []).flatMap((group) =>
          group.sections.flatMap((section) =>
            section.items.map((d) => item(d.name, d.detail, d.price))
          )
        ),
      ],
    })),
  };
}

/** <script type="application/ld+json">, escapando "<" para que no se cuele HTML. */
export const jsonLdScript = (data: object) => JSON.stringify(data).replace(/</g, "\\u003c");
