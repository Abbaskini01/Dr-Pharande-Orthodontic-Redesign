"use client";

import { Clock, Mail, MapPin, Phone, Sparkles } from "lucide-react";

import {
  AnimatedSection,
  Badge,
  BookingDialog,
  Card,
  CardContent,
  PageHeader,
  SectionContainer,
} from "@/components/shared";
import { contact } from "@/content";

export function ContactClient() {
  return (
    <>
      <SectionContainer className="bg-linear-to-b from-background via-background to-slate-50/50 pt-8 sm:pt-12">
        <AnimatedSection>
          <PageHeader
            eyebrow="GET IN TOUCH"
            title="Contact Dr. Pharande Clinic"
            description="We welcome new and existing patients. Connect with our team to schedule consultations or inquire about treatments."
          />
        </AnimatedSection>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {/* Address Card */}
          <Card className="p-8">
            <CardContent className="p-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-foreground">Clinic Address</h3>
              <p className="mt-4 leading-7 text-muted-foreground">{contact.address}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {contact.branches.map((branch) => (
                  <span
                    key={branch}
                    className="inline-flex items-center rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700"
                  >
                    {branch} Branch
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Phone & Email Card */}
          <Card className="p-8">
            <CardContent className="p-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-foreground">Phone &amp; Email</h3>
              <div className="mt-4 space-y-3 text-muted-foreground">
                {contact.phones.map((phone) => (
                  <p key={phone} className="flex items-center gap-2 font-medium text-foreground">
                    <Phone className="h-4 w-4 text-primary" />
                    <a href={`tel:${phone.replace(/\s+/g, "")}`} className="hover:text-primary transition-colors">
                      {phone}
                    </a>
                  </p>
                ))}
                <p className="flex items-center gap-2 pt-2 text-sm">
                  <Mail className="h-4 w-4 text-primary shrink-0" />
                  <a href={`mailto:${contact.email}`} className="break-all hover:text-primary transition-colors">
                    {contact.email}
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Hours Card */}
          <Card className="p-8">
            <CardContent className="p-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-foreground">Clinic Timings</h3>
              <div className="mt-4 space-y-2 text-muted-foreground">
                <p className="text-sm font-medium text-foreground">{contact.timings.weekdays}</p>
                <p className="pt-2 text-xs font-medium text-slate-400">
                  Sunday: {contact.timings.sunday}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </SectionContainer>

      {/* Appointment Consultation Gateway */}
      <SectionContainer className="bg-slate-50/50">
        <AnimatedSection>
          <div className="mx-auto max-w-3xl rounded-3xl bg-card border border-border p-8 text-center sm:p-12 shadow-sm">
            <div className="flex justify-center">
              <Badge className="gap-2">
                <Sparkles className="h-4 w-4" />
                Book Your Visit
              </Badge>
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Schedule Your Appointment
            </h2>
            <p className="mt-4 text-muted-foreground leading-7">
              Select your preferred appointment method below to get started with our concierge team.
            </p>
            <div className="mt-8 flex justify-center">
              <BookingDialog
                buttonLabel="Book Consultation Now"
                buttonSize="lg"
                buttonClassName="px-10"
              />
            </div>
          </div>
        </AnimatedSection>
      </SectionContainer>
    </>
  );
}
