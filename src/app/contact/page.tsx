"use client";

import { useEffect, useState } from "react";
import { ButtonLink, Container } from "@/components/ui";
import { productCategories, site } from "@/lib/products";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  useEffect(() => {
    const product = new URLSearchParams(window.location.search).get("product");
    if (!product) return;
    setFormData((prev) => ({
      ...prev,
      subject: prev.subject || "Product Inquiry",
      message: prev.message || `I am interested in learning more about ${product}.`,
    }));
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message:
            "Thank you. Your message has been sent successfully. We will get back to you within 24 hours.",
        });
        setFormData({
          name: "",
          email: "",
          company: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Something went wrong. Please try again.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-ivory">
      <section className="border-b border-border-subtle bg-white">
        <Container className="py-14 md:py-20">
          <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-gold-500 uppercase">
            Contact
          </p>
          <h1 className="font-display max-w-3xl text-4xl font-semibold tracking-tight text-navy-950 md:text-5xl">
            Let&apos;s discuss your product requirements.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
            Reach Saakya Consolidated LLC in New York for wholesale and commercial inquiries across our
            product portfolio. Online ordering is coming soon; products are available by inquiry.
          </p>
        </Container>
      </section>

      <section className="py-14 md:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
            <aside className="rounded-2xl border border-border-subtle bg-white p-7 md:p-8">
              <h2 className="font-display text-xl font-semibold text-navy-950">Business details</h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                Share your requirements and our team will follow up regarding availability and next
                steps.
              </p>

              <div className="mt-8 space-y-6">
                <div>
                  <p className="text-xs font-medium tracking-[0.12em] text-neutral-600 uppercase">
                    Company
                  </p>
                  <p className="mt-1.5 font-display text-base font-semibold text-navy-950">
                    {site.name}
                  </p>
                  <p className="text-sm text-neutral-600">{site.location}</p>
                </div>

                <div>
                  <p className="text-xs font-medium tracking-[0.12em] text-neutral-600 uppercase">
                    Address
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-charcoal">
                    {site.addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium tracking-[0.12em] text-neutral-600 uppercase">
                    Email
                  </p>
                  <a
                    href={site.emailHref}
                    className="mt-1.5 block text-sm font-medium text-navy-950 transition-colors hover:text-gold-500"
                  >
                    {site.email}
                  </a>
                </div>

                <div>
                  <p className="text-xs font-medium tracking-[0.12em] text-neutral-600 uppercase">
                    Phone
                  </p>
                  <a
                    href={site.phoneHref}
                    className="mt-1.5 block text-sm font-medium text-navy-950 transition-colors hover:text-gold-500"
                  >
                    {site.phone}
                  </a>
                </div>
              </div>

              <div className="mt-8 border-t border-border-subtle pt-6">
                <p className="text-xs font-medium tracking-[0.12em] text-neutral-600 uppercase">
                  Product Areas
                </p>
                <ul className="mt-3 space-y-1.5 text-sm text-charcoal">
                  {productCategories.map((category) => (
                    <li key={category.id}>{category.name}</li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className="rounded-2xl border border-border-subtle bg-white p-7 md:p-8">
              <h2 className="font-display text-xl font-semibold text-navy-950">Send an inquiry</h2>
              <p className="mt-2 text-sm text-neutral-600">
                Required fields are marked. We typically respond within 24 hours on business days.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                {submitStatus.type ? (
                  <div
                    className={`rounded-xl border px-4 py-3 text-sm ${
                      submitStatus.type === "success"
                        ? "border-emerald-200 bg-emerald-50 text-emerald-900"
                        : "border-red-200 bg-red-50 text-red-900"
                    }`}
                    role="status"
                  >
                    {submitStatus.message}
                  </div>
                ) : null}

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-charcoal">
                      Full name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-charcoal">
                      Email address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="mb-2 block text-sm font-medium text-charcoal">
                    Company name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company"
                    autoComplete="organization"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium text-charcoal">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Toilet Paper & Tissue">Tissue &amp; Hygiene</option>
                    <option value="Food Products">Food Products</option>
                    <option value="Ceylon Cinnamon">Ceylon Cinnamon</option>
                    <option value="Coco Peat Products">Coco Peat Products</option>
                    <option value="Bulk Pricing">Bulk Pricing</option>
                    <option value="Partnership Opportunity">Partnership Opportunity</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-charcoal">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share product needs, quantities, or timing."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex w-full items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-colors duration-200 sm:w-auto ${
                    isSubmitting
                      ? "cursor-not-allowed bg-neutral-200 text-neutral-600"
                      : "bg-navy-950 text-white hover:bg-navy-800"
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>

          <div className="mt-12 rounded-2xl border border-border-subtle bg-navy-950 p-8 text-center md:p-10">
            <p className="text-xs font-semibold tracking-[0.18em] text-gold-500 uppercase">
              Prefer email?
            </p>
            <p className="mt-3 font-display text-2xl font-semibold text-white">
              Write to us directly
            </p>
            <a
              href={site.emailHref}
              className="mt-3 inline-block text-gold-400 transition-colors hover:text-gold-500"
            >
              {site.email}
            </a>
            <div className="mt-6">
              <ButtonLink href="/products" variant="ghost">
                Browse Products
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
