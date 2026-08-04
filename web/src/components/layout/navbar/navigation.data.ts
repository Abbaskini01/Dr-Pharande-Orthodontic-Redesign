import type { NavigationItem } from "./types";

export const navigationItems: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Treatments",
    href: "/treatments",
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "Testimonials",
    href: "/testimonials",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const primaryNavigationButton = {
  label: "Book Appointment",
  href: "/contact",
};

export const navigationConfig = {
  logo: {
    title: "Dr. Pharande",
    subtitle: "ORTHODONTIC CLINIC",
  },

  cta: {
    label: "Book Appointment",
    href: "/contact",
  },
} as const;