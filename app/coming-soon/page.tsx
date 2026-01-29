'use client';

import Image from 'next/image';
import { Instagram, Sparkles, ArrowRight, ShoppingBag, Zap, Star, Package, Shirt, TrendingUp } from 'lucide-react';

export default function ComingSoon() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-[rgb(var(--color-light))]">
      
      {/* Mega Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-gradient-to-br from-[rgb(var(--color-primary-light))]/30 to-[rgb(var(--color-primary))]/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-1/2 -left-1/4 w-[900px] h-[900px] bg-gradient-to-tr from-[rgb(var(--color-primary))]/25 to-[rgb(var(--color-primary-light))]/15 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-gradient-to-br from-[rgb(var(--color-primary-light))]/10 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      {/* Top Decorative Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[rgb(var(--color-primary))] to-transparent opacity-60"></div>

      {/* Main Container */}
      <div className="relative z-10 container-custom min-h-screen flex flex-col">
        
        {/* Header */}
        <header className="pt-6 pb-12 flex items-center justify-between animate-fade-in">
          <Image 
            src="/jj_green_logo.png" 
            alt="JJ Clothing" 
            width={140} 
            height={70}
            priority
            className="h-14 w-auto drop-shadow-2xl"
          />
          <div className="flex items-center gap-3">
            <a 
              href="https://www.instagram.com/jandjicon"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 text-sm font-medium text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-primary))] transition-colors"
            >
              <Instagram className="w-4 h-4" />
              @jandjicon
            </a>
          </div>
        </header>

        {/* Hero Section */}
        <div className="flex-1 flex items-center justify-center py-12">
          <div className="w-full max-w-5xl mx-auto">
            
            {/* Badge */}
            <div className="flex justify-center mb-8 animate-fade-in-delay-1">
              <div className="inline-flex items-center gap-2 bg-[rgb(var(--color-light))] border-2 border-[rgb(var(--color-primary))]/20 rounded-full px-6 py-3 shadow-2xl backdrop-blur-xl">
                <div className="relative">
                  <Sparkles className="w-5 h-5 text-[rgb(var(--color-primary))] animate-pulse" />
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-[rgb(var(--color-primary-light))] rounded-full animate-ping"></span>
                </div>
                <span className="text-base font-bold text-[rgb(var(--color-text-primary))] tracking-wide">
                  COMING VERY SOON
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="text-center mb-8 animate-fade-in-delay-2">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[rgb(var(--color-text-primary))] leading-[0.95] mb-6">
                Fashion That
                <span className="block mt-2 bg-gradient-to-r from-[rgb(var(--color-primary))] via-[rgb(var(--color-primary-light))] to-[rgb(var(--color-primary))] bg-clip-text text-transparent animate-gradient">
                  Speaks Volumes
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-[rgb(var(--color-text-secondary))] max-w-3xl mx-auto leading-relaxed font-medium">
                We're crafting something extraordinary. An ecommerce experience that redefines style, quality, and convenience.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12 animate-fade-in-delay-3">
              <div className="group bg-[rgb(var(--color-light))] border border-[rgb(var(--color-border))] rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all hover:border-[rgb(var(--color-primary))]/50">
                <div className="w-14 h-14 bg-gradient-to-br from-[rgb(var(--color-primary-light))]/20 to-[rgb(var(--color-primary))]/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-7 h-7 text-[rgb(var(--color-primary))]" />
                </div>
                <h3 className="text-lg font-bold text-[rgb(var(--color-text-primary))] mb-2">Lightning Fast</h3>
                <p className="text-sm text-[rgb(var(--color-text-secondary))]">Seamless shopping experience</p>
              </div>

              <div className="group bg-[rgb(var(--color-light))] border border-[rgb(var(--color-border))] rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all hover:border-[rgb(var(--color-primary))]/50">
                <div className="w-14 h-14 bg-gradient-to-br from-[rgb(var(--color-primary-light))]/20 to-[rgb(var(--color-primary))]/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Star className="w-7 h-7 text-[rgb(var(--color-primary))]" />
                </div>
                <h3 className="text-lg font-bold text-[rgb(var(--color-text-primary))] mb-2">Premium Quality</h3>
                <p className="text-sm text-[rgb(var(--color-text-secondary))]">Curated collections</p>
              </div>

              <div className="group bg-[rgb(var(--color-light))] border border-[rgb(var(--color-border))] rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all hover:border-[rgb(var(--color-primary))]/50">
                <div className="w-14 h-14 bg-gradient-to-br from-[rgb(var(--color-primary-light))]/20 to-[rgb(var(--color-primary))]/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <ShoppingBag className="w-7 h-7 text-[rgb(var(--color-primary))]" />
                </div>
                <h3 className="text-lg font-bold text-[rgb(var(--color-text-primary))] mb-2">Easy Shopping</h3>
                <p className="text-sm text-[rgb(var(--color-text-secondary))]">One-click checkout</p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col items-center gap-6 animate-fade-in-delay-4">
              <div className="text-center">
                <p className="text-sm font-bold text-[rgb(var(--color-text-primary))] mb-2 uppercase tracking-widest">
                  Join The Wait List
                </p>
                <p className="text-sm text-[rgb(var(--color-text-muted))] max-w-md">
                  Follow us on Instagram for exclusive updates, behind-the-scenes content, and be first to shop when we launch
                </p>
              </div>
              
              <a
                href="https://www.instagram.com/jandjicon"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[rgb(var(--color-primary))] to-[rgb(var(--color-primary-light))] hover:from-[rgb(var(--color-action-primary-hover))] hover:to-[rgb(var(--color-action-secondary-hover))] text-[rgb(var(--color-light))] px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(122,158,62,0.5)] transition-all hover:scale-105"
              >
                <Instagram className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                <span>Follow @jandjicon</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                
                {/* Shine effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </a>

              {/* Social Proof */}
              <div className="flex items-center gap-6 text-center pt-4">
                <div>
                  <p className="text-3xl font-bold text-[rgb(var(--color-primary))]">500+</p>
                  <p className="text-xs text-[rgb(var(--color-text-muted))] font-medium">Early Supporters</p>
                </div>
                <div className="h-12 w-px bg-[rgb(var(--color-border))]"></div>
                <div>
                  <p className="text-3xl font-bold text-[rgb(var(--color-primary))]">100+</p>
                  <p className="text-xs text-[rgb(var(--color-text-muted))] font-medium">Products Ready</p>
                </div>
                <div className="h-12 w-px bg-[rgb(var(--color-border))]"></div>
                <div>
                  <p className="text-3xl font-bold text-[rgb(var(--color-primary))]">24/7</p>
                  <p className="text-xs text-[rgb(var(--color-text-muted))] font-medium">Support Team</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Footer */}
        <footer className="py-8 text-center animate-fade-in-delay-6">
          <p className="text-xs text-[rgb(var(--color-text-muted))]">
            © 2026 JJ Clothing. All rights reserved. | Crafted with care
          </p>
        </footer>

      </div>

      {/* Floating Product Cards (Decorative) */}
      <div className="hidden lg:block absolute top-1/4 right-12 animate-float-slow pointer-events-none">
        <div className="w-64 h-80 bg-[rgb(var(--color-light))] rounded-3xl shadow-2xl border border-[rgb(var(--color-border))] p-6 backdrop-blur-xl rotate-6 hover:rotate-0 transition-transform duration-500">
          <div className="w-full h-48 bg-gradient-to-br from-[rgb(var(--color-surface))] to-[rgb(var(--color-border))] rounded-2xl mb-4 flex items-center justify-center">
            <ShoppingBag className="w-16 h-16 text-[rgb(var(--color-text-muted))]" />
          </div>
          <div className="space-y-2">
            <div className="h-4 bg-[rgb(var(--color-surface))] rounded-full w-3/4"></div>
            <div className="h-3 bg-[rgb(var(--color-surface))] rounded-full w-1/2"></div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block absolute bottom-1/4 left-12 animate-float-delayed pointer-events-none">
        <div className="w-48 h-64 bg-[rgb(var(--color-light))] rounded-3xl shadow-2xl border border-[rgb(var(--color-border))] p-4 backdrop-blur-xl -rotate-6 hover:rotate-0 transition-transform duration-500">
          <div className="w-full h-36 bg-gradient-to-br from-[rgb(var(--color-surface))] to-[rgb(var(--color-border))] rounded-2xl mb-3 flex items-center justify-center">
            <Star className="w-12 h-12 text-[rgb(var(--color-text-muted))]" />
          </div>
          <div className="space-y-2">
            <div className="h-3 bg-[rgb(var(--color-surface))] rounded-full w-full"></div>
            <div className="h-3 bg-[rgb(var(--color-surface))] rounded-full w-2/3"></div>
          </div>
        </div>
      </div>

    </main>
  );
}
