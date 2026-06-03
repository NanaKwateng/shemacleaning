// app/api/contact/route.ts
// Fixed: 
//   1. `replyTo` → `reply_to` (correct Resend SDK field name)
//   2. Detailed error logging so you can see the exact Resend rejection reason
//   3. API key presence check on startup
//   4. Returns the actual Resend error message to the console

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// ─── Sanity check on boot ────────────────────────────────────────────────────
if (!process.env.RESEND_API_KEY) {
  console.error(
    "❌ RESEND_API_KEY is missing from environment variables.\n" +
    "   Add it to .env.local and restart the dev server."
  );
}

const resend = new Resend(process.env.RESEND_API_KEY);

// ─── Config ──────────────────────────────────────────────────────────────────
// OWNER_EMAIL: where YOU (the site owner) receive enquiries
const OWNER_EMAIL = process.env.OWNER_EMAIL ?? "owner@shemacleaning.com";

// FROM_EMAIL rules:
//   • Before domain verification → must be exactly: onboarding@resend.dev
//   • After verifying shemacleaning.com in Resend dashboard → use your own domain
const FROM_EMAIL = process.env.FROM_EMAIL ?? "onboarding@resend.dev";

// ─── Handler ─────────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    // 1. Parse body
    let body: { name?: string; email?: string; message?: string };
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }

    const { name, email, message } = body;

    // 2. Server-side validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    // 3. Log what we're about to send (safe for server logs, never reaches client)
    console.log("[Contact] Attempting to send email:", {
      from: FROM_EMAIL,
      to: OWNER_EMAIL,
      subject: `New Enquiry from ${name}`,
    });

    // 4. Send via Resend
    // IMPORTANT: the correct field is `reply_to`, NOT `replyTo`
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [OWNER_EMAIL],
      replyTo: email, // Changed from reply_to to replyTo
      subject: `New Enquiry from ${name} — Shema Cleaning Services`,
      html: buildEmailHtml({ name, email, message }),
    });


    // 5. Handle Resend errors
    if (error) {
      console.error("[Resend] Send failed:", JSON.stringify(error, null, 2));
      return NextResponse.json(
        {
          error: "Failed to send message. Please try again.",
          ...(process.env.NODE_ENV === "development" && { debug: error }),
        },
        { status: 500 }
      );
    }

    console.log("[Contact] Email sent successfully. ID:", data?.id);
    return NextResponse.json({ success: true, id: data?.id }, { status: 200 });

  } catch (err) {
    console.error("[Contact API] Unexpected error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

// ─── Email template ───────────────────────────────────────────────────────────
function buildEmailHtml({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  const esc = (str: string) =>
    str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Enquiry — Shema Cleaning</title>
</head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0"
          style="background:#111111;border:1px solid #2a2a2a;border-radius:12px;overflow:hidden;max-width:600px;width:100%;">

          <tr>
            <td style="padding:32px 40px;border-bottom:1px solid #1f1f1f;">
              <p style="margin:0;font-size:10px;letter-spacing:0.25em;color:#555;text-transform:uppercase;font-family:monospace;">SHEMA CLEANING SERVICES</p>
              <h1 style="margin:8px 0 0;font-size:22px;font-weight:500;color:#f5f5f5;letter-spacing:-0.5px;">New Service Enquiry</h1>
            </td>
          </tr>

          <tr>
            <td style="padding:32px 40px;">
              <p style="margin:0 0 4px;font-size:9px;letter-spacing:0.2em;color:#555;text-transform:uppercase;font-family:monospace;">CLIENT NAME</p>
              <p style="margin:0 0 24px;font-size:16px;color:#e5e5e5;font-weight:500;">${esc(name)}</p>

              <p style="margin:0 0 4px;font-size:9px;letter-spacing:0.2em;color:#555;text-transform:uppercase;font-family:monospace;">EMAIL ADDRESS</p>
              <p style="margin:0 0 24px;">
                <a href="mailto:${esc(email)}" style="font-size:15px;color:#a3a3a3;text-decoration:underline;">${esc(email)}</a>
              </p>

              <p style="margin:0 0 8px;font-size:9px;letter-spacing:0.2em;color:#555;text-transform:uppercase;font-family:monospace;">MESSAGE</p>
              <div style="background:#0d0d0d;border:1px solid #1f1f1f;border-radius:8px;padding:20px 24px;">
                <p style="margin:0;font-size:14px;color:#d4d4d4;line-height:1.7;white-space:pre-wrap;">${esc(message)}</p>
              </div>
            </td>
          </tr>

          <tr>
            <td style="padding:0 40px 32px;">
              <a href="mailto:${esc(email)}?subject=Re:%20Your%20Shema%20Cleaning%20Enquiry"
                style="display:inline-block;background:#ffffff;color:#000000;font-size:11px;font-family:monospace;letter-spacing:0.15em;text-transform:uppercase;text-decoration:none;padding:12px 28px;border-radius:100px;font-weight:700;">
                Reply to ${esc(name)}
              </a>
            </td>
          </tr>

          <tr>
            <td style="padding:20px 40px;border-top:1px solid #1a1a1a;">
              <p style="margin:0;font-size:9px;color:#3a3a3a;font-family:monospace;letter-spacing:0.15em;text-transform:uppercase;">
                © 2026 SHEMA CLEANING AND CONCIERGE SERVICES — MANCHESTER, UK
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}