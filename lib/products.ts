/**
 * Product tiers, named and owned by Michigan Shower.
 *
 * All three wall tiers and every base are solid surface: the color and
 * pattern run through the full thickness of the material rather than
 * sitting on the face of it, which is what makes the surface renewable.
 *
 * Imagery under /public/products is supplier product photography used
 * under our dealer relationship. It shows finishes and configurations
 * we install. It is presented as product imagery, never as a claim that
 * a specific bathroom was one of our jobs.
 */

export type Colorway = {
  name: string;
  sub?: string;
  swatch: string;
  swatchAlt?: string;
  room?: string;
  roomW?: number;
  roomH?: number;
};

export type ProductLine = {
  slug: string;
  name: string;
  eyebrow: string;
  tagline: string;
  summary: string;
  intro: string[];
  material: string;
  bestFor: string;
  features: { title: string; body: string }[];
  colorways: Colorway[];
  hero: { src: string; w: number; h: number; alt: string };
  gallery?: { src: string; w: number; h: number; caption: string }[];
};

export const products: ProductLine[] = [
  {
    slug: "classic",
    name: "Classic",
    eyebrow: "Solid surface wall systems",
    tagline: "The character of tile, with none of tile's maintenance.",
    summary:
      "Solid surface walls in a realistic 3 inch by 8 inch subway pattern and four other tile looks. The color runs through the full thickness of the panel, so the surface can be renewed instead of replaced.",
    intro: [
      "Classic is the wall system behind most of the tub-to-shower conversions we install. The tile pattern is formed into a solid surface panel and finished in a high gloss that reads as genuine ceramic from anywhere in the room, with no grout line anywhere in the wet area.",
      "Solid surface means the material is the same all the way through. There is no printed film over a substrate and no decorative layer to wear off, so a scuff can be buffed out rather than patched over. That single property is the reason a solid surface wall still looks correct after a decade of daily use while a laminated panel does not.",
      "Grout is what fails in a tiled shower. It absorbs water, stains, needs resealing every couple of years, and eventually lets moisture reach the framing behind it. Removing grout from the equation removes the maintenance schedule along with it.",
    ],
    material: "Solid surface, color through the full thickness, high gloss finish",
    bestFor:
      "Tub-to-shower conversions and shower replacements in a standard alcove.",
    features: [
      {
        title: "No grout, no sealing schedule",
        body: "Nothing to reseal every two years and nothing in the wet area that turns gray and stays that way.",
      },
      {
        title: "Five tile patterns",
        body: "Subway at 3 by 8, vertical, herringbone, horizontal and hexagon, offered in white and dark gray.",
      },
      {
        title: "A surface you can renew",
        body: "Because the color runs through the panel, everyday scratches buff out. The finish is repairable rather than disposable.",
      },
      {
        title: "One matched system",
        body: "Walls, base, extensions and accessories are engineered together, so tolerances line up instead of being closed with caulk.",
      },
    ],
    colorways: [
      { name: "Subway", sub: "3x8, White", swatch: "/products/classic/sw-subway-white.jpg", room: "/products/classic/room-subway-white.jpg", roomW: 1500, roomH: 1500 },
      { name: "Vertical Tile", sub: "12x24, White", swatch: "/products/classic/sw-vertical-white.jpg", room: "/products/classic/room-vertical-white.jpg", roomW: 1000, roomH: 1000 },
      { name: "Vertical Tile", sub: "12x24, Dark Gray", swatch: "/products/classic/sw-vertical-grey.jpg" },
      { name: "Herringbone", sub: "White", swatch: "/products/classic/sw-herringbone-white.jpg", room: "/products/classic/room-herringbone-white.jpg", roomW: 1000, roomH: 1000 },
      { name: "Herringbone", sub: "Dark Gray", swatch: "/products/classic/sw-herringbone-grey.jpg", room: "/products/classic/room-herringbone-grey.jpg", roomW: 1500, roomH: 1500 },
      { name: "Hexagon", sub: "White", swatch: "/products/classic/sw-hexagon-white.jpg" },
    ],
    hero: {
      src: "/products/classic/room-subway-white.jpg",
      w: 1500,
      h: 1500,
      alt: "Walk-in shower with a white 3 by 8 subway tile pattern in solid surface, behind a chrome sliding door",
    },
  },

  {
    slug: "classic-plus",
    name: "Classic Plus",
    eyebrow: "Trimmable solid surface",
    tagline: "Engineered for rooms that were never square to begin with.",
    summary:
      "The same solid surface construction as Classic, with side walls trimmed to the opening you actually have and a range of stone and marble finishes.",
    intro: [
      "Classic Plus solves a problem that shows up in most Michigan housing stock. In a home built before 1970, the walls of a bathroom alcove are rarely parallel and almost never plumb. A fixed-width panel has to be forced into that opening, shimmed behind, or have the resulting gap filled with caulk and called finished. Within a few years the caulk line is doing work it was never meant to do.",
      "The side walls of a Classic Plus system are cut to the opening on site. The panel meets the wall that is actually there, the seam closes properly, and it still closes properly in year ten.",
      "The finish range widens at this tier as well. Alongside white tile, Classic Plus brings stone and veined marble looks and an optional textured back wall that catches light and gives a narrow enclosure visual depth.",
    ],
    material:
      "Solid surface with field-trimmed side walls, in tile, stone and marble finishes",
    bestFor:
      "Older Michigan homes, out-of-square alcoves, and anyone who wants a stone look without a stone budget.",
    features: [
      {
        title: "Side walls cut to your opening",
        body: "No forcing, no shimming, and no caulk joint standing in for a proper fit.",
      },
      {
        title: "Stone and marble finishes",
        body: "Veined looks that read as natural material across the room, without the weight, the cost or the annual sealing.",
      },
      {
        title: "Textured back wall option",
        body: "A formed wave texture in white, caramel or gray that adds depth to a narrow enclosure.",
      },
      {
        title: "Solid surface throughout",
        body: "Color through the full thickness, non-porous, renewable, and completely grout-free.",
      },
    ],
    colorways: [
      { name: "White Tile", swatch: "/products/classic-plus/sw-white-tile.jpg", room: "/products/classic-plus/room-white-tile.jpg", roomW: 1500, roomH: 1125 },
      { name: "Tundra Gray", swatch: "/products/classic-plus/sw-tundra-grey.jpg", room: "/products/classic-plus/room-tundra-grey.jpg", roomW: 1500, roomH: 1500 },
      { name: "Dolomite", swatch: "/products/classic-plus/sw-dolomite.jpg", room: "/products/classic-plus/room-dolomite.jpg", roomW: 1500, roomH: 1162 },
      { name: "Andes", swatch: "/products/classic-plus/sw-andes.jpg", room: "/products/classic-plus/room-andes.jpg", roomW: 1500, roomH: 1500 },
      { name: "Golden Vein", swatch: "/products/classic-plus/sw-awaken-gold.jpg", room: "/products/classic-plus/room-awaken-gold.jpg", roomW: 1500, roomH: 1500 },
      { name: "Caramel", sub: "Textured", swatch: "/products/classic-plus/sw-caramel-wave.jpg", room: "/products/classic-plus/room-caramel-wave.jpg", roomW: 1500, roomH: 1329 },
      { name: "White", sub: "Textured", swatch: "/products/classic-plus/sw-white-wave.jpg" },
      { name: "Gray", sub: "Textured", swatch: "/products/classic-plus/sw-grey-wave.jpg" },
    ],
    hero: {
      src: "/products/classic-plus/room-awaken-gold.jpg",
      w: 1500,
      h: 1500,
      alt: "Walk-in shower with white and gold veined marble-look solid surface wall panels",
    },
  },

  {
    slug: "signature",
    name: "Signature",
    eyebrow: "Premium solid surface",
    tagline: "A renewable stone surface, in fourteen finishes.",
    summary:
      "Our premium tier. Solid surface with color through the entire thickness, in an easy-care 4 inch by 8 inch subway pattern, offered in seven colors and two finishes each.",
    intro: [
      "Signature is the top of our range and the specification we recommend when the bathroom is the one you use every day. The material is solid surface with color running through the entire thickness, which is what makes it a renewable surface: scratches and dulled areas are buffed out and the panel returns to the finish it left the factory with.",
      "The face is formed in an easy-care 4 inch by 8 inch subway tile pattern, with smooth and square tile faces also available. There is no grout joint anywhere on it, so the pattern you are buying is the pattern you keep.",
      "Each of the seven colors comes in two finishes. Gloss reflects light and makes a small bathroom read larger. The smooth matte velvet finish is quieter, more contemporary, and forgiving of water spots in hard water conditions. Carrara in gloss and Carrara in velvet are two genuinely different rooms, which is why we bring both samples to the consultation.",
    ],
    material:
      "Solid surface, color through the entire thickness, in gloss or smooth matte velvet",
    bestFor:
      "Primary bathrooms, whole-room remodels, and projects where the finish is the point.",
    features: [
      {
        title: "Color through the entire thickness",
        body: "No decorative layer over a substrate. A scratch does not expose a different material underneath, which is what makes the surface renewable.",
      },
      {
        title: "Seven colors, two finishes each",
        body: "White, Carrara, Gray Stone, Moonstone, Creme, Butternut and Butterscotch, in gloss or smooth matte velvet. Fourteen distinct looks.",
      },
      {
        title: "Easy-care 4 by 8 subway pattern",
        body: "Formed into the panel rather than assembled from pieces, so there is no grout joint to seal, stain or scrub.",
      },
      {
        title: "Built for Michigan water",
        body: "A non-porous, grout-free surface gives mineral deposits nothing to sit in. In hard water counties that difference shows up within the first year.",
      },
    ],
    colorways: [
      { name: "White", sub: "Gloss and velvet", swatch: "/products/signature/sw-white.jpg", swatchAlt: "/products/signature/sw-white-velvet.jpg", room: "/products/signature/room-white.jpg", roomW: 1000, roomH: 1000 },
      { name: "Carrara", sub: "Gloss and velvet", swatch: "/products/signature/sw-carrara.jpg", swatchAlt: "/products/signature/sw-carrara-velvet.jpg", room: "/products/signature/room-carrara.jpg", roomW: 1000, roomH: 1000 },
      { name: "Gray Stone", sub: "Gloss and velvet", swatch: "/products/signature/sw-grey-stone.jpg", swatchAlt: "/products/signature/sw-grey-stone-velvet.jpg", room: "/products/signature/room-grey-stone.jpg", roomW: 1000, roomH: 1000 },
      { name: "Moonstone", sub: "Gloss and velvet", swatch: "/products/signature/sw-moonstone.jpg", swatchAlt: "/products/signature/sw-moonstone-velvet.jpg", room: "/products/signature/room-moonstone.jpg", roomW: 1500, roomH: 1500 },
      { name: "Creme", sub: "Gloss and velvet", swatch: "/products/signature/sw-creme.jpg", swatchAlt: "/products/signature/sw-creme-velvet.jpg", room: "/products/signature/room-creme.jpg", roomW: 1000, roomH: 1000 },
      { name: "Butternut", sub: "Gloss and velvet", swatch: "/products/signature/sw-butternut.jpg", swatchAlt: "/products/signature/sw-butternut-velvet.jpg", room: "/products/signature/room-butternut.jpg", roomW: 1000, roomH: 1000 },
      { name: "Butterscotch", sub: "Gloss and velvet", swatch: "/products/signature/sw-butterscotch.jpg", swatchAlt: "/products/signature/sw-butterscotch-velvet.jpg", room: "/products/signature/room-butterscotch.jpg", roomW: 1000, roomH: 1000 },
    ],
    hero: {
      src: "/products/signature/room-carrara-velvet.jpg",
      w: 1500,
      h: 1500,
      alt: "Walk-in shower with Carrara solid surface walls in a smooth matte velvet finish behind a black framed glass enclosure",
    },
  },

  {
    slug: "barrier-free-bases",
    name: "Barrier-Free Bases",
    eyebrow: "Low and zero threshold",
    tagline: "The component that determines whether the shower is usable.",
    summary:
      "Solid surface bases in adjustable, low and zero threshold configurations. The zero-threshold base is what makes a true roll-in shower possible.",
    intro: [
      "On an accessible project the base is the most consequential decision in the room, and it is usually the one that gets the least attention. Walls determine how the bathroom looks. The base determines whether the person it was built for can get into it.",
      "A conventional base carries a curb of four to six inches. For someone using a walker, recovering from a hip replacement, or seated in a wheelchair, that curb is the whole obstacle. A zero-threshold base sits nearly flush with the finished floor and eliminates it.",
      "Our bases are solid surface, pitched to the drain at the factory rather than shaped on site, and set in a full mortar bed so the pan does not flex underfoot. Flex is the most common cause of the rotted subfloor we find when we tear out somebody else's ten-year-old shower.",
    ],
    material:
      "Solid surface, in adjustable, low and zero threshold configurations",
    bestFor:
      "Every accessible and aging-in-place project, and every VA HISA grant job we build.",
    features: [
      {
        title: "Zero threshold for roll-in access",
        body: "Sits nearly flush with the finished floor. This is the configuration the VA names as an eligible HISA improvement and the one a wheelchair or walker actually requires.",
      },
      {
        title: "Adjustable thresholds",
        body: "Lets the base meet an existing floor height without rebuilding the floor, which keeps a manageable project from becoming a structural one.",
      },
      {
        title: "Center or end drain, many footprints",
        body: "60x32 through 72x48, including tub-replacement sizes that drop straight into the space a cast-iron tub came out of.",
      },
      {
        title: "Factory pitched and leak tested",
        body: "Formed to fall to the drain, set in a full mortar bed, and water tested before a single wall panel goes up.",
      },
    ],
    colorways: [],
    gallery: [
      { src: "/products/bases/base-ada-grab-bars.jpg", w: 1496, h: 1500, caption: "Zero-threshold base with grab bars and a slide-bar hand shower. This is the configuration most VA HISA projects are built to." },
      { src: "/products/bases/base-white.jpg", w: 1500, h: 834, caption: "Zero-threshold base in white with a center drain, set flush into the surrounding floor." },
      { src: "/products/bases/base-dark.jpg", w: 1500, h: 768, caption: "A darker base grounds a light marble-look wall and hides everyday wear better than white." },
      { src: "/products/bases/base-marble-room.jpg", w: 1500, h: 768, caption: "Low-profile base paired with a marble-look wall system in a full bathroom." },
    ],
    hero: {
      src: "/products/bases/base-ada-grab-bars.jpg",
      w: 1496,
      h: 1500,
      alt: "Zero-threshold shower base in an accessible configuration with grab bars and a hand shower",
    },
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
