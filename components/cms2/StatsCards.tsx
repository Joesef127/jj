import StatCard from "./ui/StatCard";
import { cms2Data } from "@/data/cms2Data";

export default function StatsCards() {
  return (
    <div className="grid grid-cols-3 gap-4 max-w-md animate-fade-in-delay-6">
      {cms2Data.stats.map((stat, index) => (
        <StatCard key={index} value={stat.value} label={stat.label} />
      ))}
    </div>
  );
}
