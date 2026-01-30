import { Sparkles } from "lucide-react";
import { cms2Data } from "@/data/cms2Data";

export default function LaunchBadge() {
  return (
    <div className="mb-8 animate-fade-in-delay-1 inline-flex">
      <span className="inline-flex items-center gap-2 bg-gradient-to-r from-[rgb(var(--color-primary-light))]/30 to-[rgb(var(--color-primary))]/30 border-2 border-[rgb(var(--color-primary))] text-[rgb(var(--color-primary))] px-5 py-2.5 rounded-full text-sm font-bold backdrop-blur-sm shadow-lg">
        <Sparkles className="w-4 h-4 animate-pulse" />
        {cms2Data.badge}
      </span>
    </div>
  );
}
