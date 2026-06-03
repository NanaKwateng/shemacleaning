"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaChevronDown, FaArrowUpRightFromSquare } from "react-icons/fa6";
import DropDown from "./DropDown";
import { ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";


export default function Header() {
    const pathname = usePathname();
    return (
        <header className="fixed top-0 left-0 w-full z-50 border-b border-white/[0.04] bg-transparent mix-blend-difference">
            {/* Desktop Large Header with Grids (Visible on md screens and up) */}
            <div className="hidden md:grid max-w-[1400px] mx-auto grid-cols-[1fr_auto_1fr_auto_1fr] h-20 items-center">
                {/* Cell 1: Col 1 Nav Group */}
                <div className="px-6 md:px-10 flex items-center gap-12 text-[10px] font-mono tracking-[0.25em] uppercase text-neutral-400">
                    {[
                        { name: "Home", path: "/" },
                        { name: "About", path: "/about" }
                    ].map((item) => {
                        const isActive = pathname === item.path;
                        return (
                            <Link
                                key={item.name}
                                href={item.path}
                                className={`transition-colors flex items-center gap-2 text-white font-semibold relative group py-2 ${isActive ? "text-white font-bold" : "hover:text-white"
                                    }`}
                            >
                                {item.name}
                                <ArrowUpRight className="w-2.5 h-2.5 text-white font-semibold group-hover:text-white transition-colors" />
                                <span className={`absolute bottom-0 left-0 h-px bg-white transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                                    }`} />
                            </Link>
                        );
                    })}
                </div>


                {/* Thin Grid divider */}
                <div className="w-[1px] h-full bg-white/[0.08]" />

                {/* Cell 2: Central Col w/ Logo */}
                <div className="px-6 md:px-10 flex items-center justify-center">
                    <motion.a
                        href="/"
                        className="text-sm text-center font-semibold uppercase text-white flex items-center gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Shema Cleaning & Concierge Services
                    </motion.a>
                </div>

                {/* Thin Grid divider */}
                <div className="w-[1px] h-full bg-white/[0.08]" />

                {/* Cell 3: Col 3 Nav Group & Profile */}
                <div className="px-6 md:px-10 flex items-center justify-between gap-12 text-[10px] font-mono tracking-[0.25em] uppercase text-neutral-400">
                    {[
                        { name: "Services", path: "/services" },
                        { name: "Contact", path: "/contact" }
                    ].map((item) => {
                        const isActive = pathname === item.path;
                        return (
                            <Link
                                key={item.name}
                                href={item.path}
                                className={`transition-colors flex items-center gap-2 relative group py-2 text-white ${isActive ? "text-white font-bold" : "hover:text-white"
                                    }`}
                            >
                                {item.name}
                                <FaArrowUpRightFromSquare className="w-2.5 h-2.5 text-neutral-600 group-hover:text-white transition-colors" />
                                <span className={`absolute bottom-0 left-0 h-[1px] bg-white transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                                    }`} />
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Mobile Header Layout (Visible on screens smaller than md) */}
            <div className="md:hidden flex items-center justify-between h-24 px-6 w-full">
                <MobileNav />
            </div>
        </header>
    );
}

const MobileNav = () => {
    return (
        <div className="flex items-center justify-between w-full text-white">
            <h3 className="text-md font-light tracking-[0.3em] uppercase font-mono">Shema</h3>
            <DropDown />
        </div>
    );
};
