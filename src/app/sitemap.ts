import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://joeyrubinorehab.com";

  return [
    { url: baseUrl },
    { url: `${baseUrl}/about` },
    { url: `${baseUrl}/work` },
    { url: `${baseUrl}/work/sober-companioning` },
    { url: `${baseUrl}/work/fitness` },
    { url: `${baseUrl}/work/interventions` },
    { url: `${baseUrl}/finding-meaning` },
    { url: `${baseUrl}/contact` },
    { url: `${baseUrl}/faq` },
  ];
}
