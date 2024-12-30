import type { Metadata } from "next/types";

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: "https://blogs.100xcoding.com",
      images: "https://blogs.100xcoding.com/og.png",
      siteName: "100xcoding Blogs",
      ...override.openGraph,
    },
    twitter: {
      card: "summary_large_image",
      creator: "@techysiddhant",
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      images: "https://blogs.100xcoding.com/og.png",
      ...override.twitter,
    },
  };
}

export const BASEURL =
  process.env.NODE_ENV === "development"
    ? new URL("http://localhost:3000")
    : new URL(`https://${process.env.NEXT_PUBLIC_URL!}`);
