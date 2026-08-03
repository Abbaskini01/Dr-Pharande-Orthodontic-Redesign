import { motion } from "framer-motion";

interface TrustCardProps {
  value: string;
  title: string;
  description: string;
  index: number;
}

export function TrustCard({
  value,
  title,
  description,
  index,
}: TrustCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.15,
        duration: 0.45,
      }}
      className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <h3 className="text-3xl font-bold text-blue-600">
        {value}
      </h3>

      <h4 className="mt-4 text-xl font-semibold text-slate-900">
        {title}
      </h4>

      <p className="mt-3 text-slate-600 leading-7">
        {description}
      </p>
    </motion.div>
  );
}