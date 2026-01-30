import Image from "next/image";
import { image } from "@/lib";

export default function HeroImageSection() {
  return (
    <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-2/5 overflow-hidden">
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
  );
}
