"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { Shield, Sparkles, EyeOff, Layers, ArrowUpRight } from "lucide-react";

interface RevealTextProps {
    text: string;
    direction?: "left" | "right" | "up" | "down";
    delay?: number;
    className?: string;
}

const RevealText: React.FC<RevealTextProps> = ({
    text,
    direction = "up",
    delay = 0,
    className = ""
}) => {
    const getInitialAxes = () => {
        switch (direction) {
            case "left": return { x: -40, y: 0 };
            case "right": return { x: 40, y: 0 };
            case "down": return { x: 0, y: -30 };
            default: return { x: 0, y: 40 };
        }
    };

    const textVariants: Variants = {
        hidden: {
            opacity: 0,
            ...getInitialAxes(),
            filter: "blur(4px)"
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
                delay: delay
            }
        }
    };

    return (
        <div className="overflow-hidden inline-block dynamic-text-wrap">
            <motion.span
                className={`inline-block ${className}`}
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
            >
                {text}
            </motion.span>
        </div>
    );
};

export default function LuxuryHeroCuration() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

    return (
        <div
            ref={containerRef}
            className="relative min-h-screen w-full bg-[#050505] text-[#F9F9FB] font-sans flex flex-col justify-between overflow-hidden select-none"
        >
            {/* 1. CINEMATIC GRADIENT MATRIX BACKDROP */}
            <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-1/4 left-1/4 w-[60vw] h-[40vh] bg-neutral-900/10 rounded-full blur-[140px] mix-blend-screen" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] z-10" />
            </motion.div>

            {/* 2. MINIMALIST WIREFRAME LINES (Reduced to just a few crisp structural boundaries) */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                <div className="max-w-[1440px] mx-auto h-full w-full grid grid-cols-1 md:grid-cols-4 px-6 md:px-12">
                    <div className="h-full border-r border-white/[0.03]" />
                    <div className="h-full border-r border-white/[0.03] hidden md:block" />
                    <div className="h-full border-r border-white/[0.03] hidden md:block" />
                    <div className="h-full hidden md:block" />
                </div>
            </div>

            {/* 3. CORE TYPOGRAPHIC DISPLAY SECTION */}
            <main className="relative z-20 flex-grow flex flex-col justify-center max-w-[1440px] mx-auto w-full px-6 md:px-12 pt-28 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 w-full items-end pb-16 md:pb-24">

                    {/* Main Giant Display Header Stack */}
                    <div className="md:col-span-9 space-y-4">
                        <div className="flex items-center gap-3 text-neutral-500 font-mono text-[8px] tracking-[0.4em] uppercase my-5">
                            <span className="w-1.5 h-1.5 bg-neutral-700 rounded-full" />
                            <RevealText text="SHEMA CLEANING MATRIX / HYGIENE ARCHITECTS" direction="left" delay={0.1} />
                        </div>

                        <h1 className="text-[10vw] md:text-[7.5vw] xl:text-[6.8vw] leading-[0.9] tracking-tight uppercase font-medium flex flex-col items-start">
                            <RevealText
                                text="ARCHITECTURAL"
                                direction="left"
                                delay={0.2}
                                className="text-neutral-400 font-light"
                            />
                            <RevealText
                                text="SANITATION &amp;"
                                direction="right"
                                delay={0.35}
                                className="text-white tracking-tighter"
                            />
                            <span className="flex items-baseline flex-wrap gap-x-6">
                                <RevealText
                                    text="MASTERWORKS."
                                    direction="up"
                                    delay={0.5}
                                    className="text-white font-serif italic font-normal tracking-wide lowercase md:normal-case"
                                />
                            </span>
                        </h1>
                    </div>

                    {/* Right Asymmetric Action Anchor Column */}
                    <div className="md:col-span-3 flex justify-start md:justify-end pr-4">
                        {/* Custom Interactive Scroll/Explore SVG Action Ring */}
                        <motion.div
                            className="relative w-24 h-24 md:w-28 md:h-28 flex items-center justify-center cursor-pointer group"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <motion.svg
                                viewBox="0 0 100 100"
                                className="w-full h-full absolute inset-0 text-neutral-600 group-hover:text-neutral-400 transition-colors duration-500 fill-current"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            >
                                <defs>
                                    <path id="circlePath" d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
                                </defs>
                                <text className="text-[8px] font-mono tracking-[0.25em] uppercase font-light">
                                    <textPath href="#circlePath">
                                        SCROLL TO EXPLORE • VIEW METRICS •
                                    </textPath>
                                </text>
                            </motion.svg>

                            <div className="w-8 h-8 rounded-full border border-white/5 bg-[#08080A] flex items-center justify-center group-hover:border-white/20 transition-all duration-300">
                                <svg className="w-3 h-3 text-neutral-400 group-hover:text-white transition-transform group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                                </svg>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* 4. BRAND CONTENT BENTO GRID SYSTEM */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-px bg-white/[0.04] border border-white/[0.06] rounded-none overflow-hidden w-full">

                    {/* Bento Cell 1: About / Purpose */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="p-4 md:p-10 flex flex-col justify-between"
                    >
                        <div>
                            <div className="text-neutral-500 font-mono text-[9px] tracking-widest uppercase mb-6 flex items-center gap-2">
                                <Layers className="w-3 h-3" /> / 01 SPECIALIZED GOVERNANCE
                            </div>
                            <h3 className="text-sm font-medium tracking-wider uppercase font-mono text-white mb-4">Spatial Preservation</h3>
                            <p className="text-xs text-neutral-400 leading-relaxed font-light">
                                Shema Cleaning Services delivers meticulous maintenance tailored for luxury real estate estates, commercial corporate structures, and premium residential gallery spaces. We treat spatial layout design as fine art.
                            </p>
                        </div>
                        <div className="mt-8 pt-4 border-t border-white/[0.03] flex items-center justify-between text-neutral-500 text-[10px] font-mono group cursor-pointer">
                            <span>EXPLORE PROTOCOLS</span>
                            <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                    </motion.div>

                    {/* Bento Cell 2: Scientific Precision / Formulation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-[#070709] p-4 md:p-10 flex flex-col justify-between transition-color"
                    >
                        <div>
                            <div className="text-neutral-500 font-mono text-[9px] tracking-widest uppercase mb-6 flex items-center gap-2">
                                <Sparkles className="w-3 h-3" /> / 02 REFINEMENT METRICS
                            </div>
                            <h3 className="text-sm font-medium tracking-wider uppercase font-mono text-white mb-4">Botanical Extraction</h3>
                            <p className="text-xs text-neutral-400 leading-relaxed font-light">
                                We replace volatile organic chemicals with sustainable, carbon-neutral botanical compounds. Our structural deep cleaning methodologies guarantee the eradication of microscopic dust without causing finish friction or chemical fading.
                            </p>
                        </div>
                        <div className="mt-8 pt-4 border-t border-white/[0.03] flex items-center justify-between text-neutral-500 text-[10px] font-mono group cursor-pointer hover:text-white transition-colors">
                            <span>SUSTAINABILITY DATA</span>
                            <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                    </motion.div>

                    {/* Bento Cell 3: Discretion & Security */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="p-4 md:p-10 flex flex-col justify-between"
                    >
                        <div>
                            <div className="text-neutral-500 font-mono text-[9px] tracking-widest uppercase mb-6 flex items-center gap-2">
                                <EyeOff className="w-3 h-3" /> / 03 ABSOLUTE TRUST
                            </div>
                            <h3 className="text-sm font-medium tracking-wider uppercase font-mono text-white mb-4">Elite NDA Compliance</h3>
                            <p className="text-xs text-neutral-400 leading-relaxed font-light">
                                Operating with absolute discretion under institutional-grade client anonymity protocols. Our background-verified professionals ensure that private residential masterworks and high-stakes financial offices are curated flawlessly.
                            </p>
                        </div>
                        <div className="mt-8 pt-4 border-t border-white/[0.03] flex items-center justify-between text-neutral-400 text-[10px] font-mono">
                            <span className="flex items-center gap-1.5 text-emerald-400/80">
                                <Shield className="w-3 h-3 fill-emerald-500/10" /> 100% DISCRETION GUARANTEED
                            </span>
                        </div>
                    </motion.div>

                </div>
            </main>

            {/* 5. MINIMAL RENDER FOOTER METADATA */}
            <footer className="relative z-20 w-full">
                <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[9px] font-mono text-neutral-600 tracking-widest uppercase border-t border-white/[0.04]">
                    <div>©2026 SHEMA CLEANING SERVICES. ALL RIGOROUSLY RESERVED.</div>
                    <div className="flex items-center gap-6">

                        <span className="text-neutral-400">TEL: 07346459922</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}