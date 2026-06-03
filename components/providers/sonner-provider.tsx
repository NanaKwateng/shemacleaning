// components/providers/sonner-provider.tsx
// Drop this anywhere inside your root layout <body>.
// It renders the Sonner <Toaster /> with a dark theme that matches
// the Shema site aesthetic.

"use client";

import { Toaster } from "sonner";

export default function SonnerProvider() {
  return (
    <Toaster
      theme="dark"
      position="bottom-right"
      richColors
      closeButton
      toastOptions={{
        style: {
          background: "#111111",
          border: "1px solid #2a2a2a",
          color: "#f5f5f5",
          fontFamily: "var(--font-sora), monospace",
          fontSize: "12px",
          letterSpacing: "0.02em",
          borderRadius: "12px",
        },
        classNames: {
          success: "!border-emerald-500/30",
          error: "!border-red-500/30",
        },
      }}
    />
  );
}