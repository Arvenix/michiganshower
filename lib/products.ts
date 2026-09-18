/**
 * Samuel Mueller product lines that Michigan Shower installs.
 *
 * IMPORTANT: every image under /public/products is MANUFACTURER
 * photography, supplied by Samuel Mueller. It is labelled as such on
 * the page. Photos of our own completed jobs live in lib/photos.ts
 * and appear only in the gallery. Never mix the two.
 */

export type Colorway = {
  name: string;
  /** Pattern, finish or other qualifier shown under the name */
  sub?: string;
  swatch: string;
  /** Second swatch where the color comes in two finishes */
  swatchAlt?: string;
  /** Full room render, where one exists for this colorway */
  room?: string;
  roomW?: number;
  roomH?: number;
};

export type ProductLine = {
  slug: string;
  name: string;
  eyebrow: string;
  tagline: string;
  /** Short line used on the overview page cards */
  summary: string;
  intro: string[];
  material: string;
  bestFor: string;
  features: { title: string; body: string }[];
  colorways: Colorway[];
  /** Hero render for the line */
  hero: { src: string; w: number; h: number; alt: string };
  /** Extra gallery, used where a line is not colorway-driven */
  gallery?: { src: string; w: number; h: number; caption: string }[];
};

export const products: ProductLine[] = [
  /* ────────────────────────────────────────────────────────── */
  {
    slug: "pioneer",
    name: "Pioneer",
    eyebrow: "Acrylic wall systems",
    tagline: "The clean, sensible choice.",
    summary:
      "Glossy acrylic panels in five tile patterns. Grout-free, easy to clean, and the value-right way to replace a failing tub surround.",
    intro: [
      "Pioneer is Samuel Mueller's acrylic wall system, and for a straightforward tub-to-shower conversion it is usually the right answer. The panels carry a moulded tile pattern with a high-gloss finish, so you get the look of subway, hexagon or herringbone tile with no grout line anywhere in the wet space.",
      "That matters more than it sounds. Grout is the part of a tiled shower that fails: it absorbs water, it discolours, it needs sealing, and eventually it lets water behind the wall. A panel system has nothing to seal and nothing to scrub.",
    ],
    material: "Acrylic panel, roughly 1/4 inch, with aluminium trim accents",
    bestFor:
      "Tub-to-shower conversions and shower replacements where the budget matters and the room is a standard footprint.",
    features: [
      {
        title: "No grout, anywhere",
        body: "The tile pattern is moulded into the panel. Nothing to seal, nothing to scrub, nothing to go grey in year three.",
      },
      {
        title: "Five patterns",
        body: "3x8 subway, 12x24 vertical, herringbone, 8x16 horizontal and hexagon, in white and dark grey depending on the pattern.",
      },
      {
        title: "Pairs with Pioneer bases and extensions",
        body: "The line includes matching shower extensions and bases, so the whole enclosure is one system rather than parts from three suppliers.",
      },
      {
        title: "Fast to install correctly",
        body: "Fewer pieces than tile means fewer places to get it wrong, and a wet space that is genuinely finished in one to two days rather than a week.",
      },
    ],
    colorways: [
      {
        name: "Subway",
        sub: "3x8, White",
        swatch: "/products/pioneer/sw-subway-white.jpg",
        room: "/products/pioneer/room-subway-white.jpg",
        roomW: 1500,
        roomH: 1500,
      },
      {
        name: "Vertical Tile",
        sub: "12x24, White",
        swatch: "/products/pioneer/sw-vertical-white.jpg",
        room: "/products/pioneer/room-vertical-white.jpg",
        roomW: 1000,
        roomH: 1000,
      },
      {
        name: "Vertical Tile",
        sub: "12x24, Dark Grey",
        swatch: "/products/pioneer/sw-vertical-grey.jpg",
      },
      {
        name: "Herringbone",
        sub: "White",
        swatch: "/products/pioneer/sw-herringbone-white.jpg",
        room: "/products/pioneer/room-herringbone-white.jpg",
        roomW: 1000,
        roomH: 1000,
      },
      {
        name: "Herringbone",
        sub: "Dark Grey",
        swatch: "/products/pioneer/sw-herringbone-grey.jpg",
        room: "/products/pioneer/room-herringbone-grey.jpg",
        roomW: 1500,
        roomH: 1500,
      },
      {
        name: "Hexagon",
        sub: "White",
        swatch: "/products/pioneer/sw-hexagon-white.jpg",
      },
    ],
    hero: {
      src: "/products/pioneer/room-subway-white.jpg",
      w: 1500,
      h: 1500,
      alt: "Pioneer acrylic shower walls in a white 3x8 subway tile pattern behind a chrome sliding door",
    },
  },

  /* ────────────────────────────────────────────────────────── */
  {
    slug: "pioneer-plus",
    name: "Pioneer Plus",
    eyebrow: "Acrylic wall systems, trimmable",
    tagline: "For rooms that are not square. Which is most of them.",
    summary:
      "Everything Pioneer does, plus trimmable side walls and stone-look colorways. The answer for older Michigan houses where nothing is true.",
    intro: [
      "Pioneer Plus adds two things to the Pioneer line, and one of them solves a problem that comes up on most of the older houses we work in.",
      "The side walls are trimmable in the field. In a house built in 1948 the walls of a bathroom alcove are rarely parallel and almost never plumb, and a fixed-size panel has to be forced, shimmed, or have the gap filled with caulk. A trimmable panel gets cut to the wall that actually exists. That is the difference between a seam that still looks right in year ten and one that does not.",
      "The second addition is the colorways: alongside the white tile pattern, Pioneer Plus brings stone and marble looks, plus a wave-textured back wall option.",
    ],
    material:
      "Acrylic panel with trimmable side walls, marble and stone patterns, optional wave-textured back wall",
    bestFor:
      "Older housing stock, out-of-square alcoves, and anyone who wants a stone look at an acrylic price.",
    features: [
      {
        title: "Trimmable side walls",
        body: "Cut to fit the opening you actually have. No forcing, no shimming, no caulk line doing structural work.",
      },
      {
        title: "Stone and marble patterns",
        body: "Tundra Grey, Dolomite, Andes and Awaken Gold read as natural stone from across the room, without stone's weight, cost or sealing schedule.",
      },
      {
        title: "Wave-textured back wall",
        body: "An optional moulded texture on the back wall that catches light and gives the enclosure depth. Available in white, caramel and grey.",
      },
      {
        title: "Still grout-free",
        body: "Everything true of Pioneer is true here. No grout line in the wet space at all.",
      },
    ],
    colorways: [
      {
        name: "White Tile",
        swatch: "/products/pioneer-plus/sw-white-tile.jpg",
        room: "/products/pioneer-plus/room-white-tile.jpg",
        roomW: 1500,
        roomH: 1125,
      },
      {
        name: "Tundra Grey",
        swatch: "/products/pioneer-plus/sw-tundra-grey.jpg",
        room: "/products/pioneer-plus/room-tundra-grey.jpg",
        roomW: 1500,
        roomH: 1500,
      },
      {
        name: "Dolomite",
        swatch: "/products/pioneer-plus/sw-dolomite.jpg",
        room: "/products/pioneer-plus/room-dolomite.jpg",
        roomW: 1500,
        roomH: 1162,
      },
      {
        name: "Andes",
        swatch: "/products/pioneer-plus/sw-andes.jpg",
        room: "/products/pioneer-plus/room-andes.jpg",
        roomW: 1500,
        roomH: 1500,
      },
      {
        name: "Awaken Gold",
        swatch: "/products/pioneer-plus/sw-awaken-gold.jpg",
        room: "/products/pioneer-plus/room-awaken-gold.jpg",
        roomW: 1500,
        roomH: 1500,
      },
      {
        name: "Caramel",
        sub: "Wave texture",
        swatch: "/products/pioneer-plus/sw-caramel-wave.jpg",
        room: "/products/pioneer-plus/room-caramel-wave.jpg",
        roomW: 1500,
        roomH: 1329,
      },
      {
        name: "White",
        sub: "Wave texture",
        swatch: "/products/pioneer-plus/sw-white-wave.jpg",
      },
      {
        name: "Grey",
        sub: "Wave texture",
        swatch: "/products/pioneer-plus/sw-grey-wave.jpg",
      },
    ],
    hero: {
      src: "/products/pioneer-plus/room-awaken-gold.jpg",
      w: 1500,
      h: 1500,
      alt: "Pioneer Plus shower walls in Awaken Gold, a dramatic white and gold veined marble pattern",
    },
  },

  /* ────────────────────────────────────────────────────────── */
  {
    slug: "monterey",
    name: "Monterey",
    eyebrow: "Solid surface wall systems",
    tagline: "Stone, without the stone.",
    summary:
      "Solid-surface panels in seven colors, each available in gloss or a soft velvet matte. The premium line, and the one people touch and then stop comparing.",
    intro: [
      "Monterey is the top of the wall range. The panels are a solid-surface material rather than an acrylic sheet, which means the color and pattern run through the material instead of sitting on the face of it. It is heavier, denser, and it feels like stone when you put a hand on it, because it behaves like stone.",
      "It comes in seven colors, and each color is offered in two finishes: a gloss, which throws light around a small bathroom and makes it feel larger, and a velvet matte, which is quieter and reads as more contemporary. The same Carrara in gloss and in velvet are genuinely different rooms.",
      "The tile patterns are moulded in at 4x8, so you get a realistic tile face and, again, no grout anywhere.",
    ],
    material:
      "Solid surface, non-porous, with moulded 4x8 tile, subway, square-tile or smooth faces",
    bestFor:
      "Whole-bath remodels, primary bathrooms, and anyone who wants the room to look designed rather than replaced.",
    features: [
      {
        title: "Seven colors, two finishes each",
        body: "White, Grey Stone, Butternut, Carrara, Butterscotch, Creme and Moonstone, each in gloss or velvet matte. Fourteen genuinely different looks.",
      },
      {
        title: "Non-porous the whole way through",
        body: "Solid surface does not have a decorative layer over a substrate. Colour runs through it, so a scuff does not expose a different material underneath.",
      },
      {
        title: "Hard-water friendly",
        body: "A non-porous, grout-free surface gives mineral deposits nothing to sit in. It matters in West Michigan more than most places.",
      },
      {
        title: "Matching bases and extensions",
        body: "Monterey bases are solid surface too, so the base and the walls are the same material and the same colour family.",
      },
    ],
    colorways: [
      {
        name: "White",
        sub: "Gloss and velvet",
        swatch: "/products/monterey/sw-white.jpg",
        swatchAlt: "/products/monterey/sw-white-velvet.jpg",
        room: "/products/monterey/room-white.jpg",
        roomW: 1000,
        roomH: 1000,
      },
      {
        name: "Carrara",
        sub: "Gloss and velvet",
        swatch: "/products/monterey/sw-carrara.jpg",
        swatchAlt: "/products/monterey/sw-carrara-velvet.jpg",
        room: "/products/monterey/room-carrara.jpg",
        roomW: 1000,
        roomH: 1000,
      },
      {
        name: "Grey Stone",
        sub: "Gloss and velvet",
        swatch: "/products/monterey/sw-grey-stone.jpg",
        swatchAlt: "/products/monterey/sw-grey-stone-velvet.jpg",
        room: "/products/monterey/room-grey-stone.jpg",
        roomW: 1000,
        roomH: 1000,
      },
      {
        name: "Moonstone",
        sub: "Gloss and velvet",
        swatch: "/products/monterey/sw-moonstone.jpg",
        swatchAlt: "/products/monterey/sw-moonstone-velvet.jpg",
        room: "/products/monterey/room-moonstone.jpg",
        roomW: 1500,
        roomH: 1500,
      },
      {
        name: "Creme",
        sub: "Gloss and velvet",
        swatch: "/products/monterey/sw-creme.jpg",
        swatchAlt: "/products/monterey/sw-creme-velvet.jpg",
        room: "/products/monterey/room-creme.jpg",
        roomW: 1000,
        roomH: 1000,
      },
      {
        name: "Butternut",
        sub: "Gloss and velvet",
        swatch: "/products/monterey/sw-butternut.jpg",
        swatchAlt: "/products/monterey/sw-butternut-velvet.jpg",
        room: "/products/monterey/room-butternut.jpg",
        roomW: 1000,
        roomH: 1000,
      },
      {
        name: "Butterscotch",
        sub: "Gloss and velvet",
        swatch: "/products/monterey/sw-butterscotch.jpg",
        swatchAlt: "/products/monterey/sw-butterscotch-velvet.jpg",
        room: "/products/monterey/room-butterscotch.jpg",
        roomW: 1000,
        roomH: 1000,
      },
    ],
    hero: {
      src: "/products/monterey/room-carrara-velvet.jpg",
      w: 1500,
      h: 1500,
      alt: "Monterey solid surface shower walls in Carrara with a velvet matte finish and a black framed glass enclosure",
    },
  },

  /* ────────────────────────────────────────────────────────── */
  {
    slug: "trimslate-bases",
    name: "TrimSlate Bases",
    eyebrow: "Solid surface shower bases",
    tagline: "The part that decides whether a shower is accessible.",
    summary:
      "Solid-surface bases in adjustable, single, double and zero threshold. The zero-threshold base is what makes a true roll-in shower possible.",
    intro: [
      "TrimSlate is the base line, not a wall line, and it is the most important product decision in an accessible bathroom. Walls are a look. The base is whether someone can get in.",
      "A conventional shower base has a curb you step over, typically four to six inches. For a person using a walker, recovering from a hip replacement, or in a wheelchair, that curb is the entire problem. A zero-threshold base sits nearly flush with the finished floor and removes it.",
      "TrimSlate bases are solid surface, which means they take a full mortar bed properly, they do not flex underfoot, and they are pitched to the drain at the factory rather than by whoever happened to be on site that day. A base that flexes is a base that will eventually leak, and it is the single most common cause of the rotten subfloor we find under somebody else's ten-year-old shower.",
    ],
    material: "Solid surface, in adjustable single, double and zero threshold",
    bestFor:
      "Any accessible or aging-in-place project, and every VA HISA grant job we build.",
    features: [
      {
        title: "Zero-threshold for roll-in access",
        body: "Sits nearly flush with the finished floor. This is the configuration the VA names as an eligible HISA improvement, and the one a wheelchair or walker actually needs.",
      },
      {
        title: "Adjustable thresholds",
        body: "Single and double adjustable threshold options let the base meet an existing floor height without rebuilding the floor, which keeps a lot of jobs from becoming much larger jobs.",
      },
      {
        title: "Centre or end drain, many footprints",
        body: "60x32, 60x36, 60x42, 60x48 and 72x48, plus tub-replacement footprints that drop straight into the space an old cast-iron tub came out of.",
      },
      {
        title: "Factory-pitched, not site-guessed",
        body: "Solid surface, moulded to fall to the drain. Set in a full mortar bed, leak-tested before the walls go up.",
      },
    ],
    colorways: [],
    gallery: [
      {
        src: "/products/trimslate/base-ada-grab-bars.jpg",
        w: 1496,
        h: 1500,
        caption:
          "Zero-threshold base in an ADA configuration with grab bars and a hand shower. This is the layout most VA HISA projects are built to.",
      },
      {
        src: "/products/trimslate/base-white.jpg",
        w: 1500,
        h: 834,
        caption:
          "Zero-threshold base in white with a centre drain, set flush into the surrounding floor.",
      },
      {
        src: "/products/trimslate/base-dark.jpg",
        w: 1500,
        h: 768,
        caption:
          "A darker base grounds a light marble-look wall and hides everyday wear better than white.",
      },
      {
        src: "/products/trimslate/base-marble-room.jpg",
        w: 1500,
        h: 768,
        caption:
          "A low-profile base paired with a marble-look wall system in a full bathroom.",
      },
    ],
    hero: {
      src: "/products/trimslate/base-ada-grab-bars.jpg",
      w: 1496,
      h: 1500,
      alt: "Zero-threshold TrimSlate shower base in an accessible configuration with grab bars and a hand shower",
    },
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
