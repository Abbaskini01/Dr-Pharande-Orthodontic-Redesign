"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { ServiceIcon } from "./ServiceIcon";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

export function ServiceCard({
  title,
  description,
  icon,
  index,
}: ServiceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.08,
        duration: 0.45,
      }}
      className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
        <ServiceIcon icon={icon} />
      </div>

      <h3 className="text-2xl font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>

      <div className="mt-8 flex items-center gap-2 font-medium text-blue-600 transition-transform group-hover:translate-x-1">
        Learn More
        <ArrowRight className="h-4 w-4" />
      </div>
    </motion.article>
  );
}