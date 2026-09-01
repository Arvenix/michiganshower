"use client";

import { useState } from "react";
import { site } from "@/site.config";
import { Icon } from "./ui";

type Status = "idle" | "sending" | "sent" | "error";

const projectTypes = [
  "Walk-in / barrier-free shower",
  "Walk-in tub",
  "Tub-to-shower conversion",
  "Whole bathroom remodel",
  "Accessibility upgrades (grab bars, seating, hand shower)",
  "VA HISA grant project",
  "Not sure yet, I'd like advice",
];

const field =
  "w-full rounded-xl border-0 bg-white px-4 py-3.5 text-[0.95rem] text-ink ring-1 ring-inset ring-ink/15 placeholder:text-ink-soft/55 focus:ring-2 focus:ring-inset focus:ring-brand-500";

const label = "block text-sm font-semibold text-ink";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const configured = site.web3formsKey.length > 0;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: bots fill hidden fields, people don't.
    if ((data.get("botcheck") as string)?.length) return;

    if (!configured) {
      // No form service key yet: hand off to the visitor's mail client
      // so a real enquiry is never silently lost.
      const body = [
        `Name: ${data.get("name")}`,
        `Email: ${data.get("email")}`,
        `Phone: ${data.get("phone")}`,
        `City: ${data.get("city")}`,
        `Project: ${data.get("project_type")}`,
        "",
        `${data.get("message")}`,
      ].join("\n");
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        "Website enquiry from " + data.get("name"),
      )}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("sending");
    setError("");
    data.append("access_key", site.web3formsKey);
    data.append("subject", `New website enquiry from ${data.get("name")}`);
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
      setError("Network error. Please email us directly.");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl bg-brand-50 p-10 text-center ring-1 ring-brand-200">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white">
          <Icon name="check" className="h-7 w-7" />
        </span>
        <h3 className="h-display mt-5 text-2xl text-ink">Message received</h3>
        <p className="mx-auto mt-3 max-w-md text-ink-soft">
          Thanks for reaching out. We&apos;ll get back to you within one
          business day. If it&apos;s urgent, email us directly at{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-semibold text-brand-700 underline underline-offset-4"
          >
            {site.email}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-7 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 ring-1 ring-inset ring-brand-200"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {/* Honeypot */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>
            Name <span className="text-brand-600">*</span>
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className={`${field} mt-2`}
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className={label}>
            Email <span className="text-brand-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={`${field} mt-2`}
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className={label}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={`${field} mt-2`}
            placeholder="(555) 555-5555"
          />
        </div>
        <div>
          <label htmlFor="city" className={label}>
            City / township
          </label>
          <input
            id="city"
            name="city"
            autoComplete="address-level2"
            className={`${field} mt-2`}
            placeholder="Grand Rapids"
          />
        </div>
      </div>

      <div>
        <label htmlFor="project_type" className={label}>
          What are you looking to do?
        </label>
        <select
          id="project_type"
          name="project_type"
          defaultValue={projectTypes[0]}
          className={`${field} mt-2`}
        >
          {projectTypes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={label}>
          Tell us about the space <span className="text-brand-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${field} mt-2 resize-y`}
          placeholder="Size of the bathroom, what's there now, any mobility needs, and roughly when you'd like the work done."
        />
      </div>

      {status === "error" && (
        <p
          role="alert"
          className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-800 ring-1 ring-red-200"
        >
          {error} You can always reach us at{" "}
          <a href={`mailto:${site.email}`} className="font-semibold underline">
            {site.email}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-brand-700 disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Send my request"}
        {status !== "sending" && (
          <Icon name="arrowRight" className="h-4 w-4" />
        )}
      </button>

      <p className="text-xs leading-relaxed text-ink-soft">
        We use your details only to answer your enquiry. No lists, no resale, no
        robocalls.
      </p>
    </form>
  );
}
