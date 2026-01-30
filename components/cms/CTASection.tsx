import { Instagram, ArrowRight } from "lucide-react";
import { cmsData } from "@/data/cmsData";

export default function CTASection() {
  return (
    <div className="flex flex-col items-center gap-6 animate-fade-in-delay-4">
      <div className="text-center">
        <p className="text-sm font-bold text-[rgb(var(--color-text-primary))] mb-2 uppercase tracking-widest">
          {cmsData.cta.title}
        </p>
        <p className="text-sm text-[rgb(var(--color-text-muted))] max-w-md">
          {cmsData.cta.description}
        </p>
      </div>

      <button className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[rgb(var(--color-primary))] to-[rgb(var(--color-primary-light))] hover:from-[rgb(var(--color-action-primary-hover))] hover:to-[rgb(var(--color-action-secondary-hover))] text-[rgb(var(--color-light))] px-6 py-2.5 sm:px-8 sm:py-4 rounded-full shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(122,158,62,0.5)] transition-all hover:scale-105 overflow-hidden">
        <Instagram className="w-6 h-6 group-hover:rotate-12 transition-transform" />

        <a
          href={cmsData.cta.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-sm sm:text-base md:text-lg"
        >
          <span>{cmsData.cta.buttonText}</span>
        </a>

        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />

        {/* Shine effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </button>
    </div>
  );
}
