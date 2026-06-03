// app/robots.ts
// Next.js 14+ App Router — Dynamic robots.txt Generator
// Automatically served at https://shemacleaning.com/robots.txt

import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/", "/404", "/500"],
      },
      {
        userAgent: "Googlebot",
        allow: ["/", "/*.js", "/*.css", "/*.jpg", "/*.jpeg", "/*.png", "/*.webp", "/*.svg", "/*.mp4"],
      },
    ],
    sitemap: "https://shemacleaning.com/sitemap.xml",
  };
}