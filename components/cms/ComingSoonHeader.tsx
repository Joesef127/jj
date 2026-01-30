import Image from "next/image";
import { Instagram } from "lucide-react";

export default function ComingSoonHeader() {
  return (
    <header className="py-6 flex items-center justify-between animate-fade-in">
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
          className="flex items-center gap-2 text-sm font-medium text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-primary))] transition-colors"
        >
          <Instagram className="w-4 h-4" />
          @jandjicon
        </a>
      </div>
    </header>
  );
}
