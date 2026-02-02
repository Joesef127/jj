'use client';

import BackgroundElements from "@/components/cms3/BackgroundElements";
import Logo from "@/components/cms3/Logo";
import Badge from "@/components/cms3/Badge";
import Headline from "@/components/cms3/Headline";
import DescriptionText from "@/components/cms3/DescriptionText";
import SocialLinks from "@/components/cms3/SocialLinks";
import FooterText from "@/components/cms3/FooterText";
import AnimatedBackgroundPattern from "@/components/cms2/AnimatedBackgroundPattern";

export default function ComingSoon() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-[rgb(var(--color-background))]">
      {/* Decorative Background Elements */}
      <BackgroundElements />
      <AnimatedBackgroundPattern />

      {/* Main Content */}
      <div className="relative z-10 container-custom min-h-screen flex flex-col items-center justify-center py-12 px-4">
        
        {/* Logo */}
        <Logo />

        {/* Badge */}
        <Badge />

        {/* Headline */}
        <Headline />

        {/* Description */}
        <DescriptionText />

        {/* Social Links */}
        <SocialLinks />

        {/* Footer */}
        <FooterText />
      </div>
    </main>
  );
}
