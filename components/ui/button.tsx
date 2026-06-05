import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "navy";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  icon?: ReactNode;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-mustard-dark hover:bg-brand-mustard text-brand-navy shadow-lg tracking-widest-cta",
  secondary:
    "border-2 border-white/40 hover:border-white hover:bg-white/10 text-white tracking-widest-cta",
  navy: "bg-brand-navy hover:bg-brand-navy/90 text-white tracking-cta",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  icon,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center px-8 py-4 font-bold uppercase text-sm transition-all ${variantClasses[variant]} ${className}`}
    >
      {children}
      {icon}
    </Link>
  );
}
