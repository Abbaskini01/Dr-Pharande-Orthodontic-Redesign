"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import type { NavigationItem as NavigationItemType } from "./types";

interface NavigationItemProps {
  item: NavigationItemType;
}

export function NavigationItem({
  item,
}: NavigationItemProps) {
  const pathname = usePathname();

  const isActive =
    pathname === item.href ||
    (item.href !== "/" && pathname.startsWith(item.href));

  return (
    <Link
      href={item.href}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        `
          group
          relative
          flex
          items-center
          text-[15px]
          font-medium
          tracking-[0.01em]
          transition-all
          duration-300
        `,
        isActive
          ? "text-primary"
          : "text-muted-foreground hover:text-primary hover:-translate-y-0.5"
      )}
    >
      <span>{item.label}</span>

      <span
        className={cn(
          `
            absolute
            -bottom-1.5
            left-0
            h-0.5
            rounded-full
            bg-primary
            transition-all
            duration-300
          `,
          isActive
            ? "w-full"
            : "w-0 group-hover:w-full"
        )}
      />
    </Link>
  );
}