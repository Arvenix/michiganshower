import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/site.config";
import { Card, Icon, Section, SectionHead } from "@/components/ui";
import { ClosingCta, HisaBanner, PageHero, spaces } from "@/components/blocks";

export const metadata: Metadata = {
  title: "Services: Wet Space, Dry Space, Whole Bath",
  description:
    "Walk-in showers, walk-in tubs, tub-to-shower conversions, barrier-free and roll-in bathing, and complete bathroom remodels across Michigan. Wet space, dry space, or the whole bath.",
  alternates: { canonical: "/services" },
};

const accessibility = [
  "Roll-in and curbless shower bases",
  "Walk-in and step-in tubs with sealed doors",
  "Grab bars anchored into solid blocking",
  "Fold-down and built-in shower seating",
  "Slide-bar hand showers reachable while seated",
  "Comfort-height toilets",
  "Slip-resistant flooring",
  "Widened doorways for walkers and wheelchairs",
  "Lever handles and easy-turn valves",
  "Anti-scald thermostatic mixing valves",
];

const materials = [
  {
    title: "Surfaces that don't need grout",
    body: "Solid-surface and high-gloss acrylic wall systems in stone, marble and tile looks. No grout lines means nothing to seal, scrub, or watch go grey.",
  },
  {
    title: "Bases set properly",
    body: "Pans set in a full mortar bed, pitched to the drain, and leak-tested before a single wall panel goes up. A pan that flexes is a pan that fails.",
  },
  {
    title: "Hardware that survives water",
    body: "Brushed nickel, chrome and matte black in corrosion-resistant finishes, from valves and trim to towel bars and the assist bars nobody should ever have to doubt.",
  },
  {
    title: "Glass that seals",
    body: "Framed, semi-frameless and frameless enclosures with tempered safety glass, proper sweeps, and headers set true so the door closes the same way in year ten.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Wet space. Dry space. Whole bath."
        intro={`Take on the part that needs the most help, or hand us the whole room. Every job across ${site.serviceAreaLong} gets the same crew and the same standard.`}
      />

      {/* Three spaces, expanded */}
      {spaces.map((s, i) => (
        <Section key={s.slug} id={s.slug} tone={i % 2 === 0 ? "white" : "cream"}>
          <div
            className={`grid gap-12 lg:grid-cols-12 lg:gap-16 ${
              i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="lg:col-span-6">
              <p className="eyebrow flex items-center gap-2">
                <Icon name={s.icon} className="h-4 w-4" />
                {s.label}
              </p>
              <h2 className="h-display mt-3 text-3xl text-ink sm:text-4xl">
                {s.title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-ink-soft">
                {s.summary}
              </p>
              <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {s.points.map((pt) => (
                  <li
                    key={pt}
                    className="flex gap-2.5 text-[0.95rem] text-ink-soft"
                  >
                    <Icon
                      name="check"
                      className="mt-1 h-3.5 w-3.5 shrink-0 text-brand-500"
                    />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-2xl ring-1 ring-ink/8">
                <Image
                  src={s.photo.src}
                  alt={s.photo.alt}
                  width={s.photo.w}
                  height={s.photo.h}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Section>
      ))}

      {/* Accessibility */}
      <Section tone="white" id="accessibility">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHead
              eyebrow="Aging in place"
              title="Accessible bathing, done so it doesn't look institutional."
              intro="A safe bathroom shouldn't announce itself. Modern assist bars, low thresholds and seated-height fixtures can read as design choices, and still hold 250 pounds."
            />
            <div className="mt-8 overflow-hidden rounded-2xl ring-1 ring-ink/8">
              <Image
                src="/photos/hand-shower-slide-bar.jpg"
                alt="Adjustable slide-bar hand shower beside an angled transfer grab bar"
                width={1350}
                height={1800}
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <ul className="grid gap-3 sm:grid-cols-2">
              {accessibility.map((a) => (
                <li
                  key={a}
                  className="flex gap-3 rounded-xl bg-cream-100 px-5 py-4 text-[0.95rem] text-ink"
                >
                  <Icon
                    name="check"
                    className="mt-1 h-4 w-4 shrink-0 text-brand-600"
                  />
                  {a}
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-xl bg-brand-50 px-5 py-4 text-[0.95rem] leading-relaxed text-brand-900 ring-1 ring-brand-200">
              <strong className="font-semibold">Veterans:</strong> most of the
              work on this list is exactly what the VA&apos;s HISA grant is
              meant to pay for.{" "}
              <a
                href="/hisa-grants"
                className="font-semibold underline underline-offset-4"
              >
                See how HISA works →
              </a>
            </p>
          </div>
        </div>
      </Section>

      {/* Materials */}
      <Section tone="cream">
        <SectionHead
          eyebrow="Materials"
          title="What we put in your walls."
          intro="Specification is where a bathroom is really won or lost. Here's what we default to and why."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {materials.map((m) => (
            <Card key={m.title}>
              <h3 className="h-display text-xl text-ink">{m.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
                {m.body}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <HisaBanner />
      <ClosingCta />
    </>
  );
}
