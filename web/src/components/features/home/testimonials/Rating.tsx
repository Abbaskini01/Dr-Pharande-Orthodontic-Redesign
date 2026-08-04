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
        gap-4
        rounded-full
        border
        border-border
        bg-background
        px-6
        py-3
        shadow-sm
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
      <div className="h-6 w-px bg-border" />

      {/* Rating */}
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold text-foreground">
          {rating}
        </span>

        <span className="text-sm text-muted-foreground">
          ({reviews} Reviews)
        </span>
      </div>
    </div>
  );
}