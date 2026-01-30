import FeatureCard from "./ui/FeatureCard";
import { cmsData } from "@/data/cmsData";

export default function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8 animate-fade-in-delay-3">
      {cmsData.features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
}
