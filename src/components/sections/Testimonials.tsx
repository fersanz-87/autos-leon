"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { TESTIMONIALS } from "@/lib/constants";

/* ─── Star rating component ─── */
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} de 5 estrellas`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`h-5 w-5 ${star <= rating ? "text-amber-400" : "text-slate-200"}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
            clipRule="evenodd"
          />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  // Autoplay
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isPaused, next]);

  const testimonial = TESTIMONIALS[current];

  return (
    <SectionWrapper className="bg-[#f8f9fa]">
      {/* Section header */}
      <div className="mb-14 text-center">
        <motion.span
          className="text-sm font-semibold uppercase tracking-wider text-amber-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Testimonios
        </motion.span>
        <motion.h2
          className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Lo que dicen nuestros clientes
        </motion.h2>
      </div>

      {/* Carousel */}
      <div
        className="mx-auto max-w-3xl"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="relative min-h-[280px] overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-100 sm:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col items-center text-center"
            >
              {/* Quote mark */}
              <svg
                className="mb-6 h-10 w-10 text-amber-400/40"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>

              <StarRating rating={testimonial.rating} />

              <p className="mt-6 text-lg leading-relaxed text-slate-700 italic sm:text-xl">
                &ldquo;{testimonial.comment}&rdquo;
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-amber-100">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">
                    Compró: {testimonial.vehiclePurchased}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            aria-label="Testimonio anterior"
            className="absolute top-1/2 left-3 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-sm ring-1 ring-slate-200 transition-colors hover:bg-white sm:left-4"
          >
            <svg className="h-5 w-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Siguiente testimonio"
            className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-sm ring-1 ring-slate-200 transition-colors hover:bg-white sm:right-4"
          >
            <svg className="h-5 w-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        {/* Dots navigation */}
        <div className="mt-6 flex justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Ir al testimonio ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 bg-amber-500"
                  : "w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
