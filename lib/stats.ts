/**
 * Every figure here is sourced and checked. Do not add a statistic
 * without a citation, and re-verify these once a year. The whole point
 * of putting numbers on the site is that ours are real while the
 * category is full of round numbers nobody can substantiate.
 */

export type Stat = {
  figure: string;
  label: string;
  detail: string;
  source: string;
  href: string;
};

/** The safety case. Used on the home page and the accessibility sections. */
export const safetyStats: Stat[] = [
  {
    figure: "1 in 4",
    label: "adults over 65 fall each year",
    detail:
      "Roughly 14 million Americans. Falls are the leading cause of both fatal and nonfatal injury in this age group.",
    source: "CDC",
    href: "https://www.cdc.gov/falls/data-research",
  },
  {
    figure: "234,000",
    label: "bathroom injuries treated in ERs each year",
    detail:
      "Among Americans 15 and older. The injury rate climbs steeply with age, reaching nearly nine times the rate of young adults by 85.",
    source: "CDC",
    href: "https://www.cdc.gov/mmwr/preview/mmwrhtml/mm6022a1.htm",
  },
  {
    figure: "81%",
    label: "of bathroom injuries are falls",
    detail:
      "And the highest injury rates of anywhere in the room are in and around the tub or shower.",
    source: "CDC",
    href: "https://www.cdc.gov/mmwr/preview/mmwrhtml/mm6022a1.htm",
  },
  {
    figure: "75%",
    label: "of adults 50+ want to stay in their home",
    detail:
      "Staying put is the plan for three quarters of older homeowners. The bathroom is usually the room that decides whether that plan works.",
    source: "AARP, 2024",
    href: "https://www.aarp.org/press/releases/2024-12-10-new-aarp-report-majority-adults-50-plus-age-place-policies-communities-catch-up.html",
  },
];

/** The money case. Used on the cost page. */
export const valueStats: Stat[] = [
  {
    figure: "~70%",
    label: "of a bathroom update comes back at resale",
    detail:
      "A minor bathroom remodel averaging about $24,600 returns roughly $17,300 in added value. Few rooms in a house do better.",
    source: "Cost vs Value Report, 2026",
    href: "https://homecostlab.com/guides/cost-vs-value-report-2026-roi/",
  },
  {
    figure: "$80B",
    label: "a year in fall-related medical costs",
    detail:
      "The national cost of nonfatal falls among older adults. A single fall with a fracture can cost more than the bathroom that would have prevented it.",
    source: "CDC via NCOA",
    href: "https://www.ncoa.org/article/get-the-facts-on-falls-prevention/",
  },
  {
    figure: "1 to 2 days",
    label: "on site for a wet area replacement",
    detail:
      "A standard tub-to-shower conversion in an existing footprint, not a gut remodel. We tell you which one your project is before you sign.",
    source: "Michigan Shower",
    href: "/cost",
  },
];
