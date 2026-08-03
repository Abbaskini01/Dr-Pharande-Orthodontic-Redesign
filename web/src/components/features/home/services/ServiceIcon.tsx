import {
  Sparkles,
  Smile,
  ShieldPlus,
  Baby,
  ScanLine,
  HeartPulse,
} from "lucide-react";

interface ServiceIconProps {
  icon: string;
}

export function ServiceIcon({ icon }: ServiceIconProps) {
  switch (icon) {
    case "Braces":
      return <Smile className="h-8 w-8 text-blue-600" />;

    case "Aligners":
      return <Sparkles className="h-8 w-8 text-blue-600" />;

    case "Tooth":
      return <ShieldPlus className="h-8 w-8 text-blue-600" />;

    case "Implant":
      return <HeartPulse className="h-8 w-8 text-blue-600" />;

    case "Child":
      return <Baby className="h-8 w-8 text-blue-600" />;

    case "Laser":
      return <ScanLine className="h-8 w-8 text-blue-600" />;

    default:
      return <Smile className="h-8 w-8 text-blue-600" />;
  }
}