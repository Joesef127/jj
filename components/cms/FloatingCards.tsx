import { ShoppingBag, Star } from "lucide-react";

export default function FloatingCards() {
  return (
    <>
      <div className="hidden lg:block absolute top-1/4 right-12 animate-float-slow pointer-events-none">
        <div className="w-52 h-72 bg-[rgb(var(--color-light))] rounded-3xl shadow-2xl border border-[rgb(var(--color-border))] p-6 backdrop-blur-xl rotate-6 hover:rotate-0 transition-transform duration-500">
          <div className="w-full h-42 bg-gradient-to-br from-[rgb(var(--color-surface))] to-[rgb(var(--color-border))] rounded-2xl mb-4 flex items-center justify-center">
            <ShoppingBag className="w-16 h-16 text-[rgb(var(--color-text-muted))]" />
          </div>
          <div className="space-y-2">
            <div className="h-4 bg-[rgb(var(--color-surface))] rounded-full w-3/4"></div>
            <div className="h-3 bg-[rgb(var(--color-surface))] rounded-full w-1/2"></div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block absolute bottom-1/4 left-12 animate-float-delayed pointer-events-none">
        <div className="w-40 h-52 bg-[rgb(var(--color-light))] rounded-3xl shadow-2xl border border-[rgb(var(--color-border))] p-4 backdrop-blur-xl -rotate-6 hover:rotate-0 transition-transform duration-500">
          <div className="w-full h-30 bg-gradient-to-br from-[rgb(var(--color-surface))] to-[rgb(var(--color-border))] rounded-2xl mb-3 flex items-center justify-center">
            <Star className="w-12 h-12 text-[rgb(var(--color-text-muted))]" />
          </div>
          <div className="space-y-2">
            <div className="h-3 bg-[rgb(var(--color-surface))] rounded-full w-full"></div>
            <div className="h-3 bg-[rgb(var(--color-surface))] rounded-full w-2/3"></div>
          </div>
        </div>
      </div>
    </>
  );
}
