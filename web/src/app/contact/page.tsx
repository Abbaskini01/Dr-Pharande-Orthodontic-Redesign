import type { Metadata } from "next";
import { seo } from "@/content";
import { createPageMetadata } from "@/lib";
import { ContactClient } from "./ContactClient";

export const metadata: Metadata = createPageMetadata({
  title: seo.contact.title,
  description: seo.contact.description,
  path: "/contact",
});

export default function ContactPage() {
  return <ContactClient />;
}
