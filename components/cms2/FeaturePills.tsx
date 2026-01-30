import FeaturePill from "./ui/FeaturePill";
import { cms2Data } from "@/data/cms2Data";

export default function FeaturePills() {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 animate-fade-in-delay-4">
      {cms2Data.featurePills.map((pill, index) => (
        <FeaturePill key={index} icon={pill.icon} label={pill.label} />
      ))}
    </div>
  );
}
