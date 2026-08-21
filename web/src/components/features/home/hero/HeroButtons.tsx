"use client";

import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";

import { BookingDialog } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { clinic } from "@/content";

export function HeroButtons() {
  return (
    <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">

      {/* Primary CTA */}
      <BookingDialog
        buttonLabel={clinic.hero.primaryCTA.label}
        triggerContent={
          <>
            <CalendarDays className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
            {clinic.hero.primaryCTA.label}
          </>
        }
        buttonVariant="default"
        buttonSize="lg"
        buttonClassName="
          group
          w-full
          rounded-full
          px-8
          shadow-lg
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-xl
          sm:w-auto
        "
      />

      {/* Secondary CTA */}
      <Link href={clinic.hero.secondaryCTA.href} className="w-full sm:w-auto">
        <Button
          variant="outline"
          size="lg"
          className="
            group
            w-full
            rounded-full
            border-border
            px-8
            transition-all
            duration-300
            hover:border-primary
            hover:bg-primary/5
            sm:w-auto
          "
        >
          {clinic.hero.secondaryCTA.label}

          <ArrowRight
            className="
              ml-2
              h-4
              w-4
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </Button>
      </Link>

    </div>
  );
}