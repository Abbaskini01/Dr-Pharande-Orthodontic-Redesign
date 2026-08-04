import type { LucideIcon } from "lucide-react";

import { COLORS } from "@/lib";

interface IconProps {
  icon: LucideIcon;

  className?: string;
}

export function Icon({
  icon: IconComponent,
  className = "",
}: IconProps) {
  return (
    <IconComponent
      className={`h-10 w-10 ${COLORS.PRIMARY} ${className}`}
    />
  );
}