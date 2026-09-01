/**
 * ─────────────────────────────────────────────────────────────
 *  MICHIGAN SHOWER, LLC — SITE CONFIGURATION
 * ─────────────────────────────────────────────────────────────
 *  This is the ONLY file you need to edit for day-to-day changes.
 *  Everything marked TODO is a placeholder — replace it before
 *  you go live. Search the file for "TODO" to find them all.
 */

export const site = {
  name: "Michigan Shower, LLC",
  shortName: "Michigan Shower",
  url: "https://michiganshower.com",
  tagline: "Professional Shower and Bath Installers",

  description:
    "Michigan Shower, LLC designs and installs walk-in showers, walk-in tubs, barrier-free bathing and full bath remodels across Michigan. Quality, precision, and built to last — with your vision.",

  // ── Contact ────────────────────────────────────────────────
  email: "info@michiganshower.com",

  // TODO: replace with your real business number.
  // Format the display version how you want it read aloud;
  // `phoneHref` must be digits only with a leading +1.
  phone: "(555) 555-5555",
  phoneHref: "+15555555555",

  // Set to false to hide every phone number on the site until
  // you have a real one to publish.
  showPhone: false,

  // ── Service area ───────────────────────────────────────────
  serviceArea: "Michigan",
  serviceAreaLong: "the entire state of Michigan",
  regions: [
    "Metro Detroit",
    "Ann Arbor & Washtenaw",
    "Lansing & Mid-Michigan",
    "Flint & the Tri-Cities",
    "Grand Rapids & West Michigan",
    "Traverse City & Northern Michigan",
  ],

  // TODO: If you have a storefront or shop address you want indexed,
  // fill this in. Leave `street` empty for a service-area business
  // (recommended if you work out of your home or a yard).
  address: {
    street: "",
    city: "",
    state: "MI",
    zip: "",
  },

  hours: "Monday – Friday, 8:00 AM – 5:00 PM",

  // ── Trust badges shown under the homepage hero ─────────────
  // Only claim what you can back up. Edit or delete freely.
  badges: [
    "Michigan owned & operated",
    "Walk-in & barrier-free specialists",
    "VA HISA grant projects welcome",
    "Free in-home consultation",
  ],

  // ── Contact form ───────────────────────────────────────────
  // Free key from https://web3forms.com — enter info@michiganshower.com,
  // they email you an access key, paste it here. No account needed.
  // Until this is filled in, the form falls back to opening the
  // visitor's email client instead of silently failing.
  web3formsKey: "", // TODO: paste your Web3Forms access key

  // ── Social (leave blank to hide the icon) ──────────────────
  social: {
    facebook: "", // TODO e.g. "https://facebook.com/michiganshower"
    instagram: "",
    google: "", // Google Business Profile link
  },

  // ── Legal ──────────────────────────────────────────────────
  // TODO: add your Michigan builder/maintenance & alteration
  // contractor license number if you want it displayed.
  licenseNumber: "",

  foundedYear: "", // TODO e.g. "2014" — used in About copy if set
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/hisa-grants", label: "HISA Grants" },
  { href: "/contact", label: "Contact" },
] as const;
