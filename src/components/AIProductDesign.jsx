const FLOW = [
  { label: "User Intent", desc: "What the person actually wants, however they phrase it." },
  { label: "AI Understanding", desc: "What the system believes was asked — and how confident it is." },
  { label: "AI Response", desc: "What the system says or does, grounded in real data." },
  { label: "User Feedback", desc: "The person confirms, corrects, or interrupts." },
  { label: "Action / Confirmation", desc: "The system closes the loop — clearly, not silently." },
];

const CONCEPTS = [
  { title: "AI feedback loops", desc: "Every step the system takes should produce a visible, legible signal." },
  { title: "Trust", desc: "Earned by consistent, honest signaling — not by hiding uncertainty." },
  { title: "Transparency", desc: "The user can always tell what the system knows and what it's doing." },
  { title: "Error recovery", desc: "Mistakes get a clear, low-friction way back on track." },
  { title: "Human control", desc: "The person can interrupt, correct, or override at any point." },
  { title: "Conversational interaction", desc: "Multi-turn, contextual — not a single request-response box." },
];

export default function AIProductDesign() {
  return (
    <section id="ai-design" className="py-28 md:py-36 border-t border-ink-line bg-ink-soft/40">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="reveal mb-16 max-w-2xl">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-signal-process mb-3">
            03 / How I Think About AI Product Design
          </p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-mist-bright">
            Good AI UX isn't about generating answers.
          </h2>
          <p className="mt-4 text-mist leading-relaxed">
            It's about helping people understand what the AI knows, what it's doing, what it
            needs from them, what happened, and what they can do next. That's a different design
            problem from a traditional interface — the "state" is often invisible unless you
            design it to be seen.
          </p>
        </div>

        {/* Flow diagram */}
        <div className="reveal flex flex-col md:flex-row items-stretch gap-3 md:gap-0 mb-20">
          {FLOW.map((step, idx) => (
            <div key={step.label} className="flex-1 flex md:items-center">
              <div className="flex-1 rounded-2xl border border-ink-line bg-ink px-5 py-6 h-full">
                <span className="font-mono text-[10px] uppercase tracking-wider text-mist">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display font-semibold text-mist-bright mt-2 text-base">
                  {step.label}
                </h3>
                <p className="text-mist text-sm mt-2 leading-relaxed">{step.desc}</p>
              </div>
              {idx < FLOW.length - 1 && (
                <div className="hidden md:flex items-center justify-center w-8 text-signal-listen shrink-0">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Concept grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CONCEPTS.map((c, idx) => (
            <div
              key={c.title}
              className="reveal rounded-2xl border border-ink-line p-6 hover:border-signal-listen/30 transition-colors"
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              <h4 className="font-display font-medium text-mist-bright">{c.title}</h4>
              <p className="text-mist text-sm mt-2 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
