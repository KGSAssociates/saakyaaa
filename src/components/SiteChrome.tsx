"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/products";
import { QuoteCTA } from "@/components/ui";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export function AnnouncementBar() {
  return (
    <div className="bg-navy-950 text-center">
      <p className="px-4 py-1 text-[10px] tracking-wide text-white/60 sm:text-[11px]">
        {site.announcement}
      </p>
    </div>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 bg-ivory/95 backdrop-blur-sm transition-[box-shadow,border-color] duration-200 ${
        scrolled
          ? "border-b border-border-subtle shadow-[0_1px_0_rgba(7,26,47,0.04),0_6px_16px_rgba(7,26,47,0.03)]"
          : "border-b border-border-subtle/60"
      }`}
    >
      <div className="container-saakya flex h-[52px] items-center justify-between md:h-[56px]">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <div
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy-950"
            aria-hidden
          >
            <span className="font-display text-[10px] font-semibold tracking-[0.04em] text-gold-500">
              SC
            </span>
          </div>
          <div className="min-w-0 leading-none">
            <p className="truncate font-display text-[13px] font-medium tracking-tight text-navy-950">
              Saakya Consolidated LLC
            </p>
            <p className="mt-0.5 hidden text-[9px] tracking-wide text-neutral-600 sm:block">
              {site.location}
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-neutral-600 transition-colors duration-200 hover:text-navy-950"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <QuoteCTA
            variant="navy"
            className="group hidden !h-8 !px-3 !text-[12px] md:inline-flex"
          />

          <button
            type="button"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md text-navy-950 transition-colors hover:bg-neutral-100 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-menu" className="border-t border-border-subtle bg-ivory md:hidden">
          <nav className="container-saakya flex flex-col py-2" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-1 py-2 text-sm font-medium text-charcoal/90 transition-colors hover:text-navy-950"
              >
                {link.label}
              </Link>
            ))}
            <QuoteCTA
              className="group mt-1 mb-1 w-full justify-center"
              onClick={() => setOpen(false)}
              variant="navy"
            />
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950 text-white">
      <div className="container-saakya pt-8 pb-5 md:pt-9 md:pb-5">
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_1fr] lg:gap-10">
          <div>
            <div className="mb-2.5 flex items-center gap-2.5">
              <div
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-500/40"
                aria-hidden
              >
                <span className="font-display text-xs font-bold text-gold-500">SC</span>
              </div>
              <p className="font-display text-[16px] font-semibold leading-tight">{site.name}</p>
            </div>
            <p className="max-w-[22rem] text-[13px] leading-[1.5] text-white/50">
              Hygiene, food, cinnamon and coco peat products for wholesale and commercial inquiries.
            </p>
          </div>

          <div>
            <p className="mb-2.5 text-[10px] font-semibold tracking-[0.12em] text-white/40 uppercase">
              Navigation
            </p>
            <ul className="space-y-1.5 text-[13px] text-white/70">
              <li>
                <Link href="/#products" className="transition-colors hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-2.5 text-[10px] font-semibold tracking-[0.12em] text-white/40 uppercase">
              Business Contact
            </p>
            <div className="space-y-1.5 text-[13px]">
              <a
                href={site.emailHref}
                className="block text-white/75 transition-colors hover:text-white"
              >
                {site.email}
              </a>
              <a
                href={site.phoneHref}
                className="block text-white/75 transition-colors hover:text-white"
              >
                {site.phone}
              </a>
              <QuoteCTA className="group mt-3" variant="gold" />
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-1 border-t border-white/10 pt-4 text-[12px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Saakya Consolidated LLC. All rights reserved.</p>
          <p>{site.location}</p>
        </div>
      </div>
    </footer>
  );
}
