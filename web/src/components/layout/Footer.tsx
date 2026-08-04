"use client";

import Link from "next/link";
import {
  Clock,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { Container } from "./Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-slate-950 text-white">
      <Container className="py-16">

        <div className="grid gap-12 lg:grid-cols-4">

          {/* Brand */}

          <div>

            <h3 className="text-3xl font-bold">
              Dr. Pharande
            </h3>

            <p className="mt-2 text-xs uppercase tracking-[0.35em] text-slate-400">
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
                ["Home", "/"],
                ["About", "/about"],
                ["Treatments", "/treatments"],
                ["Gallery", "/gallery"],
                ["Testimonials", "/testimonials"],
                ["Contact", "/contact"],
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

                <MapPin className="mt-1 h-5 w-5 text-primary" />

                <p className="leading-7 text-slate-300">
                  Aundh, Pune,
                  Maharashtra
                </p>

              </div>

              <div className="flex gap-3">

                <Phone className="mt-1 h-5 w-5 text-primary" />

                <p className="text-slate-300">
                  +91 XXXXX XXXXX
                </p>

              </div>

              <div className="flex gap-3">

                <Mail className="mt-1 h-5 w-5 text-primary" />

                <p className="text-slate-300">
                  info@drpharande.com
                </p>

              </div>

            </div>

          </div>

          {/* Clinic Hours */}

          <div>

            <h4 className="text-lg font-semibold">
              Clinic Hours
            </h4>

            <div className="mt-6 flex gap-3">

              <Clock className="mt-1 h-5 w-5 text-primary" />

              <div className="space-y-2 text-slate-300">

                <p>Monday – Saturday</p>

                <p>10:30 AM – 1:30 PM</p>

                <p>6:00 PM – 9:00 PM</p>

                <p className="pt-2 text-sm text-slate-400">
                  Sunday Closed
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 border-t border-slate-800 pt-8">

          <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-400 md:flex-row">

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