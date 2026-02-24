"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { BUSINESS_INFO } from "@/lib/constants";

export default function Location() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${BUSINESS_INFO.coordinates.lat},${BUSINESS_INFO.coordinates.lng}`;
  const embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59729.29!2d-101.7159!3d21.1250!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842bbf97b2fb4033%3A0x9ac1015e89d4e72!2zTGXDs24sIEd0by4!5e0!3m2!1ses!2smx!4v1`;

  return (
    <SectionWrapper id="ubicacion" className="bg-[#f8f9fa]">
      {/* Section header */}
      <div className="mb-14 text-center">
        <motion.span
          className="text-sm font-semibold uppercase tracking-wider text-amber-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Ubicación
        </motion.span>
        <motion.h2
          className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Visítanos en León, Guanajuato
        </motion.h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-5">
        {/* Map */}
        <motion.div
          className="overflow-hidden rounded-2xl shadow-md lg:col-span-3"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <iframe
            title="Ubicación de AutosLeón en León, Guanajuato"
            src={embedUrl}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[350px] w-full sm:h-[400px]"
          />
        </motion.div>

        {/* Info card */}
        <motion.div
          className="flex flex-col justify-center rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-100 lg:col-span-2"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {/* Address */}
          <div className="mb-6">
            <div className="mb-3 flex items-center gap-2 text-amber-600">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              <h3 className="font-bold text-slate-900">Dirección</h3>
            </div>
            <p className="text-sm leading-relaxed text-slate-600">
              {BUSINESS_INFO.address}<br />
              {BUSINESS_INFO.city}, {BUSINESS_INFO.state}
            </p>
          </div>

          {/* Phone */}
          <div className="mb-6">
            <div className="mb-3 flex items-center gap-2 text-amber-600">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              <h3 className="font-bold text-slate-900">Teléfono</h3>
            </div>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="text-sm text-slate-600 hover:text-blue-600">
              {BUSINESS_INFO.phone}
            </a>
          </div>

          {/* Hours */}
          <div className="mb-8">
            <div className="mb-3 flex items-center gap-2 text-amber-600">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <h3 className="font-bold text-slate-900">Horario</h3>
            </div>
            <div className="space-y-1 text-sm text-slate-600">
              <p>{BUSINESS_INFO.hours.weekdays}</p>
              <p>{BUSINESS_INFO.hours.saturday}</p>
              <p>{BUSINESS_INFO.hours.sunday}</p>
            </div>
          </div>

          {/* CTA */}
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
            </svg>
            Cómo llegar
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
