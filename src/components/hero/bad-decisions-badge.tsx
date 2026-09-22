import { DraggableSticker } from "@/components/decorative/draggable-sticker";
import { cn } from "cn";

export function BadDecisionsBadge({ className }: { className?: string }) {
  return (
    <DraggableSticker
      src="/images/cooltext-bad-decisions.png"
      alt="Bad decisions, make better stories"
      width={1190}
      height={278}
      rotate={-6}
      floatDistance={4}
      rotateSwing={2}
      floatDuration={6}
      neonColor="#ff3fe0"
      className={cn("w-56 sm:w-72 md:w-80", className)}
    />
  );
}
