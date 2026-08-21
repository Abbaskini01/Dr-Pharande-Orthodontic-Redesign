"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import { BookingDialog } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import {
  navigationItems,
  primaryNavigationButton,
} from "./navigation.data";

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function MobileDrawer({
  open,
  onClose,
}: MobileDrawerProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="
              fixed
              inset-0
              z-40
              bg-black/40
              backdrop-blur-sm
              lg:hidden
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.aside
            id="mobile-navigation"
            className="
              fixed
              right-0
              top-0
              z-50
              flex
              h-full
              w-80
              max-w-[85vw]
              flex-col
              border-l
              border-border
              bg-background
              shadow-2xl
              lg:hidden
            "
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 320,
              damping: 32,
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border p-6">

              <div>
                <h2 className="text-lg font-bold text-foreground">
                  Navigation
                </h2>

                <p className="text-sm text-muted-foreground">
                  Dr. Pharande Clinic
                </p>
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                aria-label="Close navigation menu"
              >
                <X className="h-5 w-5" />
              </Button>

            </div>

            {/* Links */}

            <nav className="flex flex-1 flex-col gap-2 p-6">
              {navigationItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" &&
                    pathname.startsWith(item.href));

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      `
                        rounded-xl
                        px-4
                        py-3
                        text-base
                        font-medium
                        transition-all
                        duration-300
                      `,
                      isActive
                        ? "bg-primary text-white"
                        : "text-foreground hover:bg-primary/10 hover:text-primary"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTA */}

            <div className="border-t border-border p-6">
              <BookingDialog
                buttonLabel={primaryNavigationButton.label}
                buttonVariant="default"
                buttonSize="lg"
                buttonClassName="w-full rounded-full"
                onSelect={() => onClose()}
              />
            </div>

          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}