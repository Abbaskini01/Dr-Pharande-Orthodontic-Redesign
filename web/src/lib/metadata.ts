import type { Metadata } from "next";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://drpharande.com";

export const socialShareImage = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "Dr. Pharande Orthodontic & Dental Clinic — Creating Healthy & Beautiful Smiles",
} as const;

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Dr. Pharande Orthodontic & Dental Clinic",
    template: "%s | Dr. Pharande Orthodontic & Dental Clinic",
  },

  description:
    "Advanced Orthodontic & Dental Care in Pune with 24+ Years of Excellence.",

  keywords: [
    "Orthodontist Pune",
    "Dental Clinic Pune",
    "Braces",
    "Aligners",
    "Root Canal",
    "Dental Implants",
    "Laser Dentistry",
  ],

  authors: [
    {
      name: "Dr. Pharande Orthodontic & Dental Clinic",
    },
  ],

  openGraph: {
    title: "Dr. Pharande Orthodontic & Dental Clinic",
    description: "Advanced Orthodontic & Dental Care in Pune.",
    siteName: "Dr. Pharande Orthodontic & Dental Clinic",
    locale: "en_IN",
    type: "website",
    url: siteUrl,
    images: [socialShareImage],
  },

  twitter: {
    card: "summary_large_image",
    title: "Dr. Pharande Orthodontic & Dental Clinic",
    description: "Advanced Orthodontic & Dental Care in Pune with 24+ Years of Excellence.",
    images: [socialShareImage],
  },
};

interface CreatePageMetadataParams {
  title: string;
  description: string;
  path?: string;
  absoluteTitle?: boolean;
}

export function createPageMetadata({
  title,
  description,
  path = "",
  absoluteTitle = false,
}: CreatePageMetadataParams): Metadata {
  const pageTitle = absoluteTitle
    ? title
    : `${title} | Dr. Pharande Orthodontic & Dental Clinic`;

  const canonicalUrl = path ? `${siteUrl}${path}` : siteUrl;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description,
      siteName: "Dr. Pharande Orthodontic & Dental Clinic",
      locale: "en_IN",
      type: "website",
      url: canonicalUrl,
      images: [socialShareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [socialShareImage],
    },
  };
}