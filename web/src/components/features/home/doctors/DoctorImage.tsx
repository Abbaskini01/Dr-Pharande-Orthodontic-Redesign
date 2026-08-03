import { UserRound } from "lucide-react";

interface DoctorImageProps {
  name: string;
}

export function DoctorImage({ name }: DoctorImageProps) {
  return (
    <div className="flex h-72 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-50 via-white to-slate-100">
      <div className="text-center">
        <UserRound className="mx-auto mb-4 h-16 w-16 text-blue-500" />
        <p className="font-semibold text-slate-700">{name}</p>
        <p className="mt-1 text-sm text-slate-500">
          Official Photograph
        </p>
      </div>
    </div>
  );
}