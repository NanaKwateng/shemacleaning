"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";
import Link from "next/link";

import {
    FaHouse,
    FaUser,
    FaBriefcase,
    FaEnvelope,
    FaEllipsis,
    FaUsersGear,
} from "react-icons/fa6";
import { TbHomeStar, TbMenu } from "react-icons/tb";
import { LuNotebookTabs } from "react-icons/lu";
import { MdConnectWithoutContact } from "react-icons/md";

// Menu Items
const menuItems = [
    {
        id: "home",
        label: "Home",
        icon: TbHomeStar,
        href: "/",
    },
    {
        id: "about",
        label: "About",
        icon: LuNotebookTabs,
        href: "/about",
    },
    {
        id: "services",
        label: "Services",
        icon: FaUsersGear,
        href: "/services",
    },
    {
        id: "contact",
        label: "Contact",
        icon: MdConnectWithoutContact,
        href: "/contact",
    },
];

const easeOutQuint: [number, number, number, number] = [
    0.23,
    1,
    0.32,
    1,
];

export default function DropDown() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeItem, setActiveItem] = useState("home");
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    const containerRef = useRef<HTMLDivElement>(null);

    const [contentRef, contentBounds] = useMeasure();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    const openHeight = Math.max(
        40,
        Math.ceil(contentBounds.height)
    );

    return (
        <div
            ref={containerRef}
            className="relative h-10 w-10 not-prose"
        >
            <motion.div
                layout
                initial={false}
                animate={{
                    width: isOpen ? 220 : 40,
                    height: isOpen ? openHeight : 40,
                    borderRadius: isOpen ? 14 : 12,
                }}
                transition={{
                    type: "spring",
                    damping: 34,
                    stiffness: 380,
                    mass: 0.8,
                }}
                className="absolute top-0 right-0 origin-top-right rounded-full overflow-hidden border border-border bg-white dark:bg-black shadow-lg"
                onClick={() => !isOpen && setIsOpen(true)}
            >
                {/* Closed Button */}
                <motion.div
                    initial={false}
                    animate={{
                        opacity: isOpen ? 0 : 1,
                        scale: isOpen ? 0.8 : 1,
                    }}
                    transition={{ duration: 0.15 }}
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                        pointerEvents: isOpen ? "none" : "auto",
                    }}
                >
                    <TbMenu className="h-5 w-5 text-muted-foreground" />
                </motion.div>

                {/* Menu Content */}
                <div ref={contentRef}>
                    <motion.div
                        layout
                        initial={false}
                        animate={{
                            opacity: isOpen ? 1 : 0,
                        }}
                        transition={{
                            duration: 0.2,
                            delay: isOpen ? 0.08 : 0,
                        }}
                        className="p-2"
                        style={{
                            pointerEvents: isOpen ? "auto" : "none",
                        }}
                    >
                        <ul className="m-0 flex list-none flex-col gap-1 p-0">
                            {menuItems.map((item, index) => {
                                const Icon = item.icon;

                                const isActive =
                                    activeItem === item.id;

                                const showIndicator = hoveredItem
                                    ? hoveredItem === item.id
                                    : isActive;

                                return (
                                    <motion.li
                                        key={item.id}
                                        initial={{
                                            opacity: 0,
                                            x: 8,
                                        }}
                                        animate={{
                                            opacity: isOpen ? 1 : 0,
                                            x: isOpen ? 0 : 8,
                                        }}
                                        transition={{
                                            delay: isOpen
                                                ? 0.06 + index * 0.02
                                                : 0,
                                            duration: 0.15,
                                            ease: easeOutQuint,
                                        }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => {
                                                setActiveItem(item.id);
                                                setIsOpen(false);
                                            }}
                                            onMouseEnter={() =>
                                                setHoveredItem(item.id)
                                            }
                                            onMouseLeave={() =>
                                                setHoveredItem(null)
                                            }
                                            className={`relative flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors duration-200 ease-out ${isActive
                                                ? "text-foreground"
                                                : "text-muted-foreground hover:text-foreground"
                                                }`}
                                        >
                                            {/* Active Background */}
                                            {showIndicator && (
                                                <motion.div
                                                    layoutId="activeIndicator"
                                                    className="absolute inset-0 rounded-lg bg-muted"
                                                    transition={{
                                                        type: "spring",
                                                        damping: 30,
                                                        stiffness: 520,
                                                        mass: 0.8,
                                                    }}
                                                />
                                            )}

                                            {/* Left Bar */}
                                            {showIndicator && (
                                                <motion.div
                                                    layoutId="leftBar"
                                                    className="absolute left-0 top-0 bottom-0 my-auto h-5 w-[3px] rounded-full bg-foreground"
                                                    transition={{
                                                        type: "spring",
                                                        damping: 30,
                                                        stiffness: 520,
                                                        mass: 0.8,
                                                    }}
                                                />
                                            )}

                                            {/* Icon */}
                                            <Icon className="relative z-10 h-[18px] w-[18px]" />

                                            {/* Label */}
                                            <span className="relative z-10 font-medium">
                                                {item.label}
                                            </span>
                                        </Link>
                                    </motion.li>
                                );
                            })}
                        </ul>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}