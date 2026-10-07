import { cn } from "cn";

/*
 * Category icons drawn like spray-painted stickers: flat brand colours, a
 * black ink line, a cream outer outline and a red 3D extrusion, plus drips
 * and shine marks. Every shape is listed once and painted in three passes
 * (extrusion → outline → fill), so the outlines always follow the artwork.
 */

export type GraffitiIconName =
  | "burger"
  | "hotdog"
  | "fries"
  | "veggie"
  | "dessert"
  | "drink"
  | "plus"
  // extras & toppings
  | "patty"
  | "crown"
  | "drumstick"
  | "bacon"
  | "egg"
  | "flame"
  | "avocado"
  | "cheese"
  | "mayo"
  | "truffle"
  | "chili"
  | "glutenfree";

const YELLOW = "var(--mr-yellow)";
const RED = "var(--mr-red)";
const CREAM = "var(--mr-cream)";
const INK = "#0a0a0a";
const BROWN = "#7a3b1c";
const CHOC = "#5b2a14";
const GREEN = "#34d399";
const GOLD = "#f59e0b";
const CRUST = "#e8a95c";
const SKIN = "#3f7a2a";
const FLESH = "#b5e05c";
const CHEESE_TOP = "#ffe066";
const CHEESE_HOLE = "#d9a300";

/** Circle as a path, so it can join the shape passes. */
const c = (cx: number, cy: number, r: number) =>
  `M${cx - r} ${cy}A${r} ${r} 0 1 0 ${cx + r} ${cy}A${r} ${r} 0 1 0 ${cx - r} ${cy}Z`;

/**
 * A filled shape; it gets the outline + extrusion passes unless `inner`
 * (details sitting inside another shape, e.g. a yolk or a donut hole).
 */
type Shape = { d: string; fill: string; inner?: boolean };
/** An open stroke (mustard, veins, shine) painted on top only. */
type Mark = { d: string; stroke: string; width?: number };

type Art = { shapes: Shape[]; marks?: Mark[] };

const ART: Record<GraffitiIconName, Art> = {
  burger: {
    shapes: [
      { d: "M8 38Q8 36 11 36L53 36Q56 36 56 38L56 42Q56 45 53 45L11 45Q8 45 8 42Z", fill: BROWN },
      {
        d: "M9 33L55 33L55 37Q52 37 51 41Q50 45 48 41Q47 37 42 37L30 37Q28 37 27 43Q26 48 24 43Q23 37 18 37L9 37Z",
        fill: RED,
      },
      { d: "M10 31C10 17 21 9 32 9C43 9 54 17 54 31Q32 35 10 31Z", fill: YELLOW },
      { d: "M10 46L54 46Q54 54 47 55L17 55Q10 54 10 46Z", fill: YELLOW },
    ],
    marks: [
      { d: "M17 23Q19 16 26 13", stroke: CREAM, width: 2.6 },
      { d: "M31 17l2.5 -1M40 20l2 1.5M24 26l2.5 -.5M36 25l2 1", stroke: INK, width: 2.2 },
    ],
  },
  hotdog: {
    shapes: [
      { d: "M6 34Q6 25 14 25L50 25Q58 25 58 34Q58 44 48 44L16 44Q6 44 6 34Z", fill: YELLOW },
      { d: "M3 32Q3 27.5 8 27.5L56 27.5Q61 27.5 61 32Q61 36.5 56 36.5L8 36.5Q3 36.5 3 32Z", fill: RED },
      { d: "M8 37Q8 47 17 49L47 49Q56 47 56 37Q32 43 8 37Z", fill: YELLOW },
      { d: "M39 47L39 54Q41.5 58 44 54L44 47Z", fill: RED },
    ],
    marks: [
      { d: "M10 32Q14 28 18 32T26 32T34 32T42 32T50 32T56 31", stroke: YELLOW, width: 3 },
      { d: "M14 42Q22 45 32 45", stroke: CREAM, width: 2.4 },
    ],
  },
  fries: {
    shapes: [
      { d: "M14 30L9 15L13.5 13.5L19 30Z", fill: YELLOW },
      { d: "M18 30L16 9L21 8.5L23 30Z", fill: YELLOW },
      { d: "M25 30L25 5L30 5L30 30Z", fill: YELLOW },
      { d: "M32 30L35 7L40 8L37 30Z", fill: YELLOW },
      { d: "M39 30L45 12L49.5 14L43 31Z", fill: YELLOW },
      { d: "M12 28Q22 33 32 28Q42 33 52 28L47 55L17 55Z", fill: RED },
      { d: "M24 54L24 59Q26.5 63 29 59L29 54Z", fill: RED },
    ],
    marks: [{ d: "M20 36L19 49", stroke: CREAM, width: 2.6 }],
  },
  veggie: {
    shapes: [
      { d: "M11 52Q9 24 31 14Q45 8 55 7Q57 30 45 44Q33 56 11 52Z", fill: GREEN },
      { d: "M16 55Q19 59.5 16.5 62Q13.5 59.5 16 55Z", fill: GREEN },
    ],
    marks: [
      { d: "M13 51Q29 37 47 17", stroke: INK, width: 2.4 },
      { d: "M24 42L22 32M31 35L41 36M37 28L38 20", stroke: INK, width: 2 },
      { d: "M19 41Q21 29 31 22", stroke: CREAM, width: 2.6 },
    ],
  },
  dessert: {
    shapes: [
      { d: "M12 34A20 20 0 1 0 52 34A20 20 0 1 0 12 34Z", fill: YELLOW },
      {
        d: "M14 31Q14 16 32 14Q50 16 50 31Q50 36 46.5 36Q45 44 42.5 36Q38.5 38 35 36Q33 47 30.5 36Q25 38 22.5 36Q20.5 43 18.5 35.5Q14 35 14 31Z",
        fill: CHOC,
      },
      { d: c(32, 31, 5), fill: INK, inner: true },
    ],
    marks: [
      { d: "M22 23l3 -2M39 20l2 3M43 28l3 1M20 30l-1 3", stroke: YELLOW, width: 2.4 },
      { d: "M33 22l3 0M26 27l2 2M45 23l-1 2", stroke: CREAM, width: 2.4 },
    ],
  },
  drink: {
    shapes: [
      { d: "M38 2L42.5 3L37.5 20L33 19Z", fill: YELLOW },
      { d: "M15 22L49 22L44 58L20 58Z", fill: RED },
      { d: "M17 34L47 34L45.9 42L18.1 42Z", fill: YELLOW },
      { d: "M13 18Q13 14 17 14L47 14Q51 14 51 18L51 22L13 22Z", fill: CREAM },
      { d: "M42 58L42 62Q44 65 46 62L46 57Z", fill: RED },
    ],
    marks: [{ d: "M21.5 26L23.5 52", stroke: CREAM, width: 2.6 }],
  },
  plus: {
    shapes: [
      { d: "M26 8L38 8L38 24L54 24L54 36L38 36L38 52L26 52L26 36L10 36L10 24L26 24Z", fill: YELLOW },
      { d: "M28 51L28 57Q30.5 61 33 57L33 51Z", fill: YELLOW },
      { d: "M45 35L45 40Q47.5 43.5 50 40L50 35Z", fill: YELLOW },
      { d: "M53 6c.5 3.2 1.4 4.1 4.5 4.5-3.1.4-4 1.3-4.5 4.5-.5-3.2-1.4-4.1-4.5-4.5 3.1-.4 4-1.3 4.5-4.5Z", fill: CREAM },
      { d: "M9 44c.4 2.4 1 3 3.2 3.4-2.2.4-2.8 1-3.2 3.4-.4-2.4-1-3-3.2-3.4 2.2-.4 2.8-1 3.2-3.4Z", fill: CREAM },
    ],
    marks: [{ d: "M30 12L30 22", stroke: CREAM, width: 2.6 }],
  },

  /* ---- extras & toppings ---- */
  patty: {
    shapes: [
      { d: "M8 31Q8 22 18 21L46 21Q56 22 56 31L56 36Q56 44 46 44L18 44Q8 44 8 36Z", fill: BROWN },
      { d: "M40 43L40 51Q42.5 55 45 51L45 43Z", fill: BROWN },
    ],
    marks: [
      { d: "M17 28L23 35M27 27L33 34M37 27L43 34", stroke: INK, width: 2.4 },
      { d: "M14 27Q16 23.5 22 23", stroke: CREAM, width: 2.4 },
    ],
  },
  crown: {
    shapes: [
      { d: "M8 46L10 18L22 32L32 12L42 32L54 18L56 46Z", fill: YELLOW },
      { d: c(10, 16, 3.5), fill: YELLOW },
      { d: c(32, 10, 3.5), fill: YELLOW },
      { d: c(54, 16, 3.5), fill: YELLOW },
      { d: "M7 46L57 46L57 55L7 55Z", fill: RED },
      { d: c(32, 50.5, 3), fill: CREAM, inner: true },
      { d: c(19, 50.5, 2.2), fill: YELLOW, inner: true },
      { d: c(45, 50.5, 2.2), fill: YELLOW, inner: true },
    ],
    marks: [{ d: "M15 41L15.5 29", stroke: CREAM, width: 2.4 }],
  },
  drumstick: {
    shapes: [
      { d: "M25 33L31 39L19 51L13 45Z", fill: CREAM },
      { d: c(12.5, 49.5, 4.5), fill: CREAM },
      { d: c(18, 55, 4.5), fill: CREAM },
      { d: "M30 12Q46 8 52 20Q58 34 44 40Q34 44 28 36Q20 26 30 12Z", fill: GOLD },
    ],
    marks: [
      { d: "M37 19l3 2M45 25l2 3M37 30l3 1M30 25l1 3", stroke: INK, width: 2.2 },
      { d: "M33 16Q40 12.5 46 16", stroke: CREAM, width: 2.4 },
    ],
  },
  bacon: {
    shapes: [
      { d: "M6 22Q16 14 26 22T46 22T58 18L58 28Q48 34 38 28T18 28T6 32Z", fill: RED },
      { d: "M6 39Q16 31 26 39T46 39T58 35L58 45Q48 51 38 45T18 45T6 49Z", fill: RED },
    ],
    marks: [
      { d: "M9 26Q18 19.5 27 25.5T47 25T56 22", stroke: CREAM, width: 2.4 },
      { d: "M9 43Q18 36.5 27 42.5T47 42T56 39", stroke: CREAM, width: 2.4 },
    ],
  },
  egg: {
    shapes: [
      { d: "M12 34Q8 20 22 16Q30 8 42 14Q56 16 54 30Q58 44 44 50Q32 58 20 50Q8 46 12 34Z", fill: CREAM },
      { d: c(33, 32, 10), fill: YELLOW, inner: true },
    ],
    marks: [{ d: "M28 28Q30 25 34.5 25", stroke: CREAM, width: 2.4 }],
  },
  flame: {
    shapes: [
      { d: "M32 4Q38 16 46 22Q56 32 52 44Q48 58 32 58Q16 58 12 44Q8 32 18 24Q20 32 26 32Q22 18 32 4Z", fill: RED },
      { d: "M32 26Q38 34 40 40Q42 50 32 52Q22 50 24 42Q26 36 32 26Z", fill: YELLOW, inner: true },
    ],
    marks: [{ d: "M17 40Q17 33 21 29", stroke: CREAM, width: 2.4 }],
  },
  avocado: {
    shapes: [
      { d: "M32 6Q42 6 46 20Q50 30 52 38Q54 56 32 58Q10 56 12 38Q14 30 18 20Q22 6 32 6Z", fill: SKIN },
      { d: "M32 12Q39 12 42 23Q45 31 46 38Q47 52 32 53Q17 52 18 38Q19 31 22 23Q25 12 32 12Z", fill: FLESH, inner: true },
      { d: c(32, 40, 7.5), fill: BROWN, inner: true },
    ],
    marks: [{ d: "M28.5 37Q29.5 34.5 32.5 34.5", stroke: CREAM, width: 2.2 }],
  },
  cheese: {
    shapes: [
      { d: "M8 30L56 30L56 51L8 51Z", fill: YELLOW },
      { d: "M8 30L44 14L56 30Z", fill: CHEESE_TOP },
      { d: c(20, 40, 3.5), fill: CHEESE_HOLE, inner: true },
      { d: c(35, 44, 4), fill: CHEESE_HOLE, inner: true },
      { d: c(47, 37, 3), fill: CHEESE_HOLE, inner: true },
      { d: c(39, 24, 2.2), fill: CHEESE_HOLE, inner: true },
    ],
  },
  mayo: {
    shapes: [
      { d: "M30 0L34 0L35 5L29 5Z", fill: RED },
      { d: "M26 5L38 5L40 15L24 15Z", fill: RED },
      { d: "M18 17Q18 15 22 15L42 15Q46 15 46 17L48 54Q48 60 42 60L22 60Q16 60 16 54Z", fill: CREAM },
      { d: "M17.6 29L46.4 29L47.2 45L16.8 45Z", fill: YELLOW, inner: true },
    ],
    marks: [{ d: "M24.5 41L24.5 33L32 38L39.5 33L39.5 41", stroke: INK, width: 2.4 }],
  },
  truffle: {
    shapes: [
      { d: "M30 4c2 14 6 18 20 20c-14 2-18 6-20 20c-2-14-6-18-20-20c14-2 18-6 20-20Z", fill: YELLOW },
      { d: "M50 38c1 6 3 8 9 9c-6 1-8 3-9 9c-1-6-3-8-9-9c6-1 8-3 9-9Z", fill: CREAM },
      { d: "M14 46c.8 4 2 5.2 6 6c-4 .8-5.2 2-6 6c-.8-4-2-5.2-6-6c4-.8 5.2-2 6-6Z", fill: RED },
    ],
  },
  chili: {
    shapes: [
      { d: "M16 18Q24 22 30 30Q40 44 56 52Q44 60 30 52Q14 42 12 26Q12 20 16 18Z", fill: RED },
      { d: "M13 19Q9 11 15 6Q19.5 7.5 17.5 12Q20 16 18 20Z", fill: GREEN },
    ],
    marks: [{ d: "M18 28Q22 38 32 46", stroke: CREAM, width: 2.6 }],
  },
  glutenfree: {
    shapes: [
      { d: "M8 32Q8 18 22 18Q28 12 38 18Q52 18 52 32L52 53Q52 57 48 57L12 57Q8 57 8 53Z", fill: CRUST },
      { d: c(49, 17, 11), fill: RED },
      { d: c(49, 17, 6.5), fill: INK, inner: true },
    ],
    marks: [
      { d: "M18 26L24 32M28 24L34 30M38 26L42 30", stroke: INK, width: 2.4 },
      { d: "M44.5 21.5L53.5 12.5", stroke: CREAM, width: 3 },
      { d: "M13 38L13 50", stroke: CREAM, width: 2.4 },
    ],
  },
};

export function GraffitiIcon({
  name,
  className,
}: {
  name: GraffitiIconName;
  className?: string;
}) {
  const { shapes, marks = [] } = ART[name];
  const outer = shapes.filter((s) => !s.inner);

  return (
    <svg
      viewBox="-4 -4 72 72"
      aria-hidden="true"
      className={cn("inline-block size-6 shrink-0 select-none", className)}
      strokeLinejoin="round"
      strokeLinecap="round"
    >
      {/* red 3D extrusion */}
      <g transform="translate(2.5 2.5)" fill={RED} stroke={RED} strokeWidth={7}>
        {outer.map((s, i) => (
          <path key={i} d={s.d} />
        ))}
      </g>
      {/* cream outer outline */}
      <g fill={CREAM} stroke={CREAM} strokeWidth={7}>
        {outer.map((s, i) => (
          <path key={i} d={s.d} />
        ))}
      </g>
      {/* colour + ink line */}
      <g stroke={INK} strokeWidth={2.6}>
        {shapes.map((s, i) => (
          <path key={i} d={s.d} fill={s.fill} />
        ))}
      </g>
      <g fill="none">
        {marks.map((m, i) => (
          <path key={i} d={m.d} stroke={m.stroke} strokeWidth={m.width ?? 2.4} />
        ))}
      </g>
    </svg>
  );
}
