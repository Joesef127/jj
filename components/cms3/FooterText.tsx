import { cms3Data } from "@/data/cms3Data";

export default function FooterText() {
  return (
    <div className="absolute bottom-8 left-0 right-0 text-center animate-fade-in-delay-6">
      <p className="text-sm text-[rgb(var(--color-text-muted))]">
        {cms3Data.footer.copyright}
      </p>
    </div>
  );
}
