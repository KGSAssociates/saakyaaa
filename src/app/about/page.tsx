import type { Metadata } from "next";
import { ButtonLink, Container, SectionHeader } from "@/components/ui";
import { productCategories, site } from "@/lib/products";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Saakya Consolidated LLC — a New York-based company presenting a diversified global product portfolio for wholesale and commercial inquiries.",
};

export default function AboutPage() {
  return (
    <div className="bg-ivory">
      <section className="border-b border-border-subtle bg-white">
        <Container className="py-14 md:py-20">
          <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-gold-500 uppercase">
            About
          </p>
          <h1 className="font-display max-w-3xl text-4xl font-semibold tracking-tight text-navy-950 md:text-5xl">
            A New York company with a global product portfolio.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
            Saakya Consolidated LLC supports wholesale and commercial buyers seeking product availability
            across hygiene, food, Ceylon cinnamon, and coco peat categories.
          </p>
        </Container>
      </section>

      <section className="border-b border-border-subtle py-16 md:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeader
                eyebrow="Who We Are"
                title="Clear product ranges. Direct business conversations."
              />
              <p className="text-base leading-relaxed text-neutral-600">
                We present a curated catalogue designed for importers, distributors, hospitality buyers,
                procurement teams, and other commercial partners. Online ordering is coming soon; for now,
                products are available by inquiry.
              </p>
              <div className="mt-8">
                <ButtonLink href="/contact">Request a Quote</ButtonLink>
              </div>
            </div>

            <div className="rounded-2xl border border-border-subtle bg-white p-7 md:p-8">
              <p className="text-xs font-semibold tracking-[0.16em] text-neutral-600 uppercase">
                Company Details
              </p>
              <dl className="mt-6 space-y-5">
                <div>
                  <dt className="text-xs text-neutral-600">Company</dt>
                  <dd className="mt-1 font-display text-base font-semibold text-navy-950">
                    {site.name}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-neutral-600">Location</dt>
                  <dd className="mt-1 text-sm text-charcoal">
                    {site.addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-neutral-600">Email</dt>
                  <dd className="mt-1">
                    <a href={site.emailHref} className="text-sm font-medium text-navy-950 hover:text-gold-500">
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-neutral-600">Phone</dt>
                  <dd className="mt-1">
                    <a href={site.phoneHref} className="text-sm font-medium text-navy-950 hover:text-gold-500">
                      {site.phone}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-20">
        <Container>
          <SectionHeader
            eyebrow="What We Offer"
            title="Four focused product areas."
            description="Each category is structured for clear browsing and straightforward wholesale inquiry."
            className="mb-10 md:mb-12"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {productCategories.map((category) => (
              <div
                key={category.id}
                className="rounded-xl border border-border-subtle bg-ivory p-5 transition-colors duration-200 hover:bg-neutral-50"
              >
                <p className="text-xs font-semibold tracking-[0.14em] text-gold-500">
                  {category.number}
                </p>
                <h3 className="mt-3 font-display text-lg font-semibold text-navy-950">
                  {category.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
