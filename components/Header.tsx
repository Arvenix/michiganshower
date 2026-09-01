"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { nav, site } from "@/site.config";
import { Container, Icon } from "./ui";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-shadow duration-200 ${
        scrolled
          ? "border-ink/10 bg-white/95 shadow-[0_1px_20px_-8px_rgba(18,32,43,0.35)] backdrop-blur"
          : "border-transparent bg-white"
      }`}
    >
      <Container>
        <div className="flex h-20 items-center justify-between gap-6">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-3"
            aria-label={`${site.name} home page`}
          >
            <Image
              src="/brand/mark-blue.png"
              alt=""
              width={577}
              height={562}
              priority
              sizes="48px"
              className="h-11 w-auto"
            />
            <span className="flex flex-col leading-none">
              <span className="text-[1.02rem] font-bold tracking-tight text-brand-700 sm:text-[1.15rem]">
                MICHIGAN SHOWER
              </span>
              <span className="mt-1 text-[0.6rem] font-semibold tracking-[0.18em] text-ink-soft">
                SHOWER &amp; BATH INSTALLERS
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Primary"
          >
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "bg-brand-50 text-brand-700"
                      : "text-ink-soft hover:text-brand-700"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            {site.showPhone && (
              <a
                href={`tel:${site.phoneHref}`}
                className="hidden items-center gap-2 text-sm font-semibold text-brand-700 md:inline-flex"
              >
                <Icon name="phone" className="h-4 w-4" />
                {site.phone}
              </a>
            )}
            <Link
              href="/contact"
              className="hidden rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 sm:inline-flex"
            >
              Free Consultation
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink ring-1 ring-inset ring-ink/12 lg:hidden"
            >
              <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-ink/10 bg-white lg:hidden"
        >
          <Container className="py-4">
            <nav className="flex flex-col" aria-label="Mobile">
              {nav.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`border-b border-ink/8 py-4 text-base font-medium ${
                      active ? "text-brand-700" : "text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-5 flex flex-col gap-3">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="rounded-full bg-brand-600 px-5 py-3.5 text-center text-sm font-semibold text-white"
              >
                Request a Free Consultation
              </Link>
              <a
                href={`mailto:${site.email}`}
                className="rounded-full px-5 py-3.5 text-center text-sm font-semibold text-brand-700 ring-1 ring-inset ring-brand-200"
              >
                {site.email}
              </a>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
