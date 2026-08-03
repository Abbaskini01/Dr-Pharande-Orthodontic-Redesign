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
    <div className="flex items-center justify-center gap-3">
      <div className="flex text-yellow-500">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className="h-6 w-6 fill-current"
          />
        ))}
      </div>

      <span className="text-xl font-semibold">
        {rating}
      </span>

      <span className="text-slate-500">
        ({reviews} Reviews)
      </span>
    </div>
  );
}