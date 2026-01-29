'use client';

import Image from 'next/image';
import { Instagram, Sparkles } from 'lucide-react';

export default function ComingSoon() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-[rgb(var(--color-background))]">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-[rgb(var(--color-primary-light))]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-[500px] h-[500px] bg-[rgb(var(--color-primary))]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[rgb(var(--color-primary-light))]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container-custom min-h-screen flex flex-col items-center justify-center py-12 px-4">
        
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <Image 
            src="/jj_green_logo.png" 
            alt="JJ Clothing" 
            width={180} 
            height={90}
            priority
            className="h-20 w-auto drop-shadow-lg"
          />
        </div>

        {/* Badge */}
        <div className="mb-6 animate-fade-in-delay-1">
          <span className="inline-flex items-center gap-2 bg-[rgb(var(--color-primary-light))]/20 border border-[rgb(var(--color-primary-light))]/30 text-[rgb(var(--color-primary))] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            Coming Soon
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-center text-[rgb(var(--color-text-primary))] mb-6 animate-fade-in-delay-2 max-w-3xl leading-tight">
          We're cooking Something Amazing!
          <span className="block mt-2 bg-gradient-to-r from-[rgb(var(--color-primary))] to-[rgb(var(--color-primary-light))] bg-clip-text text-3xl md:text-4xl text-transparent">
            Stay Tuned for Premium Style
          </span>
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-[rgb(var(--color-text-secondary))] text-center max-w-2xl mb-12 animate-fade-in-delay-3 leading-snug">
          Our new ecommerce platform is on its way. Be the first to know when we launch by following our instagram for updates below.
        </p>

        {/* Email Signup */}
        {/* <div className="w-full max-w-md mb-12 animate-fade-in-delay-4">
          <form onSubmit={handleSubmit} className="relative">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[rgb(var(--color-text-muted))]" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full pl-12 pr-32 py-4 rounded-full border-2 border-[rgb(var(--color-border))] bg-[rgb(var(--color-light))] text-[rgb(var(--color-text-primary))] placeholder:text-[rgb(var(--color-text-muted))] focus:border-[rgb(var(--color-primary))] focus:outline-none focus:ring-4 focus:ring-[rgb(var(--color-primary))]/10 transition-all shadow-sm hover:border-[rgb(var(--color-border-hover))]"
              />
              <button
                type="submit"
                disabled={isSubmitted}
                className="absolute right-2 top-1/2 -translate-y-1/2 btn btn-primary rounded-full px-6 py-2.5 flex items-center gap-2 disabled:opacity-50 hover:shadow-lg transition-all"
              >
                {isSubmitted ? 'Subscribed!' : 'Notify Me'}
                {!isSubmitted && <ArrowRight className="w-4 h-4" />}
              </button>
            </div>
          </form>
          <p className="text-xs text-[rgb(var(--color-text-muted))] text-center mt-3">
            Join our exclusive list for launch updates and special offers
          </p>
        </div> */}

        {/* Social Links */}
        <div className="animate-fade-in-delay-5">
          <p className="text-sm text-[rgb(var(--color-text-secondary))] text-center mb-4 font-medium">
            Follow Our Journey
          </p>
          <div className="flex justify-center">
            <a
              href="https://www.instagram.com/jandjicon"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[rgb(var(--color-surface))] hover:bg-[rgb(var(--color-primary))] text-[rgb(var(--color-text-primary))] hover:text-[rgb(var(--color-light))] flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg border border-[rgb(var(--color-border))] hover:border-transparent"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-8 left-0 right-0 text-center animate-fade-in-delay-6">
          <p className="text-sm text-[rgb(var(--color-text-muted))]">
            © 2026 JJ Clothing. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
}
