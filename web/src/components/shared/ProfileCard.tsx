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

import { Icon } from "./Icon";

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
      <Card className="overflow-hidden">
        <div className="flex h-72 items-center justify-center bg-gradient-to-br from-blue-50 to-slate-100">
          <UserRound className="h-20 w-20 text-blue-600" />
        </div>

        <CardContent>
          <h3 className="text-2xl font-bold">
            {name}
          </h3>

          <p className="mt-2 font-medium text-blue-600">
            {designation}
          </p>

          <div className="mt-6 flex items-center gap-2">
            <Icon
              icon={GraduationCap}
              className="h-5 w-5"
            />

            <span>
              {qualifications.join(" • ")}
            </span>
          </div>

          <div className="mt-3 flex items-center gap-2">
            <Icon
              icon={Briefcase}
              className="h-5 w-5"
            />

            <span>{experience}</span>
          </div>

          <p className="mt-6 leading-7 text-slate-600">
            {biography}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}