"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bookmark, MoveRight } from "lucide-react";

// The 3D-Glossy Style Asterisk matching the inspiration (but in sleek blue for hygiene/light mode)
const GlossyAsterisk = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="blueBase" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#60A5FA" />
        <stop offset="50%" stopColor="#2563EB" />
        <stop offset="100%" stopColor="#1E3A8A" />
      </linearGradient>
      <linearGradient id="glassHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.1" />
      </linearGradient>
      <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#2563EB" floodOpacity="0.25" />
      </filter>
    </defs>

    <g transform="translate(100, 100)" filter="url(#softShadow)">
      {[0, 60, 120].map((angle, i) => (
        <g key={i} transform={`rotate(${angle})`}>
          {/* Main Capsule Base */}
          <rect x="-14" y="-80" width="28" height="160" rx="14" fill="url(#blueBase)" />
          {/* Inner Glossy Highlight mimicking 3D inflation */}
          <rect x="-8" y="-76" width="16" height="152" rx="8" fill="url(#glassHighlight)" />
        </g>
      ))}
      <circle cx="0" cy="0" r="22" fill="url(#blueBase)" />
      <circle cx="-4" cy="-4" r="10" fill="url(#glassHighlight)" opacity="0.6" />
    </g>
  </svg>
);

export default function HygieneArchitectsLightUI() {
  const [mounted, setMounted] = useState(false);
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // SEO-Optimized Content mapped to coordinates (Percentages ensure pixel-perfect lines across all screens)
  const nodes = [
    {
      id: 0,
      title: "Architectural Sanitation",
      desc: "Masterworks. We treat spatial layout design as fine art, delivering meticulous maintenance for luxury spaces.",
      desktop: { x: "22%", y: "25%", align: "right", anchor: "right-full mr-4 sm:mr-6 top-1/2 -translate-y-1/2" },
      mobile: { x: "15%", y: "42%", align: "left", anchor: "left-full ml-4 top-1/2 -translate-y-1/2 w-[70vw]" }
    },
    {
      id: 1,
      title: "Spatial Preservation",
      desc: "Governance. Delivering meticulous maintenance tailored for luxury real estate estates and corporate structures.",
      desktop: { x: "78%", y: "22%", align: "left", anchor: "left-full ml-4 sm:ml-6 top-1/2 -translate-y-1/2" },
      mobile: { x: "85%", y: "58%", align: "right", anchor: "right-full mr-4 top-1/2 -translate-y-1/2 w-[70vw]" }
    },
    {
      id: 2,
      title: "Botanical Extraction",
      desc: "Metrics. We replace volatile organic chemicals with sustainable, carbon-neutral botanical compounds.",
      desktop: { x: "20%", y: "78%", align: "right", anchor: "right-full mr-4 sm:mr-6 top-1/2 -translate-y-1/2" },
      mobile: { x: "15%", y: "74%", align: "left", anchor: "left-full ml-4 top-1/2 -translate-y-1/2 w-[70vw]" }
    },
    {
      id: 3,
      title: "Elite NDA Compliance",
      desc: "Absolute Trust. Operating with absolute discretion under institutional-grade client anonymity protocols.",
      desktop: { x: "80%", y: "75%", align: "left", anchor: "left-full ml-4 sm:ml-6 top-1/2 -translate-y-1/2" },
      mobile: { x: "85%", y: "90%", align: "right", anchor: "right-full mr-4 top-1/2 -translate-y-1/2 w-[70vw]" }
    }
  ];

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen bg-[#FAFAFA] text-slate-900 font-sans selection:bg-blue-600 selection:text-white overflow-hidden flex flex-col justify-between">

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto px-4 md:px-16 py-6 md:py-28  text-center mb-12 sm:mb-20 w-full"
      >
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-neutral-900 leading-[1.12]">
          Real <span className="font-bold">Spaces</span> Deserve Professional{" "}
          <span className="font-bold">Care</span>
        </h2>
        <p className="mt-4 text-sm sm:text-md text-neutral-600 leading-relaxed text-center">
          Effortless booking for domestic, deep cleaning, and tenancy services. Direct contact, no hassle.
        </p>
      </motion.div>

      {/* MAIN INTERACTIVE GRAPH CANVAS */}
      <main className="relative flex-grow w-full max-w-6xl mx-auto h-[800px] sm:h-[700px] md:h-auto md:aspect-video lg:aspect-[16/7]">


        {/* DESKTOP LAYOUT (Hidden on mobile to preserve layout integrity) */}
        <div className="hidden md:block absolute inset-0 w-full h-full">

          {/* SVG Connecting Lines (Pixel Perfect to Dots) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
            {/* Decorative Ambient Curves */}
            <path d="M 50% 50% Q 25% 10% 0% 25%" fill="none" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4" className="opacity-50" />
            <path d="M 50% 50% Q 80% 90% 100% 70%" fill="none" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4" className="opacity-50" />

            {/* Main Interactive Lines */}
            {nodes.map((node) => {
              const isHovered = hoveredNode === node.id;
              return (
                <motion.line
                  key={`line-${node.id}`}
                  x1="50%"
                  y1="50%"
                  x2={node.desktop.x}
                  y2={node.desktop.y}
                  stroke={isHovered ? "#2563EB" : "#CBD5E1"}
                  strokeWidth={isHovered ? "2.5" : "1.5"}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: node.id * 0.2, ease: "easeInOut" }}
                  className="transition-colors duration-300"
                />
              );
            })}
          </svg>

          {/* Central Animated Asterisk */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              <GlossyAsterisk className="w-32 h-32 lg:w-44 lg:h-44" />
            </motion.div>
          </div>

          {/* Text Nodes & Connection Dots */}
          {nodes.map((node) => (
            <div
              key={`node-${node.id}`}
              style={{ left: node.desktop.x, top: node.desktop.y }}
              className="absolute z-30"
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              {/* Outer Pulse & Inner Dot */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: hoveredNode === node.id ? 2.5 : 1 }}
                  className="absolute w-4 h-4 bg-blue-100 rounded-full transition-transform duration-300"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1 + (node.id * 0.2) }}
                  className={`relative w-3 h-3 rounded-full transition-colors duration-300 shadow-sm ${hoveredNode === node.id ? "bg-blue-600" : "bg-slate-300"}`}
                />
              </div>

              {/* Text Container aligned via Tailwind Offsets */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 + (node.id * 0.2) }}
                className={`absolute ${node.desktop.anchor} w-[220px] lg:w-[280px] cursor-default`}
                style={{ textAlign: node.desktop.align as any }}
              >
                <div className={`p-4 rounded-xl transition-all duration-300 ${hoveredNode === node.id ? "bg-white shadow-xl shadow-slate-200/50 border border-slate-100 scale-105" : "bg-transparent border border-transparent"}`}>
                  <h3 className="text-sm lg:text-base font-bold text-slate-900 tracking-tight mb-2">
                    {node.id + 1}. {node.title}
                  </h3>
                  <p className="text-xs lg:text-sm text-slate-500 leading-relaxed">
                    {node.desc}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* MOBILE LAYOUT (Zigzag Timeline to prevent text overlap on small screens) */}
        <div className="md:hidden absolute inset-0 w-full h-full">

          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
            {nodes.map((node) => (
              <motion.line
                key={`mob-line-${node.id}`}
                x1="50%"
                y1="18%" /* Anchored higher up for the star on mobile */
                x2={node.mobile.x}
                y2={node.mobile.y}
                stroke="#CBD5E1"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: node.id * 0.2 }}
              />
            ))}
          </svg>

          {/* Central Star shifted to top center for mobile */}
          <div className="absolute top-[18%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}>
              <GlossyAsterisk className="w-24 h-24" />
            </motion.div>
          </div>

          {nodes.map((node) => (
            <div
              key={`mob-node-${node.id}`}
              style={{ left: node.mobile.x, top: node.mobile.y }}
              className="absolute z-30"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-blue-500 rounded-full shadow-[0_0_0_4px_rgba(59,130,246,0.15)]" />

              <motion.div
                initial={{ opacity: 0, x: node.mobile.align === 'left' ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 + (node.id * 0.2) }}
                className={`absolute ${node.mobile.anchor}`}
                style={{ textAlign: node.mobile.align as any }}
              >
                <div className="p-3 bg-white/80 backdrop-blur-md rounded-xl shadow-lg shadow-slate-200/50 border border-slate-100">
                  <h3 className="text-sm font-bold text-slate-900 mb-1 leading-tight">
                    {node.id + 1}. {node.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {node.desc}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

      </main>

      {/* BOTTOM FOOTER MATCHING INSPIRATION */}
      <footer className="relative z-30 w-full px-6 py-8 flex justify-between items-end">
        <div>
          <h2 className="text-sm font-bold tracking-tight text-slate-900">
            Shema Services
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Premium Architectural Sanitation
          </p>
        </div>

        <button
          aria-label="Save for later"
          className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 hover:text-blue-600 transition-colors duration-300"
        >
          <Bookmark className="w-4 h-4 text-slate-600" />
        </button>
      </footer>

    </div>
  );
}