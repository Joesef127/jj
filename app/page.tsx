import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[rgb(var(--color-background))]">
      {/* Header Preview */}
      <header className="border-b border-[rgb(var(--color-border))] bg-[rgb(var(--color-light))]">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <Image 
              src="/jj_green_logo.png" 
              alt="JJ Clothing Logo" 
              width={120} 
              height={60}
              priority
              className="h-12 w-auto"
            />
            <nav className="flex gap-6">
              <Link href="/coming-soon" className="text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-primary))] transition-colors">Coming Soon</Link>
              <Link href="#" className="text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-primary))] transition-colors">Collections</Link>
              <Link href="#" className="text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-primary))] transition-colors">About</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section Preview */}
      <section className="py-20 bg-gradient-to-br from-[rgb(var(--color-surface))] to-[rgb(var(--color-light))]">
        <div className="container-custom text-center">
          <div className="flex justify-center mb-8">
            <Image 
              src="/jj_white_logo.png" 
              alt="JJ Clothing" 
              width={200} 
              height={100}
              className="h-24 w-auto"
            />
          </div>
          <h1 className="text-5xl font-bold mb-6 text-[rgb(var(--color-text-primary))]">
            Welcome to JJ Clothing
          </h1>
          <p className="text-xl text-[rgb(var(--color-text-secondary))] mb-8 max-w-2xl mx-auto">
            Your Next.js ecommerce platform is ready! See the color system in action below.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="btn btn-primary px-8 py-3 text-base">
              Primary Action (Olive Green)
            </button>
            <button className="btn btn-secondary px-8 py-3 text-base">
              Secondary Action (Lime Green)
            </button>
          </div>
        </div>
      </section>

      {/* Color System Demo */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">Color System Preview</h2>
          
          {/* Button Styles */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">Button Styles</h3>
            <div className="flex flex-wrap gap-4">
              <button className="btn btn-primary">Primary Button</button>
              <button className="btn btn-secondary">Secondary Button</button>
              <button className="btn btn-outline">Outline Button</button>
              <button className="btn btn-ghost">Ghost Button</button>
            </div>
          </div>

          {/* Product Cards Preview */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">Product Card Examples</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="card p-4">
                  <div className="bg-[rgb(var(--color-surface))] h-48 rounded-[var(--radius-md)] mb-4 flex items-center justify-center">
                    <span className="text-[rgb(var(--color-text-muted))]">Product Image</span>
                  </div>
                  <div className="mb-2">
                    <span className="inline-block bg-[rgb(var(--color-accent))] text-[rgb(var(--color-dark))] text-xs font-semibold px-2 py-1 rounded">
                      NEW
                    </span>
                  </div>
                  <h4 className="font-semibold text-[rgb(var(--color-text-primary))] mb-2">
                    Product Name {item}
                  </h4>
                  <p className="text-[rgb(var(--color-text-secondary))] text-sm mb-3">
                    Product description goes here
                  </p>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-bold text-lg">$49.99</span>
                    <span className="text-[rgb(var(--color-text-muted))] line-through">$69.99</span>
                  </div>
                  <button className="btn btn-primary w-full">Add to Cart</button>
                </div>
              ))}
            </div>
          </div>

          {/* Color Palette Reference */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">Brand Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="bg-[rgb(var(--color-primary))] h-24 rounded-[var(--radius-lg)] mb-2"></div>
                <p className="text-sm font-medium">Olive Green</p>
                <p className="text-xs text-[rgb(var(--color-text-muted))]">#7A9E3E</p>
              </div>
              <div className="text-center">
                <div className="bg-[rgb(var(--color-primary-light))] h-24 rounded-[var(--radius-lg)] mb-2"></div>
                <p className="text-sm font-medium">Lime Green</p>
                <p className="text-xs text-[rgb(var(--color-text-muted))]">#C5D93D</p>
              </div>
              <div className="text-center">
                <div className="bg-[rgb(var(--color-dark))] h-24 rounded-[var(--radius-lg)] mb-2"></div>
                <p className="text-sm font-medium">Black</p>
                <p className="text-xs text-[rgb(var(--color-text-muted))]">#000000</p>
              </div>
              <div className="text-center">
                <div className="bg-[rgb(var(--color-light))] border-2 border-[rgb(var(--color-border))] h-24 rounded-[var(--radius-lg)] mb-2"></div>
                <p className="text-sm font-medium">White</p>
                <p className="text-xs text-[rgb(var(--color-text-muted))]">#FFFFFF</p>
              </div>
            </div>
          </div>

          {/* Form Example */}
          <div className="max-w-md mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-center">Form Elements</h3>
            <div className="card p-6">
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input type="email" placeholder="you@example.com" className="input" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Password</label>
                <input type="password" placeholder="••••••••" className="input" />
              </div>
              <button className="btn btn-primary w-full">Sign In</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Preview */}
      <footer className="bg-[rgb(var(--color-surface-dark))] text-[rgb(var(--color-text-inverse))] py-12 mt-16">
        <div className="container-custom text-center">
          <p className="text-sm">© 2026 JJ Clothing. All rights reserved.</p>
          <p className="text-sm text-[rgb(var(--color-text-muted))] mt-2">
            Built with Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </footer>
    </main>
  );
}
