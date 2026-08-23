import type { NavigationItem } from "./types";

import { routes } from "@/lib";

export const navigationItems: NavigationItem[] = [
  {
    label: "Home",
    href: routes.home,
  },
  {
    label: "The Clinic",
    href: "#trust",
  },
  {
    label: "Treatments",
    href: "#services",
  },
  {
    label: "Transformations",
    href: "#testimonials",
  },
  {
    label: "Contact",
    href: "#consultation",
  },
];

export const primaryNavigationButton = {
  label: "Book Consultation",
  href: routes.contact,
};

export const navigationConfig = {
  logo: {
    title: "Dr. Pharande",
    subtitle: "ORTHODONTIC CLINIC",
  },

  cta: {
    label: primaryNavigationButton.label,
    href: primaryNavigationButton.href,
  },
} as const;