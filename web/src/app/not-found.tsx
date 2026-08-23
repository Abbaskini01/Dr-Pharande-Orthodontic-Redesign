import Link from "next/link";
import { ArrowLeft, FileQuestion } from "lucide-react";

import {
  AnimatedSection,
  BookingDialog,
  SectionContainer,
  SectionHeading,
} from "@/components/shared";
import { Button } from "@/components/ui/button";
import { routes } from "@/lib";

export default function NotFound() {
  return (
    <SectionContainer className="flex min-h-[60vh] flex-col justify-center bg-linear-to-b from-background via-background to-slate-50/50 py-16 sm:py-24">
      <AnimatedSection>
        <div className="flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/10 text-primary">
            <FileQuestion className="h-10 w-10" />
          </div>
        </div>

        <SectionHeading
          eyebrow="404 — PAGE NOT FOUND"
          title="The Page You Are Looking For Does Not Exist"
          description="The address may have changed, or the page was moved. You can return to our homepage or explore our specialized dental treatments."
          align="center"
          className="mt-6"
        />

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link href={routes.home}>
            <Button size="lg" className="w-full gap-2 px-8 sm:w-auto">
              <ArrowLeft className="h-4 w-4" /> Return to Homepage
            </Button>
          </Link>

          <Link href={routes.treatments}>
            <Button variant="outline" size="lg" className="w-full px-8 sm:w-auto">
              Explore Treatments
            </Button>
          </Link>

          <BookingDialog
            buttonLabel="Book Consultation"
            buttonVariant="secondary"
            buttonSize="lg"
            buttonClassName="w-full px-8 sm:w-auto"
          />
        </div>
      </AnimatedSection>
    </SectionContainer>
  );
}
