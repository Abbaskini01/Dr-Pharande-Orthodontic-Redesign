import type { Metadata } from "next";
import { TreatmentsClient } from "./TreatmentsClient";

export const metadata: Metadata = {
  title: "Treatments | Dr. Pharande Orthodontic & Dental Clinic",
  description:
    "Explore our full range of orthodontic and dental treatments, including clear aligners, painless root canal care, pediatric dentistry, implants, and laser dentistry.",
};

export default function TreatmentsPage() {
  return <TreatmentsClient />;
}
