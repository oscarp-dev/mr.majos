import type { Metadata, Viewport } from "next";
import { Anton, DM_Serif_Display, Space_Grotesk } from "next/font/google";
import { ConsentBanner } from "@/components/consent/consent-banner";
import { LocaleProvider } from "@/i18n/client";
import { LOCALES } from "@/i18n/config";
import { getI18n } from "@/i18n/server";
import { BUSINESS } from "@/lib/business";
import { SITE_URL } from "@/lib/seo";
import "../globals.css";

const anton = Anton({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// serifa retro para los carteles de promo (margaritas)
const dmSerif = DM_Serif_Display({
  variable: "--font-retro",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getI18n();
  // lo común a todas las páginas; cada page.tsx añade su canonical con pageMetadata
  return {
    metadataBase: SITE_URL,
    title: t.meta.title,
    description: t.meta.description,
    applicationName: BUSINESS.brand,
    keywords: t.meta.keywords,
    formatDetection: { telephone: false },
  };
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  const { lang } = await getI18n();

  return (
    <html
      lang={lang}
      className={`${anton.variable} ${spaceGrotesk.variable} ${dmSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <LocaleProvider lang={lang}>
          {children}
          <ConsentBanner />
        </LocaleProvider>
      </body>
    </html>
  );
}
