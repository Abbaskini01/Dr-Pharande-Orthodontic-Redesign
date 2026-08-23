import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getAllTreatmentSlugs, getTreatmentBySlug } from "@/content";
import { createPageMetadata } from "@/lib";
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
    return createPageMetadata({
      title: "Treatment Not Found",
      description: "The requested dental treatment could not be found.",
    });
  }

  return createPageMetadata({
    title: treatment.title,
    description: treatment.description,
    path: `/treatments/${slug}`,
  });
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
