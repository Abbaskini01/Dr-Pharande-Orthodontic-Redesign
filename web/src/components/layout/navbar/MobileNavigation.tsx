"use client";

import { useState } from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";

import { MobileDrawer } from "./MobileDrawer";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="lg:hidden">
        <Button
          variant="ghost"
          size="icon"
          aria-label="Open navigation menu"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(true)}
          className="
            rounded-full
            border
            border-transparent
            transition-all
            duration-300
            hover:scale-105
            hover:border-primary/20
            hover:bg-primary/10
            hover:shadow-md
            active:scale-95
          "
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      <MobileDrawer
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}