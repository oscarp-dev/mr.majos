import { DraggableSticker } from "@/components/decorative/draggable-sticker";
import { cn } from "cn";

export function CooltextBadge({ className }: { className?: string }) {
  return (
    <DraggableSticker
      src="/images/orgasm-addict-badge.webp"
      alt="Orgasm Addict"
      width={614}
      height={120}
      rotate={-4}
      className={cn("w-48 sm:w-64 md:w-80 lg:w-96", className)}
    />
  );
}
