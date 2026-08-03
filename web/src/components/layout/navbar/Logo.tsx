import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="group flex flex-col"
      aria-label="Dr. Pharande Orthodontic Clinic"
    >
      <span className="text-2xl font-bold tracking-tight text-slate-900 transition-colors group-hover:text-blue-600">
        Dr. Pharande
      </span>

      <span className="text-xs uppercase tracking-[0.3em] text-slate-500">
        ORTHODONTIC CLINIC
      </span>
    </Link>
  );
}