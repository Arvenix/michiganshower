/**
 * Service-area pages. These exist to rank locally, but the rule here
 * is that every page must contain something a person who lives in
 * that city would recognise as true. Templated filler with the city
 * name swapped in is exactly what the national brands do, and it is
 * why their location pages read as hollow.
 *
 * Do not add a city until there is something real to say about it.
 */

export type City = {
  slug: string;
  name: string;
  region: string;
  /** Towns and neighbourhoods we also cover from here */
  nearby: string[];
  /** One sentence for the page title and meta description */
  summary: string;
  /** The local housing-stock reality */
  housing: { title: string; body: string }[];
  /** What we most often get called for here */
  common: string[];
};

export const cities: City[] = [
  {
    slug: "detroit",
    name: "Detroit",
    region: "Metro Detroit",
    nearby: [
      "Dearborn",
      "Royal Oak",
      "Ferndale",
      "Warren",
      "Livonia",
      "Grosse Pointe",
      "Southfield",
      "Sterling Heights",
    ],
    summary:
      "Walk-in showers, walk-in tubs and accessible bathroom remodels in Detroit and the surrounding suburbs.",
    housing: [
      {
        title: "Brick bungalows and their 5-foot alcoves",
        body: "A huge share of Detroit's housing went up between the 1920s and the 1950s, and the bathrooms follow a pattern: a single upstairs bath, a five-foot alcove, a cast-iron tub, and plaster over lath rather than drywall. The alcove is almost never square, which is why we bring a trimmable wall system to most of these jobs rather than hoping a fixed panel lands.",
      },
      {
        title: "Cast iron, and how it comes out",
        body: "The original tub in one of these houses commonly weighs 250 to 350 pounds and will not fit through the bathroom door intact. We break it in place under a tarp with the surrounding surfaces protected. It is loud for about twenty minutes and it is completely routine.",
      },
      {
        title: "Galvanized supply lines",
        body: "In pre-1960 stock, galvanized steel supply is common and it corrodes from the inside. We look at what is behind the wall before we commit to tying into it, and if the honest answer is that a run needs replacing before anything new goes in, we will tell you that rather than find out the hard way at 4pm on install day.",
      },
      {
        title: "One bathroom, one household",
        body: "Many of these homes have exactly one full bath. Tell us at the consultation and we schedule to keep the outage to the shortest possible window and tell you precisely which days you need a plan.",
      },
    ],
    common: [
      "Tub-to-shower conversions in an existing five-foot alcove",
      "Walk-in tubs for homeowners staying put",
      "Zero-threshold roll-in showers, often on a VA HISA grant",
      "Full second-floor bath remodels in pre-war homes",
    ],
  },

  {
    slug: "grand-rapids",
    name: "Grand Rapids",
    region: "West Michigan",
    nearby: [
      "Wyoming",
      "Kentwood",
      "Grandville",
      "Walker",
      "Holland",
      "Rockford",
      "Caledonia",
      "Hudsonville",
    ],
    summary:
      "Shower and bath installation in Grand Rapids and West Michigan, built for hard water and older housing stock.",
    housing: [
      {
        title: "Hard water is the design constraint here",
        body: "West Michigan water is genuinely hard, and it is hard on bathrooms. Mineral deposits collect in every porous joint, which is why a grout-free wall system matters more here than almost anywhere else in the state: there is no grout line for scale to sit in. We also steer people toward treated or coated glass on enclosures, because untreated glass in this water spots permanently if it is not wiped, and nobody wipes it forever.",
      },
      {
        title: "Heritage Hill and the older neighbourhoods",
        body: "Bathrooms in the city's older housing were frequently carved out of bedrooms or hallways decades after the house was built. Layouts are tight and rarely rectangular, drains are wherever they could be run, and floor levels change across a doorway. These are the jobs where measuring properly is the entire game.",
      },
      {
        title: "Postwar ranches",
        body: "The 1950s and 1960s ranch stock across Kentwood, Wyoming and Grandville tends to have a main-floor bath with a straightforward footprint. These are often the cleanest tub-to-shower conversions we do, and a good candidate for a zero-threshold base because there is no stair to negotiate first.",
      },
    ],
    common: [
      "Grout-free wall systems specified against hard water",
      "Tub-to-shower conversions in postwar ranches",
      "Aging-in-place work for homeowners staying on one level",
      "Whole-bath remodels in older city neighbourhoods",
    ],
  },

  {
    slug: "ann-arbor",
    name: "Ann Arbor",
    region: "Washtenaw County",
    nearby: [
      "Ypsilanti",
      "Saline",
      "Dexter",
      "Chelsea",
      "Pittsfield Township",
      "Canton",
      "Brighton",
    ],
    summary:
      "Bathroom and shower remodeling in Ann Arbor, Ypsilanti and Washtenaw County.",
    housing: [
      {
        title: "Old West Side and Burns Park houses",
        body: "A lot of Ann Arbor's most loved housing is early twentieth century, and the bathrooms in it are small, original, and full of decisions somebody made in 1915. Plaster walls, narrow doorways, and floors that are not level across the room are all normal. None of it is a problem; all of it needs measuring rather than assuming.",
      },
      {
        title: "Owners who plan to stay",
        body: "More of our Ann Arbor work than anywhere else is deliberate aging-in-place: people who intend to stay in a house they have owned for thirty years and want the bathroom sorted before it becomes urgent. That is the right time to do it, and it is a much better project than the version that happens after a fall.",
      },
      {
        title: "Second-floor baths over finished ceilings",
        body: "Relocating a drain on the second floor means opening the ceiling below. It is entirely doable and it changes the scope and the price. We flag it at the consultation rather than at demolition.",
      },
    ],
    common: [
      "Aging-in-place conversions planned in advance",
      "Small second-floor bathrooms in pre-war homes",
      "Whole-bath remodels with a layout change",
      "Barrier-free showers with seating",
    ],
  },

  {
    slug: "lansing",
    name: "Lansing",
    region: "Mid-Michigan",
    nearby: [
      "East Lansing",
      "Okemos",
      "Holt",
      "Grand Ledge",
      "DeWitt",
      "Mason",
      "Charlotte",
    ],
    summary:
      "Walk-in showers, walk-in tubs and accessible bathrooms across Lansing and Mid-Michigan.",
    housing: [
      {
        title: "Postwar ranches, single level",
        body: "A great deal of the Lansing area is 1950s through 1970s single-storey housing, which is the best possible starting point for accessible bathing. There is no staircase between the front door and the bathroom, so making the shower itself barrier-free genuinely makes the house work for someone with limited mobility.",
      },
      {
        title: "Slab-on-grade changes the drain conversation",
        body: "Where a house is built on a slab rather than over a crawl space or basement, moving a drain means cutting concrete. That is a real job, not a small one. We can usually design around it by keeping the drain where it is, and we will tell you which situation you are in before you sign anything.",
      },
      {
        title: "Original 1960s fibreglass units",
        body: "The one-piece fibreglass tub-and-surround units from this era are now well past their service life. They flex underfoot, they craze, and the flex is usually what has been letting water into the subfloor. When one comes out we expect to look closely at the floor underneath it.",
      },
    ],
    common: [
      "Zero-threshold roll-in showers in single-storey homes",
      "Replacing failed one-piece fibreglass units",
      "Walk-in tubs",
      "VA HISA grant projects",
    ],
  },

  {
    slug: "flint",
    name: "Flint",
    region: "Genesee County and the Tri-Cities",
    nearby: [
      "Grand Blanc",
      "Flushing",
      "Burton",
      "Davison",
      "Fenton",
      "Saginaw",
      "Bay City",
      "Midland",
    ],
    summary:
      "Shower and bath installation in Flint, Genesee County and the Tri-Cities.",
    housing: [
      {
        title: "We tell you exactly what we are touching",
        body: "Homeowners here have every reason to ask hard questions about plumbing, and we would rather answer them in detail than wave them off. We will tell you precisely which lines we connect to, what we are leaving alone, and what we find when a wall is open. If the right answer is that you should have a plumber look at a supply line before we install anything into it, that is what we will say.",
      },
      {
        title: "Early-century and postwar stock together",
        body: "Genesee County spans housing from the 1910s through the 1970s, so the bathroom behind the wall could be plaster over lath with galvanized supply, or drywall over a 1960s fibreglass unit. The two need different plans, and which one you have is not always obvious from the doorway.",
      },
      {
        title: "Long-term owners",
        body: "A lot of the work we do here is for people who have been in the same house for decades and intend to stay. That changes what is worth specifying. A surface that lasts twenty years is worth more than a surface that looked cheap to buy, and it is the whole reason we install what we install.",
      },
    ],
    common: [
      "Tub-to-shower conversions",
      "Accessible and barrier-free showers",
      "Walk-in tubs",
      "Full bathroom remodels in long-held family homes",
    ],
  },
];

export function getCity(slug: string) {
  return cities.find((c) => c.slug === slug);
}
