import Image from "next/image";
import Link from "next/link";
import { cn } from "cn";
import { SOCIAL_LINKS } from "@/lib/site-data";
import { ConsentSettingsButton } from "@/components/consent/consent-banner";
import { getI18n } from "@/i18n/server";
import { GameBoyDevice } from "@/components/decorative/game-boy-device";

/** `gameBoy`: la GameBoy cierra la home desde el pie. */
export async function SiteFooter({ gameBoy = false }: { gameBoy?: boolean }) {
  const { t, href } = await getI18n();

  return (
    <footer
      className={cn(
        "overflow-hidden border-t-2 border-mr-yellow/20 bg-mr-black pb-8 md:pb-10",
        gameBoy ? "pt-20 md:pt-28" : "pt-14 md:pt-20"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* con GameBoy: en móvil va encima del pie; en desktop, a su izquierda */}
        <div className={cn(gameBoy && "md:flex md:items-center md:gap-16 lg:gap-24")}>
          {gameBoy && (
            <div className="relative mx-auto mb-16 aspect-square w-full max-w-[17rem] sm:max-w-xs md:mx-0 md:mb-0 md:w-72 md:shrink-0 lg:w-80">
              <GameBoyDevice className="w-full -rotate-6 scale-150" />
            </div>
          )}

          <div className="flex flex-1 flex-wrap items-start justify-between gap-10">
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
        </div>

        <div className={cn("flex flex-col-reverse items-start justify-between gap-4 border-t border-mr-cream/10 pt-6 text-xs text-mr-cream/40 md:flex-row md:items-center", gameBoy ? "mt-20" : "mt-14")}>
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
