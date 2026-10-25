import { ProductGrid } from "@/components/Commerce";
import { PromotionalBanner } from "@/components/PromotionalBanner";
import { Container } from "@/components/ui";
import { allCatalogProducts } from "@/lib/products";

export default function Home() {
  return (
    <div className="bg-ivory">
      <section className="pt-4 pb-2 md:pt-6 md:pb-3" aria-label="Featured promotion">
        <Container>
          <PromotionalBanner />
        </Container>
      </section>

      <section id="products" className="scroll-mt-20 bg-ivory pt-3 pb-8 md:pt-4 md:pb-10">
        <Container>
          <div className="mb-4 max-w-2xl md:mb-5">
            <p className="mb-1 text-[10px] font-semibold tracking-[0.14em] text-gold-500 uppercase md:text-[11px]">
              Products
            </p>
            <h1 className="font-display text-xl font-semibold tracking-tight text-navy-950 md:text-2xl">
              Complete product range
            </h1>
            <p className="mt-1 text-[13px] leading-snug text-neutral-600 md:text-sm">
              Everyday essentials for home, pantry and growing — available for wholesale and commercial inquiries.
            </p>
          </div>

          <ProductGrid products={allCatalogProducts} variant="compact" />
        </Container>
      </section>
    </div>
  );
}
