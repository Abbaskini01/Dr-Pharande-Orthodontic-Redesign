"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { CalendarRange, ExternalLink, MessageSquareText, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { getBookingChoices } from "@/content/booking";
import { cn } from "@/lib/utils";

export interface BookingChoice {
  id: string;
  label: string;
  description: string;
  href?: string;
  target?: string;
  rel?: string;
}

export const defaultBookingChoices: BookingChoice[] = getBookingChoices();

interface BookingDialogProps {
  buttonLabel?: string;
  triggerContent?: ReactNode;
  buttonVariant?: "default" | "outline" | "secondary" | "ghost" | "destructive" | "link";
  buttonSize?: "default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg";
  buttonClassName?: string;
  title?: string;
  description?: string;
  choices?: BookingChoice[];
  onSelect?: (choice: BookingChoice) => void;
}

export function BookingDialog({
  buttonLabel = "Book Consultation",
  triggerContent,
  buttonVariant = "default",
  buttonSize = "lg",
  buttonClassName,
  title = "Book Consultation",
  description = "Choose how you'd like to continue.",
  choices = defaultBookingChoices,
  onSelect,
}: BookingDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState<BookingChoice | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const titleId = useId();
  const descriptionId = useId();
  const dialogId = useId();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus();
    } else {
      triggerRef.current?.focus();
    }
  }, [isOpen]);

  const handleChoiceSelect = (choice: BookingChoice) => {
    setSelectedChoice(choice);
    onSelect?.(choice);
    setIsOpen(false);

    if (choice.href) {
      if (typeof window !== "undefined") {
        window.open(choice.href, choice.target || "_blank", choice.rel || "noopener,noreferrer");
      }
    }
  };

  return (
    <>
      <Button
        ref={triggerRef}
        type="button"
        variant={buttonVariant}
        size={buttonSize}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls={dialogId}
        onClick={() => setIsOpen(true)}
        className={cn(
          "rounded-full",
          buttonClassName,
        )}
      >
        {triggerContent ?? buttonLabel}
      </Button>

      {isOpen &&
        createPortal(
          <div className="fixed inset-0 z-[60] flex items-end justify-center bg-slate-950/60 p-4 sm:items-center">
            <button
              type="button"
              aria-label="Close booking dialog"
              className="absolute inset-0"
              onClick={() => setIsOpen(false)}
            />

            <div
              id={dialogId}
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              aria-describedby={descriptionId}
              className="
                relative
                z-10
                flex
                max-h-[calc(100dvh-2rem)]
                w-full
                max-w-lg
                flex-col
                overflow-hidden
                rounded-t-3xl
                border
                border-border
                bg-background
                shadow-2xl
                sm:rounded-3xl
              "
            >
              <div className="shrink-0 p-5 pb-0">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                      Concierge
                    </p>
                    <h2
                      id={titleId}
                      className="mt-2 text-2xl font-bold text-foreground"
                    >
                      {title}
                    </h2>
                  </div>

                  <Button
                    ref={closeButtonRef}
                    type="button"
                    variant="ghost"
                    size="icon"
                    aria-label="Close booking selection"
                    onClick={() => setIsOpen(false)}
                    className="rounded-full"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="min-h-0 flex-1 overflow-y-auto p-5 pt-4">
                <p
                  id={descriptionId}
                  className="text-sm leading-6 text-muted-foreground"
                >
                  {description}
                </p>

                <div className="mt-6 grid gap-3">
                  {choices.map((choice) => {
                    const isSelected = selectedChoice?.id === choice.id;

                    return (
                      <button
                        key={choice.id}
                        type="button"
                        onClick={() => handleChoiceSelect(choice)}
                        className={cn(
                          "flex w-full items-start gap-3 rounded-2xl border p-4 text-left transition-all duration-300",
                          isSelected
                            ? "border-primary bg-primary/5"
                            : "border-border bg-card hover:border-primary/40 hover:bg-primary/5"
                        )}
                        aria-label={choice.label}
                      >
                        <div
                          className={cn(
                            "mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
                            isSelected ? "bg-primary text-white" : "bg-primary/10 text-primary"
                          )}
                        >
                          {choice.id === "book-online" ? (
                            <CalendarRange className="h-5 w-5" />
                          ) : (
                            <MessageSquareText className="h-5 w-5" />
                          )}
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center justify-between gap-2 text-base font-semibold text-foreground">
                            <span>{choice.label}</span>
                            {choice.href && (
                              <ExternalLink className="h-4 w-4 text-primary shrink-0" />
                            )}
                          </div>
                          <div className="mt-1 text-sm leading-6 text-muted-foreground">
                            {choice.description}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <p aria-live="polite" className="mt-4 text-sm text-muted-foreground">
                  {selectedChoice
                    ? `Selected: ${selectedChoice.label}${selectedChoice.href ? " (Opening destination...)" : ""}`
                    : "No selection made yet."}
                </p>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
