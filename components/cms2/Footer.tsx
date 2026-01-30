import { cms2Data } from "@/data/cms2Data";

export default function Footer() {
  return (
    <div className="px-6 sm:px-12 lg:px-16 py-6 w-full animate-fade-in-delay-6 z-20">
      <p className="text-xs text-[rgb(var(--color-text-muted))]">
        {cms2Data.footer.copyright}
      </p>
    </div>
  );
}
