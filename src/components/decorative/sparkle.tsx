import { cn } from "cn";

export function Sparkle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn("pointer-events-none select-none", className)}
      fill="var(--mr-yellow)"
    >
      <path d="M12 2c.6 4.2 1.9 5.5 6 6-4.1.5-5.4 1.8-6 6-.6-4.2-1.9-5.5-6-6 4.1-.5 5.4-1.8 6-6Z" />
      <path d="M19.5 14c.3 2 .9 2.7 2.5 3-1.6.3-2.2 1-2.5 3-.3-2-.9-2.7-2.5-3 1.6-.3 2.2-1 2.5-3Z" />
    </svg>
  );
}
