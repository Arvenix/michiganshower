import Link from "next/link";
import type { ReactNode } from "react";

/* ── Layout primitives ───────────────────────────────────────── */

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className = "",
  tone = "white",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "white" | "cream" | "deep" | "brand";
  id?: string;
}) {
  const tones = {
    white: "bg-white",
    cream: "bg-cream-100",
    deep: "bg-brand-950 text-white",
    brand: "bg-brand-600 text-white",
  } as const;

  return (
    <section
      id={id}
      className={`${tones[tone]} py-16 sm:py-24 ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}

/* ── Typography ──────────────────────────────────────────────── */

export function SectionHead({
  eyebrow,
  title,
  intro,
  align = "left",
  invert = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  invert?: boolean;
}) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl"
      }
    >
      {eyebrow && (
        <p className={`eyebrow ${invert ? "text-brand-300" : ""}`}>{eyebrow}</p>
      )}
      <h2
        className={`h-display mt-3 text-3xl sm:text-4xl ${
          invert ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            invert ? "text-brand-100" : "text-ink-soft"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

/* ── Buttons ─────────────────────────────────────────────────── */

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "onDark" | "outlineOnDark";
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-200";

const variants = {
  primary: "bg-brand-600 text-white hover:bg-brand-700",
  secondary:
    "bg-white text-brand-700 ring-1 ring-inset ring-brand-200 hover:bg-brand-50",
  ghost:
    "bg-transparent text-ink ring-1 ring-inset ring-ink/15 hover:bg-ink/5",
  onDark: "bg-white text-brand-800 hover:bg-cream-100",
  outlineOnDark:
    "bg-transparent text-white ring-1 ring-inset ring-white/35 hover:bg-white/10",
} as const;

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${className}`;
  const external = href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("http");

  if (external) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/* ── Cards ───────────────────────────────────────────────────── */

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl bg-white p-7 ring-1 ring-ink/8 transition-shadow duration-200 hover:shadow-[0_2px_24px_-6px_rgba(18,32,43,0.16)] ${className}`}
    >
      {children}
    </div>
  );
}

/* ── Icons (inline SVG, currentColor) ────────────────────────── */

export function Icon({
  name,
  className = "h-6 w-6",
}: {
  name: keyof typeof paths;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

const paths = {
  droplet: <path d="M12 3.2 6.9 9.4a6.6 6.6 0 1 0 10.2 0Z" />,
  ruler: (
    <>
      <path d="M3.6 15.2 15.2 3.6a1.4 1.4 0 0 1 2 0l3.2 3.2a1.4 1.4 0 0 1 0 2L8.8 20.4a1.4 1.4 0 0 1-2 0l-3.2-3.2a1.4 1.4 0 0 1 0-2Z" />
      <path d="M8 7.6 9.8 9.4M11 4.6l1.8 1.8M5 10.6l1.8 1.8" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 4.8 5.9v5.3c0 4.3 3 8.3 7.2 9.8 4.2-1.5 7.2-5.5 7.2-9.8V5.9Z" />
      <path d="m9.2 12 2 2 3.6-3.8" />
    </>
  ),
  accessible: (
    <>
      <circle cx="12" cy="4.6" r="1.7" />
      <path d="M8.2 8.1h7.6M12 8.1v5.1M12 13.2h3.1l1.8 5M12 13.2H9.4l-2 5" />
    </>
  ),
  bath: (
    <>
      <path d="M3 12.4h18M4.4 12.4v3.5a3 3 0 0 0 3 3h9.2a3 3 0 0 0 3-3v-3.5" />
      <path d="M6.6 12.4V6.2a2 2 0 0 1 3.8-.9M7 19v1.6M17 19v1.6" />
    </>
  ),
  sparkle: (
    <path d="M12 3.2 13.7 9l5.8 1.7-5.8 1.7L12 18.2 10.3 12.4 4.5 10.7 10.3 9Z" />
  ),
  mail: (
    <>
      <rect x="2.8" y="5" width="18.4" height="14" rx="2.4" />
      <path d="m3.6 6.4 7.2 5.5a2 2 0 0 0 2.4 0l7.2-5.5" />
    </>
  ),
  phone: (
    <path d="M6.2 3.6h3.2l1.6 4-2 1.3a11.4 11.4 0 0 0 5.1 5.1l1.3-2 4 1.6v3.2a1.6 1.6 0 0 1-1.7 1.6C11.4 19.4 4.6 12.6 4.6 5.3a1.6 1.6 0 0 1 1.6-1.7Z" />
  ),
  pin: (
    <>
      <path d="M12 21c4.4-4.4 6.6-7.7 6.6-10.4a6.6 6.6 0 1 0-13.2 0C5.4 13.3 7.6 16.6 12 21Z" />
      <circle cx="12" cy="10.4" r="2.4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M12 7.2V12l3.2 1.9" />
    </>
  ),
  arrowRight: <path d="M4.5 12h15m-6-6 6 6-6 6" />,
  check: <path d="m4.8 12.6 4.6 4.6 9.8-10.4" />,
  star: (
    <path d="m12 3.6 2.6 5.4 5.9.8-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9-4.3-4.1 5.9-.8Z" />
  ),
  doc: (
    <>
      <path d="M13.6 3.4H7.4a2 2 0 0 0-2 2v13.2a2 2 0 0 0 2 2h9.2a2 2 0 0 0 2-2V8.4Z" />
      <path d="M13.6 3.4v5h5M8.8 13.2h6.4M8.8 16.6h4.4" />
    </>
  ),
  flag: (
    <>
      <path d="M5.6 21V4.2M5.6 4.6h11.8l-2 3.6 2 3.6H5.6" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  chevronLeft: <path d="m14.5 5.5-6.5 6.5 6.5 6.5" />,
  chevronRight: <path d="m9.5 5.5 6.5 6.5-6.5 6.5" />,
} as const;
