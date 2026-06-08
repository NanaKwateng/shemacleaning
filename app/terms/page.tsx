import Link from "next/link";

export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-black text-neutral-300 font-sans py-32 px-6">
            <div className="max-w-3xl mx-auto space-y-12">
                {/* Header */}
                <div className="space-y-4 border-b border-white/10 pb-8">
                    <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest block">[ SERVICES ]</span>
                    <h1 className="text-3xl md:text-5xl font-mono uppercase tracking-tight text-white">Terms of Service</h1>
                    <p className="text-xs font-mono text-neutral-500 uppercase">Effective Date: May 2026</p>
                </div>

                {/* Content Sections */}
                <div className="space-y-8 text-sm leading-relaxed font-light text-neutral-400">
                    <section className="space-y-3">
                        <h3 className="font-mono text-white uppercase text-base tracking-wide">1. Service Scope Execution</h3>
                        <p>
                            Shema Cleaning & Concierge Services agrees to provide sanitation, deep washing, and maintenance operations as outlined during client booking confirmation. Modifications to the structural area layout metrics must be reported 48 hours prior to arrival.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h3 className="font-mono text-white uppercase text-base tracking-wide">2. Facility Access Clearances</h3>
                        <p>
                            Clients must provide authorized entry clearances to corporate towers, office parks, or homes during scheduled time blocks. If our team is denied access or locked out during verified appointment blocks, an operational dispatch fee will apply.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h3 className="font-mono text-white uppercase text-base tracking-wide">3. Quality Inspections & Claims</h3>
                        <p>
                            We maintain an elite white-glove audit standard. If any zone does not meet your visual expectations, clients must report concerns within 24 hours of project wrap-up so our field teams can correct the issue immediately.
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
