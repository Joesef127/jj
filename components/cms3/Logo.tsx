import Image from "next/image";

export default function Logo() {
  return (
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
  );
}
