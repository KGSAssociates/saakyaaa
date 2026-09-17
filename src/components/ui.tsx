import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`container-saakya ${className}`}>{children}</div>;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-gold-500 uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-semibold tracking-tight text-navy-950 md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-neutral-600 md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}

/** Visual-only circular action affordance (inside a parent Link). */
export function ActionIcon({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border-subtle text-navy-950 transition-all duration-200 group-hover:border-navy-950 group-hover:bg-navy-950 group-hover:text-white ${className}`}
    >
      <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-px group-hover:-translate-y-px" />
    </span>
  );
}

export function QuoteCTA({
  href = "/contact",
  variant = "gold",
  className = "",
  onClick,
}: {
  href?: string;
  variant?: "gold" | "navy";
  className?: string;
  onClick?: () => void;
}) {
  const styles =
    variant === "gold"
      ? "bg-gold-500 text-navy-950 hover:bg-gold-400"
      : "bg-navy-950 text-white hover:bg-navy-800";

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group inline-flex h-10 items-center gap-1.5 rounded-md px-4 text-[13px] font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500 ${styles} ${className}`}
    >
      Request a Quote
      <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-px group-hover:-translate-y-px" />
    </Link>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "gold";
  className?: string;
}) {
  const variants = {
    primary: "bg-navy-950 text-white hover:bg-navy-800 shadow-sm",
    secondary:
      "border border-navy-950/15 bg-white text-navy-950 hover:border-navy-950/30 hover:bg-neutral-50",
    ghost: "border border-white/25 bg-transparent text-white hover:bg-white/10",
    gold: "bg-gold-500 text-navy-950 hover:bg-gold-400 shadow-sm",
  };

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-[13px] font-semibold transition-all duration-200 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
