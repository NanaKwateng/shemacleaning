"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Custom Asterisk Icon matching the inspiration image style
const Asterisk = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    <g transform="translate(50,50)">
      <rect x="-8" y="-45" width="16" height="90" rx="8" />
      <rect x="-8" y="-45" width="16" height="90" rx="8" transform="rotate(60)" />
      <rect x="-8" y="-45" width="16" height="90" rx="8" transform="rotate(120)" />
    </g>
  </svg>
);

export default function ServiceOverview() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Elite Home & Residential Care",
      desc: "Complete interior detailing and preservation tailored for modern luxury residences, premium fabrics, and high-end architectural materials.",
      bg: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200",
      tag: "Residential",
    },
    {
      title: "Post-Construction & Commercial Operations",
      desc: "High-capacity precision cleanup, debris mitigation, and thorough structural resets for newly designed spaces and commercial storefronts.",
      bg: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200",
      tag: "Post-Build",
    },
    {
      title: "Corporate Office & Workplace Sanitization",
      desc: "Executive maintenance routines for office layouts, tech hubs, and common spaces planned to protect corporate assets with zero workflow disruption.",
      bg: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
      tag: "Commercial",
    },
  ];

  return (
    <section className="w-full bg-[#fafafa] text-neutral-950 font-sans min-h-screen py-24 lg:py-32 overflow-hidden selection:bg-[#ff4a22] selection:text-white">

      {/* Top Main Header Section */}
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 flex flex-col items-center text-center mb-24 lg:mb-40">
        <div className="flex items-center gap-2 mb-6 text-sm tracking-wide">
          <span className="text-[#ff4a22]">(2)</span>
          <span className="text-xs">Discover our services</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter  mb-8 lg:mb-10 text-neutral-950">
          Premium cleaning<br />for your space!
        </h2>

        <p className="text-sm lg:text-md font-medium text-neutral-800 max-w-3xl leading-snug">
          We help our clients to realize the full potential of their environments through meticulous care.
        </p>
      </div>

      {/* Content Grid (Image Left, List Right) */}
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

        {/* Left Column - Dynamic Image & Overlapping Title */}
        <div className="lg:col-span-5 relative lg:sticky lg:top-32">
          {/* Main Image Container */}
          <div className="w-full h-[450px] lg:h-[600px] rounded-[2rem] overflow-hidden bg-neutral-200 relative group shadow-2xl shadow-neutral-200/50">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeService}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                src={services[activeService].bg}
                alt={services[activeService].title}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>

          {/* Overlapping Brutalist Title Block mimicking the inspiration */}
          <div className="relative -mt-20 ml-6 lg:-ml-12 lg:-mt-24 z-10 max-w-[90%] sm:max-w-sm">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute -top-12 -left-6 z-0"
            >
              <Asterisk className="w-24 h-24 text-[#ff4a22]" />
            </motion.div>

            <div className="bg-[#fafafa] p-6 sm:p-8 relative z-10 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 leading-tight">
                {services[activeService].title}
              </h3>
            </div>
          </div>
        </div>

        {/* Right Column - Services List */}
        <div className="lg:col-span-7 flex flex-col justify-center gap-12 lg:gap-16 pt-10 lg:pt-0">
          {services.map((svc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              onMouseEnter={() => setActiveService(idx)}
              className="group cursor-pointer flex flex-col sm:flex-row gap-4 sm:gap-8 items-start pb-10 border-b border-neutral-200 last:border-0"
            >
              {/* Index Number */}
              <div className="flex-shrink-0 pt-1">
                <span className={`font-mono font-bold text-sm transition-colors duration-300 ${activeService === idx ? "text-[#ff4a22]" : "text-neutral-400"}`}>
                  (0{idx + 1})
                </span>
              </div>

              {/* Text Content */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h4 className={`text-2xl sm:text-3xl font-bold tracking-tight transition-colors duration-300 ${activeService === idx ? "text-neutral-950" : "text-neutral-500 group-hover:text-neutral-700"}`}>
                    {svc.title}
                  </h4>
                </div>
                <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-xl">
                  {svc.desc}
                </p>

                {/* Expandable Category Tag */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeService === idx ? "max-h-20 opacity-100 mt-6" : "max-h-0 opacity-0 mt-0"}`}>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-100 text-neutral-800 text-xs font-bold uppercase tracking-widest rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff4a22]"></span>
                    {svc.tag}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Bottom Right "Discover" Link Section (Matching Inspiration Footer) */}
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 mt-24 lg:mt-32 flex justify-start lg:justify-end">
        <Link href="/services" className="group flex items-start gap-4 max-w-sm text-left lg:text-right cursor-pointer">
          <p className="text-base font-bold text-neutral-900 leading-snug">
            <span className="text-[#ff4a22] mr-2">(2a)</span>
            That's why we offer a full range of Services.{" "}
            <span className="underline underline-offset-4 decoration-2 decoration-neutral-300 group-hover:decoration-[#ff4a22] transition-colors duration-300 px-3 py-0.5 my-0.2 rounded-full border-2 border-orange-600">
              Discover
            </span>
          </p>
          <span className="text-[#ff4a22] text-2xl font-light leading-none group-hover:scale-125 transition-transform duration-300">
            +
          </span>
        </Link>
      </div>

    </section>
  );
}