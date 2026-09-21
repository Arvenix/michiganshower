"use client";

import { useState } from "react";
import { site } from "@/site.config";
import { Icon } from "./ui";

type Status = "idle" | "sending" | "sent" | "error";

const projectTypes = [
  "Walk-in / barrier-free shower",
  "Tub-to-shower conversion",
  "Walk-in tub",
  "Full bathroom remodel",
  "Accessibility upgrades",
  "VA HISA grant project",
  "Not sure yet",
];

/**
 * Four fields, one optional dropdown. The national chains ask for six
 * to nine, and one of them collects your street address before it will
 * tell you anything. Short forms convert better and we do not need an
 * address to call someone back.
 *
 * `variant="dark"` is for placement on the navy hero.
 */
export default function QuoteForm({
  variant = "light",
  heading = "Book your free in-home consultation",
  sub,
}: {
  variant?: "light" | "dark";
  heading?: string;
  sub?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const dark = variant === "dark";
  const configured = site.web3formsKey.length > 0;

  const field = dark
    ? "w-full rounded-xl border-0 bg-white/10 px-4 py-3.5 text-[0.95rem] text-white ring-1 ring-inset ring-white/20 placeholder:text-white/50 focus:ring-2 focus:ring-inset focus:ring-copper-400"
    : "w-full rounded-xl border-0 bg-white px-4 py-3.5 text-[0.95rem] text-ink ring-1 ring-inset ring-ink/15 placeholder:text-ink-soft/55 focus:ring-2 focus:ring-inset focus:ring-brand-500";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if ((data.get("botcheck") as string)?.length) return;

    if (!configured) {
      const body = [
        `Name: ${data.get("name")}`,
        `Phone: ${data.get("phone")}`,
        `Email: ${data.get("email")}`,
        `City: ${data.get("city")}`,
        `Project: ${data.get("project_type")}`,
      ].join("\n");
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        "Consultation request from " + data.get("name"),
      )}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("sending");
    setError("");
    data.append("access_key", site.web3formsKey);
    data.append("subject", `Consultation request from ${data.get("name")}`);
    data.append("from_name", "michiganshower.com");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
        setError(json.message || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setError("Network error.");
    }
  }

  if (status === "sent") {
    return (
      <div
        className={`rounded-2xl p-8 text-center ${
          dark ? "bg-white/10 ring-1 ring-white/20" : "bg-brand-50 ring-1 ring-brand-200"
        }`}
      >
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-copper-600 text-white">
          <Icon name="check" className="h-7 w-7" />
        </span>
        <h3 className={`h-display mt-5 text-2xl ${dark ? "text-white" : "text-ink"}`}>
          Request received
        </h3>
        <p className={`mt-3 text-[0.95rem] ${dark ? "text-brand-100" : "text-ink-soft"}`}>
          We reply within one business day. If it is urgent, call{" "}
          <a href={`tel:${site.phoneHref}`} className="font-semibold underline underline-offset-4">
            {site.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <div
      className={`rounded-2xl p-7 ${
        dark
          ? "bg-white/8 ring-1 ring-white/15 backdrop-blur-sm"
          : "bg-white ring-1 ring-ink/10 shadow-[0_4px_40px_-12px_rgba(18,32,43,0.22)]"
      }`}
    >
      <h2 className={`h-display text-2xl ${dark ? "text-white" : "text-ink"}`}>
        {heading}
      </h2>
      <p className={`mt-2 text-[0.9rem] ${dark ? "text-brand-100" : "text-ink-soft"}`}>
        {sub ?? "Four questions, no obligation, and no pressure to decide on the day."}
      </p>

      <form onSubmit={onSubmit} className="mt-5 space-y-3">
        <input type="checkbox" name="botcheck" tabIndex={-1} className="hidden" aria-hidden="true" />

        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label htmlFor={`qf-name-${variant}`} className="sr-only">Name</label>
            <input id={`qf-name-${variant}`} name="name" required autoComplete="name" className={field} placeholder="Name" />
          </div>
          <div>
            <label htmlFor={`qf-phone-${variant}`} className="sr-only">Phone</label>
            <input id={`qf-phone-${variant}`} name="phone" type="tel" required autoComplete="tel" className={field} placeholder="Phone" />
          </div>
          <div>
            <label htmlFor={`qf-email-${variant}`} className="sr-only">Email</label>
            <input id={`qf-email-${variant}`} name="email" type="email" required autoComplete="email" className={field} placeholder="Email" />
          </div>
          <div>
            <label htmlFor={`qf-city-${variant}`} className="sr-only">City</label>
            <input id={`qf-city-${variant}`} name="city" required autoComplete="address-level2" className={field} placeholder="City" />
          </div>
        </div>

        <div>
          <label htmlFor={`qf-type-${variant}`} className="sr-only">Project type</label>
          <select id={`qf-type-${variant}`} name="project_type" defaultValue={projectTypes[0]} className={field}>
            {projectTypes.map((t) => (
              <option key={t} className="text-ink">{t}</option>
            ))}
          </select>
        </div>

        {status === "error" && (
          <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-800">
            {error} Call {site.phone} or email {site.email}.
          </p>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-copper-600 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-copper-700 disabled:opacity-60"
        >
          {status === "sending" ? "Sending" : "Request my consultation"}
          {status !== "sending" && <Icon name="arrowRight" className="h-4 w-4" />}
        </button>

        <p className={`text-center text-[0.75rem] ${dark ? "text-brand-200" : "text-ink-soft"}`}>
          We reply within one business day. We do not sell your information.
        </p>
      </form>
    </div>
  );
}
