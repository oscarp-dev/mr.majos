import { cn } from "cn";

export type MargaritaFlavor = "classic" | "strawberry" | "mango";

// Copa de margarita en estilo ilustración vintage, como el cartel del local:
// trazo fino algo tembloroso, cristal con grosor y brillos, borde escarchado
// de sal (también por fuera), cóctel con volumen y un adorno por sabor.

const INK = "#2b2418";
const GLASS = "#eef3f1";

const PALETTE: Record<MargaritaFlavor, { light: string; mid: string; dark: string; froth: string }> = {
  classic: { light: "#f1f6c8", mid: "#d3e38c", dark: "#a9c25a", froth: "#f8f8e4" },
  strawberry: { light: "#fde0e3", mid: "#f39aaa", dark: "#d4566f", froth: "#fdf0f0" },
  mango: { light: "#ffeccb", mid: "#ffc46a", dark: "#e9962e", froth: "#fff5e2" },
};

// cuenco ancho y poco profundo + bulbo pequeño; se cierra por delante del borde
const BOWL =
  "M14 42 C16 64 44 80 66 84 C74 86 78 90 77 98 C76 110 82 120 90 124 C98 120 104 110 103 98 C102 90 106 86 114 84 C136 80 164 64 166 42 A76 11 0 0 1 14 42 Z";
const STEM = "M86.5 124 C88 150 88 168 84.5 186 L95.5 186 C92 168 92 150 93.5 124 Z";

// pseudoaleatorio estable (mismo dibujo en servidor y cliente)
const rand = (n: number) => {
  const x = Math.sin(n * 127.1) * 43758.5453;
  return x - Math.floor(x);
};

/** Sal pegada por fuera del cristal, bajo el borde: borde inferior irregular. */
function saltBandPath() {
  const steps = 40;
  const top: string[] = [];
  const bottom: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * Math.PI;
    const x = 90 - 76 * Math.cos(t);
    const y = 42 + 11 * Math.sin(t);
    top.push(`${x.toFixed(1)},${(y - 1).toFixed(1)}`);
    const depth = 3 + rand(i) * 5 * Math.sin(t) + (i % 3 === 0 ? 2 : 0);
    bottom.unshift(`${x.toFixed(1)},${(y + depth).toFixed(1)}`);
  }
  return `M${top.join(" L")} L${bottom.join(" L")} Z`;
}

/** Granitos de sal: motas grises sobre la banda y el borde. */
function saltSpecks() {
  return Array.from({ length: 90 }, (_, i) => {
    const t = rand(i + 3) * Math.PI * 2;
    const front = Math.sin(t) > 0;
    const drop = front ? rand(i + 9) * 5 : 0;
    return {
      x: 90 - 76 * Math.cos(t) + (rand(i + 5) - 0.5) * 2,
      y: 42 + 11 * Math.sin(t) + drop,
      r: 0.35 + rand(i + 7) * 0.7,
      o: 0.25 + rand(i + 11) * 0.4,
    };
  });
}

function Garnish({ flavor, id }: { flavor: MargaritaFlavor; id: string }) {
  if (flavor === "classic") {
    // gajo de lima encajado en el borde: piel, albedo y gajos
    const segments = [0, 1, 2, 3, 4].map((k) => {
      const a0 = Math.PI + (k / 5) * Math.PI;
      const a1 = Math.PI + ((k + 1) / 5) * Math.PI;
      const r = 20;
      return `M152 40 L${(152 + Math.cos(a0 + 0.06) * r).toFixed(1)} ${(40 + Math.sin(a0 + 0.06) * r).toFixed(1)} A${r} ${r} 0 0 1 ${(152 + Math.cos(a1 - 0.06) * r).toFixed(1)} ${(40 + Math.sin(a1 - 0.06) * r).toFixed(1)} Z`;
    });
    return (
      <g transform="rotate(-28 152 40)">
        <path d="M126 40 A26 26 0 0 1 178 40 Z" fill="#6f9a2c" stroke={INK} strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M129 40 A23 23 0 0 1 175 40 Z" fill="#f3f5d6" />
        {segments.map((d) => (
          <path key={d} d={d} fill="#cfe27a" />
        ))}
        {segments.map((d) => (
          <path key={`h-${d}`} d={d} fill={`url(#${id}-dots)`} opacity="0.5" />
        ))}
        <circle cx="152" cy="40" r="2.2" fill="#f3f5d6" />
        <path d="M134 34 A20 20 0 0 1 146 22" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" fill="none" opacity="0.8" />
        <path d="M126 40 A26 26 0 0 1 178 40" fill="none" stroke={INK} strokeWidth="1.3" />
      </g>
    );
  }
  if (flavor === "strawberry") {
    // fresa cortada por la mitad, montada en el borde
    return (
      <g transform="rotate(-12 150 30)">
        <path
          d="M134 22 C132 10 168 8 168 22 C168 38 158 52 151 58 C144 52 134 38 134 22 Z"
          fill="#d64559"
          stroke={INK}
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
        <path d="M139 23 C138 14 163 13 163 23 C163 36 156 46 151 51 C146 46 139 36 139 23 Z" fill="#f7c3c9" />
        <path d="M151 20 C147 30 148 40 151 50 C154 40 155 30 151 20 Z" fill="#fde9eb" />
        {[
          [142, 30],
          [160, 30],
          [144, 40],
          [158, 40],
          [151, 53],
          [141, 22],
          [161, 22],
        ].map(([x, y]) => (
          <ellipse key={`${x}-${y}`} cx={x} cy={y} rx="0.8" ry="1.2" fill="#f5d36b" stroke={INK} strokeWidth="0.3" />
        ))}
        <path
          d="M136 17 L141 8 L146 14 L151 5 L156 14 L162 8 L166 17 C158 20 144 20 136 17 Z"
          fill="#5f8f37"
          stroke={INK}
          strokeWidth="1.1"
          strokeLinejoin="round"
        />
        <path d="M160 26 C164 34 160 44 154 52" stroke={`url(#${id}-hatch)`} strokeWidth="4" fill="none" opacity="0.5" />
      </g>
    );
  }
  // tajada de mango con su piel
  return (
    <g transform="rotate(-24 152 38)">
      <path
        d="M126 42 C128 22 170 14 180 34 C176 46 140 50 126 42 Z"
        fill="#f6b03c"
        stroke={INK}
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path d="M126 42 C140 50 176 46 180 34" fill="none" stroke="#8fae35" strokeWidth="3.4" strokeLinecap="round" />
      <path d="M126 42 C140 50 176 46 180 34" fill="none" stroke={INK} strokeWidth="1.1" />
      {[0, 1, 2, 3].map((k) => (
        <path
          key={k}
          d={`M${134 + k * 10} ${40 - k} C${138 + k * 10} ${32 - k} ${144 + k * 9} ${26 - k} ${150 + k * 8} ${24 - k}`}
          stroke="#e3922a"
          strokeWidth="0.9"
          fill="none"
          opacity="0.7"
        />
      ))}
      <path d="M134 34 C142 26 154 22 164 23" stroke="#ffe1a8" strokeWidth="2" strokeLinecap="round" fill="none" />
    </g>
  );
}

export function MargaritaGlass({ flavor, className }: { flavor: MargaritaFlavor; className?: string }) {
  const id = `mg-${flavor}`;
  const c = PALETTE[flavor];

  return (
    <svg viewBox="0 0 184 204" aria-hidden="true" className={cn("overflow-visible", className)}>
      <defs>
        <clipPath id={`${id}-bowl`}>
          <path d={BOWL} />
        </clipPath>
        {/* volumen del cóctel: claro en el centro, más intenso en los bordes y abajo */}
        <radialGradient id={`${id}-drink`} cx="0.42" cy="0.2" r="0.85">
          <stop offset="0" stopColor={c.light} />
          <stop offset="0.45" stopColor={c.mid} />
          <stop offset="1" stopColor={c.dark} />
        </radialGradient>
        <linearGradient id={`${id}-glass`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.5" stopColor={GLASS} />
          <stop offset="1" stopColor="#c9d6d3" />
        </linearGradient>
        <radialGradient id={`${id}-froth`} cx="0.38" cy="0.35" r="0.75">
          <stop offset="0" stopColor={c.froth} />
          <stop offset="0.55" stopColor={c.light} />
          <stop offset="1" stopColor={c.mid} />
        </radialGradient>
        <pattern id={`${id}-hatch`} width="3" height="3" patternUnits="userSpaceOnUse" patternTransform="rotate(38)">
          <line x1="0" y1="0" x2="0" y2="3" stroke={INK} strokeWidth="0.6" />
        </pattern>
        <pattern id={`${id}-dots`} width="3" height="3" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="0.45" fill="#ffffff" />
        </pattern>
        {/* el rayado solo en el lado en sombra (derecha) */}
        <linearGradient id={`${id}-shade`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0.6" stopColor="#000" />
          <stop offset="1" stopColor="#fff" />
        </linearGradient>
        <mask id={`${id}-shade-mask`}>
          <rect x="0" y="0" width="184" height="204" fill={`url(#${id}-shade)`} />
        </mask>
        {/* trazo apenas tembloroso, de dibujo a mano */}
        <filter id={`${id}-rough`} x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="2" seed="4" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.1" />
        </filter>
      </defs>

      {/* sombra en la mesa, algo desplazada (luz desde la izquierda) */}
      <ellipse cx="96" cy="196" rx="54" ry="5.5" fill={INK} opacity="0.2" />

      <g filter={`url(#${id}-rough)`}>
        {/* base con grosor */}
        <path d="M50 188 L50 191 A40 8.5 0 0 0 130 191 L130 188 Z" fill="#c9d6d3" stroke={INK} strokeWidth="1.1" />
        <ellipse cx="90" cy="188" rx="40" ry="8.5" fill={`url(#${id}-glass)`} stroke={INK} strokeWidth="1.2" />
        <ellipse cx="90" cy="187.5" rx="12" ry="3" fill="none" stroke={INK} strokeWidth="0.6" opacity="0.5" />
        <path d="M58 186 A34 6 0 0 1 82 181.5" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" fill="none" />

        {/* pie de cristal */}
        <path d={STEM} fill={`url(#${id}-glass)`} stroke={INK} strokeWidth="1.1" strokeLinejoin="round" />
        <path d="M89 130 C89.6 150 89.6 166 87.6 182" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        <ellipse cx="90" cy="125.5" rx="4.5" ry="2.2" fill={GLASS} stroke={INK} strokeWidth="0.9" />

        {/* cristal vacío detrás + cóctel */}
        <path d={BOWL} fill="#ffffff" opacity="0.4" />
        <g clipPath={`url(#${id}-bowl)`}>
          <rect x="0" y="48" width="184" height="80" fill={`url(#${id}-drink)`} />
          <rect x="0" y="48" width="184" height="80" fill={`url(#${id}-hatch)`} mask={`url(#${id}-shade-mask)`} opacity="0.35" />
          {/* refracción en el bulbo */}
          <path d="M80 96 C84 104 88 112 90 120" stroke={c.light} strokeWidth="3" fill="none" opacity="0.8" />
          {/* hielo frappé */}
          {Array.from({ length: 14 }, (_, i) => (
            <circle
              key={i}
              cx={34 + rand(i + 20) * 116}
              cy={56 + rand(i + 40) * 22}
              r={0.7 + rand(i + 60) * 1.1}
              fill="#ffffff"
              opacity={0.45 + rand(i + 80) * 0.4}
            />
          ))}
        </g>

        {/* espuma: superficie lisa con un par de burbujas */}
        <ellipse cx="90" cy="48" rx="71" ry="9.5" fill={`url(#${id}-froth)`} stroke={INK} strokeWidth="0.8" />
        {[
          [62, 47, 1.4],
          [108, 50, 1.1],
          [124, 46, 0.9],
          [80, 51, 0.8],
        ].map(([x, y, r]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r={r} fill="none" stroke={INK} strokeWidth="0.4" opacity="0.5" />
        ))}

        {/* grosor del cristal por dentro */}
        <path d="M20 47 C24 64 48 77 68 80.5" stroke={INK} strokeWidth="0.6" fill="none" opacity="0.45" />
        <path d="M160 47 C156 64 132 77 112 80.5" stroke={INK} strokeWidth="0.6" fill="none" opacity="0.45" />

        {/* brillos */}
        <path d="M26 54 C33 67 46 75 60 79" stroke="#ffffff" strokeWidth="3.2" strokeLinecap="round" fill="none" opacity="0.85" />
        <path d="M36 54 C40 59 45 62 50 64" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        <path d="M80 92 C80 100 82 106 85 112" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" fill="none" opacity="0.8" />

        {/* contorno */}
        <path d={BOWL} fill="none" stroke={INK} strokeWidth="1.4" strokeLinejoin="round" />

        {/* borde escarchado: aro de sal arriba y sal pegada por fuera */}
        <ellipse cx="90" cy="42" rx="76" ry="11" fill="none" stroke="#fbfaf2" strokeWidth="4.5" />
        <path d={saltBandPath()} fill="#fbfaf2" stroke={INK} strokeWidth="0.7" strokeLinejoin="round" />
        <ellipse cx="90" cy="42" rx="78.2" ry="12.6" fill="none" stroke={INK} strokeWidth="1" />
        <ellipse cx="90" cy="42" rx="73.8" ry="9.4" fill="none" stroke={INK} strokeWidth="0.6" opacity="0.6" />
        {saltSpecks().map((s, i) => (
          <circle key={i} cx={s.x} cy={s.y} r={s.r} fill={INK} opacity={s.o} />
        ))}

        <Garnish flavor={flavor} id={id} />
      </g>
    </svg>
  );
}
