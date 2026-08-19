import type { Metadata } from "next";

const SITE_NAME = "Joey Rubino";

const SITE_TITLE =
  "Joey Rubino — Sober Companion & Recovery Support";

const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Joey Rubino — Find Healing. Find Hope. Find Meaning.",
};

type PageMetadataInput = {
  path: string;
  description: string;
  title?: string;
  openGraphDescription?: string;
  twitterDescription?: string;
  robots?: Metadata["robots"];
};

export function createPageMetadata({
  path,
  description,
  title,
  openGraphDescription = description,
  twitterDescription = openGraphDescription,
  robots,
}: PageMetadataInput): Metadata {
  const socialTitle =
    title
      ? `${title} | ${SITE_NAME}`
      : SITE_TITLE;

  return {
    ...(title
      ? {
          title,
        }
      : {}),

    description,

    alternates: {
      canonical: path,
    },

    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: SITE_NAME,
      title: socialTitle,
      description: openGraphDescription,
      url: path,
      images: [
        OG_IMAGE,
      ],
    },

    twitter: {
      card: "summary_large_image",
      site: "@joeyrubino",
      title: socialTitle,
      description: twitterDescription,
      images: [
        OG_IMAGE.url,
      ],
    },

    ...(robots
      ? {
          robots,
        }
      : {}),
  };
}
