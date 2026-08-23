import type { Metadata } from "next";
import { seo } from "@/content";
import { createPageMetadata } from "@/lib";
import { ClinicClient } from "./ClinicClient";

export const metadata: Metadata = createPageMetadata({
  title: seo.about.title,
  description: seo.about.description,
  path: "/clinic",
});

export default function ClinicPage() {
  return <ClinicClient />;
}
