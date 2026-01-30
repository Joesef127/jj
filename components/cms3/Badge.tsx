import { Sparkles } from "lucide-react";
import { cms3Data } from "@/data/cms3Data";

export default function Badge() {
  return (
    <div className="mb-6 animate-fade-in-delay-1">
      <span className="inline-flex items-center gap-2 bg-[rgb(var(--color-primary-light))]/20 border border-[rgb(var(--color-primary-light))]/30 text-[rgb(var(--color-primary))] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
        <Sparkles className="w-4 h-4" />
        {cms3Data.badge}
      </span>
    </div>
  );
}
