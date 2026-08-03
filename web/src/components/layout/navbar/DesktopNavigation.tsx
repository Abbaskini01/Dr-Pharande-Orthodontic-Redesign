import { Button } from "@/components/ui/button";

import { navigationItems, primaryNavigationButton } from "./navigation.data";
import { NavigationItem } from "./NavigationItem";

export function DesktopNavigation() {
  return (
    <nav
      className="hidden items-center gap-8 lg:flex"
      aria-label="Primary Navigation"
    >
      {navigationItems.map((item) => (
        <NavigationItem
          key={item.href}
          item={item}
        />
      ))}

<Button
  size="lg"
  className="
    rounded-full
    px-6
    font-semibold
    shadow-sm
    transition-all
    hover:scale-105
    hover:shadow-lg
  "
>
  {primaryNavigationButton.label}
</Button>    </nav>
  );
}