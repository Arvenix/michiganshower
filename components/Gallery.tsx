"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { categories, photos, type Category } from "@/lib/photos";
import { Icon } from "./ui";

type Filter = "All" | Category;

export default function Gallery() {
  const [filter, setFilter] = useState<Filter>("All");
  const [index, setIndex] = useState<number | null>(null);

  const shown =
    filter === "All" ? photos : photos.filter((p) => p.category === filter);

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setIndex((i) =>
        i === null ? i : (i + dir + shown.length) % shown.length,
      ),
    [shown.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, step]);

  const active = index === null ? null : shown[index];

  return (
    <>
      {/* Filters */}
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Filter projects by type"
      >
        {(["All", ...categories] as Filter[]).map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => {
              setFilter(c);
              setIndex(null);
            }}
            aria-pressed={filter === c}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
              filter === c
                ? "bg-brand-600 text-white"
                : "bg-white text-ink-soft ring-1 ring-inset ring-ink/12 hover:text-brand-700"
            }`}
          >
            {c}
            <span className="ml-2 text-xs opacity-60">
              {c === "All"
                ? photos.length
                : photos.filter((p) => p.category === c).length}
            </span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p, i) => (
          <li key={p.src}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              className="group relative block w-full overflow-hidden rounded-2xl bg-cream-100 ring-1 ring-ink/8"
            >
              <span className="block aspect-4/5">
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={p.w}
                  height={p.h}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </span>
              <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-brand-950/85 via-brand-950/25 to-transparent p-5 pt-14 text-left">
                <span className="block text-[0.65rem] font-bold uppercase tracking-[0.14em] text-brand-200">
                  {p.category}
                </span>
                <span className="mt-1.5 block text-sm font-medium leading-snug text-white">
                  {p.caption}
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {/* Lightbox */}
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          className="fixed inset-0 z-100 flex flex-col bg-brand-950/95 p-4 backdrop-blur-sm sm:p-8"
          onClick={close}
        >
          <div className="flex justify-end">
            <button
              type="button"
              onClick={close}
              aria-label="Close image"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white ring-1 ring-inset ring-white/30 hover:bg-white/10"
            >
              <Icon name="close" className="h-5 w-5" />
            </button>
          </div>

          <div
            className="flex min-h-0 flex-1 items-center gap-3 sm:gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous image"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white ring-1 ring-inset ring-white/30 hover:bg-white/10"
            >
              <Icon name="chevronLeft" className="h-5 w-5" />
            </button>

            <figure className="flex min-h-0 flex-1 flex-col items-center">
              <Image
                src={active.src}
                alt={active.alt}
                width={active.w}
                height={active.h}
                sizes="90vw"
                className="min-h-0 w-auto max-w-full flex-1 rounded-xl object-contain"
              />
              <figcaption className="mt-4 max-w-2xl text-center text-sm text-brand-100">
                <span className="mb-1 block text-[0.65rem] font-bold uppercase tracking-[0.14em] text-brand-300">
                  {active.category}
                </span>
                {active.caption}
              </figcaption>
            </figure>

            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next image"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white ring-1 ring-inset ring-white/30 hover:bg-white/10"
            >
              <Icon name="chevronRight" className="h-5 w-5" />
            </button>
          </div>

          <p className="pt-4 text-center text-xs text-brand-300">
            {index! + 1} of {shown.length}
          </p>
        </div>
      )}
    </>
  );
}
