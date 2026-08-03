import Link from "next/link";

import type { NavigationItem as NavigationItemType } from "./types";

interface NavigationItemProps {
  item: NavigationItemType;
}

export function NavigationItem({
  item,
}: NavigationItemProps) {
  return (
    <Link
      href={item.href}
      className="
        group
        relative
        text-sm
        font-medium
        text-slate-700
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:text-blue-600
      "
    >
      {item.label}

      <span
        className="
          absolute
          -bottom-1
          left-0
          h-0.5
          w-0
          bg-blue-600
          transition-all
          duration-300
          group-hover:w-full
        "
      />
    </Link>
  );
}