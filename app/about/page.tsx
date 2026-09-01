import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/site.config";
import { Card, Icon, Section, SectionHead } from "@/components/ui";
import { ClosingCta, PageHero, Pillars } from "@/components/blocks";

export const metadata: Metadata = {
  title: "About Us",
  description: `${site.name} is a Michigan shower and bath installer specializing in walk-in showers, walk-in tubs, barrier-free bathing and full bathroom remodels across ${site.serviceAreaLong}.`,
  alternates: { canonical: "/about" },
};

const beliefs = [
  {
    icon: "check" as const,
    title: "The estimate is the price",
    body: "We price the job after we've looked at it, not before. If we find something genuinely unexpected behind a wall, we stop and show you before we spend your money.",
  },
  {
    icon: "accessible" as const,
    title: "Accessibility isn't an add-on",
    body: "Grab bars go into blocking. Thresholds go low. Hand showers go where someone seated can reach them. We'd rather build it right the first time than retrofit it in five years.",
  },
  {
    icon: "clock" as const,
    title: "You get your bathroom back",
    body: "We don't start a job we can't staff. Once we begin, we're there until it's finished, not disappearing for a week to start someone else's.",
  },
  {
    icon: "star" as const,
    title: "We finish what we can see",
    body: "The final walkthrough is you pointing at things. Anything that isn't right gets fixed before we call the job done and before the last payment.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="We install showers and baths that outlive the trend they were built in."
        intro={`${site.name} is a Michigan shower and bath installer. We build walk-in showers, walk-in tubs, barrier-free bathing and complete bathroom remodels for homeowners across ${site.serviceAreaLong}.`}
      />

      {/* Story */}
      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="eyebrow">Our story</p>
            <h2 className="h-display mt-3 text-3xl text-ink sm:text-4xl">
              We do one thing, and we do it all day.
            </h2>
            <div className="prose-ms mt-6 text-[1.05rem]">
              <p>
                Plenty of contractors will do a bathroom between other jobs.
                We&apos;re not that. Showers and baths are the work: the
                waterproofing, the pans, the panel systems, the glass, the
                accessible fixtures. When you do the same thing every week for
                years, you stop guessing. You know which materials fail, which
                layouts fight you, and which shortcuts come back to haunt
                somebody.
              </p>
              <p>
                A lot of our work is for people who need their bathroom to
                change before their life does: a parent who shouldn&apos;t be
                stepping over a tub wall anymore, a veteran with a mobility need
                the house was never designed for, a couple who want to stay in
                the home they raised their kids in for another twenty years.
                Those jobs have to be right. There&apos;s no cosmetic version of
                a grab bar that holds.
              </p>
              <p>
                The rest of it is the pleasure work: a tired 1980s tub surround
                turned into a bright, open walk-in shower with real storage and
                glass that actually seals. Same standards either way.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl ring-1 ring-ink/8">
              <Image
                src="/photos/walk-in-tub-subway-tile.jpg"
                alt="Walk-in tub installed in a subway tile bathroom with hand shower and grab bars"
                width={1800}
                height={1350}
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-5 overflow-hidden rounded-2xl ring-1 ring-ink/8">
              <Image
                src="/photos/neo-angle-shower-base.jpg"
                alt="Neo-angle shower base with a center drain and marble-look wall panels"
                width={1800}
                height={1013}
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Beliefs */}
      <Section tone="cream">
        <SectionHead
          eyebrow="How we operate"
          title="Four things we don't bend on."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {beliefs.map((b) => (
            <Card key={b.title}>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Icon name={b.icon} className="h-6 w-6" />
              </span>
              <h3 className="h-display mt-5 text-xl text-ink">{b.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
                {b.body}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Pillars tone="white" />

      {/* Service area */}
      <Section tone="cream">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHead
              eyebrow="Where we work"
              title={`All of ${site.serviceArea}.`}
              intro="The name isn't decorative. If you're in the state, we'll come look at your bathroom."
            />
          </div>
          <div className="lg:col-span-7">
            <ul className="grid gap-3 sm:grid-cols-2">
              {site.regions.map((r) => (
                <li
                  key={r}
                  className="flex items-center gap-3 rounded-xl bg-white px-5 py-4 text-[0.95rem] font-medium text-ink ring-1 ring-ink/8"
                >
                  <Icon name="pin" className="h-4.5 w-4.5 text-brand-500" />
                  {r}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-ink-soft">
              Not on the list? Ask anyway:{" "}
              <a
                href={`mailto:${site.email}`}
                className="font-semibold text-brand-700 underline underline-offset-4"
              >
                {site.email}
              </a>
            </p>
          </div>
        </div>
      </Section>

      <ClosingCta
        title="Come see what we'd do with your bathroom."
        body="No obligation, no pressure, no same-day-discount routine. Just a look at the space and an honest conversation about what's possible."
      />
    </>
  );
}
