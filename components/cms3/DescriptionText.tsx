import { cms3Data } from "@/data/cms3Data";

export default function DescriptionText() {
  return (
    <p className="text-sm sm:text-base md:text-lg text-[rgb(var(--color-text-secondary))] text-center max-w-2xl mb-12 animate-fade-in-delay-3 leading-snug">
      {cms3Data.description}
    </p>
  );
}
