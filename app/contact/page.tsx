"use client";

import { useState } from "react";
import { toast } from "sonner";
import { FaWhatsapp, FaPhone } from "react-icons/fa6";
import Link from "next/link";

const businessPhoneNumber = "07346459922";
const whatsAppNumber = "7852977479"; // WhatsApp requires country code without leading zero

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error ?? "Something went wrong. Please try again.", {
          description: "Check your details and try submitting again.",
          duration: 5000,
         });
      } else {
        toast.success("Message sent successfully!", {
          description: "We'll be in touch shortly. Thank you for reaching out.",
          duration: 6000,
        });
        setForm({ name: "", email: "", message: "" });
      }
    } catch {
      toast.error("Network error. Please check your connection.", {
        duration: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main 
      className="relative min-h-screen w-full bg-black flex flex-col items-center justify-center px-4 py-20 overflow-hidden"
      aria-label="Contact and booking page"
    >
      {/* ================= BACKGROUND ABSTRACT ELEMENTS ================= */}
      {/* Top-Right Cloth-like Wave */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] max-w-[800px] pointer-events-none opacity-40 mix-blend-screen select-none z-0">
        <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
          <defs>
            <linearGradient id="cloth-grad-tr" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#171717" stopOpacity="0" />
              <stop offset="50%" stopColor="#2d2d2d" stopOpacity="0.6" />
              <stop offset="75%" stopColor="#737373" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#111111" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path 
            d="M200,0 C300,40 400,0 400,100 C400,250 250,350 150,400 C80,350 120,200 100,100 C80,20 C120,-20 200,0 Z" 
            fill="url(#cloth-grad-tr)"
            className="blur-[2px]"
          />
          <path 
            d="M250,0 C320,60 380,40 400,140 C400,220 310,320 200,380 C130,310 170,180 140,90 C120,20 180,10 250,0 Z" 
            fill="none" 
            stroke="#404040" 
            strokeWidth="0.5" 
            strokeOpacity="0.3"
          />
        </svg>
      </div>

      {/* Bottom-Left Cloth-like Wave */}
      <div className="absolute bottom-0 left-0 w-[55vw] h-[55vw] max-w-[850px] pointer-events-none opacity-35 mix-blend-screen select-none z-0">
        <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
          <defs>
            <linearGradient id="cloth-grad-bl" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#1c1c1c" stopOpacity="0" />
              <stop offset="40%" stopColor="#404040" stopOpacity="0.5" />
              <stop offset="80%" stopColor="#1a1a1a" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0a0a0a" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path 
            d="M0,200 C60,120 180,150 250,220 C350,300 300,400 150,400 C50,400 0,350 0,200 Z" 
            fill="url(#cloth-grad-bl)"
            className="blur-[1px]"
          />
          <path 
            d="M0,240 C50,170 140,190 210,260 C290,330 260,400 110,400 C40,400 0,370 0,240 Z" 
            fill="none" 
            stroke="#262626" 
            strokeWidth="0.75" 
            strokeOpacity="0.4"
          />
        </svg>
      </div>

      {/* Center ambient glow container for form depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neutral-900/10 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* ==================== INTERFACE CONTENT ==================== */}
      <div className="relative w-full max-w-[440px] mx-auto space-y-8 z-10">
        {/* Header/Brand Section */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-10 h-10 bg-neutral-950/80 border border-neutral-800/80 rounded-xl flex items-center justify-center shadow-2xl backdrop-blur-md">
            <span className="text-white font-mono font-black text-xl tracking-tighter">S</span>
          </div>
          
          <div className="space-y-1">
            <h1 className="text-2xl font-semibold tracking-tight text-neutral-100">
              Book Shema Services
            </h1>
            <p className="text-sm text-neutral-400">
              Fill out the form below to request a service.
            </p>
          </div>
        </div>

        {/* Action Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
          aria-label="Service booking enquiry form"
        >
          <div className="space-y-1.5">
            <label htmlFor="contact-name" className="text-xs font-medium text-neutral-400 block pl-0.5">
              Client / Company Name
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full h-11 bg-neutral-900/40 backdrop-blur-md border border-neutral-800/80 px-3.5 rounded-lg focus:outline-none focus:ring-1 focus:ring-neutral-700 focus:border-neutral-700 text-neutral-200 placeholder-neutral-600 text-sm transition-all"
              placeholder="Your Name or Company"
              required
              aria-required="true"
              disabled={loading}
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="contact-email" className="text-xs font-medium text-neutral-400 block pl-0.5">
              Email Address
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full h-11 bg-neutral-900/40 backdrop-blur-md border border-neutral-800/80 px-3.5 rounded-lg focus:outline-none focus:ring-1 focus:ring-neutral-700 focus:border-neutral-700 text-neutral-200 placeholder-neutral-600 text-sm transition-all"
              placeholder="client@domain.com"
              required
              aria-required="true"
              disabled={loading}
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="contact-message" className="text-xs font-medium text-neutral-400 block pl-0.5">
              Service Type &amp; Details
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="w-full bg-neutral-900/40 backdrop-blur-md border border-neutral-800/80 p-3.5 rounded-lg focus:outline-none focus:ring-1 focus:ring-neutral-700 focus:border-neutral-700 text-neutral-200 placeholder-neutral-600 text-sm resize-none transition-all leading-relaxed"
              placeholder="Please detail your space (Office, Commercial, or Home) and desired timing window..."
              required
              aria-required="true"
              disabled={loading}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full h-11 bg-neutral-100 text-neutral-900 font-medium text-sm rounded-lg hover:bg-neutral-200 active:bg-neutral-300 transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed shadow-sm mt-2"
          >
            {loading ? "Sending Request..." : "Send Message"}
          </button>
        </form>

        {/* Separator Divider */}
        <div className="relative flex items-center py-2">
          <div className="flex-grow border-t border-neutral-800/50"></div>
          <span className="flex-shrink mx-4 text-xs text-neutral-600 font-normal">or connect instantly</span>
          <div className="flex-grow border-t border-neutral-800/50"></div>
        </div>

        {/* Quick Contact Controls */}
        <div
          className="grid grid-cols-2 gap-3"
          aria-label="Direct contact options"
        >
          <Link
            href={`https://wa.me/44${whatsAppNumber.replace(/^0/, "")}?text=Hello%20Shema%20Cleaning%20Agency%2C%20I%20would%20like%20to%20enquire%20about%20your%20cleaning%20services.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 h-10 border border-neutral-800/80 rounded-lg bg-neutral-900/20 backdrop-blur-sm text-neutral-400 font-medium text-xs hover:bg-neutral-900/80 hover:text-neutral-200 transition-all group"
            aria-label="Chat with Shema Cleaning Services on WhatsApp"
          >
            <FaWhatsapp
              className="w-4 h-4 text-emerald-500/80 group-hover:text-emerald-400 transition-colors"
              aria-hidden="true"
            />
            WhatsApp
          </Link>

          <Link
            href={`tel:${businessPhoneNumber}`}
            className="flex items-center justify-center gap-2 h-10 border border-neutral-800/80 rounded-lg bg-neutral-900/20 backdrop-blur-sm text-neutral-400 font-medium text-xs hover:bg-neutral-900/80 hover:text-neutral-200 transition-all group"
            aria-label={`Call Shema Cleaning Services directly on ${businessPhoneNumber}`}
          >
            <FaPhone
              className="w-3.5 h-3.5 text-neutral-500 group-hover:text-neutral-400 transition-colors"
              aria-hidden="true"
            />
            Call Direct
          </Link>
        </div>
      </div>
    </main>
  );
}