"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export default function SectionWrapper({
  id,
  children,
  className = "",
  dark = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative py-20 md:py-28 ${
        dark ? "bg-[#0f1729] text-white" : "bg-white"
      } ${className}`}
    >
      <motion.div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
}
