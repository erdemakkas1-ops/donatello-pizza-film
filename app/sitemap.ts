import type { MetadataRoute } from "next";
import { siteUrl } from "./site-data";

// One-page site: the home page is the only indexable URL.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 }];
}
