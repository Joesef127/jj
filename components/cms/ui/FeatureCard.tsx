import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="group bg-[rgb(var(--color-light))] border border-[rgb(var(--color-border))] rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all hover:border-[rgb(var(--color-primary))]/50">
      <div className="w-14 h-14 bg-gradient-to-br from-[rgb(var(--color-primary-light))]/20 to-[rgb(var(--color-primary))]/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <Icon className="w-7 h-7 text-[rgb(var(--color-primary))]" />
      </div>
      <h3 className="text-lg font-bold text-[rgb(var(--color-text-primary))] mb-2">
        {title}
      </h3>
      <p className="text-sm text-[rgb(var(--color-text-secondary))]">
        {description}
      </p>
    </div>
  );
}
