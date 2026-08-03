"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

import { DoctorImage } from "./DoctorImage";

interface DoctorCardProps {
  name: string;
  designation: string;
  qualifications: readonly string[];
  experience: string;
  specializations: readonly string[];
  biography: string;
  image: string;
  index: number;
}

export function DoctorCard({
  name,
  designation,
  qualifications,
  experience,
  specializations,
  biography,
  index,
}: DoctorCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.15,
      }}
      className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <DoctorImage name={name} />

      <div className="p-8">
        <h3 className="text-2xl font-bold">
          {name}
        </h3>

        <p className="mt-2 text-blue-600 font-medium">
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

        <div className="mt-8 flex flex-wrap gap-2">
          {specializations.map((item) => (
            <span
              key={item}
              className="rounded-full bg-blue-50 px-4 py-2 text-sm text-blue-700"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}