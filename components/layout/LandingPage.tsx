"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowUpRight, Menu, X, ShieldCheck, Sparkles, HelpCircle, ChevronDown, Download, ShoppingCart, User } from "lucide-react";
import { FaArrowUpRightFromSquare, FaBuilding, FaBuildingShield, FaHouseChimney } from "react-icons/fa6";
import { Button } from "../ui/button";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
import WhatsAppButton from "../bits/WhatsAppButton";
import AnimatedButton from "../ui/animated-button";
import ContactServicesSection from "./ContactService";

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
        <div className="relative min-h-screen w-full bg-transparent text-white overflow-hidden flex flex-col justify-between items-center select-none font-sans border-x border-white/5 py-12">

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
            <main className="relative z-20 flex-grow flex flex-col justify-center items-center max-w-[1400px] mx-auto w-full pt-10 pb-10 px-2 sm:px-4">
                <div className="grid grid-cols-1 gap-x-12 gap-y-12 items-center w-full">

                    {/* Left Column Complex: Huge Serif Heading, Unique Discover Button UI, and Descriptive Para */}
                    <div className="md:col-span-9 space-y-12">
                        {/* The Huge Editorial Serif Header with SplitText Animation */}
                        <h1 className="text-[35px] sm:text-6xl md:text-8xl lg:text-[110px] font-semibold tracking-tight text-white uppercase leading-[0.9] flex flex-col select-none text-center sm:text-left max-w-xl pt-8 px-2 sm:px-0">
                            <SplitText text="Clean Spaces, Happy Environments" className="text-white !text-left" delay={0.1} />
                        </h1>

                        {/* descriptive paragraph content from cleaning brand voice */}
                        <motion.p
                            className="text-sm md:text-lg text-white leading-relaxed tracking-tight max-w-2xl"
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

                            <AnimatedButton
                                className="w-fit"
                                onClick={() => console.log("Button clicked!")}
                            >
                                Book Shema Services
                            </AnimatedButton>
                        </Link>
                    </div>
                </div>
            </main>

            {/* 4. COMPACT BENTO TEXT GRID Block */}


        </div>
    );
}