import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, products } from "@/lib/products";
import { site } from "@/site.config";
import { Button, Card, Container, Icon, Section, SectionHead } from "@/components/ui";
import { ClosingCta } from "@/components/blocks";
import ColorwayViewer from "@/components/ColorwayViewer";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  return {
    title: `${p.name}: ${p.tagline}`,
    description: p.summary,
    alternates: { canonical: `/products/${p.slug}` },
    openGraph: {
      title: `${p.name} | ${site.shortName}`,
      description: p.summary,
      images: [{ url: p.hero.src, width: p.hero.w, height: p.hero.h }],
    },
  };
}

export default async function ProductPage({ params }: Params) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();

  const others = products.filter((x) => x.slug !== p.slug);

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-950">
        <Container className="py-14 sm:py-20">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-200 hover:text-white"
          >
            <Icon name="chevronLeft" className="h-4 w-4" />
            All products
          </Link>
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <p className="eyebrow text-brand-300">{p.eyebrow}</p>
              <h1 className="h-display mt-4 text-4xl text-white sm:text-5xl">
                {p.name}
              </h1>
              <p className="mt-4 text-xl leading-snug text-brand-100">
                {p.tagline}
              </p>
              <dl className="mt-8 space-y-4 border-t border-white/12 pt-6 text-[0.95rem]">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.12em] text-brand-300">
                    Material
                  </dt>
                  <dd className="mt-1 text-brand-100">{p.material}</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.12em] text-brand-300">
                    Best for
                  </dt>
                  <dd className="mt-1 text-brand-100">{p.bestFor}</dd>
                </div>
              </dl>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contact" variant="onDark">
                  See samples in your bathroom
                  <Icon name="arrowRight" className="h-4 w-4" />
                </Button>
                {site.showPhone && (
                  <Button
                    href={`tel:${site.phoneHref}`}
                    variant="outlineOnDark"
                  >
                    <Icon name="phone" className="h-4 w-4" />
                    {site.phone}
                  </Button>
                )}
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-2xl ring-1 ring-white/15">
                <Image
                  src={p.hero.src}
                  alt={p.hero.alt}
                  width={p.hero.w}
                  height={p.hero.h}
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Intro */}
      <Section tone="white">
        <div className="max-w-3xl">
          <div className="prose-ms text-[1.05rem]">
            {p.intro.map((para) => (
              <p key={para.slice(0, 40)}>{para}</p>
            ))}
          </div>
        </div>
      </Section>

      {/* Colorways or gallery */}
      {p.colorways.length > 0 ? (
        <Section tone="cream">
          <SectionHead
            eyebrow="Colorways"
            title="See it in a room."
intro="Tap any sample to see it in a room. Treat these as a guide to pattern and tone; we bring the physical samples so you can judge the exact color in your own light."
          />
          <div className="mt-10">
            <ColorwayViewer colorways={p.colorways} lineName={p.name} />
          </div>
        </Section>
      ) : (
        p.gallery && (
          <Section tone="cream">
            <SectionHead
              eyebrow="Configurations"
              title="What the base looks like installed."
            />
            <ul className="mt-10 grid gap-6 sm:grid-cols-2">
              {p.gallery.map((g) => (
                <li key={g.src}>
                  <figure>
                    <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-ink/8">
                      <Image
                        src={g.src}
                        alt={g.caption}
                        width={g.w}
                        height={g.h}
                        sizes="(min-width: 640px) 50vw, 100vw"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <figcaption className="mt-3 text-[0.9rem] leading-relaxed text-ink-soft">
                      {g.caption}
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </Section>
        )
      )}

      {/* Features */}
      <Section tone="white">
        <SectionHead
          eyebrow="Why we specify it"
          title={`What ${p.name} does well.`}
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {p.features.map((f) => (
            <Card key={f.title}>
              <h3 className="h-display text-xl text-ink">{f.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
                {f.body}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Cross-links */}
      <Section tone="cream">
        <h2 className="h-display text-2xl text-ink sm:text-3xl">
          The other lines
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {others.map((o) => (
            <Link
              key={o.slug}
              href={`/products/${o.slug}`}
              className="group overflow-hidden rounded-2xl bg-white ring-1 ring-ink/8"
            >
              <div className="aspect-4/3 overflow-hidden bg-cream-100">
                <Image
                  src={o.hero.src}
                  alt={o.hero.alt}
                  width={o.hero.w}
                  height={o.hero.h}
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-5">
                <h3 className="h-display text-lg text-ink">{o.name}</h3>
                <p className="mt-1 text-[0.85rem] leading-snug text-ink-soft">
                  {o.tagline}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <ClosingCta
        title={`Want to see ${p.name} in your own bathroom?`}
        body={`We bring the physical samples to you and hold them against your light, your floor and your fixtures. No charge, no obligation, and no pressure to decide that day.`}
      />
    </>
  );
}
