import type { Metadata } from "next";
import { ContactClient } from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Dr. Pharande Orthodontic & Dental Clinic",
  description:
    "Get in touch with Dr. Pharande Orthodontic & Dental Clinic in Aundh, Pune. View clinic address, consultation timings, phone numbers, and branch locations.",
};

export default function ContactPage() {
  return <ContactClient />;
}
