import { Star } from "lucide-react";

interface RatingProps {
  rating: string;
  reviews: string;
}

export function Rating({
  rating,
  reviews,
}: RatingProps) {
  return (
    <div
      className="
        inline-flex
        items-center
        justify-center
        gap-3
        flex-wrap
        max-w-full
        text-center
        rounded-full
        border
        border-border
        bg-background
        px-4
        py-3
        shadow-sm
        sm:justify-start
        sm:gap-4
        sm:flex-nowrap
        sm:text-left
        sm:px-6
      "
    >
      {/* Stars */}
      <div className="flex items-center gap-1 text-amber-400">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className="h-5 w-5 fill-current"
          />
        ))}
      </div>

      {/* Divider */}
      <div className="hidden h-6 w-px bg-border sm:block" />

      {/* Rating */}
      <div className="flex items-center gap-2">
        <span className="text-lg font-bold text-foreground sm:text-xl">
          {rating}
        </span>

        <span className="text-sm text-muted-foreground">
          ({reviews} Reviews)
        </span>
      </div>
    </div>
  );
}