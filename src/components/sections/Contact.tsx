"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Input, Textarea, Select } from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { VEHICLES, BUSINESS_INFO } from "@/lib/constants";
import type { ContactFormData } from "@/types";

/* ─── Validation helpers ─── */
function validateForm(data: ContactFormData) {
  const errors: Partial<Record<keyof ContactFormData, string>> = {};

  if (!data.name.trim()) errors.name = "Ingresa tu nombre";
  if (!data.phone.trim()) {
    errors.phone = "Ingresa tu teléfono";
  } else if (!/^[\d\s\-+()]{7,15}$/.test(data.phone)) {
    errors.phone = "Teléfono inválido";
  }
  if (!data.email.trim()) {
    errors.email = "Ingresa tu email";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Email inválido";
  }
  if (!data.vehicleOfInterest) errors.vehicleOfInterest = "Selecciona un vehículo";
  if (!data.message.trim()) errors.message = "Escribe un mensaje";

  return errors;
}

export default function Contact() {
  const [form, setForm] = useState<ContactFormData>({
    name: "",
    phone: "",
    email: "",
    vehicleOfInterest: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const vehicleOptions = VEHICLES.map((v) => ({
    value: v.id,
    label: `${v.brand} ${v.model} ${v.year}`,
  }));

  function handleChange(field: keyof ContactFormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validateForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate network request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  }

  const whatsappMessage = encodeURIComponent(
    "Hola, me interesa uno de sus vehículos. ¿Podrían darme más información?"
  );

  return (
    <SectionWrapper id="contacto">
      {/* Section header */}
      <div className="mb-14 text-center">
        <motion.span
          className="text-sm font-semibold uppercase tracking-wider text-amber-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Contáctanos
        </motion.span>
        <motion.h2
          className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          ¿Interesado? Contáctanos
        </motion.h2>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {submitted ? (
            <div className="flex flex-col items-center justify-center rounded-2xl bg-green-50 p-12 text-center ring-1 ring-green-100">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-900">
                ¡Mensaje enviado!
              </h3>
              <p className="mt-2 text-green-700">
                Nos pondremos en contacto contigo pronto.
              </p>
              <button
                className="mt-6 text-sm font-medium text-green-600 underline hover:text-green-800"
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: "", phone: "", email: "", vehicleOfInterest: "", message: "" });
                }}
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-100"
              noValidate
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Input
                  label="Nombre"
                  placeholder="Tu nombre completo"
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  error={errors.name}
                  required
                />
                <Input
                  label="Teléfono"
                  type="tel"
                  placeholder="477 123 4567"
                  value={form.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  error={errors.phone}
                  required
                />
              </div>
              <Input
                label="Email"
                type="email"
                placeholder="tu@email.com"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                error={errors.email}
                required
              />
              <Select
                label="Auto de interés"
                options={vehicleOptions}
                value={form.vehicleOfInterest}
                onChange={(e) => handleChange("vehicleOfInterest", e.target.value)}
                error={errors.vehicleOfInterest}
                required
              />
              <Textarea
                label="Mensaje"
                placeholder="Cuéntanos qué estás buscando..."
                value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
                error={errors.message}
                required
              />
              <Button
                type="submit"
                variant="primary"
                isLoading={isSubmitting}
                className="w-full py-3.5 text-base"
              >
                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
              </Button>
            </form>
          )}
        </motion.div>

        {/* Contact info */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {/* Info cards */}
          <div className="space-y-4">
            {/* Phone */}
            <div className="flex items-start gap-4 rounded-xl bg-[#f8f9fa] p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Teléfono</h4>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="text-sm text-slate-500 hover:text-blue-600">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 rounded-xl bg-[#f8f9fa] p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Email</h4>
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-sm text-slate-500 hover:text-blue-600">
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4 rounded-xl bg-[#f8f9fa] p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Horario</h4>
                <p className="text-sm text-slate-500">{BUSINESS_INFO.hours.weekdays}</p>
                <p className="text-sm text-slate-500">{BUSINESS_INFO.hours.saturday}</p>
                <p className="text-sm text-slate-500">{BUSINESS_INFO.hours.sunday}</p>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-xl bg-green-50 p-5 ring-1 ring-green-100 transition-colors hover:bg-green-100"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-green-900">Escríbenos por WhatsApp</p>
              <p className="text-sm text-green-700">Respuesta inmediata en horario laboral</p>
            </div>
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
