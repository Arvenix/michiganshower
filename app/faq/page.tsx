import type { Metadata } from "next";
import { site } from "@/site.config";
import { Container, Icon, Section, SectionHead } from "@/components/ui";
import { ClosingCta, PageHero } from "@/components/blocks";

export const metadata: Metadata = {
  title: "Questions Homeowners Actually Ask",
  description:
    "Straight answers about bathroom remodeling in Michigan: rotten subfloors, cast-iron tub removal, galvanized pipe, moving drains, permits, warranty exclusions, timelines and who actually does the work.",
  alternates: { canonical: "/faq" },
};

type QA = { q: string; a: string[] };
type Group = { heading: string; items: QA[] };

const groups: Group[] = [
  {
    heading: "The uncomfortable ones",
    items: [
      {
        q: "What happens if you find a rotten subfloor once the old tub is out?",
        a: [
          "We stop, photograph it, and show you before we do anything else. Then you get a written change order with the added cost on it, and the job does not continue until you approve it.",
          "This is common in Michigan houses, particularly where a tile pan or an old fiberglass surround has been weeping at the corner for a decade. Signs we look for during the consultation are a floor that flexes near the tub, discoloured grout at the base, and a soft spot in the subfloor at the threshold. If we see them, we tell you it is likely before you sign, so the number in your head already includes the possibility.",
        ],
      },
      {
        q: "What does your warranty actually exclude?",
        a: [
          "Ask every contractor this, because 'limited lifetime warranty' is doing a great deal of work in that sentence across this industry.",
          "In general terms: manufacturer warranties cover the panels, base and fixtures against defects, and each manufacturer sets its own terms and duration. Our workmanship warranty covers the installation itself. Neither covers damage from something else failing, abuse, or normal wear on moving parts like door rollers and cartridges. We will hand you the specific written terms for the exact products in your quote, not a badge on a website.",
        ],
      },
      {
        q: "Who honors the warranty in ten years?",
        a: [
          "We do, because we will still be here. That is not a throwaway line. Several national bath brands are owned by private equity firms and have changed hands more than once; at least one parent company in this category went through a creditor foreclosure sale in 2025. A lifetime warranty is a promise from a company, and it is worth exactly as much as that company's continued existence.",
          "We are a Michigan business owned by the people doing the work. That is the whole answer.",
        ],
      },
      {
        q: "Do you subcontract the installation?",
        a: [
          "Ask this of anyone you talk to, and ask specifically whether the people arriving at your house are employees of the company whose name is on the quote. In some national programs the brand you research and the crew that shows up are different companies entirely, and it is disclosed only in the footnotes.",
        ],
      },
      {
        q: "Will you pressure me to sign the same day?",
        a: [
          "No. The quote is written, it is good for thirty days, and there is no discount that vanishes if you sleep on it. We have written this out in full on our promise page.",
        ],
      },
    ],
  },
  {
    heading: "Michigan houses specifically",
    items: [
      {
        q: "How do you get a cast-iron tub out of a 1950s bungalow?",
        a: [
          "Carefully, and usually in pieces. A standard five-foot cast-iron tub runs 250 to 350 pounds and will not come through a bathroom door in one piece without taking the door frame with it. We break it in place under a heavy tarp with the drain disconnected and the surrounding surfaces protected, then carry it out in sections.",
          "It is loud for roughly twenty minutes and it is the single messiest part of the job. It is also completely routine. Postwar Detroit, Ferndale, Royal Oak and Grand Rapids housing stock is full of them.",
        ],
      },
      {
        q: "My supply lines are galvanized steel. Is that a problem?",
        a: [
          "It is worth knowing about before we start. Galvanized pipe corrodes from the inside, and in houses built before roughly 1960 it is often down to a fraction of its original bore. Disturbing a long-corroded joint to connect a new valve can start a leak that was not there that morning.",
          "When we open a wall and find galvanized, we will tell you what we are seeing and what it would cost to replace that run back to a sound connection. Sometimes the answer is that it is fine and we tie in cleanly. Sometimes the honest answer is that you should have a plumber repipe the bathroom before we install anything into it.",
        ],
      },
      {
        q: "We have hard water. Will that wreck a new shower?",
        a: [
          "West Michigan in particular has genuinely hard water, and it is hard on fixtures and glass. Two things help more than anything else: a grout-free wall surface, because there is no porous joint for mineral deposits to sit in, and treated or coated glass on the enclosure. Both are choices we make at quote time, not afterwards.",
        ],
      },
      {
        q: "Nothing in my house is square. Does that matter?",
        a: [
          "It matters a great deal, and it is the norm rather than the exception in older Michigan homes. Out-of-square openings are why panel seams get filled with caulk on a rushed job, and why a glass door that fit on day one drags a year later.",
          "We measure for it. Some wall systems have trimmable side panels specifically for rooms that are not true, and glass can be made to measure rather than forced from stock. It costs a little more and it is the difference between a shower that looks right in year ten and one that does not.",
        ],
      },
      {
        q: "Do I need a permit?",
        a: [
          "It depends on the municipality and on the work. Replacing a tub or shower in the same footprint, with the plumbing staying where it is, frequently does not require one. Moving a drain, altering framing, or changing electrical usually does.",
          "We tell you which category your job falls into before you sign, and where a permit is required we pull it. If a contractor tells you no permit is needed for work that moves plumbing, get that in writing.",
        ],
      },
    ],
  },
  {
    heading: "Scope and timeline",
    items: [
      {
        q: "Can you really do it in one day?",
        a: [
          "A straightforward wet-space replacement, where the footprint stays the same and nothing behind the wall is a surprise, is typically one to two days on site. That is the genuine version of the claim you see advertised everywhere.",
          "What it is not: a whole-bathroom remodel. If someone tells you a full bath with new flooring, vanity, toilet and lighting happens in a day, they are describing a wet-space replacement and letting you hear something larger.",
        ],
      },
      {
        q: "Do I have to redo the whole bathroom?",
        a: [
          "No, and often you should not. If your vanity, flooring and toilet are in good condition, replacing only the shower or tub is the sensible job. We call that the wet space. It is less disruption, less cost, and it fixes the part that is actually failing.",
        ],
      },
      {
        q: "Will I be without a bathroom?",
        a: [
          "For the days we are on site, that bathroom is out of service. If it is your only one, tell us at the consultation and we will schedule to keep the outage as short as possible and let you know exactly which days you need a plan.",
        ],
      },
      {
        q: "Can you move a wall or relocate the toilet?",
        a: [
          "Yes, as part of a whole-bath project. It changes the job from a replacement into a remodel, brings plumbing and often electrical into scope, and usually requires a permit. It is worth doing when the existing layout is the actual problem.",
        ],
      },
    ],
  },
  {
    heading: "Accessibility and veterans",
    items: [
      {
        q: "Will an accessible bathroom look like a hospital?",
        a: [
          "Not unless you want it to. Modern assist bars come in the same finishes as the rest of your fixtures and read as towel bars until you need them. A zero-threshold base looks like a design choice. Seated-height hand showers on a slide bar are standard in high-end bathrooms that have nothing to do with mobility.",
          "The unattractive version of accessible bathing is the one that gets retrofitted in a hurry after a fall. Building it in deliberately is what keeps it looking intentional.",
        ],
      },
      {
        q: "Will the VA pay for this?",
        a: [
          "Possibly. The HISA grant covers medically necessary home modifications, with a lifetime maximum of $6,800 or $2,000 depending on your service connection, and roll-in showers are named by the VA as an eligible improvement. It requires a prescription from a VA physician and an itemized estimate from your contractor.",
          "We have a full, ungated explanation of the program and what the application needs. Critically: do not start work before the VA approves it, because the VA will not reimburse modifications begun before approval.",
        ],
      },
      {
        q: "Do grab bars really need blocking?",
        a: [
          "Yes. A grab bar is rated to take the full weight of an adult mid-fall, and a drywall anchor is not. Bars go into solid blocking fastened to the studs, which means deciding where they go before the walls close up. This is the most common corner cut in this trade and the one with the worst consequences.",
        ],
      },
    ],
  },
];

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: groups.flatMap((g) =>
      g.items.map((i) => ({
        "@type": "Question",
        name: i.q,
        acceptedAnswer: { "@type": "Answer", text: i.a.join(" ") },
      })),
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHero
        eyebrow="FAQ"
        title="The questions homeowners actually ask."
        intro="Including the ones most bathroom companies would rather answer in your living room than in writing."
      />

      {groups.map((g, gi) => (
        <Section key={g.heading} tone={gi % 2 === 0 ? "white" : "cream"}>
          <h2 className="h-display text-2xl text-ink sm:text-3xl">
            {g.heading}
          </h2>
          <dl className="mt-8 space-y-4">
            {g.items.map((item) => (
              <div
                key={item.q}
                className={`rounded-2xl p-7 ring-1 ring-ink/8 ${
                  gi % 2 === 0 ? "bg-cream-100" : "bg-white"
                }`}
              >
                <dt className="h-display flex gap-3 text-lg text-ink">
                  <Icon
                    name="check"
                    className="mt-1.5 h-4 w-4 shrink-0 text-brand-500"
                  />
                  {item.q}
                </dt>
                <dd className="mt-4 space-y-3 pl-7">
                  {item.a.map((para) => (
                    <p
                      key={para.slice(0, 40)}
                      className="text-[0.95rem] leading-relaxed text-ink-soft"
                    >
                      {para}
                    </p>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </Section>
      ))}

      <section className="bg-brand-950 py-14">
        <Container>
          <div className="flex flex-col items-center gap-4 text-center">
            <SectionHead
              title="Question not answered here?"
              intro={`Email ${site.email} or call ${site.phone}. We would rather answer it now than have you find out during demolition.`}
              align="center"
              invert
            />
          </div>
        </Container>
      </section>

      <ClosingCta />
    </>
  );
}
