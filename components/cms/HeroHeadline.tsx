import { cmsData } from "@/data/cmsData";

export default function HeroHeadline() {
  return (
    <div className="text-center mb-8 animate-fade-in-delay-2">
      <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold text-[rgb(var(--color-text-primary))] leading-[0.95] mb-6">
        {cmsData.hero.headline.main}
        <span className="block mt-2 bg-gradient-to-r from-[rgb(var(--color-primary))] via-[rgb(var(--color-primary-light))] to-[rgb(var(--color-primary))] bg-clip-text text-transparent animate-gradient">
          {cmsData.hero.headline.highlight}
        </span>
      </h1>
      <p className="text-sm sm:text-xl md:text-2xl text-[rgb(var(--color-text-secondary))] max-w-3xl mx-auto leading-relaxed font-medium">
        {cmsData.hero.description}
      </p>
    </div>
  );
}
