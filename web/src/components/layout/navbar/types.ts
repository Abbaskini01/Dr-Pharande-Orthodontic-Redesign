import type { LucideIcon } from "lucide-react";

export interface NavigationItem {
  label: string;
  href: string;

  /**
   * Optional icon for future mobile navigation
   */
  icon?: LucideIcon;

  /**
   * External URL support
   */
  external?: boolean;
}