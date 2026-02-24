"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0f1729]/80 shadow-lg backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500">
            <svg className="h-5 w-5 text-slate-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0H21M3.375 14.25h.008M21 14.25h-3.375m0 0V6.375c0-.621-.504-1.125-1.125-1.125H9.75" />
            </svg>
          </div>
          <span className="text-xl font-bold text-white">
            Autos<span className="text-amber-500">León</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <Button variant="amber" href="#contacto" className="px-5 py-2.5 text-sm">
            Agenda tu cita
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="relative z-50 flex h-10 w-10 items-center justify-center lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
        >
          <div className="flex flex-col gap-1.5">
            <motion.span
              className="block h-0.5 w-6 bg-white"
              animate={mobileOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-0.5 w-6 bg-white"
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-0.5 w-6 bg-white"
              animate={mobileOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-[#0f1729]/95 backdrop-blur-xl lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-2xl font-semibold text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                <Button
                  variant="amber"
                  href="#contacto"
                  className="mt-4 text-lg"
                  onClick={() => setMobileOpen(false)}
                >
                  Agenda tu cita
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
