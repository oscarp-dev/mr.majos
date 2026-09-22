import { cn } from "cn";
import type { FullMenuItem } from "@/lib/full-menu-data";

const HIGHLIGHT_BORDER: Record<string, string> = {
  yellow: "border-mr-yellow",
  red: "border-mr-red",
  dashed: "border-dashed border-mr-yellow/60",
};

const TAG_STYLE: Record<string, string> = {
  yellow: "text-mr-yellow",
  red: "text-mr-red",
  green: "text-emerald-400",
};

export function MenuItemCard({ item }: { item: FullMenuItem }) {
  const borderClass = item.highlight
    ? HIGHLIGHT_BORDER[item.highlight]
    : "border-mr-cream/10";
  const tagClass = TAG_STYLE[item.tagVariant ?? "yellow"];

  return (
    <div
      className={cn(
        "flex flex-col gap-3 rounded-2xl border bg-white/[0.03] p-5 transition-colors hover:border-mr-yellow/40",
        borderClass
      )}
    >
      <div className="flex items-start justify-between gap-3">
        {item.tag ? (
          <span
            className={cn(
              "font-tag text-[11px] tracking-widest",
              tagClass
            )}
          >
            {item.tag}
          </span>
        ) : (
          <span />
        )}
        <span className="whitespace-nowrap rounded-full border border-mr-yellow px-3 py-1 font-tag text-sm text-mr-yellow">
          {item.price}
          {item.priceSuffix && (
            <span className="ml-1 text-[10px] text-mr-yellow/70">
              {item.priceSuffix}
            </span>
          )}
        </span>
      </div>

      <h3 className="font-display text-xl leading-none text-mr-cream">
        {item.name}
      </h3>

      <p className="text-sm leading-relaxed text-mr-cream/60">
        {item.description}
      </p>

      {(item.footerLeft || item.footerRight) && (
        <div className="mt-1 flex items-center justify-between gap-3 border-t border-mr-cream/10 pt-3 text-[11px] font-tag tracking-wide">
          <span className="text-mr-yellow/80">{item.footerLeft}</span>
          <span className="text-mr-cream/40">{item.footerRight}</span>
        </div>
      )}
    </div>
  );
}
