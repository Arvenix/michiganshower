import { Container, Icon } from "./ui";
import type { Stat } from "@/lib/stats";

/**
 * Real, sourced figures. Every one links to its source, which is the
 * opposite of what the category does with round review counts nobody
 * can check.
 */
export default function StatsBand({
  eyebrow,
  title,
  intro,
  stats,
  tone = "deep",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  stats: Stat[];
  tone?: "deep" | "cream";
}) {
  const deep = tone === "deep";
  return (
    <section className={deep ? "bg-brand-950 py-16 sm:py-20" : "bg-cream-100 py-16 sm:py-20"}>
      <Container>
        <div className="max-w-3xl">
          <p className={`eyebrow ${deep ? "text-copper-300" : ""}`}>{eyebrow}</p>
          <h2
            className={`h-display mt-3 text-3xl sm:text-4xl ${
              deep ? "text-white" : "text-ink"
            }`}
          >
            {title}
          </h2>
          {intro && (
            <p
              className={`mt-4 text-lg leading-relaxed ${
                deep ? "text-brand-100" : "text-ink-soft"
              }`}
            >
              {intro}
            </p>
          )}
        </div>

        <dl className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className={`rounded-2xl p-6 ${
                deep ? "bg-white/6 ring-1 ring-white/12" : "bg-white ring-1 ring-ink/8"
              }`}
            >
              <dt
                className={`h-display text-4xl ${
                  deep ? "text-copper-300" : "text-copper-600"
                }`}
              >
                {s.figure}
              </dt>
              <dd className="mt-2">
                <p
                  className={`text-[0.95rem] font-semibold ${
                    deep ? "text-white" : "text-ink"
                  }`}
                >
                  {s.label}
                </p>
                <p
                  className={`mt-2 text-[0.85rem] leading-relaxed ${
                    deep ? "text-brand-100" : "text-ink-soft"
                  }`}
                >
                  {s.detail}
                </p>
                <a
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                  className={`mt-3 inline-flex items-center gap-1 text-[0.72rem] font-bold uppercase tracking-[0.1em] underline underline-offset-4 ${
                    deep ? "text-brand-300 hover:text-white" : "text-ink-soft hover:text-brand-700"
                  }`}
                >
                  {s.source}
                  <Icon name="arrowRight" className="h-3 w-3" />
                </a>
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
