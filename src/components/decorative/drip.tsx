import { cn } from "cn";

type DripProps = {
  className?: string;
  color?: string;
  flip?: boolean;
};

export function Drip({ className, color = "var(--mr-red)", flip = false }: DripProps) {
  return (
    <svg
      viewBox="0 0 400 46"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={cn("pointer-events-none block w-full select-none", flip && "rotate-180", className)}
    >
      <path
        fill={color}
        d="M0,0 L400,0 L400,14
           Q380,36 360,14
           Q340,32 320,14
           Q300,42 280,14
           Q260,29 240,14
           Q220,38 200,14
           Q180,34 160,14
           Q140,30 120,14
           Q100,40 80,14
           Q60,28 40,14
           Q20,36 0,14 Z"
      />
    </svg>
  );
}
