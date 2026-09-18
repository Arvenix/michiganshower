"use client";

import { useState } from "react";
import Image from "next/image";
import type { Colorway } from "@/lib/products";

/**
 * Click a swatch, the room render changes. The only genuine product
 * configurator in this competitive set belongs to one national brand,
 * so this is worth having.
 *
 * Colorways without their own room render fall back to showing the
 * swatch large. We never show a render of a different colorway and
 * pretend it is this one.
 */
export default function ColorwayViewer({
  colorways,
  lineName,
}: {
  colorways: Colorway[];
  lineName: string;
}) {
  const firstWithRoom = Math.max(
    0,
    colorways.findIndex((c) => c.room),
  );
  const [i, setI] = useState(firstWithRoom);
  const active = colorways[i];
  const label = [active.name, active.sub].filter(Boolean).join(", ");

  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
      {/* Render */}
      <div className="lg:col-span-7">
        <div className="overflow-hidden rounded-2xl bg-cream-100 ring-1 ring-ink/8">
          {active.room ? (
            <Image
              key={active.room}
              src={active.room}
              alt={`${lineName} shower walls in ${label}`}
              width={active.roomW ?? 1500}
              height={active.roomH ?? 1500}
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="h-full w-full object-cover"
            />
          ) : (
            <Image
              key={active.swatch}
              src={active.swatch}
              alt={`${lineName} in ${label}`}
              width={700}
              height={700}
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="h-full w-full object-cover"
            />
          )}
        </div>
        <p className="mt-3 text-xs text-ink-soft">
          {active.room
            ? `${lineName} in ${label}.`
            : `${lineName} in ${label}. Sample shown at close range; no room render available for this colorway.`}{" "}
          Manufacturer image, supplied by Samuel Mueller.
        </p>
      </div>

      {/* Swatches */}
      <div className="lg:col-span-5">
        <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-ink-soft">
          {colorways.length} colorways
        </h3>
        <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
          Tap a sample to see it in a room. We bring the actual physical
          samples to your consultation, because a screen is not a bathroom.
        </p>

        <ul className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-3">
          {colorways.map((c, idx) => {
            const selected = idx === i;
            const cLabel = [c.name, c.sub].filter(Boolean).join(", ");
            return (
              <li key={cLabel + idx}>
                <button
                  type="button"
                  onClick={() => setI(idx)}
                  aria-pressed={selected}
                  className={`group block w-full text-left ${
                    selected ? "" : "opacity-90 hover:opacity-100"
                  }`}
                >
                  <span
                    className={`block overflow-hidden rounded-xl ring-2 transition-all ${
                      selected
                        ? "ring-copper-500"
                        : "ring-ink/10 group-hover:ring-ink/25"
                    }`}
                  >
                    <span className="block aspect-square">
                      <Image
                        src={c.swatch}
                        alt=""
                        width={700}
                        height={700}
                        sizes="120px"
                        className="h-full w-full object-cover"
                      />
                    </span>
                  </span>
                  <span
                    className={`mt-2 block text-[0.78rem] font-semibold leading-tight ${
                      selected ? "text-ink" : "text-ink-soft"
                    }`}
                  >
                    {c.name}
                  </span>
                  {c.sub && (
                    <span className="block text-[0.68rem] leading-tight text-ink-soft">
                      {c.sub}
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {active.swatchAlt && (
          <div className="mt-7 rounded-xl bg-cream-100 p-5 ring-1 ring-ink/8">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-ink-soft">
              {active.name}: two finishes
            </p>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {[
                { src: active.swatch, label: "Gloss" },
                { src: active.swatchAlt, label: "Velvet matte" },
              ].map((f) => (
                <figure key={f.label}>
                  <div className="overflow-hidden rounded-lg ring-1 ring-ink/10">
                    <Image
                      src={f.src}
                      alt={`${active.name} in ${f.label}`}
                      width={700}
                      height={700}
                      sizes="160px"
                      className="aspect-square h-full w-full object-cover"
                    />
                  </div>
                  <figcaption className="mt-1.5 text-[0.75rem] font-medium text-ink-soft">
                    {f.label}
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="mt-3 text-[0.8rem] leading-relaxed text-ink-soft">
              Gloss bounces light and makes a small bathroom feel bigger.
              Velvet is quieter and hides water spots better.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
