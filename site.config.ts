/**
 * ─────────────────────────────────────────────────────────────
 *  MICHIGAN SHOWER, LLC SITE CONFIGURATION
 * ─────────────────────────────────────────────────────────────
 *  This is the ONLY file you need to edit for day-to-day changes.
 *  Everything marked TODO is a placeholder. Replace it before
 *  you go live. Search the file for "TODO" to find them all.
 */

export const site = {
  name: "Michigan Shower, LLC",
  shortName: "Michigan Shower",
  url: "https://michiganshower.com",
  tagline: "Walk-In Showers & Accessible Bathrooms",

  description:
    "Michigan Shower, LLC designs and installs walk-in showers, walk-in tubs and barrier-free bathrooms across Michigan. Grout-free surfaces, zero-threshold access, installed in as little as one to two days.",

  // ── Contact ────────────────────────────────────────────────
  email: "info@michiganshower.com",

  phone: "(833) 637-8466",
  phoneHref: "+18336378466",

  // Set to false to hide every phone number on the site.
  showPhone: true,

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

  hours: "Monday to Friday, 8:00 AM to 5:00 PM",

  // ── Trust badges shown under the homepage hero ─────────────
  // Only claim what you can back up. Edit or delete freely.
  badges: [
    "Michigan owned and operated",
    "Lifetime workmanship warranty",
    "VA HISA grant projects",
    "Free in-home design consultation",
  ],

  // ── Booking and offer ──────────────────────────────────────
  // Keep this TRUE. It replaces the fake countdown timers the
  // national chains run. Update it when your schedule changes.
  bookingLeadTime: "about three weeks",

  // Shown in the top bar. Not a discount, by design.
  topBarMessage: "Free in-home design consultation. Written quote, good for 30 days.",

  // ── Contact form ───────────────────────────────────────────
  // Free key from https://web3forms.com. Enter info@michiganshower.com,
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

  foundedYear: "", // TODO e.g. "2014", used in About copy if set
};

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/cost", label: "Costs" },
  { href: "/hisa-grants", label: "HISA Grants" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

/** Secondary links: footer and sitemap only, not the header. */
export const secondaryNav = [
  { href: "/promise", label: "Our Promise" },
  { href: "/faq", label: "FAQ" },
] as const;
