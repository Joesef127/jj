import Image from "next/image";

export default function Logo() {
  return (
    <div className="mb-8 animate-fade-in flex justify-center">
      <div className="logo-3d-container">
        <div className="animate-spin-3d relative">
          <Image 
            src="/jj_green_logo.png" 
            alt="J&J Clothing" 
            width={180} 
            height={90}
            priority
            className="h-20 w-auto"
            style={{ 
              filter: 'drop-shadow(2px 0 0 rgba(122, 158, 62, 0.3)) drop-shadow(-2px 0 0 rgba(122, 158, 62, 0.3))'
            }}
          />
        </div>
      </div>
    </div>
  );
}
