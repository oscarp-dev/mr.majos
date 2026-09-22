"use client";

import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "cn";

type ParallaxBannerProps = {
  src: string;
  alt: string;
  objectPosition?: string;
  eyebrow: string;
  heading: ReactNode;
  align?: "left" | "right";
  /** "end" (default) anchors the copy to the bottom edge; "center" keeps it
   *  vertically centered — worth it on tall custom aspect-ratio banners,
   *  where "end" can leave the copy scrolled out of view below the fold
   *  on short/wide viewports while the section is still mostly image. */
  verticalAlign?: "end" | "center";
  className?: string;
};

export function ParallaxBanner({
  src,
  alt,
  objectPosition = "center",
  eyebrow,
  heading,
  align = "left",
  verticalAlign = "end",
  className,
}: ParallaxBannerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // smoothed so each layer trails the raw scroll slightly, instead of
  // snapping 1:1 to the scrollbar — gives the glide a Lenis-style rig has.
  const smooth = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.4,
  });

  // each "layer" reads from the same progress but at its own rate, so the
  // image, tag and headline drift apart as you scroll — that gap is what
  // reads as depth instead of one flat card sliding up.
  const imageY = useTransform(smooth, [0, 1], ["-14%", "14%"]);
  const imageScale = useTransform(smooth, [0, 1], [1.15, 1.02]);
  const eyebrowY = useTransform(smooth, [0, 1], ["20%", "-20%"]);
  const headingY = useTransform(smooth, [0, 1], ["55%", "-55%"]);

  return (
    <section
      ref={ref}
      className={cn(
        "relative h-[62vh] min-h-[380px] overflow-hidden bg-mr-black md:h-[80vh]",
        className
      )}
    >
      <motion.div
        style={{ y: imageY, scale: imageScale }}
        className="absolute inset-x-0 -top-[20%] -bottom-[20%]"
      >
        <Image
          src={src}
          alt={alt}
          fill
          loading="lazy"
          sizes="100vw"
          style={{ objectPosition }}
          className="object-cover"
        />
      </motion.div>

      <div
        className={cn(
          "absolute inset-0",
          align === "left"
            ? "bg-gradient-to-r from-mr-black via-mr-black/55 to-mr-black/10"
            : "bg-gradient-to-l from-mr-black via-mr-black/55 to-mr-black/10"
        )}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-mr-black via-transparent to-mr-black/50" />

      <div
        className={cn(
          "relative mx-auto flex h-full max-w-7xl overflow-hidden px-4 md:px-8",
          verticalAlign === "center" ? "items-center py-12 md:py-16" : "items-end pb-12 md:pb-16",
          align === "right" && "justify-end text-right"
        )}
      >
        <div>
          <motion.span
            style={{ y: eyebrowY }}
            className="block font-tag text-xs tracking-widest text-mr-yellow"
          >
            {eyebrow}
          </motion.span>
          <motion.h2
            style={{ y: headingY }}
            className="font-display mt-5 text-[13vw] leading-[0.8] text-mr-cream sm:text-[8vw] md:mt-6 md:text-[5.2vw]"
          >
            {heading}
          </motion.h2>
        </div>
      </div>
    </section>
  );
}
