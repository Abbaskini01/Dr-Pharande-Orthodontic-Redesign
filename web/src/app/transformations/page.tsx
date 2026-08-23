import type { Metadata } from "next";
import { testimonials } from "@/content";
import { createPageMetadata } from "@/lib";
import { TransformationsClient } from "./TransformationsClient";

export const metadata: Metadata = createPageMetadata({
  title: "Transformations",
  description: testimonials.summary,
  path: "/transformations",
});

export default function TransformationsPage() {
  return <TransformationsClient />;
}
