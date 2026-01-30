
import { cms3Data } from "@/data/cms3Data";

export default function FooterText() {
  return (
    <div className="px-6 sm:px-12 lg:px-16 py-6 w-full animate-fade-in-delay-6 z-20">
      <p className="text-xs text-center text-[rgb(var(--color-text-muted))]">
        {cms3Data.footer.copyright}
      </p>
    </div>
  );
}
