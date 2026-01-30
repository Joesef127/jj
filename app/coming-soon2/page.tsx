"use client";

import AnimatedBackgroundPattern from "@/components/cms2/AnimatedBackgroundPattern";
import DecorativeBlobs from "@/components/cms2/DecorativeBlobs";
import HeroImageSection from "@/components/cms2/HeroImageSection";
import LogoSection from "@/components/cms2/LogoSection";
import LaunchBadge from "@/components/cms2/LaunchBadge";
import MainHeadline from "@/components/cms2/MainHeadline";
import Description from "@/components/cms2/Description";
import FeaturePills from "@/components/cms2/FeaturePills";
import CTAButton from "@/components/cms2/CTAButton";
import StatsCards from "@/components/cms2/StatsCards";
import Footer from "@/components/cms2/Footer";

export default function ComingSoon() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[rgb(var(--color-light))] via-[rgb(var(--color-surface))] to-[rgb(var(--color-light))]">
      {/* Animated Background Pattern */}
      <AnimatedBackgroundPattern />

      {/* Decorative Blobs */}
      <DecorativeBlobs />

      {/* Hero Image Section - Left Side */}
      <HeroImageSection />

      {/* Main Content - Right Side */}
      <div className="relative z-10 min-h-screen flex flex-col items-center lg:justify-self-end lg:w-3/5">
        <div className="w-full px-6 sm:px-12 lg:px-16 pt-10 pb-6">
          {/* Logo */}
          <LogoSection />

          {/* Badge with Icon */}
          <LaunchBadge />

          {/* Headline with Dynamic Typography */}
          <MainHeadline />

          {/* Description */}
          <Description />

          {/* Feature Pills */}
          <FeaturePills />

          {/* CTA Section */}
          <CTAButton />

          {/* Decorative Cards */}
          <StatsCards />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}
