import Image from "next/image";
import type { CSSProperties } from "react";
import { cn } from "cn";

type LineartStickerProps = {
  variant?: "white" | "yellow";
  className?: string;
  size?: number;
  rotate?: string;
};

export function LineartSticker({
  variant = "white",
  className,
  size = 160,
  rotate = "-rotate-6",
}: LineartStickerProps) {
  const src =
    variant === "yellow"
      ? "/images/lineart-sticker-yellow.png"
      : "/images/lineart-sticker-white.png";

  return (
    <div
      className={cn(
        "animate-float pointer-events-none select-none",
        rotate,
        className
      )}
      style={{ "--float-rot": rotate.includes("-") ? "-6deg" : "6deg" } as CSSProperties}
    >
      <Image
        src={src}
        alt=""
        aria-hidden="true"
        width={size}
        height={size}
        loading="lazy"
        className="h-auto w-full drop-shadow-[0_8px_16px_rgba(0,0,0,0.45)]"
      />
    </div>
  );
}
