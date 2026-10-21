import Image from "next/image";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/site-data";
import { ConsentSettingsButton } from "@/components/consent/consent-banner";
import { getI18n } from "@/i18n/server";

export async function SiteFooter() {
  const { t, href } = await getI18n();

  return (
    <footer className="border-t-2 border-mr-yellow/20 bg-mr-black pb-8 pt-14 md:pb-10 md:pt-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-wrap items-start justify-between gap-10">
          <Image
            src="/images/logo-mark.webp"
            alt="Mr. Majo's"
            width={230}
            height={59}
            loading="lazy"
            className="h-10 w-auto -rotate-2"
          />

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {t.nav.links.map((link) => (
              <Link
                key={link.href}
                href={href(link.href)}
                className="font-tag text-sm tracking-wide text-mr-cream/80 hover:text-mr-yellow"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-4">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="font-tag text-sm tracking-wide text-mr-cream/80 hover:text-mr-yellow"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-start justify-between gap-4 border-t border-mr-cream/10 pt-6 text-xs text-mr-cream/40 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Mr. Majo&apos;s. {t.footer.rights}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href={href("/aviso-legal")} className="hover:text-mr-cream/70">
              {t.footer.legal}
            </Link>
            <Link href={href("/privacidad")} className="hover:text-mr-cream/70">
              {t.footer.privacy}
            </Link>
            <Link href={href("/cookies")} className="hover:text-mr-cream/70">
              {t.footer.cookiesPolicy}
            </Link>
            <ConsentSettingsButton
              label={t.footer.cookieSettings}
              className="cursor-pointer hover:text-mr-cream/70"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
