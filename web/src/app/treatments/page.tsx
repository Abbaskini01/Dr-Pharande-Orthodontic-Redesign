import type { Metadata } from "next";
import { seo } from "@/content";
import { createPageMetadata } from "@/lib";
import { TreatmentsClient } from "./TreatmentsClient";

export const metadata: Metadata = createPageMetadata({
  title: seo.services.title,
  description: seo.services.description,
  path: "/treatments",
});

export default function TreatmentsPage() {
  return <TreatmentsClient />;
}
