import { clinic } from "@/content";

export function HeroStats() {
  return (
    <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
      {clinic.stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border bg-white p-6 shadow-sm"
        >
          <h3 className="text-3xl font-bold text-blue-600">
            {stat.value}
          </h3>

          <p className="mt-2 text-sm text-slate-600">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}