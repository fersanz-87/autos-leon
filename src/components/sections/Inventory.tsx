"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import VehicleCard from "@/components/ui/VehicleCard";
import { VEHICLES } from "@/lib/constants";

export default function Inventory() {
  return (
    <SectionWrapper id="inventario">
      {/* Section header */}
      <div className="mb-14 max-w-2xl">
        <motion.span
          className="text-sm font-semibold uppercase tracking-wider text-amber-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Nuestro inventario
        </motion.span>
        <motion.h2
          className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Vehículos Destacados
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-slate-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Explora nuestra selección de autos seminuevos verificados y con
          garantía incluida.
        </motion.p>
      </div>

      {/* Vehicle grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {VEHICLES.map((vehicle, index) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} index={index} />
        ))}
      </div>

      {/* CTA */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <a
          href="#contacto"
          className="group inline-flex items-center gap-2 text-lg font-semibold text-blue-600 transition-colors hover:text-blue-800"
        >
          Ver todo el inventario
          <svg
            className="h-5 w-5 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </a>
      </motion.div>
    </SectionWrapper>
  );
}
