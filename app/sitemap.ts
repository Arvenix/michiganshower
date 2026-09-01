import type { MetadataRoute } from "next";
import { nav, site } from "@/site.config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return nav.map((item) => ({
    url: `${site.url}${item.href === "/" ? "" : item.href}`,
    lastModified: now,
    changeFrequency: item.href === "/" ? "weekly" : "monthly",
    priority: item.href === "/" ? 1 : item.href === "/contact" ? 0.9 : 0.8,
  }));
}
