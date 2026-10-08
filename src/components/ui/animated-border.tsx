import type { ComponentProps } from "react";
import { cn } from "cn";

// Adaptado de "Animated Border" (21st.dev/@kevingirelli/components/animated-border):
// una luz que recorre el borde. Aquí acepta varios colores para el destello.

interface AnimatedBorderProps extends ComponentProps<"div"> {
  /** Segundos por vuelta. */
  duration?: number;
  /** Colores del destello, en orden. */
  colors?: string[];
  /** Grosor del borde, en px. */
  width?: number;
  /** Clases de la superficie interior, donde va el contenido. */
  contentClassName?: string;
}

/**
 * La luz es una sola capa que rota (solo transform) y se queda quieta con
 * `prefers-reduced-motion`. Cubre contenedores hasta ~1.7 veces más altos que anchos.
 */
export function AnimatedBorder({
  duration = 6,
  colors = ["var(--primary)"],
  width = 1,
  className,
  contentClassName,
  style,
  children,
  ...props
}: AnimatedBorderProps) {
  const stops = colors
    .map((c, i) => `${c} ${62 + ((96 - 62) * (i + 1)) / (colors.length + 1)}%`)
    .join(", ");

  return (
    <div
      data-slot="animated-border"
      className={cn("relative isolate overflow-hidden rounded-xl", className)}
      style={{ padding: width, ...style }}
      {...props}
    >
      {/* Centrada con márgenes, no con transform, que lo pisaría el giro. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -ml-[100%] -mt-[100%] aspect-square w-[200%] animate-spin motion-reduce:animate-none"
        style={{
          background: `conic-gradient(from 0deg, transparent 0 62%, ${stops}, transparent 96%)`,
          animationDuration: `${duration}s`,
        }}
      />
      <div
        className={cn(
          "relative h-full overflow-hidden rounded-[inherit]",
          contentClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}
