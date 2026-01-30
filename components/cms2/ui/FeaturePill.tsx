import { LucideIcon } from "lucide-react";

interface FeaturePillProps {
  icon: LucideIcon;
  label: string;
}

export default function FeaturePill({ icon: Icon, label }: FeaturePillProps) {
  return (
    <div className="flex items-center gap-2 bg-[rgb(var(--color-light))] border border-[rgb(var(--color-border))] rounded-full px-4 py-2 shadow-sm">
      <Icon className="w-4 h-4 text-[rgb(var(--color-primary))]" />
      <span className="text-xs sm:text-sm font-medium text-[rgb(var(--color-text-primary))]">
        {label}
      </span>
    </div>
  );
}
