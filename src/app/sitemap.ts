import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1 },
    { path: "/how-it-works", priority: 0.8 },
    { path: "/services", priority: 0.8 },
    { path: "/pricing", priority: 0.8 },
    { path: "/about", priority: 0.6 },
    { path: "/book", priority: 0.9 },
  ];

  const lastModified = new Date();
  return routes.map(({ path, priority }) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
