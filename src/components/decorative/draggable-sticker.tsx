"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "cn";
import type { CSSProperties } from "react";

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
};

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
}: DraggableStickerProps) {
  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0.15}
      whileDrag={{ scale: 1.15, rotate: rotate * 1.4 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className={cn(
        "pointer-events-auto absolute z-20 cursor-grab touch-none select-none active:cursor-grabbing",
        className
      )}
    >
      <motion.div
        animate={{
          y: [0, -floatDistance, 0],
          rotate: [rotate - rotateSwing, rotate + rotateSwing, rotate - rotateSwing],
        }}
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
      </motion.div>
    </motion.div>
  );
}
