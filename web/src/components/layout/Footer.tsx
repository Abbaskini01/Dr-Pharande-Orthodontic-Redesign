import Link from "next/link";
import {
  Clock,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { contact } from "@/content";
import { routes } from "@/lib";

import { Container } from "./Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-slate-950 text-white">
      <Container className="py-12 sm:py-16">

        <div className="grid gap-12 lg:grid-cols-4">

          {/* Brand */}

          <div>

            <h3 className="text-3xl font-bold">
              Dr. Pharande
            </h3>

            <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-slate-400 sm:text-xs sm:tracking-[0.35em]">
              ORTHODONTIC & DENTAL CLINIC
            </p>

            <p className="mt-6 leading-8 text-slate-300">
              Delivering advanced orthodontic and dental care
              with ethical treatment, modern technology,
              and over 24 years of trusted clinical excellence.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h4 className="text-lg font-semibold">
              Quick Links
            </h4>

            <div className="mt-6 flex flex-col gap-4">

              {[
                ["Home", routes.home],
                ["The Clinic", routes.clinic],
                ["Treatments", routes.treatments],
                ["Transformations", routes.transformations],
                ["Contact", routes.contact],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="
                    text-slate-300
                    transition-colors
                    duration-300
                    hover:text-white
                  "
                >
                  {label}
                </Link>
              ))}

            </div>

          </div>

          {/* Contact */}

          <div>

            <h4 className="text-lg font-semibold">
              Contact
            </h4>

            <div className="mt-6 space-y-5">

              <div className="flex gap-3">

                <MapPin className="mt-1 h-5 w-5 text-primary shrink-0" />

                <p className="leading-7 text-slate-300">
                  {contact.address}
                </p>

              </div>

              <div className="flex gap-3">

                <Phone className="mt-1 h-5 w-5 text-primary shrink-0" />

                <a
                  href={`tel:${contact.phones[0].replace(/\s+/g, "")}`}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {contact.phones[0]}
                </a>

              </div>

              <div className="flex gap-3">

                <Mail className="mt-1 h-5 w-5 text-primary shrink-0" />

                <a
                  href={`mailto:${contact.email}`}
                  className="break-all text-slate-300 hover:text-white transition-colors sm:break-normal"
                >
                  {contact.email}
                </a>

              </div>

            </div>

          </div>

          {/* Clinic Hours */}

          <div>

            <h4 className="text-lg font-semibold">
              Clinic Hours
            </h4>

            <div className="mt-6 flex gap-3">

              <Clock className="mt-1 h-5 w-5 text-primary shrink-0" />

              <div className="space-y-2 text-slate-300">

                <p className="text-sm font-medium">{contact.timings.weekdays}</p>

                <p className="pt-2 text-sm text-slate-400">
                  Sunday: {contact.timings.sunday}
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 border-t border-slate-800 pt-8">

          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-slate-400 md:flex-row md:text-left">

            <p>
              © {year} Dr. Pharande Orthodontic & Dental Clinic.
              All rights reserved.
            </p>

            <p>
              Designed with precision for healthier smiles.
            </p>

          </div>

        </div>

      </Container>
    </footer>
  );
}