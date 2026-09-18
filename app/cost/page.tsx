import type { Metadata } from "next";
import { site } from "@/site.config";
import { Button, Card, Icon, Section, SectionHead } from "@/components/ui";
import { ClosingCta, PageHero } from "@/components/blocks";

export const metadata: Metadata = {
  title: "What a Bathroom Remodel Actually Costs",
  description:
    "An honest explanation of what drives the price of a shower or bathroom remodel in Michigan: scope, subfloor condition, drain relocation, wall material, glass, and accessibility work. No games, no fake discounts.",
  alternates: { canonical: "/cost" },
};

const drivers = [
  {
    icon: "droplet" as const,
    title: "Scope: wet space, dry space, or the whole room",
    body: "Replacing just the shower or tub is the smallest job in this category and by a wide margin the most common. Adding the vanity, flooring, toilet and lighting roughly doubles the work. A full gut with a new layout is a different project entirely. Most of the price difference between two quotes is scope, not markup.",
  },
  {
    icon: "ruler" as const,
    title: "What we find when the old unit comes out",
    body: "This is the single biggest source of surprise on any bathroom job. A soft subfloor from a pan that has been leaking for years, rotted studs behind a tile surround, or galvanized supply lines in a postwar house all add real labor and material. We look for the signs during the consultation and tell you what we suspect, but nobody can price what is behind a wall with certainty until the wall is open.",
  },
  {
    icon: "bath" as const,
    title: "Whether the drain and plumbing move",
    body: "Keeping the drain where it is costs a fraction of moving it. A tub-to-shower conversion that reuses the existing drain location is straightforward. Relocating a drain means opening the floor, and in a slab-on-grade house or over a finished ceiling that is a significant piece of work.",
  },
  {
    icon: "sparkle" as const,
    title: "Wall material and finish",
    body: "An acrylic wall system in a standard pattern sits at one end. Solid-surface panels in a stone colorway with a matte finish sit at the other. Both are grout-free and both will outlast tile in a wet space, but they are not the same price. We will show you the actual samples and the actual difference.",
  },
  {
    icon: "shield" as const,
    title: "Base type, size and threshold",
    body: "A standard-footprint base with a threshold is the baseline. A zero-threshold base for roll-in access, a non-standard size, or a tub-replacement footprint all cost more, and a zero-threshold installation sometimes requires structural work to drop the floor.",
  },
  {
    icon: "check" as const,
    title: "Glass",
    body: "A framed sliding door and a frameless glass panel are separated by several hundred dollars at minimum, and more when the opening is out of square and the glass has to be made to measure. Older Michigan houses are rarely square.",
  },
  {
    icon: "accessible" as const,
    title: "Accessibility work",
    body: "Grab bars are inexpensive. Blocking them into the framing correctly, moving a doorway to 36 inches for a walker, adding a fold-down seat, or running a new anti-scald valve are all real additions. Worth knowing: for veterans, most of this list is exactly what the VA HISA grant exists to pay for.",
  },
  {
    icon: "doc" as const,
    title: "Permits and municipality",
    body: "Requirements vary across Michigan. Straight replacement work in the same footprint often does not require a permit; moving plumbing or altering structure usually does. We tell you which category your job falls into before you sign anything, and we pull the permit when one is needed.",
  },
];

const questions = [
  "Is this quote for the wet space only, or the whole room?",
  "What happens to the price if you find a rotten subfloor? Is that a change order, and at what rate?",
  "Is the drain staying where it is?",
  "What exactly is the wall material, and is it acrylic or solid surface?",
  "Is the glass stock or made to measure?",
  "Who pulls the permit, and is it in the price?",
  "What does the warranty cover, what does it exclude, and who honors it in year ten?",
  "Is this price the same next month?",
];

export default function CostPage() {
  return (
    <>
      <PageHero
        eyebrow="What it costs"
        title="Nobody in this industry will tell you what a bathroom costs. Here is the next best thing."
        intro="We will not put a fake number on a website, because the honest range for a bathroom is wide enough to be useless without seeing the room. What we can do is tell you exactly what moves the price, so you can read any quote, ours included, and know what you are looking at."
      />

      <Section tone="white">
        <SectionHead
          eyebrow="The eight variables"
          title="What actually moves the number."
          intro="In rough order of how much difference each one makes."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {drivers.map((d) => (
            <Card key={d.title}>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Icon name={d.icon} className="h-6 w-6" />
              </span>
              <h2 className="h-display mt-5 text-xl text-ink">{d.title}</h2>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
                {d.body}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* How to read any quote */}
      <Section tone="cream">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHead
              eyebrow="Use this on us too"
              title="Eight questions to ask any bathroom contractor."
              intro="Including us. If a quote is genuinely comparable to another quote, the answers to these will match. Usually they do not, and that is where the price difference actually lives."
            />
          </div>
          <div className="lg:col-span-7">
            <ol className="space-y-3">
              {questions.map((q, i) => (
                <li
                  key={q}
                  className="flex gap-4 rounded-xl bg-white px-5 py-4 text-[0.95rem] text-ink ring-1 ring-ink/8"
                >
                  <span className="h-display shrink-0 text-sm font-bold text-brand-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {q}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {/* On discounts */}
      <Section tone="deep">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHead
              eyebrow="A word on discounts"
              title="If the price drops because you hesitated, it was never the price."
              invert
            />
            <div className="prose-ms mt-6 text-[1.05rem]">
              <p className="text-brand-100">
                You will see percentages off labor, dollar amounts off
                installation, and installation costs waived entirely, each with
                a date on it. Look closely and the date moves. An offer that is
                available on every product, every month, on a rolling expiry,
                is not a discount. It is the price, with a bigger number written
                above it.
              </p>
              <p className="text-brand-100">
                We do not run one. Our quote is the same number today, next
                Tuesday, and thirty days from now. That is less exciting, and it
                is the point.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-white/6 p-8 ring-1 ring-white/12">
              <h2 className="h-display text-xl text-white">
                What you get at no charge
              </h2>
              <ul className="mt-5 space-y-3 text-[0.95rem] text-brand-100">
                {[
                  "An in-home measure and assessment",
                  "Actual material samples to hold",
                  "An itemized written quote",
                  "Thirty days to think about it",
                ].map((x) => (
                  <li key={x} className="flex gap-3">
                    <Icon
                      name="check"
                      className="mt-1 h-4 w-4 shrink-0 text-brand-300"
                    />
                    {x}
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <Button href="/contact" variant="onDark">
                  Get a written quote
                  <Icon name="arrowRight" className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <ClosingCta
        title="Want a real number for your bathroom?"
        body={`It takes one visit. We measure, we look at what is behind the old unit where we can, and you get an itemized quote in writing. Call ${site.phone} or send us the details.`}
      />
    </>
  );
}
