import type { MetadataRoute } from "next";
import { disciplineOrder, disciplinePaths } from "./site-data";
import { siteUrl } from "./seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const supportingPages = [
    "/about",
    "/projects",
    "/careers",
    "/design-process",
    "/latestnews",
    "/contact",
    "/blog",
    "/press-outreach",
    "/resources",
  ];

  return [
    {
      url: `${siteUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...disciplineOrder.map((key) => ({
      url: `${siteUrl}${disciplinePaths[key]}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: key === "planning" ? 0.75 : 0.9,
    })),
    ...supportingPages.map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified: now,
      changeFrequency:
        path === "/latestnews" || path === "/blog"
          ? ("weekly" as const)
          : ("monthly" as const),
      priority:
        path === "/projects" || path === "/about"
          ? 0.9
          : path === "/contact"
            ? 0.85
            : 0.7,
    })),
  ];
}
