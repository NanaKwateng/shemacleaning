import Link from "next/link";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-black text-neutral-300 font-sans py-32 px-6">
            <div className="max-w-3xl mx-auto space-y-12">
                {/* Header */}
                <div className="space-y-4 border-b border-white/10 pb-8">
                    <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest block"> COMPLIANCE CHARTER </span>
                    <h1 className="text-3xl md:text-5xl font-mono uppercase tracking-tight text-white">Privacy Policy</h1>
                    <p className="text-xs font-mono text-neutral-500 uppercase">Last Updated: May 2026</p>
                </div>

                {/* Content Sections */}
                <div className="space-y-8 text-sm leading-relaxed font-light text-neutral-400">
                    <section className="space-y-3">
                        <h3 className="font-mono text-white uppercase text-base tracking-wide">1. Information Collection</h3>
                        <p>
                            Shema Cleaning & Concierge Services collects critical identification metrics necessary to organize on-site deployment protocols. This includes company names, client contact points, property addresses, and unique layout instructions provided during consulting sessions.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h3 className="font-mono text-white uppercase text-base tracking-wide">2. Property Safety & Data Security</h3>
                        <p>
                            We maintain strict background-screening procedures. Any interior floor plan details, corporate schedules, access codes, or operational documentation shared with our crew are kept encrypted and restricted solely to assigned team members.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h3 className="font-mono text-white uppercase text-base tracking-wide">3. Third-Party Restrictions</h3>
                        <p>
                            We enforce a strict non-disclosure framework across our entire operations system. Shema Cleaning & Concierge Services never sells, leases, or barters client facility configurations or metadata profiles to third-party commercial marketing groups.
                        </p>
                    </section>
                </div>

                {/* Return Nav */}
                <div className="pt-8 border-t border-white/10">
                    <Link href="/" className="font-mono text-xs uppercase tracking-widest text-white hover:underline underline-offset-4">
                        &larr; Return to Home
                    </Link>
                </div>
            </div>
        </main>
    );
}
