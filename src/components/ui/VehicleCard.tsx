"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Vehicle } from "@/types";
import Badge from "./Badge";
import { BUSINESS_INFO } from "@/lib/constants";

/* ─── Icon helpers for vehicle specs ─── */
function GaugeIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z" />
      <path strokeLinecap="round" d="m15.5 8.5-3 4" />
      <circle cx="12" cy="12.5" r="1" fill="currentColor" />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  );
}

function FuelIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

/* ─── Format helpers ─── */
function formatPrice(price: number): string {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

function formatMileage(km: number): string {
  return new Intl.NumberFormat("es-MX").format(km) + " km";
}

const transmissionLabels = {
  manual: "Manual",
  automatic: "Automático",
};

const fuelLabels = {
  gasoline: "Gasolina",
  diesel: "Diésel",
  hybrid: "Híbrido",
  electric: "Eléctrico",
};

/* ─── Card Component ─── */
interface VehicleCardProps {
  vehicle: Vehicle;
  index: number;
}

export default function VehicleCard({ vehicle, index }: VehicleCardProps) {
  const whatsappMessage = encodeURIComponent(
    `Hola, me interesa el ${vehicle.brand} ${vehicle.model} ${vehicle.year} que vi en su página web.`
  );
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${whatsappMessage}`;

  return (
    <motion.article
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-100 transition-shadow duration-300 hover:shadow-xl hover:ring-slate-200"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={vehicle.images[0]}
          alt={`${vehicle.brand} ${vehicle.model} ${vehicle.year}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {vehicle.badge && (
          <div className="absolute top-3 left-3">
            <Badge variant={vehicle.badge} />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        {/* Title + Price */}
        <div className="mb-3">
          <h3 className="text-lg font-bold text-slate-900">
            {vehicle.brand} {vehicle.model}{" "}
            <span className="font-normal text-slate-500">{vehicle.year}</span>
          </h3>
          <p className="mt-1 text-2xl font-extrabold text-blue-600">
            {formatPrice(vehicle.price)}
          </p>
        </div>

        {/* Specs */}
        <div className="mb-4 flex flex-wrap gap-3 text-sm text-slate-500">
          <span className="inline-flex items-center gap-1.5">
            <GaugeIcon />
            {formatMileage(vehicle.mileage)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <GearIcon />
            {transmissionLabels[vehicle.transmission]}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <FuelIcon />
            {fuelLabels[vehicle.fuelType]}
          </span>
        </div>

        {/* Actions */}
        <div className="mt-auto flex gap-2">
          <a
            href="#contacto"
            className="flex-1 rounded-lg bg-slate-900 px-4 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-slate-800"
          >
            Ver detalles
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-green-500 px-3 py-2.5 text-sm font-medium text-white transition-colors hover:bg-green-600"
            aria-label={`Consultar por WhatsApp sobre ${vehicle.brand} ${vehicle.model}`}
          >
            <WhatsAppIcon />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
