import { ProductGrid } from "@/components/Commerce";
import { ButtonLink, Container, SectionHeader } from "@/components/ui";
import { productCategories } from "@/lib/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse Saakya Consolidated LLC product categories: tissue & hygiene, food products, Ceylon cinnamon, and coco peat. Available by wholesale inquiry.",
};

export default function ProductsPage() {
  return (
    <div className="bg-ivory">
      <section className="border-b border-border-subtle bg-navy-950">
        <Container className="py-14 md:py-20">
          <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-gold-500 uppercase">
            Global Product Portfolio
          </p>
          <h1 className="font-display max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Products for wholesale and commercial inquiries.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg">
            Explore Saakya Consolidated LLC categories across hygiene, food, Ceylon cinnamon, and coco
            peat. Request availability and pricing directly.
          </p>
          <div className="mt-8">
            <ButtonLink href="/contact" variant="gold">
              Request a Quote
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="border-b border-border-subtle bg-white py-10">
        <Container>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {productCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="rounded-full border border-border-subtle bg-ivory px-4 py-2 text-sm font-medium text-navy-950 transition-colors duration-200 hover:border-navy-950/20 hover:bg-neutral-50"
              >
                {category.shortName}
              </a>
            ))}
          </div>
        </Container>
      </section>

      {productCategories.map((category, index) => (
        <section
          key={category.id}
          id={category.id}
          className={`scroll-mt-28 py-16 md:py-20 ${
            index % 2 === 0 ? "bg-ivory" : "bg-white"
          }`}
        >
          <Container>
            <div className="mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
              <SectionHeader
                eyebrow={category.name}
                title={category.heading}
                description={category.description}
              />
              <ButtonLink href="/contact" variant="secondary" className="shrink-0 self-start md:self-auto">
                Inquire About This Range
              </ButtonLink>
            </div>
            <ProductGrid products={category.products} />
          </Container>
        </section>
      ))}
    </div>
  );
}
