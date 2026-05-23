import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { orderedCaseStudies } from "@/data/case-studies";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://chitistudio.com";

  const staticPages = [
    "",
    "/about",
    "/contact",
    "/services",
    "/work",
  ];

  const localeEntries = routing.locales.flatMap((locale) =>
    staticPages.map((page) => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: page === "" ? 1 : 0.8,
    }))
  );

  const caseStudyEntries = routing.locales.flatMap((locale) =>
    orderedCaseStudies.map((study) => ({
      url: `${baseUrl}/${locale}/work/${study.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  return [...localeEntries, ...caseStudyEntries];
}
