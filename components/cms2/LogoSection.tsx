import Image from "next/image";

export default function LogoSection() {
  return (
    <div className="mb-8 animate-fade-in">
      <Image
        src="/jj_green_logo.png"
        alt="J&J Clothing"
        width={160}
        height={80}
        priority
        className="h-16 w-auto drop-shadow-xl"
      />
    </div>
  );
}
