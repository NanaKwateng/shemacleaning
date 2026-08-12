"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { MessageSquare, Mail, PhoneCall } from "lucide-react";

// Pre-defined static SVG organic blob shapes (deterministic & hydration-safe)
const MORPH_SHAPES_1 = [
    "M 50,5 C 75,5 95,25 95,50 C 95,75 75,95 50,95 C 25,95 5,75 5,50 C 5,25 25,5 50,5 Z",
    "M 50,8 C 82,2 92,20 90,52 C 88,80 72,92 48,90 C 20,88 8,72 10,48 C 12,20 20,12 50,8 Z",
    "M 50,5 C 70,12 90,20 92,50 C 94,82 78,90 50,95 C 20,98 8,78 6,50 C 4,20 28,2 50,5 Z",
    "M 50,5 C 75,5 95,25 95,50 C 95,75 75,95 50,95 C 25,95 5,75 5,50 C 5,25 25,5 50,5 Z",
];

const MORPH_SHAPES_2 = [
    "M 50,10 C 85,2 98,25 90,55 C 82,85 75,90 45,92 C 15,94 2,75 8,45 C 14,15 20,18 50,10 Z",
    "M 50,5 C 75,5 95,25 95,50 C 95,75 75,95 50,95 C 25,95 5,75 5,50 C 5,25 25,5 50,5 Z",
    "M 50,6 C 80,10 92,28 88,58 C 84,88 68,94 42,88 C 16,82 6,65 12,38 C 18,10 22,2 50,6 Z",
    "M 50,10 C 85,2 98,25 90,55 C 82,85 75,90 45,92 C 15,94 2,75 8,45 C 14,15 20,18 50,10 Z",
];

const MORPH_SHAPES_3 = [
    "M 50,5 C 75,5 95,25 95,50 C 95,75 75,95 50,95 C 25,95 5,75 5,50 C 5,25 25,5 50,5 Z",
    "M 52,4 C 78,12 94,22 92,54 C 90,84 72,96 46,92 C 22,88 4,70 8,44 C 12,18 24,0 52,4 Z",
    "M 48,8 C 84,4 96,28 88,56 C 80,84 74,92 46,88 C 18,84 8,68 10,42 C 12,16 12,12 48,8 Z",
    "M 50,5 C 75,5 95,25 95,50 C 95,75 75,95 50,95 C 25,95 5,75 5,50 C 5,25 25,5 50,5 Z",
];

export default function ContactServicesSection() {
    const [isMounted, setIsMounted] = useState(false);

    // Ensures client hydration completes before triggering dynamic renders
    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <article className="relative mx-auto w-full bg-[#f6f5f0] text-[#111111] py-8 sm:py-16 px-2 sm:px-8 md:px-12 overflow-hidden font-sans">
            <div className="max-w-[1200px] mx-auto">
                {/* Top Meta Bar */}
                <div className="flex items-center justify-between text-[11px] sm:text-xs tracking-wider uppercase text-neutral-500 mb-10 sm:mb-16">
                    <div className="flex items-center gap-2 font-medium">
                        <span>Get In Touch — Shema Cleaning</span>
                    </div>
                    <div className="flex items-center gap-3 font-mono">
                        <span>01</span>
                        <div className="w-6 h-[1px] bg-orange-500" />
                        <span>03</span>
                    </div>
                </div>

                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-left mb-12 sm:mb-20 max-w-2xl"
                >
                    <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-neutral-900 leading-[1.12]">
                        Real <span className="font-bold">Spaces</span> Deserve Professional{" "}
                        <span className="font-bold">Care</span>
                    </h2>
                    <p className="mt-4 text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-lg">
                        Effortless booking for domestic, deep cleaning, and tenancy services. Direct contact, no hassle.
                    </p>
                </motion.div>

                {/* Dynamic Overlapping Layout Container */}
                <div className="relative min-h-[720px] sm:min-h-[420px] md:min-h-[460px] w-full flex flex-col sm:block max-w-4xl mx-auto items-center">

                    {/* --- Shape 1: WhatsApp (Dark / Dynamic Offset) --- */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="sm:absolute top-0 left-0 sm:left-4 md:left-8 z-10 -mb-8 sm:mb-0 group"
                    >
                        <Link
                            href="https://wa.me/447346459922"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-60 h-60 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full bg-transparent text-white p-6 flex flex-col justify-center items-center text-center shadow-none transition-transform duration-300 group-hover:scale-[1.02] block cursor-pointer overflow-hidden relative"
                        >
                            {/* Morphing Shape Background - Dark Green */}
                            <div className="absolute inset-0 pointer-events-none z-0">
                                <svg
                                    className="w-full h-full"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="xMidYMid slice"
                                >
                                    <motion.path
                                        d={MORPH_SHAPES_1[0]}
                                        animate={isMounted ? { d: MORPH_SHAPES_1 } : {}}
                                        transition={{
                                            duration: 8,
                                            ease: "easeInOut",
                                            repeat: Infinity,
                                        }}
                                        fill="#17a4bf"
                                        fillOpacity={1}
                                    />
                                </svg>
                            </div>

                            {/* Content */}
                            <div className="relative z-10 flex flex-col items-center">
                                <MessageSquare className="w-6 h-6 mb-2 text-white text-shadow-lg" />
                                <h3 className="text-lg font-medium mb-1 text-white text-shadow-lg">WhatsApp Us</h3>
                                <p className="text-[11px] sm:text-xs text-white leading-snug max-w-[180px]">
                                    Instant quotes & quick photo assessments.
                                </p>
                            </div>
                        </Link>
                    </motion.div>

                    {/* --- Shape 2: Email (Glass / Dynamic Overlap Center) --- */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="sm:absolute top-12 sm:top-16 left-1/2 sm:-translate-x-1/2 z-20 -mb-8 sm:mb-0 group"
                    >
                        <Link
                            href="mailto:info@shemacleaning.uk"
                            className="w-60 h-60 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full bg-transparent text-[#111111] p-6 flex flex-col justify-center items-center text-center transition-transform duration-300 group-hover:scale-[1.02] block cursor-pointer overflow-hidden relative"
                        >
                            {/* Morphing Shape Background - Faint Orange */}
                            <div className="absolute inset-0 pointer-events-none z-0">
                                <svg
                                    className="w-full h-full"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="xMidYMid slice"
                                >
                                    <motion.path
                                        d={MORPH_SHAPES_2[0]}
                                        animate={isMounted ? { d: MORPH_SHAPES_2 } : {}}
                                        transition={{
                                            duration: 10,
                                            ease: "easeInOut",
                                            repeat: Infinity,
                                        }}
                                        fill="#f2b36f"
                                        fillOpacity={1}
                                    />
                                </svg>
                            </div>

                            {/* Content */}
                            <div className="relative z-10 flex flex-col items-center">
                                <Mail className="w-6 h-6 mb-2 text-orange-500" />
                                <h3 className="text-lg font-medium mb-1">Email Inquiry</h3>
                                <p className="text-[11px] sm:text-xs text-neutral-600 leading-snug max-w-[180px]">
                                    Detailed commercial & tenancy proposals.
                                </p>
                            </div>
                        </Link>
                    </motion.div>

                    {/* --- Shape 3: Direct Call (Dark / Dynamic Offset Right) --- */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="sm:absolute bottom-0 right-0 sm:right-4 md:right-8 z-10 group"
                    >
                        <Link
                            href="tel:07346459922"
                            className="w-60 h-60 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full bg-transparent text-white p-6 flex flex-col justify-center items-center text-center transition-transform duration-300 group-hover:scale-[1.02] block cursor-pointer overflow-hidden relative"
                        >
                            {/* Morphing Shape Background - Dark Blue */}
                            <div className="absolute inset-0 pointer-events-none z-0">
                                <svg
                                    className="w-full h-full"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="xMidYMid slice"
                                >
                                    <motion.path
                                        d={MORPH_SHAPES_3[0]}
                                        animate={isMounted ? { d: MORPH_SHAPES_3 } : {}}
                                        transition={{
                                            duration: 9,
                                            ease: "easeInOut",
                                            repeat: Infinity,
                                        }}
                                        fill="#1b5185"
                                        fillOpacity={1}
                                    />
                                </svg>
                            </div>

                            {/* Content */}
                            <div className="relative z-10 flex flex-col items-center">
                                <PhoneCall className="w-6 h-6 mb-2 text-white" />
                                <h3 className="text-lg font-medium mb-1">Direct Call</h3>
                                <p className="text-[11px] sm:text-xs text-white leading-snug max-w-[180px]">
                                    Speak to us for same-day availability.
                                </p>
                            </div>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </article>
    );
}