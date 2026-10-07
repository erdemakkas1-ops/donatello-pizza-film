import type { MetadataRoute } from "next";
import { kvkkReady, siteUrl } from "./site-data";

// The home page, plus the KVKK notice once the business details are filled in.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    ...(kvkkReady ? [{ url: `${siteUrl}/aydinlatma-metni`, changeFrequency: "yearly" as const, priority: 0.2 }] : []),
  ];
}
