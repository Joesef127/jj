import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[rgb(var(--color-background))]">
      {/* Header Preview */}
      <header className="border-b border-[rgb(var(--color-border))] bg-[rgb(var(--color-light))]">
        <div className="container-custom py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <Image 
              src="/jj_green_logo.png" 
              alt="J&J Clothing Logo" 
              width={120} 
              height={60}
              priority
              className="h-8 sm:h-10 md:h-12 w-auto"
            />
            <nav className="flex gap-3 sm:gap-4 md:gap-6 text-sm sm:text-base">
              <Link href="/coming-soon" className="text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-primary))] transition-colors">Coming Soon</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section Preview */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-[rgb(var(--color-surface))] to-[rgb(var(--color-light))]">
        <div className="container-custom text-center px-4 sm:px-6">
          <div className="flex justify-center mb-6 sm:mb-8">
            <Image 
              src="/jj_white_logo.png" 
              alt="J&J Clothing" 
              width={200} 
              height={100}
              className="h-16 sm:h-20 md:h-24 w-auto"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-[rgb(var(--color-text-primary))] px-4">
            Welcome to J&J Clothing
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[rgb(var(--color-text-secondary))] mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Your next best ecommerce platform is getting ready! <br /> See the color system in action below.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <button className="btn btn-primary px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base whitespace-nowrap">
              Primary Action (Olive Green)
            </button>
            <button className="btn btn-secondary px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base whitespace-nowrap">
              Secondary Action (Lime Green)
            </button>
          </div>
        </div>
      </section>

      {/* Color System Demo */}
      <section className="py-12 sm:py-14 md:py-16">
        <div className="container-custom px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center">Color System Preview</h2>
          
          {/* Button Styles */}
          <div className="mb-8 sm:mb-10 md:mb-12">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Button Styles</h3>
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
              <button className="btn btn-primary text-sm sm:text-base">Primary Button</button>
              <button className="btn btn-secondary text-sm sm:text-base">Secondary Button</button>
              <button className="btn btn-outline text-sm sm:text-base">Outline Button</button>
              <button className="btn btn-ghost text-sm sm:text-base">Ghost Button</button>
            </div>
          </div>

          {/* Product Cards Preview */}
          <div className="mb-8 sm:mb-10 md:mb-12">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Product Card Examples</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="card p-3 sm:p-4 md:p-5">
                  <div className="bg-[rgb(var(--color-surface))] h-40 sm:h-44 md:h-48 rounded-[var(--radius-md)] mb-3 sm:mb-4 flex items-center justify-center">
                    <span className="text-xs sm:text-sm text-[rgb(var(--color-text-muted))]">Product Image</span>
                  </div>
                  <div className="mb-2">
                    <span className="inline-block bg-[rgb(var(--color-accent))] text-[rgb(var(--color-dark))] text-xs font-semibold px-2 py-1 rounded">
                      NEW
                    </span>
                  </div>
                  <h4 className="font-semibold text-sm sm:text-base text-[rgb(var(--color-text-primary))] mb-2">
                    Product Name {item}
                  </h4>
                  <p className="text-[rgb(var(--color-text-secondary))] text-xs sm:text-sm mb-3">
                    Product description goes here
                  </p>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-bold text-base sm:text-lg">$49.99</span>
                    <span className="text-sm sm:text-base text-[rgb(var(--color-text-muted))] line-through">$69.99</span>
                  </div>
                  <button className="btn btn-primary w-full text-sm sm:text-base">Add to Cart</button>
                </div>
              ))}
            </div>
          </div>

          {/* Color Palette Reference */}
          <div className="mb-8 sm:mb-10 md:mb-12">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Brand Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              <div className="text-center">
                <div className="bg-[rgb(var(--color-primary))] h-20 sm:h-24 rounded-[var(--radius-lg)] mb-2"></div>
                <p className="text-xs sm:text-sm font-medium">Olive Green</p>
                <p className="text-xs text-[rgb(var(--color-text-muted))]">#7A9E3E</p>
              </div>
              <div className="text-center">
                <div className="bg-[rgb(var(--color-primary-light))] h-20 sm:h-24 rounded-[var(--radius-lg)] mb-2"></div>
                <p className="text-xs sm:text-sm font-medium">Lime Green</p>
                <p className="text-xs text-[rgb(var(--color-text-muted))]">#C5D93D</p>
              </div>
              <div className="text-center">
                <div className="bg-[rgb(var(--color-dark))] h-20 sm:h-24 rounded-[var(--radius-lg)] mb-2"></div>
                <p className="text-xs sm:text-sm font-medium">Black</p>
                <p className="text-xs text-[rgb(var(--color-text-muted))]">#000000</p>
              </div>
              <div className="text-center">
                <div className="bg-[rgb(var(--color-light))] border-2 border-[rgb(var(--color-border))] h-20 sm:h-24 rounded-[var(--radius-lg)] mb-2"></div>
                <p className="text-xs sm:text-sm font-medium">White</p>
                <p className="text-xs text-[rgb(var(--color-text-muted))]">#FFFFFF</p>
              </div>
            </div>
          </div>

          {/* Form Example */}
          <div className="max-w-md mx-auto">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-center">Form Elements</h3>
            <div className="card p-4 sm:p-5 md:p-6">
              <div className="mb-3 sm:mb-4">
                <label className="block text-xs sm:text-sm font-medium mb-2">Email Address</label>
                <input type="email" placeholder="you@example.com" className="input text-sm sm:text-base" />
              </div>
              <div className="mb-4 sm:mb-5">
                <label className="block text-xs sm:text-sm font-medium mb-2">Password</label>
                <input type="password" placeholder="••••••••" className="input text-sm sm:text-base" />
              </div>
              <button className="btn btn-primary w-full text-sm sm:text-base">Sign In</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Preview */}
      <footer className="bg-[rgb(var(--color-surface-dark))] text-[rgb(var(--color-text-inverse))] py-8 sm:py-10 md:py-12 mt-12 sm:mt-14 md:mt-16">
        <div className="container-custom text-center px-4 sm:px-6">
          <p className="text-xs sm:text-sm">© 2026 J&J Clothing. All rights reserved.</p>
          <p className="text-xs sm:text-sm text-[rgb(var(--color-text-muted))] mt-2">
            Built with Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </footer>
    </main>
  );
}
