import { Sparkles } from "lucide-react";
import { cmsData } from "@/data/cmsData";

export default function HeroBadge() {
  return (
    <div className="flex justify-center mb-8 animate-fade-in-delay-1">
      <div className="inline-flex items-center gap-2 bg-[rgb(var(--color-light))] border-2 border-[rgb(var(--color-primary))]/20 rounded-full px-6 py-3 shadow-2xl backdrop-blur-xl">
        <div className="relative">
          <Sparkles className="w-5 h-5 text-[rgb(var(--color-primary))] animate-pulse" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-[rgb(var(--color-primary-light))] rounded-full animate-ping"></span>
        </div>
        <span className="text-sm sm:text-base font-bold text-[rgb(var(--color-text-primary))] tracking-wide">
          {cmsData.hero.badge}
        </span>
      </div>
    </div>
  );
}
