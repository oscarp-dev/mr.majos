import { cn } from "cn";

export function HoloSeal({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none flex size-16 select-none flex-col items-center justify-center rounded-full border-2 border-mr-black text-center shadow-[0_4px_0_0_rgba(0,0,0,1)]",
        className
      )}
      style={{
        background:
          "conic-gradient(from 180deg, #ff8fd8, #8fd8ff, #d8ff8f, #ff8fd8)",
      }}
    >
      <span className="font-tag text-[9px] leading-none text-mr-black/80">
        MAJO
      </span>
      <span className="font-tag text-[9px] leading-none text-mr-black/80">
        SEAL
      </span>
    </div>
  );
}
