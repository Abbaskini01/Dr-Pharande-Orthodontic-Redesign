import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getAllTreatmentSlugs, getTreatmentBySlug } from "@/content";
import { TreatmentDetailClient } from "./TreatmentDetailClient";

interface TreatmentDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllTreatmentSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: TreatmentDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);

  if (!treatment) {
    return {
      title: "Treatment Not Found | Dr. Pharande Clinic",
    };
  }

  return {
    title: `${treatment.title} | Dr. Pharande Orthodontic & Dental Clinic`,
    description: treatment.description,
  };
}

export default async function TreatmentDetailPage({
  params,
}: TreatmentDetailPageProps) {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);

  if (!treatment) {
    notFound();
  }

  return <TreatmentDetailClient treatment={treatment} />;
}
