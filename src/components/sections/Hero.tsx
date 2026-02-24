"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { HERO_STATS } from "@/lib/constants";

/* ─── Animated counter for stats ─── */
function AnimatedStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <motion.span
        className="block text-3xl font-extrabold text-white sm:text-4xl"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        {isInView ? value : 0}
        {suffix}
      </motion.span>
      <span className="mt-1 block text-sm text-slate-300">{label}</span>
    </motion.div>
  );
}

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.55, 0.85]);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background image with parallax */}
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <Image
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&h=1080&fit=crop"
          alt="Auto premium en exhibición"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[#0f1729]/70 via-[#0f1729]/50 to-[#0f1729]/90"
        style={{ opacity: overlayOpacity }}
      />
      {/* Extra bottom gradient for seamless transition */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-32 pb-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.span
            className="mb-4 inline-block rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Tu próximo auto está en León
          </motion.span>

          <motion.h1
            className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Encuentra tu auto{" "}
            <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
              ideal
            </span>{" "}
            en León, Guanajuato
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300 sm:text-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Más de 200 vehículos verificados con garantía. Financiamiento
            disponible.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <Button variant="amber" href="#inventario" className="text-base">
              Ver Inventario
            </Button>
            <Button
              variant="outline"
              href={`https://wa.me/524771234567?text=${encodeURIComponent("Hola, me gustaría hablar con un asesor.")}`}
              className="text-base"
            >
              Hablar con un asesor
            </Button>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="mt-16 grid max-w-2xl grid-cols-3 gap-8 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:mt-20 sm:p-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {HERO_STATS.map((stat) => (
            <AnimatedStat
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
