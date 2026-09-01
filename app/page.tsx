import Image from "next/image";
import Link from "next/link";
import { site } from "@/site.config";
import { photos } from "@/lib/photos";
import { Button, Container, Icon, Section, SectionHead } from "@/components/ui";
import {
  ClosingCta,
  HisaBanner,
  Pillars,
  SpacesGrid,
} from "@/components/blocks";

const steps = [
  {
    n: "01",
    title: "We come and look",
    body: "A real visit, not a sales pitch. We measure, check what's behind the walls where we can, and listen to how you actually use the room.",
  },
  {
    n: "02",
    title: "You see the plan and the number",
    body: "An itemized estimate with the materials named. If something in your idea won't work in that space, we tell you then — not after demolition.",
  },
  {
    n: "03",
    title: "We build it and clean up",
    body: "One crew, a schedule you can hold us to, and a final walkthrough where you point at anything that isn't right before we call it done.",
  },
];

const featured = [
  photos.find((p) => p.src.includes("shelf-tower"))!,
  photos.find((p) => p.src.includes("walk-in-tub-grab-bars"))!,
  photos.find((p) => p.src.includes("glass-enclosure"))!,
  photos.find((p) => p.src.includes("neo-angle"))!,
  photos.find((p) => p.src.includes("alcove-shower"))!,
  photos.find((p) => p.src.includes("walk-in-tub-window"))!,
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-brand-950">
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <p className="eyebrow text-brand-300">
                Shower &amp; bath installers · All of {site.serviceArea}
              </p>
              <h1 className="h-display mt-5 text-4xl text-white sm:text-5xl lg:text-[3.5rem]">
                Built to last.
                <br />
                Built to your vision.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-100">
                Walk-in showers, walk-in tubs, barrier-free bathing and full
                bathroom remodels — installed with the kind of care that still
                shows fifteen years from now.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button href="/contact" variant="onDark">
                  Request a free consultation
                  <Icon name="arrowRight" className="h-4 w-4" />
                </Button>
                <Button href="/gallery" variant="outlineOnDark">
                  See our past work
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-2xl ring-1 ring-white/15">
                <div className="aspect-4/3 lg:aspect-4/5">
                  <Image
                    src="/photos/barrier-free-shower-panels.jpg"
                    alt="Barrier-free walk-in shower with stone-look wall panels, a slide-bar hand shower and stainless grab bars"
                    width={1350}
                    height={1800}
                    priority
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* Trust strip */}
        <div className="border-t border-white/12">
          <Container>
            <ul className="grid gap-x-8 gap-y-4 py-6 text-sm text-brand-100 sm:grid-cols-2 lg:grid-cols-4">
              {site.badges.map((b) => (
                <li key={b} className="flex items-center gap-2.5">
                  <Icon
                    name="check"
                    className="h-4 w-4 shrink-0 text-brand-300"
                  />
                  {b}
                </li>
              ))}
            </ul>
          </Container>
        </div>
      </section>

      {/* ── Intro ────────────────────────────────────────────── */}
      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="eyebrow">Who we are</p>
            <h2 className="h-display mt-3 text-3xl text-ink sm:text-4xl">
              A bathroom is the one room in the house that gets used wet, every
              single day.
            </h2>
            <div className="prose-ms mt-6 text-[1.05rem]">
              <p>
                That&apos;s the whole reason {site.name} exists. Showers and
                tubs take more abuse than any other part of a home, and they
                punish shortcuts quietly — behind the panel, under the pan,
                inside the wall — until one day the floor is soft and the bill
                is enormous.
              </p>
              <p>
                So we do it the slow way. Level pans. Blocking behind every grab
                bar. Seams cut to fit instead of filled with caulk. Materials
                chosen because they last, not because they&apos;re what the
                truck happened to have.
              </p>
              <p>
                We work across {site.serviceAreaLong}, on everything from a
                single tub-to-shower conversion to a gut remodel of the whole
                room. A lot of what we build is accessible bathing — walk-in
                tubs, roll-in showers, grab bars placed where someone can
                actually reach them — for homeowners who want to stay in the
                house they already love.
              </p>
            </div>
            <Link
              href="/about"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800"
            >
              More about how we work
              <Icon name="arrowRight" className="h-4 w-4" />
            </Link>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl ring-1 ring-ink/8">
              <Image
                src="/photos/tub-to-shower-conversion.jpg"
                alt="Tub-to-shower conversion with built-in corner shelving and a vertical grab bar"
                width={1350}
                height={1800}
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* ── Wet / dry / whole ────────────────────────────────── */}
      <SpacesGrid />

      {/* ── Pillars ──────────────────────────────────────────── */}
      <Pillars tone="cream" />

      {/* ── Process ──────────────────────────────────────────── */}
      <Section tone="white">
        <SectionHead
          eyebrow="What to expect"
          title="Three steps, no surprises."
          intro="The part most people dread about remodeling is not knowing what happens next. Here's the whole thing."
        />
        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <li key={s.n} className="border-t-2 border-brand-500 pt-6">
              <span className="h-display text-sm font-bold tracking-widest text-brand-500">
                {s.n}
              </span>
              <h3 className="h-display mt-3 text-xl text-ink">{s.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {/* ── Work preview ─────────────────────────────────────── */}
      <Section tone="cream">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            eyebrow="Past jobs"
            title="Work we've finished."
            intro="Real Michigan bathrooms — walk-in tubs, roll-in showers, conversions and full remodels."
          />
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800"
          >
            View the full gallery
            <Icon name="arrowRight" className="h-4 w-4" />
          </Link>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <li
              key={p.src}
              className="overflow-hidden rounded-2xl bg-white ring-1 ring-ink/8"
            >
              <div className="aspect-4/5">
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={p.w}
                  height={p.h}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="h-full w-full object-cover"
                />
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* ── HISA ─────────────────────────────────────────────── */}
      <HisaBanner />

      <ClosingCta />
    </>
  );
}
