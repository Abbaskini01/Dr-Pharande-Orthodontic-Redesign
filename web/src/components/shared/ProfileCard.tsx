"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Award,
  Briefcase,
  GraduationCap,
  UserRound,
} from "lucide-react";

import { fadeInUp } from "@/lib";

import {
  Card,
  CardContent,
} from "./Card";

interface ProfileCardProps {
  name: string;
  designation: string;
  qualifications: readonly string[];
  experience: string;
  biography: string;
  specializations?: readonly string[];
  image?: string;
  delay?: number;
}

export function ProfileCard({
  name,
  designation,
  qualifications,
  experience,
  biography,
  specializations,
  image,
  delay = 0,
}: ProfileCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      transition={{
        duration: 0.6,
        delay,
      }}
    >
      <Card
        className="
          group
          h-full
          overflow-hidden
        "
      >
        {/* Image / Placeholder */}
        <div
          className="
            relative
            flex
            h-56
            items-center
            justify-center
            overflow-hidden
            bg-linear-to-br
            from-primary/5
            via-background
            to-muted
            sm:h-72
            lg:h-80
          "
        >
          <div
            className="
              absolute
              inset-0
              bg-linear-to-t
              from-primary/10
              to-transparent
              opacity-0
              transition-opacity
              duration-500
              group-hover:opacity-100
            "
          />

          {image ? (
            <Image
              src={image}
              alt={name}
              fill
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
              className="
                object-cover
              "
            />
          ) : (
            <div
              className="
                flex
                h-28
                w-28
                items-center
                justify-center
                rounded-full
                bg-primary/10
                transition-all
                duration-500
                group-hover:scale-105
                group-hover:bg-primary
              "
            >
              <UserRound
                className="
                  h-14
                  w-14
                  text-primary
                  transition-colors
                  duration-500
                  group-hover:text-white
                "
              />
            </div>
          )}

          {/* Experience Badge */}
          <div
            className="
              absolute
              bottom-6
              right-6
              flex
              items-center
              gap-2
              rounded-full
              border
              border-border
              bg-background/95
              px-4
              py-2
              shadow-lg
              backdrop-blur
            "
          >
            <Award className="h-4 w-4 text-primary" />

            <span className="text-sm font-semibold">
              {experience}
            </span>
          </div>
        </div>

        <CardContent className="flex flex-col p-8">
          <h3
            className="
              text-2xl
              font-bold
              tracking-tight
              text-foreground
              transition-colors
              duration-300
              group-hover:text-primary
            "
          >
            {name}
          </h3>

          <p className="mt-2 font-medium text-primary">
            {designation}
          </p>

          <div className="mt-8 space-y-5">
            <div className="flex items-start gap-3">
              <GraduationCap
                className="
                  mt-1
                  h-5
                  w-5
                  shrink-0
                  text-primary
                "
              />

              <span className="leading-7 text-muted-foreground">
                {qualifications.join(" • ")}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Briefcase
                className="
                  h-5
                  w-5
                  shrink-0
                  text-primary
                "
              />

              <span className="text-muted-foreground">
                {experience}
              </span>
            </div>
          </div>

          {specializations && specializations.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {specializations.map((spec) => (
                <span
                  key={spec}
                  className="inline-flex items-center rounded-md bg-primary/5 px-2 py-0.5 text-xs font-medium text-primary"
                >
                  {spec}
                </span>
              ))}
            </div>
          )}

          <div className="mt-8 h-px bg-border" />

          <p
            className="
              mt-8
              flex-1
              leading-8
              text-muted-foreground
            "
          >
            {biography}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}