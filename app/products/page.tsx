import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";
import { site } from "@/site.config";
import { Button, Icon, Section, SectionHead } from "@/components/ui";
import QuoteForm from "@/components/QuoteForm";
import { ClosingCta, PageHero } from "@/components/blocks";

export const metadata: Metadata = {
  title: "Products: Wall Systems and Barrier-Free Bases",
  description:
    "Three grout-free solid surface wall tiers and a barrier-free base line. Color runs through the full thickness of every panel, in more than twenty finishes, with zero-threshold bases for roll-in access.",
  alternates: { canonical: "/products" },
};

const comparison = [
  { label: "Material", values: ["Solid surface", "Solid surface, trimmed on site", "Solid surface", "Solid surface base"] },
  { label: "Color through thickness", values: ["Yes", "Yes", "Yes", "Yes"] },
  { label: "Tile pattern", values: ["3x8 subway and four others", "Tile, stone and marble faces", "4x8 subway, square or smooth", "Not applicable"] },
  { label: "Finishes", values: ["6 patterns", "8 finishes", "7 colors, gloss or velvet", "White, black, grays"] },
  { label: "Out-of-square rooms", values: ["Standard fit", "Side walls cut to fit", "Standard fit", "Adjustable threshold"] },
  { label: "Typical use", values: ["Tub-to-shower conversion", "Older homes, stone looks", "Primary bath, full remodel", "Every accessible build"] },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Three solid surface wall tiers. One base line. No grout anywhere."
        intro="The wall surface determines how the bathroom looks. The base determines whether it is usable. Set out below is the difference between the tiers in plain terms, so you can arrive at the consultation knowing roughly which one your project calls for."
      />

      <Section tone="white">
        <div className="grid gap-6 lg:grid-cols-2">
          {products.map((p) => (
            <article
              key={p.slug}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-ink/8 transition-shadow hover:shadow-[0_6px_40px_-12px_rgba(18,32,43,0.25)]"
            >
              <Link href={`/products/${p.slug}`} className="block">
                <div className="aspect-4/3 overflow-hidden bg-cream-100">
                  <Image
                    src={p.hero.src}
                    alt={p.hero.alt}
                    width={p.hero.w}
                    height={p.hero.h}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </Link>
              <div className="flex flex-1 flex-col p-7">
                <p className="eyebrow">{p.eyebrow}</p>
                <h2 className="h-display mt-2 text-2xl text-ink">
                  <Link href={`/products/${p.slug}`}>{p.name}</Link>
                </h2>
                <p className="mt-1 text-[0.95rem] font-medium text-brand-700">
                  {p.tagline}
                </p>
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink-soft">
                  {p.summary}
                </p>
                <Link
                  href={`/products/${p.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-[0.82rem] font-bold uppercase tracking-wider text-copper-600 hover:text-copper-700"
                >
                  See {p.name} finishes
                  <Icon name="arrowRight" className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="cream">
        <SectionHead
          eyebrow="Side by side"
          title="Which tier is right for your bathroom?"
          intro="Most tub-to-shower conversions are Classic or Classic Plus. Most full remodels are Signature. Every accessible project uses a barrier-free base, whichever walls go on it."
        />
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left text-[0.9rem]">
            <thead>
              <tr>
                <th className="w-44 pb-4 pr-4 align-bottom text-xs font-bold uppercase tracking-[0.12em] text-ink-soft">
                  &nbsp;
                </th>
                {products.map((p) => (
                  <th key={p.slug} className="px-4 pb-4 align-bottom">
                    <Link href={`/products/${p.slug}`} className="h-display text-lg text-ink hover:text-brand-700">
                      {p.name}
                    </Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.label} className="border-t border-ink/10">
                  <th className="py-4 pr-4 align-top text-xs font-bold uppercase tracking-[0.12em] text-ink-soft">
                    {row.label}
                  </th>
                  {row.values.map((v, i) => (
                    <td key={i} className="px-4 py-4 align-top leading-relaxed text-ink">
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 rounded-2xl bg-white p-7 ring-1 ring-ink/8">
          <h3 className="h-display flex items-center gap-3 text-xl text-ink">
            <Icon name="accessible" className="h-6 w-6 text-brand-600" />
            Building for accessibility?
          </h3>
          <p className="mt-3 max-w-3xl text-[0.95rem] leading-relaxed text-ink-soft">
            Start with the base, not the walls. A zero-threshold base is what
            makes a roll-in shower possible, and it is the configuration the VA
            names as an eligible HISA improvement. Any of the three wall tiers
            can go on top of it.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/products/barrier-free-bases" variant="secondary">
              Barrier-free bases
              <Icon name="arrowRight" className="h-4 w-4" />
            </Button>
            <Button href="/hisa-grants" variant="secondary">
              How HISA grants work
            </Button>
          </div>
        </div>
      </Section>

      <Section tone="white">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionHead
              eyebrow="Samples"
              title="A screen is not a bathroom."
              intro="Finishes read completely differently under your own light, against your own flooring and fixtures. A design consultant brings the physical samples to you at no cost, holds them up in the actual room, and then leaves you to think it over."
            />
            {site.showPhone && (
              <p className="mt-8 text-lg text-ink-soft">
                Or call{" "}
                <a href={`tel:${site.phoneHref}`} className="font-bold text-brand-700 underline underline-offset-4">
                  {site.phone}
                </a>
              </p>
            )}
          </div>
          <div className="lg:col-span-6">
            <QuoteForm heading="See samples in your bathroom" />
          </div>
        </div>
      </Section>

      <ClosingCta />
    </>
  );
}
