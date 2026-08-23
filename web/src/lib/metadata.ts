import type { Metadata } from "next";

export const defaultMetadata: Metadata = {
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
  },

  twitter: {
    card: "summary_large_image",
    title: "Dr. Pharande Orthodontic & Dental Clinic",
    description: "Advanced Orthodontic & Dental Care in Pune with 24+ Years of Excellence.",
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

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    openGraph: {
      title: pageTitle,
      description,
      siteName: "Dr. Pharande Orthodontic & Dental Clinic",
      locale: "en_IN",
      type: "website",
      url: path ? `https://drpharande.com${path}` : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
    },
  };
}