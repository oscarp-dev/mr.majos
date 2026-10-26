import { DraggableSticker } from "./draggable-sticker";

// Stickers troquelados con las versiones del logo (recortados de IMG_3958.PNG):
// fondo negro + borde crema, así se leen igual sobre negro que sobre amarillo.
const STICKERS = {
  bloque: { width: 560, height: 268 },
  nube: { width: 560, height: 365 },
  sello: { width: 560, height: 544 },
  firma: { width: 560, height: 169 },
} as const;

export type BrandStickerName = keyof typeof STICKERS;

/** Logo de Mr. Majo's en sticker, arrastrable. Posición y ancho por `className`. */
export function BrandSticker({
  name,
  className,
  rotate,
  idle,
}: {
  name: BrandStickerName;
  className?: string;
  rotate?: number;
  idle?: "float" | "shine";
}) {
  return (
    <DraggableSticker
      src={`/images/stickers/mr-majos-${name}.webp`}
      alt=""
      {...STICKERS[name]}
      rotate={rotate}
      idle={idle}
      className={className}
    />
  );
}
