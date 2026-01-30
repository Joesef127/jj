import { cmsData } from "@/data/cmsData";

export default function ComingSoonFooter() {
  return (
    <footer className="py-8 text-center animate-fade-in-delay-6">
      <p className="text-xs text-[rgb(var(--color-text-muted))]">
        {cmsData.footer.copyright}
      </p>
    </footer>
  );
}
