"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { PROCESS_STEPS } from "@/lib/constants";

/* ─── Step icons ─── */
function StepIcon({ name }: { name: string }) {
  const iconClass = "h-6 w-6";

  switch (name) {
    case "car":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0H21M3.375 14.25h.008M21 14.25h-3.375m0 0V6.375c0-.621-.504-1.125-1.125-1.125H9.75" />
        </svg>
      );
    case "calendar":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
        </svg>
      );
    case "key":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
        </svg>
      );
    case "check":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Process() {
  return (
    <SectionWrapper id="proceso">
      {/* Section header */}
      <div className="mb-16 text-center">
        <motion.span
          className="text-sm font-semibold uppercase tracking-wider text-amber-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Paso a paso
        </motion.span>
        <motion.h2
          className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Comprar tu auto es fácil
        </motion.h2>
      </div>

      {/* Steps — horizontal on desktop, vertical on mobile */}
      <div className="relative">
        {/* Connecting line (desktop) */}
        <div className="absolute top-10 right-[12.5%] left-[12.5%] hidden h-0.5 bg-slate-200 lg:block" />

        {/* Animated line overlay (desktop) */}
        <motion.div
          className="absolute top-10 left-[12.5%] hidden h-0.5 bg-amber-500 lg:block"
          initial={{ width: 0 }}
          whileInView={{ width: "75%" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.id}
              className="relative flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Step number circle */}
              <div className="relative z-10 mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-md ring-4 ring-white">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-white">
                  <StepIcon name={step.icon} />
                </div>
                {/* Step number badge */}
                <span className="absolute -top-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                  {step.id}
                </span>
              </div>

              <h3 className="mb-2 text-lg font-bold text-slate-900">
                {step.title}
              </h3>
              <p className="max-w-[200px] text-sm leading-relaxed text-slate-500">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
