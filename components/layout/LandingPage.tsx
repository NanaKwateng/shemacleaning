"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowUpRight, Menu, X, ShieldCheck, Sparkles, HelpCircle, ChevronDown, Download, ShoppingCart, User } from "lucide-react";
import { FaArrowUpRightFromSquare, FaBuilding, FaBuildingShield, FaHouseChimney } from "react-icons/fa6";
import { Button } from "../ui/button";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
import WhatsAppButton from "../bits/WhatsAppButton";

interface SplitTextProps {
    text: string;
    className?: string;
    delay?: number;
}

// Ultra-Performance Character/Word Splitter with Cinematic Blur Fade-in
const SplitText: React.FC<SplitTextProps> = ({ text, className = "", delay = 0 }) => {
    const words = text.split(" ");

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: delay,
            },
        },
    };

    const wordVariants: Variants = {
        hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                ease: [0.16, 1, 0.3, 1],
                duration: 1.1,
            },
        },
    };

    return (
        <motion.span
            className={`inline-block ${className}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {words.map((word, idx) => (
                <motion.span
                    key={idx}
                    variants={wordVariants}
                    className="inline-block mr-[0.2em] whitespace-nowrap"
                >
                    {word}
                </motion.span>
            ))}
        </motion.span>
    );
};

export default function LandingPage() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const fadeUpVariants = {
        hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
        }
    };

    const borderDrawVariants = {
        hidden: { scaleX: 0 },
        visible: {
            scaleX: 1,
            transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.4 }
        }
    };

    return (
        /* Towering viewport framework matching high-end editorial spatial layouts */
        <div className="relative min-h-[150vh] w-full bg-transparent text-white overflow-hidden flex flex-col justify-between select-none font-sans border-x border-white/5">

            {/* 1. Immersive BACKGROUND VIDEO LOOP with Cinematic Overlays */}
            <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-40 object-center"
                    poster="/images/hero.png" // Fallback high-res frame while video loads
                >
                    {/* Make sure your source points to your new high-res landscape video */}
                    <source src="/videos/dust.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* 2. Complex ASYMMETRICAL Bento Navigation Grid */}
            {/* Mobile Context Drawer (retained from original code logic) */}

            {/* 3. Main Bento grid Hero Content Block */}
            <main className="relative z-20 flex-grow flex flex-col justify-center max-w-[1400px] mx-auto w-full pt-20 pb-20 px-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-12 items-start w-full">

                    {/* Left Column Complex: Huge Serif Heading, Unique Discover Button UI, and Descriptive Para */}
                    <div className="md:col-span-9 space-y-12">
                        {/* The Huge Editorial Serif Header with SplitText Animation */}
                        <h1 className="text-3xl sm:text-6xl md:text-8xl lg:text-[110px] font-semibold tracking-tight text-white uppercase leading-[0.9] flex flex-col select-none !items-start !justify-start !text-left max-w-xl pt-8">
                            <SplitText text="Clean Spaces, Happy Environments" className="text-white !text-left" delay={0.1} />
                        </h1>

                        {/* descriptive paragraph content from cleaning brand voice */}
                        <motion.p
                            className="text-sm md:text-md text-neutral-400 leading-relaxed font-light font-sans tracking-wide max-w-2xl"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        >
                            At Shema Cleaning Agency, we deliver hyper-detailed maintenance protocols, pristine commercial operations, and premium eco-friendly treatments tailored for high-end corporate offices, industrial hubs, and luxury residences.
                        </motion.p>
                    </div>

                    {/* Right Asymmetric Meta Column */}
                    <div className="md:col-span-3 space-y-6 md:pb-6 relative h-full flex flex-col justify-end">
                        <Link href="/contact" passHref>
                            <Button
                                variant="ghost"
                                className="h-auto px-0 bg-black/30 px-4 py-2 rounded-xl text-white uppercase group pt-2 flex items-center gap-4 transition-all duration-300"
                            >
                                <span>Book Shema Services</span>
                                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-white group-hover:bg-white/20 text-neutral-400 group-hover:text-white transition-all duration-300">
                                    <FaArrowUpRightFromSquare className="w-2.5 h-2.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                                </div>
                            </Button>
                        </Link>
                    </div>
                </div>
            </main>

            {/* 4. COMPACT BENTO TEXT GRID Block */}
            <article className="relative z-20 w-full bg-transparent mx-auto py-16 px-4 md:px-8 border-b border-white/[0.08]">
                <div className="max-w-[1200px] mx-auto flex flex-col items-center justify-center">

                    {/* Top Span */}
                    <motion.div
                        className="w-full pb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-center border-b border-white/[0.08]"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex flex-col items-start text-left max-w-2xl">
                            <WhatsAppButton />
                        </div>
                    </motion.div>

                    {/* Bottom Row */}
                    <div className="w-full grid grid-cols-1 md:grid-cols-2">
                        {/* Bottom Left Cell */}
                        <motion.div
                            className="pt-10 pb-6 md:pb-0 md:pr-10 flex flex-col text-left justify-between border-b md:border-b-0 border-white/[0.08] md:border-r"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <Link href="mailto:info@example.com">
                                <h4 className="text-lg font-mono text-white mb-2 uppercase tracking-wide">
                                    Email Us
                                </h4>
                            </Link>
                        </motion.div>

                        {/* Bottom Right Cell */}
                        <motion.div
                            className="pt-10 md:pl-10 flex flex-col text-left justify-between"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Link href="tel:07346459922">
                                <h4 className="text-lg font-mono text-white mb-2 uppercase tracking-wide">
                                    Direct Call
                                </h4>
                            </Link>
                        </motion.div>
                    </div>

                </div>
            </article>

        </div>
    );
}