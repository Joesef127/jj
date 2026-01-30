import { cms2Data } from "@/data/cms2Data";

export default function MainHeadline() {
  return (
    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[rgb(var(--color-text-primary))] mb-6 animate-fade-in-delay-2 leading-[1.1] max-w-xl">
      {cms2Data.headline.main}
      <span className="block mt-2">
        <span className="bg-gradient-to-r from-[rgb(var(--color-primary))] via-[rgb(var(--color-primary-light))] to-[rgb(var(--color-primary))] bg-clip-text text-transparent animate-gradient">
          {cms2Data.headline.highlight}
        </span>
      </span>
    </h1>
  );
}
