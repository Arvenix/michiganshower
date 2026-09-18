import type { MetadataRoute } from "next";
import { nav, secondaryNav, site } from "@/site.config";
import { products } from "@/lib/products";
import { cities } from "@/lib/cities";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: { href: string; priority: number }[] = [
    { href: "/", priority: 1 },
    ...nav.map((n) => ({
      href: n.href,
      priority: n.href === "/contact" ? 0.9 : 0.8,
    })),
    ...secondaryNav.map((n) => ({ href: n.href, priority: 0.6 })),
    ...products.map((p) => ({ href: `/products/${p.slug}`, priority: 0.7 })),
    ...cities.map((c) => ({
      href: `/service-areas/${c.slug}`,
      priority: 0.7,
    })),
  ];

  return routes.map((r) => ({
    url: `${site.url}${r.href === "/" ? "" : r.href}`,
    lastModified: now,
    changeFrequency: r.href === "/" ? "weekly" : "monthly",
    priority: r.priority,
  }));
}
