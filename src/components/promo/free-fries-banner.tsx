import { cn } from "cn";
import { GraffitiIcon } from "@/components/decorative/graffiti-icon";
import { getI18n } from "@/i18n/server";

/**
 * "Todas nuestras burgers vienen con patatas gratis": una sola vez y bien
 * grande, en vez de repetirlo bajo cada sección. El pan sin gluten va al lado
 * como extra con precio, para que no se confunda con lo que es gratis.
 */
export async function FreeFriesBanner({ className }: { className?: string }) {
  const { t } = await getI18n();
  const f = t.freeFries;

  return (
    <aside
      aria-label={f.aria}
      className={cn(
        "relative flex flex-col gap-5 rounded-3xl border-4 border-mr-black bg-mr-yellow p-5 text-mr-black shadow-[6px_8px_0_0_var(--mr-red)] sm:p-7 md:flex-row md:items-center md:gap-8 md:px-10",
        className
      )}
    >
      <GraffitiIcon
        name="fries"
        className="absolute -right-3 -top-12 size-20 rotate-12 sm:size-24 md:static md:size-32 md:shrink-0 md:-rotate-6"
      />

      <div className="min-w-0 flex-1">
        <span className="font-tag inline-block -rotate-2 rounded-md bg-mr-black px-3 py-1 text-[10px] tracking-widest text-mr-yellow md:text-[11px]">
          {f.eyebrow}
        </span>
        <p className="font-display mt-3 text-[7.4vw] leading-[0.88] sm:text-4xl lg:text-5xl">
          {f.line1}
          <br />
          {f.line2}
          <span className="block text-[13vw] leading-[0.9] text-mr-red sm:text-7xl lg:text-8xl">{f.accent}</span>
        </p>
        <p className="mt-2 text-sm font-medium text-mr-black/75 md:text-base">{f.also}</p>
      </div>

      <div className="font-tag inline-flex shrink-0 items-center gap-2 self-start rounded-full border-[3px] border-mr-black bg-mr-cream py-1.5 pl-1.5 pr-4 text-sm tracking-wide shadow-[0_4px_0_0_var(--mr-black)] md:self-center">
        <GraffitiIcon name="glutenfree" className="size-8 shrink-0" />
        <span>{f.gluten}</span>
        <span className="text-mr-red">{f.glutenPrice}</span>
      </div>
    </aside>
  );
}
