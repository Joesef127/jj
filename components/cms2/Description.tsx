import { cms2Data } from "@/data/cms2Data";

export default function Description() {
  return (
    <p className="text-base sm:text-lg text-[rgb(var(--color-text-secondary))] mb-8 animate-fade-in-delay-3 leading-relaxed max-w-lg">
      {cms2Data.description}
    </p>
  );
}
