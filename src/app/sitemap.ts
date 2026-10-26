import type { MetadataRoute } from "next";
import { LOCALES, localePath } from "@/i18n/config";
import { INDEXED_PATHS, absoluteUrl, languageAlternates } from "@/lib/seo";

// Una entrada por página e idioma, cada una con sus hreflang. Las legales van
// con noindex y se quedan fuera.
export default function sitemap(): MetadataRoute.Sitemap {
  return INDEXED_PATHS.flatMap((path) => {
    const languages = Object.fromEntries(
      Object.entries(languageAlternates(path)).map(([lang, href]) => [lang, absoluteUrl(href)])
    );
    return LOCALES.map((lang) => ({
      url: absoluteUrl(localePath(lang, path)),
      changeFrequency: "weekly" as const,
      priority: path === "/" ? 1 : 0.8,
      alternates: { languages },
    }));
  });
}
