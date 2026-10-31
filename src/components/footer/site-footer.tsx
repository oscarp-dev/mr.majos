import Image from "next/image";
import Link from "next/link";
import { cn } from "cn";
import { SOCIAL_LINKS } from "@/lib/site-data";
import { ConsentSettingsButton } from "@/components/consent/consent-banner";
import { getI18n } from "@/i18n/server";
import { GameBoyDevice } from "@/components/decorative/game-boy-device";

/** `gameBoy`: la home se cierra con un "fin de partida" alrededor de la GameBoy. */
export async function SiteFooter({ gameBoy = false }: { gameBoy?: boolean }) {
  const { t, href } = await getI18n();

  return (
    <footer
      className={cn(
        "relative overflow-hidden border-t-2 border-mr-yellow/20 bg-mr-black pb-8 md:pb-10",
        gameBoy ? "pt-12 md:pt-20" : "pt-14 md:pt-20"
      )}
    >
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        {gameBoy && <GameOver />}

        <div
          className={cn(
            "grid grid-cols-[auto_1fr] items-center gap-x-6 gap-y-6 md:flex md:flex-wrap md:items-start md:justify-between md:gap-10",
            gameBoy && "border-t border-mr-cream/10 pt-10 md:pt-12"
          )}
        >
          <Image
            src="/images/logo-mark.webp"
            alt="Mr. Majo's"
            width={230}
            height={59}
            loading="lazy"
            className="h-9 w-auto -rotate-2 md:h-10"
          />

          <div className="flex justify-end gap-4 md:order-last">
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

          <nav className="col-span-2 flex flex-wrap gap-x-7 gap-y-3">
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
        </div>

        <div className="mt-10 flex flex-col-reverse items-start justify-between gap-4 border-t border-mr-cream/10 pt-6 text-xs text-mr-cream/40 md:mt-14 md:flex-row md:items-center">
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

/** La GameBoy como pantalla final: consola + "¿otra partida?" y vuelta al inicio. */
async function GameOver() {
  const { t } = await getI18n();

  return (
    <div className="relative mb-12 grid items-center md:mb-16 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-10 lg:gap-16">
      {/* el SVG trae mucho aire alrededor de la consola: scale-150 la lleva al borde de su caja */}
      <div className="relative mx-auto aspect-square w-[68%] max-w-[17rem] md:w-full md:max-w-sm">
        <div aria-hidden="true" className="absolute inset-[8%] rounded-full bg-mr-yellow/15 blur-3xl" />
        <GameBoyDevice className="w-full -rotate-6 scale-150" />
        <span className="absolute -bottom-6 -right-6 rotate-6 rounded-full border-2 border-mr-black bg-mr-yellow px-3 py-1 font-tag text-[11px] tracking-widest text-mr-black shadow-[0_3px_0_0_rgba(0,0,0,1)] md:-right-2 md:text-xs">
          {t.footer.pressStart} <span className="motion-safe:animate-pulse">▶</span>
        </span>
      </div>

      <div className="relative mt-14 text-center md:mt-0 md:text-left">
        <span className="font-tag text-xs tracking-widest text-mr-yellow/80">
          {t.footer.gameOver}
        </span>
        <p className="font-display mt-3 -rotate-1 text-[22vw] leading-[0.78] text-mr-cream sm:text-[16vw] md:text-[9vw] lg:text-[8rem]">
          {t.footer.again1}
          <br />
          <span className="text-mr-yellow">{t.footer.again2}</span>
        </p>
        <p className="mx-auto mt-5 max-w-sm text-sm leading-relaxed text-mr-cream/70 md:mx-0 md:text-base">
          {t.footer.againText}
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3 md:justify-start">
          <a
            href="#top"
            className="inline-flex -rotate-1 items-center gap-2 rounded-full border-2 border-mr-black bg-mr-yellow px-6 py-3 font-tag text-sm tracking-wide text-mr-black shadow-[0_4px_0_0_rgba(255,255,255,0.15)] transition-transform hover:-translate-y-0.5"
          >
            {t.footer.pressStart} ↑
          </a>
          <a
            href="#order"
            className="inline-flex rotate-1 items-center rounded-full border-2 border-mr-cream/30 px-6 py-3 font-tag text-sm tracking-wide text-mr-cream transition-colors hover:border-mr-yellow hover:text-mr-yellow"
          >
            {t.footer.orderNow} ↗
          </a>
        </div>
      </div>
    </div>
  );
}
