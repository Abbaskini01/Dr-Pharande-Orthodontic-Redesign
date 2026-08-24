import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      aria-label="Dr. Pharande Orthodontic Clinic"
      className="
        group
        inline-flex
        flex-col
        justify-center
        leading-none
        transition-all
        duration-300
        hover:scale-[1.02]
      "
    >
      <span
        className="
          text-[1.5rem]
          font-bold
          tracking-tight
          text-foreground
          transition-colors
          duration-300
          group-hover:text-primary
          sm:text-[1.75rem]
        "
      >
        Dr. Pharande
      </span>

      <span
        className="
          mt-1.5
          text-[9px]
          font-semibold
          uppercase
          tracking-[0.26em]
          text-muted-foreground
          transition-colors
          duration-300
          group-hover:text-primary/80
          sm:text-[11px]
          sm:tracking-[0.38em]
        "
      >
        ORTHODONTIC & DENTAL CLINIC
      </span>
    </Link>
  );
}