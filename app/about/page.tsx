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
    body: "We price a project after we have seen it, never before. If something genuinely unexpected turns up behind a wall, we stop, show you, and agree the next step before spending another dollar of your money.",
  },
  {
    icon: "accessible" as const,
    title: "Accessibility is engineered in",
    body: "Grab bars land in structural blocking. Thresholds go flush. Hand showers are positioned to be reached from a seated position. Building it correctly the first time costs less than retrofitting it in five years.",
  },
  {
    icon: "clock" as const,
    title: "Your bathroom comes back on schedule",
    body: "We do not open a project we cannot staff to completion. Once the crew starts, they stay until the room is finished rather than disappearing mid-job to open someone else's.",
  },
  {
    icon: "star" as const,
    title: "The walkthrough is yours to lead",
    body: "At handover you point and we correct. Everything on that list is resolved before the project is called complete and before the final payment is due.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Showers and baths built to outlive the trend they were designed in."
        intro={`${site.name} is a Michigan shower and bath installer. We build walk-in showers, walk-in tubs, barrier-free bathing and complete bathroom remodels for homeowners across ${site.serviceAreaLong}.`}
      />

      {/* Story */}
      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="eyebrow">Our story</p>
            <h2 className="h-display mt-3 text-3xl text-ink sm:text-4xl">
              A single trade, practiced every day.
            </h2>
            <div className="prose-ms mt-6 text-[1.05rem]">
              <p>
                Most contractors will take a bathroom between other jobs. We
                took the opposite route and built the company around one trade.
                Waterproofing, pans, solid surface panel systems, glass,
                accessible fixtures: that is the entire scope, every week of the
                year. Repetition at that depth removes the guesswork. You learn
                which materials fail and when, which layouts fight back, and
                which shortcuts come due five years after the crew has gone.
              </p>
              <p>
                A large share of our work is for households that need the
                bathroom to change before circumstances force the issue. A
                parent who should no longer be stepping over a tub wall. A
                veteran with a mobility requirement the house was never designed
                around. A couple intending to stay in the home they raised their
                family in for another twenty years. There is no cosmetic version
                of a grab bar that holds, and those projects leave no room for
                one.
              </p>
              <p>
                The rest is the work we take pleasure in: a tired 1980s tub
                surround opened into a bright walk-in shower with proper storage
                and glass that seals correctly. The standard does not change
                between the two.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl ring-1 ring-ink/8">
              <Image
                src="/products/signature/room-hero-suite.jpg"
                alt="Walk-in shower with stone-look walls, matte black fixtures and a low-profile base"
                width={1600}
                height={1600}
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-5 overflow-hidden rounded-2xl ring-1 ring-ink/8">
              <Image
                src="/products/bases/base-marble-room.jpg"
                alt="Low-profile shower base paired with marble-look wall panels"
                width={1500}
                height={768}
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
          title="Four standards we do not negotiate."
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
              intro="The name is not decorative. If your home is in the state, a design consultant will come and look at your bathroom."
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
              Your area is not listed? Ask anyway:{" "}
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
        title="Find out what your bathroom could become."
        body="No obligation, no pressure and no same-day discount routine. A proper look at the space, the finishes in your own light, and a straight conversation about what is possible in it."
      />
    </>
  );
}
