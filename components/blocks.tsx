import Link from "next/link";
import Image from "next/image";
import { site } from "@/site.config";
import { photos } from "@/lib/photos";
import { Button, Card, Container, Icon, Section, SectionHead } from "./ui";

/* ── The three pillars: quality, precision, built to last ────── */

export const pillars = [
  {
    icon: "sparkle" as const,
    title: "Quality",
    body: "We buy materials that hold up to twenty years of daily water — solid surface and acrylic panels, sealed pans, corrosion-resistant hardware. The cheap version of a shower is the one you replace twice.",
  },
  {
    icon: "ruler" as const,
    title: "Precision",
    body: "Every pan is set level and pitched to the drain. Every panel seam is cut to the wall, not caulked over. Grab bars land in blocking, not drywall anchors. The details you can't see are the ones that decide how long it lasts.",
  },
  {
    icon: "shield" as const,
    title: "Built to last",
    body: "Water finds every shortcut. We waterproof behind the surface, flash the corners properly, and leave you a bathroom that stays dry inside the walls — not just on the day we hand you the keys.",
  },
];

export function Pillars({ tone = "cream" }: { tone?: "cream" | "white" }) {
  return (
    <Section tone={tone}>
      <SectionHead
        eyebrow="How we work"
        title="Quality. Precision. Built to last."
        intro="Three words that decide whether a bathroom still looks right in fifteen years — or starts failing quietly behind the wall in three."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {pillars.map((p) => (
          <Card key={p.title}>
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
              <Icon name={p.icon} className="h-6 w-6" />
            </span>
            <h3 className="h-display mt-5 text-xl text-ink">{p.title}</h3>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
              {p.body}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

/* ── Wet space / dry space / whole bath ──────────────────────── */

export const spaces = [
  {
    slug: "wet-space",
    icon: "droplet" as const,
    label: "Wet Space",
    title: "The wet space",
    summary:
      "The shower or tub itself — the part that has to be right, because water is unforgiving.",
    points: [
      "Walk-in and barrier-free showers",
      "Tub-to-shower conversions",
      "Walk-in and step-in tubs",
      "Roll-in bases set flush to the floor",
      "Waterproofed pans, curbs and corners",
      "Solid-surface and acrylic wall systems",
      "Glass doors and enclosures",
      "Niches, benches, shelf towers",
      "Reinforced grab bars and hand showers",
    ],
    photo: photos.find((p) => p.src.includes("shelf-tower"))!,
  },
  {
    slug: "dry-space",
    icon: "bath" as const,
    label: "Dry Space",
    title: "The dry space",
    summary:
      "Everything outside the enclosure — where the room stops being a shower and starts being a bathroom.",
    points: [
      "Vanities, tops and sinks",
      "Waterproof luxury vinyl and tile flooring",
      "Toilets, including comfort-height",
      "Lighting and exhaust ventilation",
      "Mirrors, medicine cabinets, storage",
      "Trim, doors and paint",
      "Wider doorways for walker access",
      "Slip-resistant flooring throughout",
    ],
    photo: photos.find((p) => p.src.includes("tiled-surround"))!,
  },
  {
    slug: "whole-bath",
    icon: "sparkle" as const,
    label: "Whole Bath",
    title: "The whole bath",
    summary:
      "Wet and dry together — one crew, one schedule, one person accountable for the finished room.",
    points: [
      "Full gut-to-finish remodels",
      "Layout changes and fixture relocation",
      "Plumbing and electrical rough-in",
      "Coordinated tile, panel and paint selections",
      "Accessibility built in from the start",
      "Permits pulled where required",
      "One point of contact from first visit to walkthrough",
    ],
    photo: photos.find((p) => p.src.includes("walk-in-tub-subway"))!,
  },
];

export function SpacesGrid() {
  return (
    <Section tone="white">
      <SectionHead
        eyebrow="What we build"
        title="Wet space. Dry space. Whole bath."
        intro="Take on the part that needs the most help, or hand us the whole room. Either way you get the same crew and the same standard."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {spaces.map((s) => (
          <article
            key={s.slug}
            className="group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-ink/8"
          >
            <div className="relative aspect-4/3 overflow-hidden bg-cream-100">
              <Image
                src={s.photo.src}
                alt={s.photo.alt}
                width={s.photo.w}
                height={s.photo.h}
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-brand-700 backdrop-blur">
                <Icon name={s.icon} className="h-3.5 w-3.5" />
                {s.label}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-7">
              <h3 className="h-display text-2xl text-ink">{s.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
                {s.summary}
              </p>
              <ul className="mt-5 space-y-2.5 text-[0.9rem] text-ink-soft">
                {s.points.slice(0, 5).map((pt) => (
                  <li key={pt} className="flex gap-2.5">
                    <Icon
                      name="check"
                      className="mt-1 h-3.5 w-3.5 shrink-0 text-brand-500"
                    />
                    {pt}
                  </li>
                ))}
              </ul>
              <Link
                href={`/services#${s.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800"
              >
                See everything included
                <Icon name="arrowRight" className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ── HISA banner ─────────────────────────────────────────────── */

export function HisaBanner() {
  return (
    <Section tone="deep">
      <div className="grid items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="eyebrow flex items-center gap-2 text-brand-300">
            <Icon name="flag" className="h-4 w-4" />
            For Michigan veterans
          </p>
          <h2 className="h-display mt-4 text-3xl text-white sm:text-4xl">
            The VA may pay for your accessible bathroom.
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-brand-100">
            The HISA grant covers medically necessary home modifications —
            roll-in showers, walk-in tubs, grab bars, widened access. Up to{" "}
            <strong className="font-semibold text-white">$6,800</strong> for
            service-connected needs. We build to what the VA approves and give
            you the itemized estimate your application requires.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/hisa-grants" variant="onDark">
              How HISA works
              <Icon name="arrowRight" className="h-4 w-4" />
            </Button>
            <Button href="/contact" variant="outlineOnDark">
              Get an estimate for my application
            </Button>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="overflow-hidden rounded-2xl ring-1 ring-white/15">
            <Image
              src="/photos/roll-in-shower-low-threshold.jpg"
              alt="Roll-in shower base set nearly flush with the bathroom floor"
              width={1800}
              height={1350}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ── Closing call to action ──────────────────────────────────── */

export function ClosingCta({
  title = "Tell us about your bathroom.",
  body = "Send a few details and a photo or two. We'll tell you honestly what the space can do, what it will take, and roughly what it costs — before anyone talks about signing anything.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-cream-100 py-16 sm:py-24">
      <Container>
        <div className="rounded-3xl bg-brand-600 px-8 py-14 text-center sm:px-14">
          <h2 className="h-display mx-auto max-w-2xl text-3xl text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-brand-50">
            {body}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button href="/contact" variant="onDark">
              Request a free consultation
              <Icon name="arrowRight" className="h-4 w-4" />
            </Button>
            <Button href={`mailto:${site.email}`} variant="outlineOnDark">
              <Icon name="mail" className="h-4 w-4" />
              {site.email}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ── Page hero used on every interior page ───────────────────── */

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="border-b border-ink/8 bg-cream-100 py-14 sm:py-20">
      <Container>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="h-display mt-3 max-w-3xl text-4xl text-ink sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
          {intro}
        </p>
      </Container>
    </section>
  );
}
