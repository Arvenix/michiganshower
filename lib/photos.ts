export type Category = "Walk-In Showers" | "Barrier-Free" | "Full Bath";

export type Photo = {
  src: string;
  alt: string;
  caption: string;
  category: Category;
  w: number;
  h: number;
};

/**
 * Product imagery. These are manufacturer product photographs of the
 * exact finishes and configurations we install, used under our dealer
 * relationship. They are presented as product and finish references,
 * never as a claim that a specific bathroom was one of our projects.
 */
export const photos: Photo[] = [
  {
    src: "/products/signature/room-hero-suite.jpg",
    alt: "Walk-in shower with light stone-look walls, matte black fixtures and a low-profile base beside a modern vanity",
    caption: "Light stone walls, matte black fixtures, low-profile base.",
    category: "Full Bath",
    w: 1600,
    h: 1600,
  },
  {
    src: "/products/signature/room-carrara-velvet.jpg",
    alt: "Carrara solid surface shower walls in a matte finish behind a black framed glass enclosure",
    caption: "Carrara solid surface in matte, with a black framed enclosure.",
    category: "Walk-In Showers",
    w: 1500,
    h: 1500,
  },
  {
    src: "/products/bases/base-ada-grab-bars.jpg",
    alt: "Zero-threshold shower with grab bars, a fold-down seat position and a slide-bar hand shower",
    caption: "Zero threshold, reinforced grab bars, seated-height hand shower.",
    category: "Barrier-Free",
    w: 1496,
    h: 1500,
  },
  {
    src: "/products/classic-plus/room-awaken-gold.jpg",
    alt: "Walk-in shower with dramatic white and gold veined marble-look walls",
    caption: "Golden Vein marble look, trimmed to an out-of-square alcove.",
    category: "Walk-In Showers",
    w: 1500,
    h: 1500,
  },
  {
    src: "/products/signature/room-grey-stone.jpg",
    alt: "Shower with gray stone solid surface walls and a low-threshold base",
    caption: "Gray Stone solid surface. No grout line anywhere in the wet area.",
    category: "Walk-In Showers",
    w: 1000,
    h: 1000,
  },
  {
    src: "/products/bases/base-white.jpg",
    alt: "Zero-threshold white shower base set flush with the surrounding bathroom floor",
    caption: "A zero-threshold base set flush to the finished floor.",
    category: "Barrier-Free",
    w: 1500,
    h: 834,
  },
  {
    src: "/products/classic-plus/room-tundra-grey.jpg",
    alt: "Walk-in shower with tundra gray stone-look walls and a recessed niche",
    caption: "Tundra Gray, with a full-height recessed niche.",
    category: "Walk-In Showers",
    w: 1500,
    h: 1500,
  },
  {
    src: "/products/signature/room-butterscotch.jpg",
    alt: "Shower with warm butterscotch veined solid surface walls and brass fixtures",
    caption: "Butterscotch solid surface with warm metal trim.",
    category: "Full Bath",
    w: 1000,
    h: 1000,
  },
  {
    src: "/products/classic/room-subway-white.jpg",
    alt: "Tub-to-shower conversion with white subway tile pattern walls and a chrome sliding door",
    caption: "Classic subway pattern. A standard tub-to-shower conversion.",
    category: "Walk-In Showers",
    w: 1500,
    h: 1500,
  },
  {
    src: "/products/bases/base-marble-room.jpg",
    alt: "Low-profile shower base paired with marble-look wall panels in a full bathroom",
    caption: "Low-profile base in a full bathroom remodel.",
    category: "Full Bath",
    w: 1500,
    h: 768,
  },
  {
    src: "/products/classic-plus/room-dolomite.jpg",
    alt: "Walk-in shower with white dolomite marble-look walls beside a window",
    caption: "Dolomite, in a room that gets real daylight.",
    category: "Walk-In Showers",
    w: 1500,
    h: 1162,
  },
  {
    src: "/products/signature/room-moonstone.jpg",
    alt: "Shower with pale moonstone solid surface walls and a freestanding tub alongside",
    caption: "Moonstone solid surface, wet area and dry area together.",
    category: "Full Bath",
    w: 1500,
    h: 1500,
  },
  {
    src: "/products/classic/room-herringbone-grey.jpg",
    alt: "Shower with dark gray herringbone pattern solid surface walls and a glass door",
    caption: "Herringbone in dark gray. Pattern without a single grout joint.",
    category: "Walk-In Showers",
    w: 1500,
    h: 1500,
  },
  {
    src: "/products/bases/base-dark.jpg",
    alt: "Dark low-profile shower base beneath light marble-look wall panels",
    caption: "A darker base hides everyday wear better than white.",
    category: "Barrier-Free",
    w: 1500,
    h: 768,
  },
  {
    src: "/products/classic-plus/room-caramel-wave.jpg",
    alt: "Walk-in shower with a caramel textured back wall and a recessed niche",
    caption: "Textured back wall in caramel, which gives a narrow enclosure depth.",
    category: "Walk-In Showers",
    w: 1500,
    h: 1329,
  },
  {
    src: "/products/signature/room-creme.jpg",
    alt: "Shower with creme solid surface walls next to a pedestal sink",
    caption: "Creme solid surface in a smaller full bath.",
    category: "Full Bath",
    w: 1000,
    h: 1000,
  },
  {
    src: "/products/classic-plus/room-andes.jpg",
    alt: "Walk-in shower with Andes stone-look walls and brushed brass fixtures",
    caption: "Andes stone look with brushed brass trim.",
    category: "Walk-In Showers",
    w: 1500,
    h: 1500,
  },
  {
    src: "/products/classic/room-vertical-white.jpg",
    alt: "Shower with white vertical tile pattern walls and a freestanding tub alongside",
    caption: "Vertical tile pattern, which draws a low ceiling upward.",
    category: "Walk-In Showers",
    w: 1000,
    h: 1000,
  },
];

export const categories: Category[] = [
  "Walk-In Showers",
  "Barrier-Free",
  "Full Bath",
];
