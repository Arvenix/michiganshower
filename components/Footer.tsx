import Link from "next/link";
import Image from "next/image";
import { nav, site } from "@/site.config";
import { Container, Icon } from "./ui";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-950 text-brand-100">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Image
              src="/brand/mark-white.png"
              alt=""
              width={577}
              height={562}
              sizes="64px"
              className="h-14 w-auto"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-brand-200">
              {site.name} designs and installs walk-in showers, walk-in tubs and
              full bath remodels across {site.serviceAreaLong}. Quality,
              precision, and built to last — with your vision.
            </p>

            {site.licenseNumber && (
              <p className="mt-4 text-xs text-brand-300">
                Michigan License #{site.licenseNumber}
              </p>
            )}
          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-brand-300">
              Explore
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-brand-100 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-brand-300">
              Get in touch
            </h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-start gap-3 text-brand-100 transition-colors hover:text-white"
                >
                  <Icon name="mail" className="mt-0.5 h-4.5 w-4.5 shrink-0" />
                  {site.email}
                </a>
              </li>
              {site.showPhone && (
                <li>
                  <a
                    href={`tel:${site.phoneHref}`}
                    className="flex items-start gap-3 text-brand-100 transition-colors hover:text-white"
                  >
                    <Icon name="phone" className="mt-0.5 h-4.5 w-4.5 shrink-0" />
                    {site.phone}
                  </a>
                </li>
              )}
              <li className="flex items-start gap-3 text-brand-200">
                <Icon name="pin" className="mt-0.5 h-4.5 w-4.5 shrink-0" />
                Serving all of {site.serviceArea}
              </li>
              <li className="flex items-start gap-3 text-brand-200">
                <Icon name="clock" className="mt-0.5 h-4.5 w-4.5 shrink-0" />
                {site.hours}
              </li>
            </ul>

            <Link
              href="/contact"
              className="mt-7 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-800 transition-colors hover:bg-cream-100"
            >
              Request a Free Consultation
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/12 pt-7 text-xs text-brand-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="max-w-xl sm:text-right">
            Not affiliated with, endorsed by, or an agent of the U.S. Department
            of Veterans Affairs.
          </p>
        </div>
      </Container>
    </footer>
  );
}
