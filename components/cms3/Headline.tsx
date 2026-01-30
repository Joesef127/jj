import { cms3Data } from "@/data/cms3Data";

export default function Headline() {
  return (
    <h1 className="text-5xl md:text-7xl font-bold text-center text-[rgb(var(--color-text-primary))] mb-6 animate-fade-in-delay-2 max-w-3xl leading-tight">
      {cms3Data.headline.main}
      <span className="block mt-2 bg-gradient-to-r from-[rgb(var(--color-primary))] to-[rgb(var(--color-primary-light))] bg-clip-text text-3xl md:text-4xl text-transparent">
        {cms3Data.headline.highlight}
      </span>
    </h1>
  );
}
