"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

import {
  navigationItems,
  primaryNavigationButton,
} from "./navigation.data";
import { NavigationItem } from "./NavigationItem";

export function DesktopNavigation() {
  return (
    <nav
      aria-label="Primary Navigation"
      className="
        hidden
        items-center
        lg:flex
      "
    >
      {/* Navigation Links */}
      <div
        className="
          flex
          items-center
          gap-9
        "
      >
        {navigationItems.map((item) => (
          <NavigationItem
            key={item.href}
            item={item}
          />
        ))}
      </div>

      {/* CTA */}
      <div className="ml-10">
        <Link href={primaryNavigationButton.href}>
          <Button
            size="lg"
            className="
              rounded-full
              px-7
              font-semibold
              shadow-md
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:scale-[1.03]
              hover:shadow-xl
              active:scale-[0.98]
            "
          >
            {primaryNavigationButton.label}
          </Button>
        </Link>
      </div>
    </nav>
  );
}