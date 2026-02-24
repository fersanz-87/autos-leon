"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { BENEFITS } from "@/lib/constants";

/* ─── Icon map for benefits ─── */
function BenefitIcon({ name }: { name: string }) {
  const iconClass = "h-7 w-7";

  switch (name) {
    case "search":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      );
    case "shield":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
        </svg>
      );
    case "banknotes":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
        </svg>
      );
    case "clipboard":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
        </svg>
      );
    default:
      return null;
  }
}

export default function WhyUs() {
  return (
    <SectionWrapper id="por-que" className="bg-[#f8f9fa]">
      {/* Section header */}
      <div className="mb-14 text-center">
        <motion.span
          className="text-sm font-semibold uppercase tracking-wider text-amber-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Nuestras ventajas
        </motion.span>
        <motion.h2
          className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          ¿Por qué comprar en AutosLeón?
        </motion.h2>
      </div>

      {/* Benefits grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {BENEFITS.map((benefit, index) => (
          <motion.div
            key={benefit.id}
            className="group relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:shadow-lg hover:ring-slate-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
          >
            {/* Icon */}
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-amber-50 text-amber-600 transition-colors group-hover:bg-amber-500 group-hover:text-white">
              <BenefitIcon name={benefit.icon} />
            </div>

            <h3 className="mb-2 text-lg font-bold text-slate-900">
              {benefit.title}
            </h3>
            <p className="text-sm leading-relaxed text-slate-500">
              {benefit.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
