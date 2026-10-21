import type { Metadata } from "next";
import Link from "next/link";
import { Fragment } from "react";
import { SiteNav } from "@/components/nav/site-nav";
import { SiteFooter } from "@/components/footer/site-footer";
import { getI18n } from "@/i18n/server";
import { LEGAL_UPDATED, getLegalDoc, type LegalDocId } from "@/lib/legal-content";

export async function legalMetadata(id: LegalDocId): Promise<Metadata> {
  const { lang } = await getI18n();
  const doc = getLegalDoc(lang, id);
  return {
    title: `${doc.title} — Mr. Majo's`,
    description: doc.intro,
    alternates: { languages: { es: `/${id}`, en: `/en/${id}` } },
  };
}

/** Resalta los datos pendientes ("[NIF/CIF]") para que no pasen desapercibidos. */
async function WithPlaceholders({ text }: { text: string }) {
  const { t } = await getI18n();
  return text.split(/(\[[^\]]+\])/).map((part, i) =>
    part.startsWith("[") ? (
      <mark
        key={i}
        title={t.legal.pending}
        className="rounded bg-mr-red/90 px-1 font-tag text-[0.85em] text-mr-cream"
      >
        {part}
      </mark>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );
}

export async function LegalDocument({ id }: { id: LegalDocId }) {
  const { lang, t, href } = await getI18n();
  const doc = getLegalDoc(lang, id);

  return (
    <>
      <SiteNav />
      <main className="bg-mr-black pb-20 pt-8 md:pt-12">
        <article className="mx-auto max-w-3xl px-4 md:px-8">
          <Link
            href={href("/")}
            className="font-tag inline-flex items-center gap-1 text-xs tracking-wide text-mr-cream/60 transition-colors hover:text-mr-yellow"
          >
            {t.legal.back}
          </Link>

          <h1 className="font-display mt-4 text-[14vw] leading-[0.85] text-mr-cream sm:text-7xl">
            {doc.title}
          </h1>
          <p className="font-tag mt-4 text-xs tracking-widest text-mr-yellow/70">
            {t.legal.updated.toUpperCase()}: {LEGAL_UPDATED[lang].toUpperCase()}
          </p>
          <p className="mt-6 text-base leading-relaxed text-mr-cream/75">{doc.intro}</p>

          <div className="mt-10 flex flex-col gap-10">
            {doc.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display border-b border-mr-cream/10 pb-2 text-2xl text-mr-yellow sm:text-3xl">
                  {section.heading}
                </h2>
                <div className="mt-4 flex flex-col gap-3 text-sm leading-relaxed text-mr-cream/70 sm:text-base">
                  {section.blocks.map((block, i) =>
                    typeof block === "string" ? (
                      <p key={i}>
                        <WithPlaceholders text={block} />
                      </p>
                    ) : (
                      <div key={i} className="overflow-x-auto rounded-xl border border-mr-cream/10">
                        <table className="w-full min-w-[32rem] text-left text-sm">
                          <thead className="bg-mr-cream/5 font-tag text-[11px] tracking-widest text-mr-yellow">
                            <tr>
                              {block.table.head.map((cell) => (
                                <th key={cell} className="px-4 py-3 font-normal">
                                  {cell.toUpperCase()}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {block.table.rows.map((row) => (
                              <tr key={row[0]} className="border-t border-mr-cream/10">
                                {row.map((cell, j) => (
                                  <td
                                    key={j}
                                    className={`px-4 py-3 ${j === 0 ? "font-tag text-mr-cream" : ""}`}
                                  >
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )
                  )}
                </div>
              </section>
            ))}
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
