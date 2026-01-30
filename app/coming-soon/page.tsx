"use client";

import BackgroundGradients from "@/components/cms/BackgroundGradients";
import TopDecorativeBar from "@/components/cms/TopDecorativeBar";
import ComingSoonHeader from "@/components/cms/ComingSoonHeader";
import HeroBadge from "@/components/cms/HeroBadge";
import HeroHeadline from "@/components/cms/HeroHeadline";
import FeatureGrid from "@/components/cms/FeatureGrid";
import CTASection from "@/components/cms/CTASection";
import ComingSoonFooter from "@/components/cms/ComingSoonFooter";
import FloatingCards from "@/components/cms/FloatingCards";
import AnimatedBackgroundPattern from "@/components/cms2/AnimatedBackgroundPattern";

export default function ComingSoon() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-[rgb(var(--color-light))]">
      {/* Mega Background Gradient Orbs */}
      <BackgroundGradients />
      <AnimatedBackgroundPattern />

      {/* Top Decorative Bar */}
      <TopDecorativeBar />

      {/* Main Container */}
      <div className="relative z-10 container-custom min-h-screen flex flex-col">
        {/* Header */}
        <ComingSoonHeader />

        {/* Hero Section */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-5xl mx-auto">
            {/* Badge */}
            <HeroBadge />

            {/* Main Headline */}
            <HeroHeadline />

            {/* Feature Grid */}
            <FeatureGrid />

            {/* CTA Section */}
            <CTASection />
          </div>
        </div>

        {/* Footer */}
        <ComingSoonFooter />
      </div>

      {/* Floating Product Cards (Decorative) */}
      <FloatingCards />
    </main>
  );
}
