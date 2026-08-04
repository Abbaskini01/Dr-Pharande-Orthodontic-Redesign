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
  ],

  authors: [
    {
      name: "Dr. Pharande Orthodontic & Dental Clinic",
    },
  ],

  openGraph: {
    title: "Dr. Pharande Orthodontic & Dental Clinic",

    description:
      "Advanced Orthodontic & Dental Care in Pune.",

    type: "website",
  },
};