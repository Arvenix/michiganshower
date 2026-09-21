import Image from "next/image";
import Link from "next/link";
import { site } from "@/site.config";
import { photos } from "@/lib/photos";
import { products } from "@/lib/products";
import { safetyStats } from "@/lib/stats";
import { Button, Card, Container, Icon, Section, SectionHead } from "@/components/ui";
import QuoteForm from "@/components/QuoteForm";
import StatsBand from "@/components/StatsBand";
import { ClosingCta, HisaBanner } from "@/components/blocks";

/* ── Icon benefit row ─────────────────────────────────────────── */
const benefits = [
  {
    icon: "clock" as const,
    title: "Finished in one to two days",
    body: "A wet area replacement is complete in a visit or two, not the six weeks a full gut demands.",
  },
  {
    icon: "shield" as const,
    title: "Grout-free solid surface",
    body: "The color runs through the full thickness of the panel. Nothing to reseal, and nothing failing quietly behind the wall.",
  },
  {
    icon: "accessible" as const,
    title: "Zero-threshold access",
    body: "Bases that sit flush with the finished floor, and grab bars anchored into structural blocking.",
  },
  {
    icon: "star" as const,
    title: "Michigan owned and accountable",
    body: "The company that designs your bathroom is the company that installs it and warranties it.",
  },
];

/* ── Six service tiles ────────────────────────────────────────── */
const services = [
  {
    icon: "droplet" as const,
    title: "Walk-In Showers",
    body: "Low and zero-threshold showers with grout-free walls and glass that seals correctly the first time.",
    href: "/services#wet-space",
    photo: photos[1],
  },
  {
    icon: "bath" as const,
    title: "Tub-to-Shower Conversions",
    body: "The cast-iron tub comes out and a proper shower goes in, most often within the original footprint.",
    href: "/services#wet-space",
    photo: photos[8],
  },
  {
    icon: "accessible" as const,
    title: "Barrier-Free and Roll-In",
    body: "True roll-in access for a wheelchair or walker, specified to be used every day for years.",
    href: "/services#accessibility",
    photo: photos[2],
  },
  {
    icon: "shield" as const,
    title: "Walk-In Tubs",
    body: "Sealed-door tubs with a low step-in, assist bars and controls placed within reach from a seated position.",
    href: "/services#wet-space",
    photo: photos[6],
  },
  {
    icon: "sparkle" as const,
    title: "Full Bathroom Remodels",
    body: "Wet area and dry area together, under one crew, one schedule and one point of accountability.",
    href: "/services#whole-bath",
    photo: photos[11],
  },
  {
    icon: "flag" as const,
    title: "VA HISA Grant Projects",
    body: "Up to $6,800 toward a medically necessary bathroom. We build to the scope the VA approves.",
    href: "/hisa-grants",
    photo: photos[5],
  },
];

const whyUs = [
  {
    title: "The quoted price is the price",
    body: "No inflated list price discounted to look like a favor, and no offer that expires when our consultant leaves your driveway. The written number holds for thirty days.",
  },
  {
    title: "Michigan owned, Michigan accountable",
    body: "Most of the brands advertising against us are owned by investment firms and grow by acquisition. We grow when the last job earns the next one, which is a very different set of incentives.",
  },
  {
    title: "Specified to outlast the trend",
    body: "Solid surface throughout, bases set in a full mortar bed and water tested, grab bars anchored into blocking. The decisions you never see are the ones that determine year fifteen.",
  },
  {
    title: "Scheduled honestly",
    body: `We are currently booking ${site.bookingLeadTime} out and we will tell you that on the first call. A date we can hold is worth more than a date that sounds good.`,
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero with inline lead form ─────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-brand-950">
        <Image
          src="/products/signature/room-hero-suite.jpg"
          alt=""
          width={1600}
          height={1600}
          priority
          sizes="100vw"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-[70%_50%] opacity-60"
        />
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-brand-950 via-brand-950/95 to-brand-950/55" />

        <Container className="py-14 sm:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <p className="eyebrow text-copper-300">
                Serving all of {site.serviceArea}
              </p>
              <h1 className="h-display mt-4 text-4xl text-white sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]">
                Remodeled in days. Built to last decades.
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-brand-100">
                Walk-in showers, zero-threshold access and complete bathroom
                remodels across Michigan. Grout-free solid surface that never
                needs sealing, installed by the same company that designed and
                priced it.
              </p>

              <ul className="mt-7 grid gap-x-8 gap-y-2.5 text-[0.95rem] text-white sm:grid-cols-2">
                {site.badges.map((b) => (
                  <li key={b} className="flex items-center gap-2.5">
                    <Icon name="check" className="h-4 w-4 shrink-0 text-copper-400" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                {site.showPhone && (
                  <a
                    href={`tel:${site.phoneHref}`}
                    className="inline-flex items-center gap-2.5 text-xl font-bold text-white hover:text-copper-300"
                  >
                    <Icon name="phone" className="h-5 w-5 text-copper-400" />
                    {site.phone}
                  </a>
                )}
                <span className="text-sm text-brand-200">
                  Call or request a time, whichever suits you
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <QuoteForm
                variant="dark"
                heading="Book your free in-home consultation"
                sub="Four questions. We respond within one business day."
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ── Benefit row ────────────────────────────────────────── */}
      <section className="border-b border-ink/8 bg-white py-12">
        <Container>
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <li key={b.title} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon name={b.icon} className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-[0.95rem] font-bold text-ink">
                    {b.title}
                  </span>
                  <span className="mt-1 block text-[0.88rem] leading-relaxed text-ink-soft">
                    {b.body}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ── Services ───────────────────────────────────────────── */}
      <Section tone="cream">
        <SectionHead
          eyebrow="What we build"
          title="Designed around how the room is actually used."
          intro="Replace the one fixture that is failing, or hand us the entire bathroom. The specification, the crew and the warranty are the same either way."
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li key={s.title}>
              <Link
                href={s.href}
                className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-ink/8 transition-shadow hover:shadow-[0_6px_40px_-12px_rgba(18,32,43,0.25)]"
              >
                <div className="aspect-4/3 overflow-hidden bg-cream-200">
                  <Image
                    src={s.photo.src}
                    alt={s.photo.alt}
                    width={s.photo.w}
                    height={s.photo.h}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="flex items-center gap-2.5 text-brand-600">
                    <Icon name={s.icon} className="h-5 w-5" />
                    <span className="h-display text-lg text-ink">{s.title}</span>
                  </span>
                  <p className="mt-2.5 flex-1 text-[0.9rem] leading-relaxed text-ink-soft">
                    {s.body}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-[0.82rem] font-bold uppercase tracking-wider text-copper-600">
                    Learn more
                    <Icon name="arrowRight" className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* ── The safety case, with sourced numbers ──────────────── */}
      <StatsBand
        eyebrow="Why this matters"
        title="The bathroom is the most dangerous room in the house."
        intro="More injuries happen here than anywhere else in the home, and the fixtures responsible are the ones still standing in most Michigan bathrooms built before 1990."
        stats={safetyStats}
      />

      {/* ── Why us ─────────────────────────────────────────────── */}
      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHead
              eyebrow="Why Michigan Shower"
              title="The advantages of hiring the owner, not the brand."
              intro="We are deliberately sized to keep the person responsible for your project close to it. That is the whole strategy, and it is the one thing a national roll-up cannot copy."
            />
            <div className="mt-8 overflow-hidden rounded-2xl ring-1 ring-ink/8">
              <Image
                src={photos[3].src}
                alt={photos[3].alt}
                width={photos[3].w}
                height={photos[3].h}
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="grid gap-5 sm:grid-cols-2">
              {whyUs.map((w) => (
                <Card key={w.title}>
                  <h3 className="h-display text-lg text-ink">{w.title}</h3>
                  <p className="mt-3 text-[0.9rem] leading-relaxed text-ink-soft">
                    {w.body}
                  </p>
                </Card>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-brand-50 p-6 ring-1 ring-brand-200">
              <p className="text-[0.95rem] leading-relaxed text-brand-900">
                <strong className="font-semibold">Worth knowing:</strong> a
                minor bathroom remodel returns roughly 70% of its cost at
                resale, among the strongest returns of any project in the
                house. Safety is why most people call. The return is what makes
                the decision straightforward.{" "}
                <Link href="/cost" className="font-semibold underline underline-offset-4">
                  See what drives the price
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Finish teaser, ends in the appointment ─────────────── */}
      <Section tone="cream">
        <SectionHead
          eyebrow="Finishes"
          title="The finish gets decided in your bathroom, not on a screen."
          intro="Three solid surface tiers and more than twenty finishes. Color and gloss behave differently under every room's light, so our design consultant brings the physical samples to yours and holds them against your floor, your fixtures and your window."
        />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/products/${p.slug}`}
                className="group block overflow-hidden rounded-2xl bg-white ring-1 ring-ink/8"
              >
                <div className="aspect-4/5 overflow-hidden bg-cream-200">
                  <Image
                    src={p.hero.src}
                    alt={p.hero.alt}
                    width={p.hero.w}
                    height={p.hero.h}
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-5">
                  <h3 className="h-display text-lg text-ink">{p.name}</h3>
                  <p className="mt-1 text-[0.85rem] leading-snug text-ink-soft">
                    {p.tagline}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button href="/contact">
            See these samples in your home
            <Icon name="arrowRight" className="h-4 w-4" />
          </Button>
          <Link
            href="/products"
            className="text-sm font-bold uppercase tracking-wider text-copper-600 hover:text-copper-700"
          >
            Compare the tiers
          </Link>
        </div>
      </Section>

      {/* ── HISA ───────────────────────────────────────────────── */}
      <HisaBanner />

      {/* ── Second form ────────────────────────────────────────── */}
      <Section tone="white">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionHead
              eyebrow="Book the appointment"
              title="One visit answers every question you have."
              intro="A design consultant measures the room, inspects what sits behind the existing unit wherever we can reach it, shows you the finishes in your own light, and leaves an itemized written price that holds for thirty days. There is no charge and no obligation attached to any of it."
            />
            <ul className="mt-8 space-y-3">
              {[
                "A reply within one business day",
                "Physical samples shown in your own bathroom",
                "An itemized written quote with the materials named",
                "No same-day pressure and no expiring discount",
              ].map((x) => (
                <li key={x} className="flex gap-3 text-[0.95rem] text-ink">
                  <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-copper-600" />
                  {x}
                </li>
              ))}
            </ul>
            {site.showPhone && (
              <p className="mt-8 text-lg text-ink-soft">
                Prefer to talk it through?{" "}
                <a
                  href={`tel:${site.phoneHref}`}
                  className="font-bold text-brand-700 underline underline-offset-4"
                >
                  {site.phone}
                </a>
              </p>
            )}
          </div>
          <div className="lg:col-span-6">
            <QuoteForm heading="Request your consultation" />
          </div>
        </div>
      </Section>

      <ClosingCta />
    </>
  );
}
