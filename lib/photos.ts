export type Category = "Showers" | "Walk-In Tubs" | "Accessibility";

export type Photo = {
  src: string;
  alt: string;
  caption: string;
  category: Category;
  w: number;
  h: number;
};

/**
 * Past-project photography. To add a job: drop the image in
 * /public/photos and add an entry here. Keep `w`/`h` accurate —
 * they prevent layout shift while the image loads.
 */
export const photos: Photo[] = [
  {
    src: "/photos/barrier-free-shower-panels.jpg",
    alt: "Barrier-free shower with light stone-look wall panels, a slide-bar hand shower and stainless grab bars",
    caption:
      "Barrier-free shower with grouted-look wall panels, a slide-bar hand shower and reinforced grab bars.",
    category: "Showers",
    w: 1350,
    h: 1800,
  },
  {
    src: "/photos/shower-shelf-tower.jpg",
    alt: "Shower with a full-height recessed shelf tower between vertical stone-look panels",
    caption:
      "Full-height recessed shelf tower centered between vertical stone-look panels — storage without a single grout line.",
    category: "Showers",
    w: 1350,
    h: 1800,
  },
  {
    src: "/photos/roll-in-shower-low-threshold.jpg",
    alt: "Roll-in shower base set nearly flush with the bathroom floor beside a toilet",
    caption:
      "Roll-in base set nearly flush with the finished floor, giving a walker or wheelchair a clean path in.",
    category: "Accessibility",
    w: 1800,
    h: 1350,
  },
  {
    src: "/photos/walk-in-tub-grab-bars.jpg",
    alt: "White walk-in tub with a low step-in door and two chrome grab bars",
    caption:
      "Walk-in tub with a low step-in threshold and dual grab bars placed for a real transfer, not for looks.",
    category: "Walk-In Tubs",
    w: 1350,
    h: 1800,
  },
  {
    src: "/photos/tub-to-shower-conversion.jpg",
    alt: "Tub-to-shower conversion with built-in corner shelving and a vertical grab bar",
    caption:
      "Tub-to-shower conversion with molded corner shelving and a vertical entry bar, trimmed into existing oak.",
    category: "Showers",
    w: 1350,
    h: 1800,
  },
  {
    src: "/photos/walk-in-tub-subway-tile.jpg",
    alt: "Walk-in tub in a subway tile bathroom with hand shower and several grab bars",
    caption:
      "Walk-in tub set into a subway-tile alcove with a hand shower and a full run of assist bars.",
    category: "Walk-In Tubs",
    w: 1800,
    h: 1350,
  },
  {
    src: "/photos/glass-enclosure-shower.jpg",
    alt: "Sliding glass shower enclosure over a low-threshold base with a horizontal grab bar",
    caption:
      "Sliding glass enclosure over a low-threshold base — open, bright, and easy to step into.",
    category: "Showers",
    w: 1350,
    h: 1800,
  },
  {
    src: "/photos/neo-angle-shower-base.jpg",
    alt: "Neo-angle shower base with a center drain and marble-look wall panels",
    caption:
      "Neo-angle base with a center drain, pitched and set true so water goes where it should.",
    category: "Showers",
    w: 1800,
    h: 1013,
  },
  {
    src: "/photos/walk-in-tub-window.jpg",
    alt: "Walk-in soaking tub under a window with a deck-mount faucet and chrome assist bar",
    caption:
      "Walk-in soaking tub under an existing window, with a deck-mount fill and an angled assist bar.",
    category: "Walk-In Tubs",
    w: 1032,
    h: 774,
  },
  {
    src: "/photos/hand-shower-slide-bar.jpg",
    alt: "Adjustable slide-bar hand shower next to an angled transfer grab bar",
    caption:
      "Adjustable slide-bar hand shower beside an angled transfer bar — usable seated or standing.",
    category: "Accessibility",
    w: 1350,
    h: 1800,
  },
  {
    src: "/photos/alcove-shower-framed-glass.jpg",
    alt: "Alcove shower with framed glass doors, corner storage shelves and a curved assist bar",
    caption:
      "Alcove shower with framed glass doors, molded corner storage and a curved assist bar.",
    category: "Showers",
    w: 1350,
    h: 1800,
  },
  {
    src: "/photos/walk-in-tub-tiled-surround.jpg",
    alt: "Walk-in tub next to a tiled half-wall with large format floor tile",
    caption:
      "Walk-in tub paired with a tiled half-wall and large-format floor tile for an open, uncluttered room.",
    category: "Walk-In Tubs",
    w: 774,
    h: 1032,
  },
];

export const categories: Category[] = ["Showers", "Walk-In Tubs", "Accessibility"];
