import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cities, getCity } from "@/lib/cities";
import { photos } from "@/lib/photos";
import { site } from "@/site.config";
import { Button, Card, Icon, Section, SectionHead } from "@/components/ui";
import { ClosingCta, PageHero, Pillars } from "@/components/blocks";

type Params = { params: Promise<{ city: string }> };

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { city } = await params;
  const c = getCity(city);
  if (!c) return {};
  return {
    title: `Bathroom & Shower Remodeling in ${c.name}, MI`,
    description: `${c.summary} ${site.name} installs grout-free wall systems, zero-threshold bases and walk-in tubs across ${c.region}.`,
    alternates: { canonical: `/service-areas/${c.slug}` },
  };
}

export default async function CityPage({ params }: Params) {
  const { city } = await params;
  const c = getCity(city);
  if (!c) notFound();

  const others = cities.filter((x) => x.slug !== c.slug);
  const shots = [
    photos.find((p) => p.src.includes("barrier-free"))!,
    photos.find((p) => p.src.includes("roll-in"))!,
    photos.find((p) => p.src.includes("tub-to-shower"))!,
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Bathroom and shower remodeling",
    provider: { "@id": `${site.url}/#business` },
    areaServed: [
      { "@type": "City", name: `${c.name}, MI` },
      ...c.nearby.map((n) => ({ "@type": "City", name: `${n}, MI` })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PageHero
        eyebrow={`${c.region} · Service area`}
        title={`Bathroom and shower remodeling in ${c.name}.`}
        intro={`${c.summary} We are a Michigan company, the crew that quotes your bathroom is the crew that builds it, and we know what is behind the walls in ${c.name} houses because we have been in a lot of them.`}
      />

      {/* What's actually here */}
      <Section tone="white">
        <SectionHead
          eyebrow={`${c.name} housing stock`}
          title="What we expect to find in your bathroom."
          intro="Not a template with your city dropped into it. This is what the houses here are actually made of and how it changes the job."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {c.housing.map((h) => (
            <Card key={h.title}>
              <h3 className="h-display text-xl text-ink">{h.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
                {h.body}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Common jobs + coverage */}
      <Section tone="cream">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <h2 className="h-display text-2xl text-ink sm:text-3xl">
              What we get called for in {c.name}
            </h2>
            <ul className="mt-6 space-y-3">
              {c.common.map((x) => (
                <li
                  key={x}
                  className="flex gap-3 rounded-xl bg-white px-5 py-4 text-[0.95rem] text-ink ring-1 ring-ink/8"
                >
                  <Icon
                    name="check"
                    className="mt-1 h-4 w-4 shrink-0 text-brand-600"
                  />
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-6">
            <h2 className="h-display text-2xl text-ink sm:text-3xl">
              Also serving
            </h2>
            <p className="mt-3 text-[0.95rem] text-ink-soft">
              From {c.name} we cover {c.region} and beyond. We work across the
              entire state, so if you are not on this list, ask anyway.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {c.nearby.map((n) => (
                <li
                  key={n}
                  className="rounded-full bg-white px-4 py-2 text-[0.9rem] font-medium text-ink ring-1 ring-ink/8"
                >
                  {n}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact">
                Request a consultation
                <Icon name="arrowRight" className="h-4 w-4" />
              </Button>
              {site.showPhone && (
                <Button href={`tel:${site.phoneHref}`} variant="secondary">
                  <Icon name="phone" className="h-4 w-4" />
                  {site.phone}
                </Button>
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* Work */}
      <Section tone="white">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            eyebrow="Our work"
            title="Bathrooms we have finished."
            intro="Real Michigan jobs, photographed as they were handed over. Nothing on this site is stock photography or generated by a computer."
          />
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800"
          >
            See the full gallery
            <Icon name="arrowRight" className="h-4 w-4" />
          </Link>
        </div>
        <ul className="mt-10 grid gap-5 sm:grid-cols-3">
          {shots.map((p) => (
            <li
              key={p.src}
              className="overflow-hidden rounded-2xl bg-cream-100 ring-1 ring-ink/8"
            >
              <div className="aspect-4/5">
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={p.w}
                  height={p.h}
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="h-full w-full object-cover"
                />
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Pillars tone="cream" />

      {/* Other cities */}
      <Section tone="white">
        <h2 className="h-display text-2xl text-ink sm:text-3xl">
          Other areas we serve
        </h2>
        <ul className="mt-6 flex flex-wrap gap-3">
          {others.map((o) => (
            <li key={o.slug}>
              <Link
                href={`/service-areas/${o.slug}`}
                className="inline-flex items-center gap-2 rounded-full bg-cream-100 px-5 py-2.5 text-[0.9rem] font-medium text-ink ring-1 ring-ink/8 hover:text-brand-700"
              >
                <Icon name="pin" className="h-4 w-4 text-brand-500" />
                {o.name}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <ClosingCta
        title={`Let's look at your ${c.name} bathroom.`}
        body={`We come out, measure, and give you an itemized quote in writing that is good for thirty days. Call ${site.phone} or send us the details.`}
      />
    </>
  );
}
