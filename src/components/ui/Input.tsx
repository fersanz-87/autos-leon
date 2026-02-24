"use client";

import type { InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  options: { value: string; label: string }[];
}

const baseFieldStyles =
  "w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none";

const errorFieldStyles = "border-red-400 focus:border-red-500 focus:ring-red-500/20";

export function Input({ label, error, className = "", id, ...props }: InputProps) {
  const fieldId = id || label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="space-y-1.5">
      <label htmlFor={fieldId} className="block text-sm font-medium text-slate-700">
        {label}
      </label>
      <input
        id={fieldId}
        className={`${baseFieldStyles} ${error ? errorFieldStyles : ""} ${className}`}
        {...props}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}

export function Textarea({ label, error, className = "", id, ...props }: TextareaProps) {
  const fieldId = id || label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="space-y-1.5">
      <label htmlFor={fieldId} className="block text-sm font-medium text-slate-700">
        {label}
      </label>
      <textarea
        id={fieldId}
        className={`${baseFieldStyles} min-h-[120px] resize-y ${error ? errorFieldStyles : ""} ${className}`}
        {...props}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}

export function Select({ label, error, options, className = "", id, ...props }: SelectProps) {
  const fieldId = id || label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="space-y-1.5">
      <label htmlFor={fieldId} className="block text-sm font-medium text-slate-700">
        {label}
      </label>
      <select
        id={fieldId}
        className={`${baseFieldStyles} ${error ? errorFieldStyles : ""} ${className}`}
        {...props}
      >
        <option value="">Selecciona una opción</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
