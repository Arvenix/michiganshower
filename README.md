# Michigan Shower, LLC — michiganshower.com

Marketing site for Michigan Shower, LLC. Next.js 16 (App Router) + Tailwind CSS v4 + TypeScript. Every page is statically prerendered, so it's fast and cheap to host.

---

## Before you go live — the short list

Everything you need to change lives in **one file: `site.config.ts`**. Open it and search for `TODO`.

| What | Where | Why it matters |
|---|---|---|
| **Phone number** | `site.config.ts` → `phone`, `phoneHref` | Currently a placeholder and **hidden**. Set `showPhone: true` once the real number is in. |
| **Contact form key** | `site.config.ts` → `web3formsKey` | Without it the form falls back to opening the visitor's email app. See below. |
| **Business address** | `site.config.ts` → `address` | Only fill in if you have a storefront you want on the map. Leave blank for a service-area business. |
| **License number** | `site.config.ts` → `licenseNumber` | Shows in the footer when set. Left blank on purpose — add your real one. |
| **Trust badges** | `site.config.ts` → `badges` | Four claims under the hero. Only keep what you can back up. |
| **Social links** | `site.config.ts` → `social` | Blank ones are simply hidden. |
| **Hours** | `site.config.ts` → `hours` | Shown in the footer and on Contact. |

### Turning on the contact form (5 minutes, free)

1. Go to [web3forms.com](https://web3forms.com).
2. Enter `info@michiganshower.com`. They email you an **access key**. No account, no password.
3. Paste that key into `web3formsKey` in `site.config.ts`.
4. Commit and push. Submissions now arrive in your inbox.

Until then the form still works — it just opens the visitor's email client pre-filled instead of sending directly.

---

## Putting it on GitHub

From inside this folder:

```bash
git init                      # already done if you received this as a repo
git add -A
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/michiganshower.git
git push -u origin main
```

## Deploying to Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and import the GitHub repo.
2. Vercel auto-detects Next.js. **Accept every default** — no build settings to change, no environment variables needed.
3. Click **Deploy**.

### Pointing michiganshower.com at it

In the Vercel project → **Settings → Domains** → add `michiganshower.com` and `www.michiganshower.com`. Vercel shows you the exact DNS records. At your domain registrar:

- `A` record for `@` → the IP Vercel gives you
- `CNAME` record for `www` → `cname.vercel-dns.com`

DNS usually propagates within an hour. HTTPS is issued automatically.

**After the domain is live**, confirm `site.url` in `site.config.ts` is `https://michiganshower.com` — it's what the sitemap, canonical tags, and social preview cards are built from.

Every push to `main` redeploys automatically. Pull requests get their own preview URL.

---

## Adding photos of new jobs

1. Drop the image in `public/photos/`. Aim for roughly 1800px on the long edge, JPEG, quality ~82.
2. Add an entry to the `photos` array in `lib/photos.ts`:

```ts
{
  src: "/photos/your-new-file.jpg",
  alt: "Plain description of what's in the photo — this is what screen readers announce",
  caption: "The sentence shown under the photo in the gallery.",
  category: "Showers",        // "Showers" | "Walk-In Tubs" | "Accessibility"
  w: 1350,                    // actual pixel width
  h: 1800,                    // actual pixel height
}
```

`w` and `h` must match the real file. They reserve the right amount of space while the image loads so the page doesn't jump.

To resize a batch on a Mac: `sips -Z 1800 *.jpg`.

---

## Editing the words

Page copy lives directly in the page files — plain JSX, safe to edit:

| Page | File |
|---|---|
| Home | `app/page.tsx` |
| About | `app/about/page.tsx` |
| Services | `app/services/page.tsx` |
| Gallery | `app/gallery/page.tsx` |
| HISA Grants | `app/hisa-grants/page.tsx` |
| Contact | `app/contact/page.tsx` |
| 404 page | `app/not-found.tsx` |

Shared blocks — the three pillars, the wet/dry/whole-bath cards, the HISA banner, the closing call-to-action — live in `components/blocks.tsx` so they only have to be edited once.

Apostrophes in JSX must be written as `&apos;` (e.g. `doesn&apos;t`). That's the one gotcha.

---

## Running it locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build — run this before pushing if you changed code
```

---

## A note on the HISA page

The figures on `/hisa-grants` ($6,800 / $2,000 lifetime maximums, VA Form 10-0103, the required documents) come from the VA's own [HISA page](https://www.prosthetics.va.gov/psas/HISA2.asp). **Program details change.** Re-check that page once a year and update `app/hisa-grants/page.tsx` if the numbers move.

The page states plainly that Michigan Shower is not affiliated with the VA, and the same disclaimer sits in the site footer. Keep both — claiming or implying a VA affiliation you don't have is a real problem, and the disclaimer costs you nothing.

---

## What's in here

```
app/                  pages, metadata, sitemap, robots, favicons
components/
  ui.tsx              buttons, cards, sections, icons — the design system
  blocks.tsx          reusable page sections
  Header.tsx          sticky nav + mobile menu
  Footer.tsx
  Gallery.tsx         filterable grid + lightbox
  ContactForm.tsx     form with honeypot spam trap
lib/photos.ts         the photo list
public/photos/        job photography
public/brand/         logo marks, social preview image
site.config.ts        ← everything you'll actually want to change
```

**SEO already handled:** per-page titles and descriptions, canonical URLs, Open Graph and Twitter cards using your logo, `sitemap.xml`, `robots.txt`, and `HomeAndConstructionBusiness` structured data so Google can read your service area and specialties.

**Accessibility already handled:** skip-to-content link, visible focus rings, real alt text on every photo, labelled form fields, keyboard-operable lightbox (arrows and Escape), and reduced-motion support. That matters more than usual for a company selling accessible bathrooms.
