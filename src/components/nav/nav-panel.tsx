"use client";

import Image from "next/image";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/site-data";

const PANEL_IMAGES = [
  { src: "/images/hero-sugarmommy-burger.jpg", alt: "La Sugarmommy" },
  { src: "/images/foto-hotdog-mordida.jpg", alt: "Hot Dog Vibes" },
];

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true">
      <path d="M16.6 5.82c-.92-.9-1.44-2.12-1.44-3.4h-3.02v13.9a2.6 2.6 0 1 1-2.6-2.6c.18 0 .36.02.53.05V10.7a5.6 5.6 0 1 0 5.09 5.58V9.4a8.2 8.2 0 0 0 4.44 1.3V7.68a5.35 5.35 0 0 1-2.99-1.86Z" />
    </svg>
  );
}

const SOCIAL_ICONS: Record<string, () => React.ReactNode> = {
  Instagram: () => (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  ),
  TikTok: TikTokIcon,
};

const LINK_Y_OFFSET = 26;

/* Character-split hover reveal: each letter sits above its own text-shadow
   duplicate (offset 1.2em down, in mr-red). On hover/focus every letter's
   real copy slides up out of its clipping box at a staggered delay,
   revealing the red shadow copy sliding into the vacated spot beneath it.
   Falls back to plain text under prefers-reduced-motion. */
function NavLinkHover({
  label,
  href,
  onClick,
  reduced,
  linkRef,
}: {
  label: string;
  href: string;
  onClick: () => void;
  reduced: boolean;
  linkRef: (el: HTMLAnchorElement | null) => void;
}) {
  const baseClass =
    "font-display block border-b border-mr-black/10 py-3 text-[15vw] leading-[0.9] text-mr-black sm:text-[9vw] md:text-[6.5vw]";

  if (reduced) {
    return (
      <a ref={linkRef} href={href} onClick={onClick} className={`${baseClass} transition-colors hover:text-mr-red`}>
        {label}
      </a>
    );
  }

  return (
    <a ref={linkRef} href={href} onClick={onClick} className={`${baseClass} group/link-hover`}>
      <span className="sr-only">{label}</span>
      <span aria-hidden="true" className="relative inline-block overflow-hidden align-top leading-[0.9]">
        {[...label].map((char, index) => (
          <span
            key={index}
            className="relative inline-block whitespace-pre transition-transform duration-500 ease-[cubic-bezier(0.625,0.05,0,1)] group-hover/link-hover:-translate-y-[1.2em] group-focus-visible/link-hover:-translate-y-[1.2em]"
            style={{ textShadow: "0 1.2em var(--mr-red)", transitionDelay: `${index * 0.02}s` }}
          >
            {char === " " ? " " : char}
          </span>
        ))}
      </span>
    </a>
  );
}

export function NavPanel({
  isOpen,
  onNavigate,
}: {
  isOpen: boolean;
  onNavigate: () => void;
}) {
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const taglineRef = useRef<HTMLParagraphElement | null>(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);
  const socialsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const ctaRef = useRef<HTMLAnchorElement | null>(null);
  const reducedMotion =
    typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches === true;

  useEffect(() => {
    const targets = [taglineRef.current, ...linksRef.current, ...imagesRef.current, ...socialsRef.current, ctaRef.current];
    gsap.killTweensOf(targets);

    if (!isOpen) return;

    if (reducedMotion) {
      gsap.set(targets, { y: 0, opacity: 1, scale: 1 });
      return;
    }

    gsap.set(taglineRef.current, { y: -12, opacity: 0 });
    gsap.set(linksRef.current, { y: LINK_Y_OFFSET, opacity: 0 });
    gsap.set(imagesRef.current, { scale: 0.85, opacity: 0 });
    gsap.set(socialsRef.current, { y: 12, opacity: 0 });
    gsap.set(ctaRef.current, { y: 12, opacity: 0 });

    const delay = 0.35;

    gsap.to(taglineRef.current, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay });
    gsap.to(linksRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.7,
      ease: "power2.out",
      stagger: 0.07,
      delay: delay + 0.1,
    });
    gsap.to(imagesRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.7,
      ease: "power3.out",
      stagger: 0.06,
      delay: delay + 0.35,
    });
    gsap.to(socialsRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.05,
      delay: delay + 0.5,
    });
    gsap.to(ctaRef.current, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: delay + 0.55 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-between gap-10 px-6 pb-10 pt-24 md:px-10">
      <p ref={taglineRef} className="font-tag text-xs tracking-widest text-mr-black/60">
        PARA LOS MÁS GAMBERROS DEL HAMBRE
      </p>

      <div className="flex flex-1 flex-col justify-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        <nav className="flex flex-col">
          {NAV_LINKS.map((link, i) => (
            <NavLinkHover
              key={link.href}
              label={link.label}
              href={link.href}
              onClick={onNavigate}
              reduced={reducedMotion}
              linkRef={(el) => {
                linksRef.current[i] = el;
              }}
            />
          ))}
        </nav>

        <div className="flex gap-3 lg:flex-col lg:items-end">
          {PANEL_IMAGES.map((img, i) => (
            <div
              key={img.src}
              ref={(el) => {
                imagesRef.current[i] = el;
              }}
              className="relative size-24 overflow-hidden rounded-xl border-2 border-mr-black shadow-[0_4px_0_0_rgba(0,0,0,1)] sm:size-28 md:size-36 lg:size-44"
            >
              <Image src={img.src} alt={img.alt} fill sizes="(max-width: 1024px) 30vw, 180px" className="object-cover" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-end justify-between gap-8">
        <div className="flex gap-4 text-mr-black [&_svg]:size-5 md:[&_svg]:size-6">
          {SOCIAL_LINKS.map((social, i) => {
            const Icon = SOCIAL_ICONS[social.label];
            return (
              <a
                key={social.href}
                ref={(el) => {
                  socialsRef.current[i] = el;
                }}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="transition-transform hover:-translate-y-0.5"
              >
                {Icon ? <Icon /> : social.label}
              </a>
            );
          })}
        </div>

        <a
          ref={ctaRef}
          href="#order"
          onClick={onNavigate}
          className="inline-flex rotate-1 items-center rounded-full border-2 border-mr-black bg-mr-black px-6 py-3 font-tag text-sm tracking-wide text-mr-yellow shadow-[0_4px_0_0_rgba(0,0,0,0.4)] transition-transform hover:-translate-y-0.5 md:px-8 md:py-4 md:text-base"
        >
          ¡PIDE YA!
        </a>
      </div>
    </div>
  );
}
