import { Instagram } from "lucide-react";
import { cms3Data } from "@/data/cms3Data";

export default function SocialLinks() {
  return (
    <div className="animate-fade-in-delay-5">
      <p className="text-sm text-[rgb(var(--color-text-secondary))] text-center mb-4 font-medium">
        {cms3Data.social.title}
      </p>
      <div className="flex justify-center">
        <a
          href={cms3Data.social.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[rgb(var(--color-surface))] hover:bg-[rgb(var(--color-primary))] text-[rgb(var(--color-text-primary))] hover:text-[rgb(var(--color-light))] flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg border border-[rgb(var(--color-border))] hover:border-transparent"
          aria-label="Follow us on Instagram"
        >
          <Instagram className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
