"use client";

import { motion } from "framer-motion";
import {
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
  image?: string;
  delay?: number;
}

export function ProfileCard({
  name,
  designation,
  qualifications,
  experience,
  biography,
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
      <Card className="group overflow-hidden h-full">
        <div className="relative flex h-80 items-center justify-center bg-gradient-to-br from-primary/5 via-background to-muted overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-primary/10 transition-all duration-500 group-hover:scale-105 group-hover:bg-primary">
            <UserRound className="h-14 w-14 text-primary transition-colors duration-500 group-hover:text-white" />
          </div>
        </div>

        <CardContent className="flex flex-col p-8">
          <h3 className="text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
            {name}
          </h3>

          <p className="mt-2 font-medium text-primary">
            {designation}
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3">
              <GraduationCap className="mt-1 h-5 w-5 shrink-0 text-primary" />

              <span className="leading-7 text-muted-foreground">
                {qualifications.join(" • ")}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Briefcase className="h-5 w-5 shrink-0 text-primary" />

              <span className="text-muted-foreground">
                {experience}
              </span>
            </div>
          </div>

          <div className="mt-8 h-px bg-border" />

          <p className="mt-8 flex-1 leading-8 text-muted-foreground">
            {biography}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}