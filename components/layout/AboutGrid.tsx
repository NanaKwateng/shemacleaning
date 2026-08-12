"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Download, Phone } from "lucide-react";

interface SplitTextProps {
    text: string;
    className?: string;
}

// Performant word-by-word fade and float text splitter using standard framer-motion
const SplitText: React.FC<SplitTextProps> = ({ text, className = "" }) => {
    const words = text.split(" ");

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.04 }
        }
    };

    const wordVariants: Variants = {
        hidden: { opacity: 0, y: 12 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                ease: [0.215, 0.61, 0.355, 1], // TypeScript now validates this as a strict tuple
                duration: 0.5
            }
        }
    };

    const localFadeUp: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1] as const, // 👈 Forces TypeScript to read this as a strict 4-number tuple literal
            },
        },
    };


    return (
        <motion.span
            className={`inline-block ${className}`}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
        >
            {words.map((word, idx) => (
                <motion.span
                    key={idx}
                    variants={wordVariants}
                    className="inline-block mr-[0.25em] whitespace-nowrap"
                >
                    {word}
                </motion.span>
            ))}
        </motion.span>
    );
};

export default function AboutGrid() {
    const fadeUp = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section className="w-full bg-[#0A0A0A] text-[#F5F5F7] border-t border-white/10 overflow-hidden font-sans">

            {/* --- UPPER GRID ROW --- */}
            <div className="grid grid-cols-1 md:grid-cols-12 w-full border-b border-white/10">

                {/* BLOCK 1: WHO WE ARE */}
                <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10 min-h-[200px] md:min-h-[300px]">
                    <h2 className="text-3xl md:text-4xl font-light tracking-tight uppercase leading-none text-white">
                        Who We <br /> Are?
                    </h2>
                    <motion.a
                        href="/about"
                        className="flex items-center gap-2 text-xs tracking-widest text-neutral-400 hover:text-white transition-colors group pt-6 w-fit"
                        whileHover={{ x: 3 }}
                    >
                        <span className="underline underline-offset-4 decoration-white/20 group-hover:decoration-white font-medium">EXPLORE</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                    </motion.a>
                </div>

                {/* BLOCK 2: MAIN STATEMENT MANIFESTO */}
                <div className="md:col-span-6 p-8 md:p-10 flex flex-col justify-start border-b md:border-b-0 md:border-r border-white/10 min-h-[240px] md:min-h-[300px]">
                    <span className="text-[10px] text-neutral-500 uppercase tracking-[0.25em] block mb-6 font-mono">
                        / ABOUT
                    </span>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-neutral-200 leading-relaxed max-w-2xl">
                        <SplitText text="We are dedicated to providing you with premium professional sanitation solutions and pristine operational workflows tailored to your corporate, commercial, and luxury residential needs." />

                    </h3>
                </div>

                {/* BLOCK 3: TEAM MATRIX STATUS */}
                <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-between min-h-[160px] md:min-h-[300px]">
                    <span className="text-[10px] text-neutral-500 uppercase tracking-[0.25em] block font-mono">
                        OUR TEAM
                    </span>
                    <motion.div
                        className="flex items-center gap-3 mt-auto"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.6,
                                    ease: [0.16, 1, 0.3, 1] as const,
                                },
                            },
                        }}
                    >
                        <div className="flex -space-x-3 overflow-hidden">
                            {[
                                "https://images.unsplash.com/photo-1758272421751-963195322eaa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsZWFuaW5nJTIwcGVvcGxlfGVufDB8fDB8fHww",
                                "https://images.unsplash.com/photo-1758599669317-efd787d954ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNsZWFuaW5nJTIwcGVvcGxlfGVufDB8fDB8fHww",
                                "https://plus.unsplash.com/premium_photo-1667509213002-f15f1c9eaac8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGNsZWFuaW5nJTIwcGVvcGxlfGVufDB8fDB8fHww",
                            ].map((src, index) => (
                                <div
                                    key={src}
                                    className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-[#0A0A0A] bg-neutral-800 grayscale"
                                >
                                    <Image
                                        src={src}
                                        alt={`Team member ${index + 1}`}
                                        fill
                                        sizes="48px"
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-[10px] text-neutral-400 uppercase tracking-wider font-mono">Well Equipped and dedicated</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* --- LOWER GRID ROW --- */}
            <div className="grid grid-cols-1 md:grid-cols-12 w-full">

                {/* BLOCK 4: DASHED INTERACTIVE BADGE */}
                <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center items-center border-b md:border-b-0 md:border-r border-white/10 min-h-[280px] md:min-h-[380px]">
                    <motion.a
                        className="w-44 h-44 rounded-full border border-dashed border-white/20 flex flex-col justify-center items-center text-center p-4 relative group cursor-pointer hover:border-white/40 transition-colors"
                        href="tel:07346459922"
                        initial={{ rotate: -8, opacity: 0 }}
                        whileInView={{ rotate: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="text-base font-light tracking-tight mb-2 text-neutral-200">Contact Us<br />Click to call</span>

                        <div className="absolute bottom-4 w-7 h-7 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-neutral-400 group-hover:bg-white group-hover:text-black transition-all shadow-xl">
                            <Phone className="w-3 h-3" />
                        </div>
                    </motion.a>
                </div>

                {/* BLOCK 5: STADIUM CAPSULE PROMO VIDEO SECTION */}
                <div className="md:col-span-6 p-8 md:p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10 min-h-[360px] md:min-h-[380px]">

                    {/* Exact Stadium / Oval Shape Container */}
                    <motion.div
                        className="w-full h-48 relative rounded-full overflow-hidden border border-white/10  group"
                        initial={{ scale: 0.97, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {/* Ambient Overlay Layer */}
                        <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none transition-opacity group-hover:opacity-20" />

                        {/* Grayscale, highly-optimized low-bitrate background stream loop */}
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
                        >
                            <source
                                src="/videos/clean1.mp4"
                                type="video/mp4"
                            />
                        </video>

                        {/* Absolute Centered Interface Badging */}
                        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                            <div className="px-4 py-2 rounded-full bg-[#0A0A0A]/80 border border-white/10 text-[9px] font-mono tracking-[0.2em] text-[#F5F5F7] uppercase backdrop-blur-md flex items-center gap-2 shadow-2xl">
                                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                                WATCH DEMO
                            </div>
                        </div>
                    </motion.div>

                    {/* Under-video Descriptive Text */}
                    <motion.p
                        className="text-base font-light text-neutral-300 tracking-tight mt-6"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.6,
                                    ease: [0.16, 1, 0.3, 1] as const,
                                },
                            },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        Experience premium, reliable, and thorough property solutions delivered straight to your home or corporate workplace.
                    </motion.p>
                </div>

                {/* BLOCK 6: SUSTAINABILITY METRIC FEATURE */}
                <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-between min-h-[280px] md:min-h-[380px]">

                    {/* Circle Frame Asset Wrapper */}
                    <motion.div
                        className="w-50 h-50 mx-auto rounded-full border border-white/5 relative overflow-hidden flex items-center justify-center p-4 group"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15, duration: 0.6 }}
                    >
                        <div className="absolute inset-0">
                            <Image
                                src="/images/clean1.jpeg"
                                alt="Abstract Botanical Background Structure"
                                fill
                                sizes="144px"
                                className="object-cover"
                            />
                        </div>
                    </motion.div>

                    <div className="space-y-2 pt-4">
                        <h4 className="text-lg font-light tracking-tight text-white flex items-center gap-2">
                            Pure Curation.
                        </h4>
                        <p className="text-[10px] text-neutral-500 font-mono uppercase tracking-widest leading-relaxed">
                            Choose sustainability. <br />
                            Zero hazardous tools .
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}