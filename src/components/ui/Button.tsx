"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "amber" | "whatsapp";

interface ButtonProps {
  variant?: ButtonVariant;
  children: ReactNode;
  href?: string;
  icon?: ReactNode;
  isLoading?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40",
  secondary:
    "bg-slate-800 text-white hover:bg-slate-700",
  outline:
    "border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm",
  amber:
    "bg-amber-500 text-slate-900 font-semibold hover:bg-amber-400 shadow-lg shadow-amber-500/25",
  whatsapp:
    "bg-green-500 text-white hover:bg-green-600 shadow-lg shadow-green-500/25",
};

export default function Button({
  variant = "primary",
  children,
  href,
  icon,
  isLoading,
  className = "",
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500";

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {isLoading ? (
        <svg
          className="h-4 w-4 animate-spin"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      ) : icon ? (
        <span className="shrink-0">{icon}</span>
      ) : null}
      {children}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedClassName}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={combinedClassName}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      disabled={isLoading || disabled}
      type={type}
      onClick={onClick}
    >
      {content}
    </motion.button>
  );
}
