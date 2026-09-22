"use client";

import gsap from "gsap";
import type { ReactNode } from "react";
import { useEffect, useRef, type RefObject } from "react";

/* ------------------------------------------------------------------ *
 * useFocusTrap — keeps keyboard focus inside a container while it's
 * open, restores it to the trigger on close.
 * ------------------------------------------------------------------ */

const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

const isVisible = (element?: HTMLElement | null): boolean => {
  if (!element || element.hidden) return false;
  const style = window.getComputedStyle(element);
  if (style.visibility === "hidden" || style.visibility === "collapse") return false;
  return element.getClientRects().length > 0;
};

const getFocusableElements = (container?: HTMLElement | null): HTMLElement[] => {
  if (!container) return [];
  return (Array.from(container.querySelectorAll(FOCUSABLE_SELECTOR)) as HTMLElement[]).filter(isVisible);
};

interface UseFocusTrapParams {
  active: boolean;
  containerRef: RefObject<HTMLElement | null>;
  onEscape?: () => void;
}

function useFocusTrap({ active, containerRef, onEscape }: UseFocusTrapParams) {
  const onEscapeRef = useRef(onEscape);
  onEscapeRef.current = onEscape;

  useEffect(() => {
    if (!active) return;

    const container = containerRef.current;
    if (!container) return;

    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;

    const focusInitial = () => {
      const target = getFocusableElements(container)[0] ?? container;
      if (!(target instanceof HTMLElement)) return;
      if (target === container && !container.hasAttribute("tabindex")) {
        container.setAttribute("tabindex", "-1");
      }
      target.focus();
    };

    const focusFrame = requestAnimationFrame(focusInitial);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onEscapeRef.current?.();
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = getFocusableElements(container);
      if (!focusable.length) {
        event.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const activeElement = document.activeElement;

      if (event.shiftKey) {
        if (activeElement === first || !container.contains(activeElement)) {
          event.preventDefault();
          last.focus();
        }
        return;
      }

      if (activeElement === last || !container.contains(activeElement)) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", onKeyDown);
      if (previouslyFocused && document.contains(previouslyFocused)) {
        previouslyFocused.focus();
      }
    };
  }, [active, containerRef]);
}

/* ------------------------------------------------------------------ *
 * FullscreenNavOverlay — a clip-path reveal panel, controlled from the
 * outside (`open`/`onClose`) instead of owning its own trigger button,
 * so it can be dropped into an existing header. Renders `children`
 * with the current open state so content can key its own stagger
 * animation off it.
 * ------------------------------------------------------------------ */

const CLIPS = {
  bottom: {
    closedInitial: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    open: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    closedFinal: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
  },
  top: {
    closedInitial: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    open: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    closedFinal: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
  },
  left: {
    closedInitial: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
    open: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    closedFinal: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
  },
  right: {
    closedInitial: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
    open: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    closedFinal: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
  },
};

const REDUCED_MOTION_FADE_DURATION = 0.2;

export interface FullscreenNavOverlayProps {
  open: boolean;
  onClose: () => void;
  clipOrigin?: keyof typeof CLIPS;
  overlayBg?: string;
  openDuration?: number;
  closeDuration?: number;
  ease?: string;
  className?: string;
  children: (isOpen: boolean) => ReactNode;
}

export function FullscreenNavOverlay({
  open,
  onClose,
  clipOrigin = "top",
  overlayBg = "#000000",
  openDuration = 1.1,
  closeDuration = 0.9,
  ease = "power4.inOut",
  className = "",
  children,
}: FullscreenNavOverlayProps) {
  const overlayRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<gsap.core.Timeline | gsap.core.Tween | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);

  const { closedInitial, open: openClipPath, closedFinal } = CLIPS[clipOrigin] ?? CLIPS.top;

  useEffect(() => {
    const isReducedMotion =
      typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches === true;

    timelineRef.current?.kill();

    if (open) {
      gsap.set(overlayRef.current, { clipPath: closedInitial });
      gsap.set(contentRef.current, { opacity: 1, scale: 1 });

      if (isReducedMotion) {
        gsap.set(overlayRef.current, { clipPath: openClipPath, autoAlpha: 0 });
        timelineRef.current = gsap.to(overlayRef.current, {
          autoAlpha: 1,
          duration: REDUCED_MOTION_FADE_DURATION,
          ease: "power2.out",
        });
        return;
      }

      timelineRef.current = gsap.to(overlayRef.current, {
        clipPath: openClipPath,
        duration: openDuration,
        delay: 0,
        ease,
      });
      return;
    }

    if (isReducedMotion) {
      timelineRef.current = gsap.to(overlayRef.current, {
        autoAlpha: 0,
        duration: REDUCED_MOTION_FADE_DURATION,
        ease: "power2.out",
        onComplete: () => gsap.set(overlayRef.current, { clipPath: closedFinal }),
      });
      return;
    }

    const tl = gsap.timeline();
    timelineRef.current = tl;
    tl.to(contentRef.current, { scale: 0.94, opacity: 0.4, duration: 0.45, ease: "power2.in" }).to(
      overlayRef.current,
      { clipPath: closedFinal, duration: closeDuration, ease },
      "<",
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useFocusTrap({ active: open, containerRef: rootRef, onEscape: onClose });

  return (
    <div ref={rootRef}>
      <nav
        ref={overlayRef}
        style={{ clipPath: closedInitial, backgroundColor: overlayBg }}
        className={`fixed inset-0 z-[100] flex flex-col overflow-y-auto ${
          open ? "pointer-events-auto" : "pointer-events-none"
        } ${className}`}
        aria-hidden={!open}
        role="navigation"
      >
        <div ref={contentRef} className="flex min-h-full w-full flex-col">
          {children(open)}
        </div>
      </nav>
    </div>
  );
}
