"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "cn";
import { useEffect, useRef, useSyncExternalStore, type CSSProperties } from "react";
import { createPortal } from "react-dom";

type DraggableStickerProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  rotate?: number;
  floatDuration?: number;
  floatDistance?: number;
  rotateSwing?: number;
  neonColor?: string;
  /** En reposo: "float" flota y se balancea; "shine" se queda quieto y le cruza un brillo. */
  idle?: "float" | "shine";
};

const noopSubscribe = () => () => {};

/**
 * Sticker arrastrable. Su sitio lo marca un ancla invisible dentro de la sección
 * (con el className de posición/tamaño), pero el sticker se pinta en una capa
 * colgada de <body>: así no lo recorta el overflow-hidden de la sección ni lo
 * tapan las secciones siguientes al arrastrarlo por la página.
 */
export function DraggableSticker({
  src,
  alt,
  width,
  height,
  className,
  rotate = -8,
  floatDuration = 4.5,
  floatDistance = 10,
  rotateSwing = 7,
  neonColor,
  idle = "float",
}: DraggableStickerProps) {
  const anchorRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);
  // false en el servidor y en la hidratación; true después → entonces se monta el portal
  const mounted = useSyncExternalStore(noopSubscribe, () => true, () => false);

  // La capa sigue al ancla: se mide en cada frame mientras el ancla está cerca
  // de la pantalla (Reveal, cambios de layout…) y solo se escribe si cambia.
  useEffect(() => {
    const anchor = anchorRef.current;
    const layer = layerRef.current;
    if (!mounted || !anchor || !layer) return;

    let raf = 0;
    let last = "";
    const sync = () => {
      const r = anchor.getBoundingClientRect();
      const left = r.left + window.scrollX;
      const top = r.top + window.scrollY;
      const key = `${left}|${top}|${r.width}`;
      if (key !== last) {
        last = key;
        if (r.width === 0) {
          layer.style.display = "none";
        } else {
          layer.style.display = "";
          layer.style.left = `${left}px`;
          layer.style.top = `${top}px`;
          layer.style.width = `${r.width}px`;
        }
      }
    };
    const loop = () => {
      sync();
      raf = requestAnimationFrame(loop);
    };

    sync();
    const io = new IntersectionObserver(
      ([entry]) => {
        cancelAnimationFrame(raf);
        if (entry.isIntersecting) loop();
        else sync();
      },
      { rootMargin: "300px" }
    );
    io.observe(anchor);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [mounted]);

  const sticker = (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0.15}
      whileDrag={{ scale: 1.15, rotate: rotate * 1.4 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="pointer-events-auto cursor-grab touch-none select-none active:cursor-grabbing"
    >
      <motion.div
        className="relative"
        style={idle === "shine" ? { rotate } : undefined}
        animate={
          idle === "float"
            ? {
                y: [0, -floatDistance, 0],
                rotate: [rotate - rotateSwing, rotate + rotateSwing, rotate - rotateSwing],
              }
            : undefined
        }
        transition={{ duration: floatDuration, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          unoptimized
          draggable={false}
          style={neonColor ? ({ "--neon-color": neonColor } as CSSProperties) : undefined}
          className={cn(
            "h-auto w-full",
            neonColor ? "animate-neon-flicker" : "drop-shadow-[0_8px_14px_rgba(0,0,0,0.55)]"
          )}
        />
        {idle === "shine" && (
          <span
            aria-hidden="true"
            className="animate-sticker-shine pointer-events-none absolute inset-0"
            style={{ maskImage: `url(${src})` }}
          />
        )}
      </motion.div>
    </motion.div>
  );

  return (
    <>
      <div
        ref={anchorRef}
        className={cn("pointer-events-none absolute z-20", className)}
        style={{ aspectRatio: `${width} / ${height}` }}
      >
        {!mounted && sticker}
      </div>
      {mounted &&
        createPortal(
          <div ref={layerRef} className="pointer-events-none absolute z-40" style={{ display: "none" }}>
            {sticker}
          </div>,
          document.body
        )}
    </>
  );
}
