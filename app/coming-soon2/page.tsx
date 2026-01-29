'use client';

import Image from 'next/image';
import { Instagram, Sparkles, TrendingUp, Shirt, Package } from 'lucide-react';
import { image } from '@/lib';

export default function ComingSoon() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[rgb(var(--color-light))] via-[rgb(var(--color-surface))] to-[rgb(var(--color-light))]">
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 20px 20px, rgb(var(--color-primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Decorative Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[rgb(var(--color-primary-light))]/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-[rgb(var(--color-primary))]/15 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute -bottom-40 left-1/4 w-[500px] h-[500px] bg-[rgb(var(--color-primary-light))]/20 rounded-full blur-3xl animate-float"></div>
      </div>

      {/* Hero Image Section - Left Side */}
      <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-1/2 overflow-hidden">
        <div className="relative h-full w-full">
          {/* Fashion Image */}
          <Image 
            src={image.colorfulGuy}
            alt="Fashion model"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--color-primary))]/20 to-transparent z-10"></div>
        </div>
      </div>

      {/* Main Content - Right Side */}
      <div className="relative z-10 min-h-screen flex items-center lg:ml-[50%]">
        <div className="w-full px-6 sm:px-12 lg:px-16 py-12">
          
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <Image 
              src="/jj_green_logo.png" 
              alt="JJ Clothing" 
              width={160} 
              height={80}
              priority
              className="h-16 w-auto drop-shadow-xl"
            />
          </div>

          {/* Badge with Icon */}
          <div className="mb-8 animate-fade-in-delay-1 inline-flex">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-[rgb(var(--color-primary-light))]/30 to-[rgb(var(--color-primary))]/30 border-2 border-[rgb(var(--color-primary))] text-[rgb(var(--color-primary))] px-5 py-2.5 rounded-full text-sm font-bold backdrop-blur-sm shadow-lg">
              <Sparkles className="w-4 h-4 animate-pulse" />
              LAUNCHING SOON
            </span>
          </div>

          {/* Headline with Dynamic Typography */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[rgb(var(--color-text-primary))] mb-6 animate-fade-in-delay-2 leading-[1.1] max-w-xl">
            Fresh Styles,
            <span className="block mt-2">
              <span className="bg-gradient-to-r from-[rgb(var(--color-primary))] via-[rgb(var(--color-primary-light))] to-[rgb(var(--color-primary))] bg-clip-text text-transparent animate-gradient">
                Premium Quality
              </span>
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-[rgb(var(--color-text-secondary))] mb-10 animate-fade-in-delay-3 leading-relaxed max-w-lg">
            We're crafting an exceptional shopping experience just for you. Get ready to discover fashion that speaks your language.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-3 mb-12 animate-fade-in-delay-4">
            <div className="flex items-center gap-2 bg-[rgb(var(--color-light))] border border-[rgb(var(--color-border))] rounded-full px-4 py-2 shadow-sm">
              <TrendingUp className="w-4 h-4 text-[rgb(var(--color-primary))]" />
              <span className="text-sm font-medium text-[rgb(var(--color-text-primary))]">Trendy Collections</span>
            </div>
            <div className="flex items-center gap-2 bg-[rgb(var(--color-light))] border border-[rgb(var(--color-border))] rounded-full px-4 py-2 shadow-sm">
              <Package className="w-4 h-4 text-[rgb(var(--color-primary))]" />
              <span className="text-sm font-medium text-[rgb(var(--color-text-primary))]">Fast Delivery</span>
            </div>
            <div className="flex items-center gap-2 bg-[rgb(var(--color-light))] border border-[rgb(var(--color-border))] rounded-full px-4 py-2 shadow-sm">
              <Shirt className="w-4 h-4 text-[rgb(var(--color-primary))]" />
              <span className="text-sm font-medium text-[rgb(var(--color-text-primary))]">Quality Assured</span>
            </div>
          </div>

          {/* CTA Section */}
          <div className="animate-fade-in-delay-5 mb-12">
            <p className="text-sm font-semibold text-[rgb(var(--color-text-primary))] mb-4 uppercase tracking-wider">
              Stay Connected
            </p>
            <a
              href="https://www.instagram.com/jandjicon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[rgb(var(--color-primary))] to-[rgb(var(--color-primary-light))] hover:from-[rgb(var(--color-action-primary-hover))] hover:to-[rgb(var(--color-primary))] text-[rgb(var(--color-light))] px-8 py-4 rounded-full font-semibold text-base shadow-xl hover:shadow-2xl transition-all hover:scale-105 group"
            >
              <Instagram className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Follow @jandjicon
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <p className="text-xs text-[rgb(var(--color-text-muted))] mt-4 max-w-sm">
              Be the first to know when we launch. Follow us on Instagram for exclusive updates, sneak peeks, and special offers.
            </p>
          </div>

          {/* Decorative Cards */}
          <div className="grid grid-cols-3 gap-4 max-w-md animate-fade-in-delay-6">
            <div className="bg-[rgb(var(--color-light))] border-2 border-[rgb(var(--color-primary-light))]/30 rounded-2xl p-4 text-center shadow-md hover:shadow-xl transition-shadow">
              <p className="text-3xl font-bold text-[rgb(var(--color-primary))]">100+</p>
              <p className="text-xs text-[rgb(var(--color-text-secondary))] mt-1">Products</p>
            </div>
            <div className="bg-[rgb(var(--color-light))] border-2 border-[rgb(var(--color-primary-light))]/30 rounded-2xl p-4 text-center shadow-md hover:shadow-xl transition-shadow">
              <p className="text-3xl font-bold text-[rgb(var(--color-primary))]">24/7</p>
              <p className="text-xs text-[rgb(var(--color-text-secondary))] mt-1">Support</p>
            </div>
            <div className="bg-[rgb(var(--color-light))] border-2 border-[rgb(var(--color-primary-light))]/30 rounded-2xl p-4 text-center shadow-md hover:shadow-xl transition-shadow">
              <p className="text-3xl font-bold text-[rgb(var(--color-primary))]">Fast</p>
              <p className="text-xs text-[rgb(var(--color-text-secondary))] mt-1">Shipping</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 right-6 lg:right-auto lg:left-1/2 lg:ml-12 text-right lg:text-left animate-fade-in-delay-6 z-20">
        <p className="text-xs text-[rgb(var(--color-text-muted))]">
          © 2026 JJ Clothing. All rights reserved.
        </p>
      </div>
    </main>
  );
}
