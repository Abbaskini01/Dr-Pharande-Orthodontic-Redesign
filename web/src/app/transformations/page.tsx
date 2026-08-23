import type { Metadata } from "next";
import { TransformationsClient } from "./TransformationsClient";

export const metadata: Metadata = {
  title: "Transformations | Dr. Pharande Orthodontic & Dental Clinic",
  description:
    "Discover patient satisfaction highlights, verified reviews, and real smile transformation stories from Dr. Pharande Orthodontic & Dental Clinic.",
};

export default function TransformationsPage() {
  return <TransformationsClient />;
}
