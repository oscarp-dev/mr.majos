import { cn } from "cn";

type PaintSplashProps = {
  className?: string;
  color?: string;
};

export function PaintSplash({ className, color = "var(--mr-yellow)" }: PaintSplashProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={cn("pointer-events-none absolute -z-10 select-none", className)}
      aria-hidden="true"
    >
      <path
        fill={color}
        d="M55.2 12.8c17-9.7 38.4-8.9 55.6 2.1 12 7.6 18.6 4.1 30.9 9.6 15.9 7.1 27.9 22.7 28.9 40.1 1 17-7.7 33.6-6.1 50.6 1.6 17.3 13.4 34.6 6.8 50.6-7.2 17.5-28.4 26.1-47.2 28.6-18 2.4-37.3-0.8-51.8-11.9-11.5-8.8-16.9-22.1-28.6-30.5-14.8-10.7-35.8-14.1-43.9-30.4-8.6-17.3-0.5-39 12.1-53.4C24.2 53.4 40 21.4 55.2 12.8Z"
      />
    </svg>
  );
}
