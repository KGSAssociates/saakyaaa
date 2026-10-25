import Image from "next/image";
import { ProductGrid } from "@/components/Commerce";
import { ButtonLink, Container, SectionHeader } from "@/components/ui";
import { productCategories } from "@/lib/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse Saakya Consolidated LLC product categories: tissue & hygiene, wholesome foods, coconut range, Ceylon cinnamon, growing solutions, and Ceylon tea.",
};

export default function ProductsPage() {
  return (
    <div className="bg-ivory">
      <section className="relative flex items-center overflow-hidden border-b border-border-subtle bg-navy-950 min-h-[440px] sm:min-h-[500px] md:min-h-0 md:aspect-[1916/821] w-full">
        <Image
          src="/Tropical Eco Still Life at Sunrise.png"
          alt="Tropical eco still life at sunrise"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/60 to-transparent md:from-navy-950/90 md:via-navy-950/40 md:to-transparent" />

        <Container className="relative z-10 w-full py-12 md:py-0">
          <p className="mb-2 text-xs font-semibold tracking-[0.18em] text-gold-500 uppercase md:mb-3">
            Global Product Portfolio
          </p>
          <h1 className="font-display max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Everyday essentials for home, pantry and growing.
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base md:mt-5 lg:text-lg">
            Explore TIA Products across tissue &amp; hygiene, wholesome foods, organic coconut products, Ceylon cinnamon, growing media, and Ceylon tea.
          </p>
          <div className="mt-6 md:mt-8">
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
