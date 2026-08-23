"use client";

import Link from "next/link";
import { Award, CheckCircle2, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";

import {
  AnimatedSection,
  Badge,
  BookingDialog,
  Card,
  CardContent,
  PageHeader,
  ProfileCard,
  SectionContainer,
  SectionHeading,
  StatCard,
} from "@/components/shared";
import { Button } from "@/components/ui/button";
import { clinic, doctors } from "@/content";
import { routes } from "@/lib";

export function ClinicClient() {
  return (
    <>
      {/* Clinic Hero Section */}
      <SectionContainer className="bg-linear-to-b from-background via-background to-slate-50/50 pt-8 sm:pt-12">
        <AnimatedSection>
          <div className="flex flex-col items-center text-center">
            <Badge className="gap-2">
              <Award className="h-4 w-4" />
              {clinic.hero.badge}
            </Badge>

            <h1 className="mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {clinic.officialName}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              {clinic.hero.subtitle}
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <BookingDialog
                buttonLabel="Book Consultation"
                buttonSize="lg"
                buttonClassName="px-8"
              />
              <Link href={routes.treatments}>
                <Button variant="outline" size="lg" className="w-full px-8 sm:w-auto">
                  Explore Treatments
                </Button>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </SectionContainer>

      {/* Key Clinic Stats */}
      <SectionContainer className="bg-slate-50/50">
        <AnimatedSection>
          <SectionHeading
            eyebrow="CLINICAL EXCELLENCE"
            title="Over Two Decades of Trusted Care"
            description="Our numbers reflect our continuous commitment to patient safety, clinical precision, and long-term oral health."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {clinic.stats.map((stat) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>
        </AnimatedSection>
      </SectionContainer>

      {/* Meet Our Doctors */}
      <SectionContainer>
        <AnimatedSection>
          <PageHeader
            eyebrow="OUR SPECIALISTS"
            title="Experienced Dental & Orthodontic Doctors"
            description="Meet our dedicated team of specialists who combine extensive clinical experience with compassionate patient care."
          />

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {doctors.map((doctor, idx) => (
              <ProfileCard
                key={doctor.name}
                name={doctor.name}
                designation={doctor.designation}
                qualifications={doctor.qualifications}
                experience={doctor.experience}
                biography={doctor.biography}
                image={doctor.image}
                delay={idx * 0.15}
              />
            ))}
          </div>
        </AnimatedSection>
      </SectionContainer>

      {/* Values & Mission */}
      <SectionContainer className="bg-slate-50/50">
        <AnimatedSection>
          <SectionHeading
            eyebrow="OUR PHILOSOPHY"
            title="Ethical Practice & Modern Techniques"
            description={clinic.uniqueSellingProposition}
          />

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-foreground">Mission</h3>
                <p className="mt-4 leading-7 text-muted-foreground">{clinic.mission}</p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <HeartHandshake className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-foreground">Core Values</h3>
                <p className="mt-4 leading-7 text-muted-foreground">{clinic.coreValues}</p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-foreground">Patient Promise</h3>
                <p className="mt-4 leading-7 text-muted-foreground">
                  Genuinely painless treatments, transparent ethical consultations, and personalized care plans designed specifically for your smile.
                </p>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>
      </SectionContainer>

      {/* Bottom CTA */}
      <SectionContainer>
        <AnimatedSection>
          <div className="rounded-3xl bg-linear-to-r from-slate-900 to-slate-800 p-8 text-center text-white sm:p-12">
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-200 backdrop-blur">
                <CheckCircle2 className="h-4 w-4" /> Schedule Your Visit
              </span>
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Experience Personal, Painless Dental Care?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-300">
              Book a consultation with our experienced specialists at Dr. Pharande&apos;s Orthodontic &amp; Dental Clinic.
            </p>
            <div className="mt-8 flex justify-center">
              <BookingDialog
                buttonLabel="Book Your Consultation"
                buttonSize="lg"
                buttonClassName="px-8"
              />
            </div>
          </div>
        </AnimatedSection>
      </SectionContainer>
    </>
  );
}
