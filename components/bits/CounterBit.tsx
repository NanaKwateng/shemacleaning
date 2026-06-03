// components/bits/CounterBit.tsx
// ⚠️  CHANGES: Added aria-label to section and aria-label to each stat for screen readers.
//    No layout, animation, or content changes.

import CountUp from "../ui/count-up";

export default function CounterBits() {
  return (
    <section
      className="py-24 bg-obsidian px-6 text-center border-y border-white/5"
      aria-label="Shema Cleaning Services key statistics"
    >
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="space-y-2" aria-label="Over 700 spaces sanitized">
          <CountUp
            to={700}
            suffix="+"
            duration={2.5}
            className="text-3xl md:text-5xl font-serif tracking-tight block"
            aria-hidden="true"
          />
          <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
            Spaces Sanitized
          </span>
        </div>

        <div className="space-y-2" aria-label="100 percent client satisfaction rate">
          <CountUp
            to={100}
            suffix="%"
            duration={2}
            className="text-3xl md:text-5xl font-serif tracking-tight block"
            aria-hidden="true"
          />
          <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
            Client Satisfaction
          </span>
        </div>

        <div className="space-y-2" aria-label="120 plus thousand square feet cleaned">
          <CountUp
            to={12}
            suffix="0+"
            duration={3}
            className="text-3xl md:text-5xl font-serif tracking-tight block"
            aria-hidden="true"
          />
          <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
            Sq. Ft. Cleaned
          </span>
        </div>

        <div className="space-y-2" aria-label="Over 5 years of experience">
          <CountUp
            to={5}
            suffix="+"
            duration={1.5}
            className="text-3xl md:text-5xl font-serif tracking-tight block"
            aria-hidden="true"
          />
          <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
            Years Experience
          </span>
        </div>
      </div>
    </section>
  );
}