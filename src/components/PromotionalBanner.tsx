import Image from "next/image";
import Link from "next/link";

interface PromotionalBannerProps {
  href?: string;
  className?: string;
}

export function PromotionalBanner({
  href = "/products",
  className = "",
}: PromotionalBannerProps) {
  return (
    <Link
      href={href}
      aria-label="Explore the TIA product range - View Product Catalog"
      className={`group relative block w-full overflow-hidden rounded-2xl border border-border-subtle bg-[#1e2908] shadow-[0_2px_12px_rgba(7,26,47,0.06)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-navy-950/20 hover:shadow-[0_8px_30px_rgba(7,26,47,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy-950 md:rounded-3xl cursor-pointer ${className}`}
    >
      <div className="relative aspect-[2172/724] w-full overflow-hidden">
        <Image
          src="/Tia Tropical Product Showcase.png"
          alt="Explore the TIA product range"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1320px) 100vw, 1320px"
          quality={90}
          className="object-cover object-center transition-transform duration-300 ease-out group-hover:scale-[1.015]"
        />
      </div>
    </Link>
  );
}
