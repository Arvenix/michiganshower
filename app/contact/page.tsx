import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/site.config";
import { Icon, Section } from "@/components/ui";
import ContactForm from "@/components/ContactForm";
import { PageHero } from "@/components/blocks";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Request a free consultation from ${site.name}. Email ${site.email} or send us the details of your bathroom project. Serving ${site.serviceAreaLong}.`,
  alternates: { canonical: "/contact" },
};

const expect = [
  "We reply within one business day.",
  "We'll ask a few questions before quoting anything: square footage, what's there now, any mobility needs.",
  "The in-home consultation is free, and it stays a consultation. No same-day pricing games.",
  "If we're not the right fit for your job, we'll say so.",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your bathroom."
        intro={`Tell us what you're working with and what you'd like it to be. We serve ${site.serviceAreaLong} and we answer every message.`}
      />

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-7">
            <h2 className="h-display text-2xl text-ink">
              Request a free consultation
            </h2>
            <p className="mt-3 text-ink-soft">
              Fields marked <span className="text-brand-600">*</span> are
              required.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-cream-100 p-8 ring-1 ring-ink/8">
              <h2 className="h-display text-xl text-ink">Reach us directly</h2>
              <ul className="mt-6 space-y-5 text-[0.95rem]">
                <li className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-brand-600">
                    <Icon name="mail" className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.12em] text-ink-soft">
                      Email
                    </span>
                    <a
                      href={`mailto:${site.email}`}
                      className="mt-1 block font-semibold text-brand-700 underline underline-offset-4"
                    >
                      {site.email}
                    </a>
                  </span>
                </li>

                {site.showPhone && (
                  <li className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-brand-600">
                      <Icon name="phone" className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs font-bold uppercase tracking-[0.12em] text-ink-soft">
                        Phone
                      </span>
                      <a
                        href={`tel:${site.phoneHref}`}
                        className="mt-1 block font-semibold text-brand-700 underline underline-offset-4"
                      >
                        {site.phone}
                      </a>
                    </span>
                  </li>
                )}

                <li className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-brand-600">
                    <Icon name="pin" className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.12em] text-ink-soft">
                      Service area
                    </span>
                    <span className="mt-1 block text-ink">
                      All of {site.serviceArea}
                    </span>
                  </span>
                </li>

                <li className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-brand-600">
                    <Icon name="clock" className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.12em] text-ink-soft">
                      Hours
                    </span>
                    <span className="mt-1 block text-ink">{site.hours}</span>
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <h2 className="h-display text-xl text-ink">What happens next</h2>
              <ul className="mt-5 space-y-3">
                {expect.map((e) => (
                  <li
                    key={e}
                    className="flex gap-3 text-[0.95rem] leading-relaxed text-ink-soft"
                  >
                    <Icon
                      name="check"
                      className="mt-1 h-4 w-4 shrink-0 text-brand-500"
                    />
                    {e}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl ring-1 ring-ink/8">
              <Image
                src="/photos/glass-enclosure-shower.jpg"
                alt="Sliding glass shower enclosure over a low-threshold base"
                width={1350}
                height={1800}
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
