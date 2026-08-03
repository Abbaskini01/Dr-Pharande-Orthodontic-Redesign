"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, Smile } from "lucide-react";

export function HeroImage() {
  return (
    <div className="relative flex justify-center">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 rounded-full bg-blue-100 blur-3xl opacity-60" />

      {/* Doctor Placeholder */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="relative flex h-[560px] w-full max-w-md items-center justify-center overflow-hidden rounded-[36px] border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50 shadow-2xl"
      >
        <div className="text-center">
          <Smile className="mx-auto mb-6 h-20 w-20 text-blue-500" />

          <h3 className="text-2xl font-bold text-slate-800">
            Doctor Photograph
          </h3>

          <p className="mt-3 px-8 text-slate-500">
            Replace this placeholder with the official clinic photograph.
          </p>
        </div>

        {/* Floating Card 1 */}
        <div className="absolute left-6 top-8 rounded-2xl bg-white p-4 shadow-xl">
          <Award className="mb-2 h-6 w-6 text-blue-600" />
          <p className="text-sm font-semibold">24+ Years</p>
          <p className="text-xs text-slate-500">Experience</p>
        </div>

        {/* Floating Card 2 */}
        <div className="absolute bottom-8 right-6 rounded-2xl bg-white p-4 shadow-xl">
          <ShieldCheck className="mb-2 h-6 w-6 text-green-600" />
          <p className="text-sm font-semibold">Trusted Care</p>
          <p className="text-xs text-slate-500">2100+ Patients</p>
        </div>
      </motion.div>
    </div>
  );
}