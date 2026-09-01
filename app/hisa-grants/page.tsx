import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/site.config";
import { Button, Card, Icon, Section, SectionHead } from "@/components/ui";
import { ClosingCta, PageHero } from "@/components/blocks";

export const metadata: Metadata = {
  title: "VA HISA Grants for Bathroom Modifications",
  description:
    "The VA's HISA grant helps veterans pay for medically necessary bathroom modifications: roll-in showers, walk-in tubs, grab bars and accessible fixtures. Up to $6,800. Michigan Shower builds to VA-approved scope and provides the itemized estimate your application needs.",
  alternates: { canonical: "/hisa-grants" },
};

const tiers = [
  {
    amount: "$6,800",
    who: "Service-connected",
    body: "The lifetime maximum if the modification is for a service-connected disability, or for a non-service-connected condition when you hold a service-connected rating of 50% or more.",
  },
  {
    amount: "$2,000",
    who: "Non-service-connected",
    body: "The lifetime maximum for a medically necessary modification tied to a non-service-connected condition.",
  },
];

const covered = [
  "Roll-in and barrier-free showers",
  "Walk-in and step-in tubs",
  "Grab bars and transfer supports",
  "Lowering sinks and counters for seated access",
  "Improving access into and out of the home",
  "Permanent ramping at driveways and entries",
  "Plumbing or electrical work required by medical equipment",
];

const steps = [
  {
    n: "01",
    title: "Talk to your VA provider",
    body: "HISA starts with medicine, not construction. Your VA physician writes a prescription that spells out the medical justification for the modification you need.",
  },
  {
    n: "02",
    title: "We measure and quote",
    body: "We come out, look at the bathroom, and put together an itemized cost estimate broken down the way the VA wants to see it: labor and materials, line by line.",
  },
  {
    n: "03",
    title: "Submit the application",
    body: "VA Form 10-0103 goes in with the prescription, the itemized estimate, a color photo of the area, and, if you rent, notarized authorization from the property owner.",
  },
  {
    n: "04",
    title: "VA reviews and approves",
    body: "The VA may inspect the site before approving. Approval timelines vary by medical center, so start earlier than you think you need to.",
  },
  {
    n: "05",
    title: "We build it",
    body: "We install to the approved scope, keep the documentation straight, and hand you a bathroom you can actually use, with a final walkthrough before we call it finished.",
  },
];

const helpWith = [
  {
    icon: "doc" as const,
    title: "Itemized estimates the VA accepts",
    body: "Broken out by labor and materials, scoped to the medical need, and written so a reviewer doesn't have to guess what they're approving.",
  },
  {
    icon: "accessible" as const,
    title: "Scope that matches the prescription",
    body: "If the prescription says roll-in access, we build roll-in access. We won't pad the scope with things the grant won't cover and then leave you holding the difference.",
  },
  {
    icon: "sparkle" as const,
    title: "Honest talk about the gap",
    body: "HISA rarely covers a full remodel. If you want more than the grant pays for, we'll show you both numbers up front so there's no surprise at invoice time.",
  },
];

export default function HisaPage() {
  return (
    <>
      <PageHero
        eyebrow="For veterans"
        title="VA HISA grants for bathroom modifications."
        intro="If a medical condition makes your bathroom hard or unsafe to use, the VA's Home Improvements and Structural Alterations grant may pay for changing it. Here's how the program works and where we fit in."
      />

      {/* Tiers */}
      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="eyebrow">The basics</p>
            <h2 className="h-display mt-3 text-3xl text-ink sm:text-4xl">
              What HISA is.
            </h2>
            <div className="prose-ms mt-6 text-[1.05rem]">
              <p>
                HISA stands for <strong>Home Improvements and Structural
                Alterations</strong>. It&apos;s a VA benefit that helps pay for
                medically necessary changes to a veteran&apos;s home, most
                often to make bathing, entering and exiting safely possible
                again.
              </p>
              <p>
                It is a <strong>lifetime benefit</strong>, not an annual one,
                and it can be used in more than one piece until the total is
                spent. Every HISA project has to be{" "}
                <strong>medically justified</strong>. The VA is paying for a
                medical need, not for a nicer bathroom, and the paperwork
                reflects that.
              </p>
              <p>
                The benefit is administered through VA Prosthetic and Sensory
                Aids Service at your local VA medical center. That&apos;s who
                approves it, and that&apos;s who you talk to about timing.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="grid gap-5">
              {tiers.map((t) => (
                <div
                  key={t.who}
                  className="rounded-2xl bg-cream-100 p-7 ring-1 ring-ink/8"
                >
                  <p className="h-display text-4xl text-brand-600">
                    {t.amount}
                  </p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-ink-soft">
                    {t.who} · lifetime maximum
                  </p>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
                    {t.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Covered */}
      <Section tone="cream">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionHead
              eyebrow="Eligible work"
              title="What the grant can cover."
              intro="The VA names accessible bathing directly: roll-in showers are listed as an example of an eligible improvement. Most of what we build fits inside this list."
            />
            <ul className="mt-8 space-y-3">
              {covered.map((c) => (
                <li
                  key={c}
                  className="flex gap-3 rounded-xl bg-white px-5 py-4 text-[0.95rem] text-ink ring-1 ring-ink/8"
                >
                  <Icon
                    name="check"
                    className="mt-1 h-4 w-4 shrink-0 text-brand-600"
                  />
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-relaxed text-ink-soft">
              Not everything qualifies, and eligibility is decided case by case.
              Your VA prosthetics representative is the authority on what your
              specific application will and won&apos;t cover.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-2xl ring-1 ring-ink/8">
              <Image
                src="/photos/roll-in-shower-low-threshold.jpg"
                alt="Roll-in shower base set nearly flush with the finished bathroom floor"
                width={1800}
                height={1350}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-5 overflow-hidden rounded-2xl ring-1 ring-ink/8">
              <Image
                src="/photos/walk-in-tub-grab-bars.jpg"
                alt="Walk-in tub with a low step-in threshold and two grab bars"
                width={1350}
                height={1800}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section tone="white">
        <SectionHead
          eyebrow="How to apply"
          title="Five steps, in order."
          intro="The order matters. A quote without a prescription doesn't go anywhere, and a prescription without an itemized estimate stalls."
        />
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s) => (
            <li key={s.n} className="border-t-2 border-brand-500 pt-6">
              <span className="h-display text-sm font-bold tracking-widest text-brand-500">
                {s.n}
              </span>
              <h3 className="h-display mt-3 text-lg text-ink">{s.title}</h3>
              <p className="mt-3 text-[0.9rem] leading-relaxed text-ink-soft">
                {s.body}
              </p>
            </li>
          ))}
        </ol>

        {/* Paperwork checklist */}
        <div className="mt-14 rounded-2xl bg-cream-100 p-8 ring-1 ring-ink/8 sm:p-10">
          <h3 className="h-display flex items-center gap-3 text-2xl text-ink">
            <Icon name="doc" className="h-6 w-6 text-brand-600" />
            What your application needs
          </h3>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "A VA physician's prescription stating the medical justification",
              "A completed VA Form 10-0103",
              "An itemized cost estimate from your contractor",
              "A color photograph of the area to be modified",
              "Property-owner authorization, notarized if you rent",
            ].map((d) => (
              <li
                key={d}
                className="flex gap-3 rounded-xl bg-white px-5 py-4 text-[0.95rem] text-ink"
              >
                <Icon
                  name="check"
                  className="mt-1 h-4 w-4 shrink-0 text-brand-600"
                />
                {d}
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button
              href="https://www.prosthetics.va.gov/psas/HISA2.asp"
              variant="secondary"
            >
              Read the VA&apos;s HISA page
              <Icon name="arrowRight" className="h-4 w-4" />
            </Button>
            <Button href="/contact">
              Ask us for an itemized estimate
              <Icon name="arrowRight" className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Section>

      {/* How we help */}
      <Section tone="deep">
        <SectionHead
          eyebrow="Where we fit"
          title="What we do for HISA applicants."
          intro="We're the contractor, not the VA. But the contractor's part of this is where a lot of applications get stuck, and we know how to keep it moving."
          invert
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {helpWith.map((h) => (
            <div
              key={h.title}
              className="rounded-2xl bg-white/6 p-7 ring-1 ring-white/12"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-brand-200">
                <Icon name={h.icon} className="h-6 w-6" />
              </span>
              <h3 className="h-display mt-5 text-xl text-white">{h.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-brand-100">
                {h.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Other programs + disclaimer */}
      <Section tone="cream">
        <div className="grid gap-10 lg:grid-cols-2">
          <Card>
            <h3 className="h-display text-xl text-ink">
              HISA isn&apos;t the only program
            </h3>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
              Veterans with certain permanent and total service-connected
              disabilities may also qualify for the Specially Adapted Housing
              (SAH) or Special Home Adaptation (SHA) grants, which are separate
              programs with their own eligibility rules and much larger limits.
              Current amounts and criteria are published at{" "}
              <a
                href="https://www.va.gov/housing-assistance/disability-housing-grants/"
                className="font-semibold text-brand-700 underline underline-offset-4"
                target="_blank"
                rel="noreferrer"
              >
                va.gov
              </a>
              . Ask your VA representative which one fits your situation before
              you apply.
            </p>
          </Card>
          <Card>
            <h3 className="h-display text-xl text-ink">
              A note on who we are
            </h3>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
              {site.name} is a private contractor. We are not affiliated with,
              endorsed by, or an agent of the U.S. Department of Veterans
              Affairs, and we can&apos;t approve, deny, or speed up a grant.
              What we can do is build the work correctly and give you accurate
              paperwork. Everything on this page is general information. The VA
              is the authority on your eligibility, and program details can
              change.
            </p>
          </Card>
        </div>
      </Section>

      <ClosingCta
        title="Starting a HISA application?"
        body="Send us the bathroom details and we'll get you an itemized estimate you can file. No charge, no obligation, and no pressure to use us if the VA approves something else."
      />
    </>
  );
}
