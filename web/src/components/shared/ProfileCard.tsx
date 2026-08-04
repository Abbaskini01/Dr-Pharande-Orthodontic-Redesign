"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, UserRound } from "lucide-react";

import { fadeInUp } from "@/lib";

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
    <motion.article
      variants={fadeInUp}
      transition={{
        duration: 0.6,
        delay,
      }}
      className="overflow-hidden rounded-3xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="flex h-72 items-center justify-center bg-gradient-to-br from-blue-50 to-slate-100">
        <UserRound className="h-20 w-20 text-blue-600" />
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-bold">
          {name}
        </h3>

        <p className="mt-2 font-medium text-blue-600">
          {designation}
        </p>

        <div className="mt-6 flex items-center gap-2">
          <GraduationCap className="h-5 w-5 text-blue-600" />

          <span>
            {qualifications.join(" • ")}
          </span>
        </div>

        <div className="mt-3 flex items-center gap-2">
          <Briefcase className="h-5 w-5 text-blue-600" />

          <span>{experience}</span>
        </div>

        <p className="mt-6 leading-7 text-slate-600">
          {biography}
        </p>
      </div>
    </motion.article>
  );
}