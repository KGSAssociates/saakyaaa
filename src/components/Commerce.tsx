import Image from "next/image";
import Link from "next/link";
import type { CatalogProduct, Product } from "@/lib/products";
import { ActionIcon } from "@/components/ui";
import { ArrowUpRightIcon } from "@/components/icons";

type ProductCardVariant = "default" | "compact";

function inquireHref(productName: string) {
  return `/contact?product=${encodeURIComponent(productName)}`;
}

export function ProductCard({
  product,
  variant = "default",
}: {
  product: Product | CatalogProduct;
  variant?: ProductCardVariant;
}) {
  const label = product.subtype;

  if (variant === "compact") {
    return (
      <Link
        href={inquireHref(product.name)}
        aria-label={`Inquire about ${product.name}`}
        className="group flex h-full flex-col overflow-hidden rounded-lg border border-border-subtle bg-white transition-all duration-200 hover:-translate-y-0.5 hover:border-navy-950/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-950"
      >
        <div className="relative h-[95px] bg-[#F7F7F5] px-2.5 py-2">
          <Image
            src={product.image}
            alt=""
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1280px) 25vw, 20vw"
            quality={85}
            className="object-contain p-1 transition-transform duration-200 group-hover:scale-[1.02]"
          />
        </div>
        <div className="flex flex-1 flex-col gap-1 px-2.5 py-2">
          {label ? (
            <p className="text-[9px] font-medium tracking-[0.1em] text-neutral-600 uppercase">
              {label}
            </p>
          ) : null}
          <div className="mt-auto flex items-end justify-between gap-2">
            <h3 className="font-display line-clamp-2 min-w-0 flex-1 text-[13px] font-semibold leading-[1.25] text-navy-950 sm:text-[14px]">
              {product.name}
            </h3>
            <ActionIcon />
          </div>
        </div>
      </Link>
    );
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border-subtle bg-white transition-all duration-200 hover:-translate-y-0.5 hover:border-navy-950/15">
      <div className="relative aspect-[4/3] bg-neutral-50 p-4">
        <div className="relative h-full w-full">
          <Image
            src={product.image}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            quality={90}
            className="object-contain transition-transform duration-200 group-hover:scale-[1.02]"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col border-t border-border-subtle p-4 md:p-5">
        {label ? (
          <p className="mb-1.5 text-[11px] font-medium tracking-[0.12em] text-neutral-600 uppercase">
            {label}
          </p>
        ) : null}
        <h3 className="font-display text-[15px] font-semibold text-navy-950 md:text-base">
          {product.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600 line-clamp-2">
          {product.description}
        </p>
        <Link
          href={inquireHref(product.name)}
          aria-label={`Inquire about ${product.name}`}
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-navy-950 transition-colors duration-200 hover:text-navy-800"
        >
          Inquire
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-border-subtle transition-all duration-200 group-hover:border-navy-950 group-hover:bg-navy-950 group-hover:text-white">
            <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </span>
        </Link>
      </div>
    </article>
  );
}

export function ProductGrid({
  products,
  variant = "default",
}: {
  products: Array<Product | CatalogProduct>;
  variant?: ProductCardVariant;
}) {
  if (variant === "compact") {
    return (
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-3.5 xl:grid-cols-5 xl:gap-4">
        {products.map((product) => (
          <ProductCard key={product.name} product={product} variant="compact" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-5">
      {products.map((product) => (
        <ProductCard key={product.name} product={product} />
      ))}
    </div>
  );
}
