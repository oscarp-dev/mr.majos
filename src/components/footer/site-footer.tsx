import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-mr-yellow/20 bg-mr-black pb-8 pt-14 md:pb-10 md:pt-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-wrap items-start justify-between gap-10">
          <Image
            src="/images/logo-mark.png"
            alt="Mr. Majo's"
            width={230}
            height={59}
            loading="lazy"
            className="h-10 w-auto -rotate-2"
          />

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
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
          <p>© {new Date().getFullYear()} Mr. Majo&apos;s. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-mr-cream/70">
              Aviso Legal
            </Link>
            <Link href="#" className="hover:text-mr-cream/70">
              Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
