import type { Metadata } from "next";
import { clinic } from "@/content";
import { ClinicClient } from "./ClinicClient";

export const metadata: Metadata = {
  title: "The Clinic | Dr. Pharande Orthodontic & Dental Clinic",
  description: clinic.uniqueSellingProposition,
};

export default function ClinicPage() {
  return <ClinicClient />;
}
