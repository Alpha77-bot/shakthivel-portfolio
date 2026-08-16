const STEPS = [
  { n: "01", title: "Understand", desc: "Understand the user problem and context before touching the interface." },
  { n: "02", title: "Define", desc: "Identify the core user need and what the product actually needs to solve." },
  { n: "03", title: "Map", desc: "Sketch user flows and information architecture to see the whole shape of it." },
  { n: "04", title: "Prototype", desc: "Explore low-fidelity ideas and interaction patterns before committing." },
  { n: "05", title: "Design", desc: "Build the interface and interaction system with intention, not defaults." },
  { n: "06", title: "Build & Iterate", desc: "Work with real technology, test the experience, and keep improving it." },
];

export default function DesignApproach() {
  return (
    <section className="py-28 md:py-36 border-t border-ink-line">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="reveal mb-14 max-w-xl">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-signal-listen mb-3">
            04 / My Design Approach
          </p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-mist-bright">
            A process I'm still refining — on purpose.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-line rounded-2xl overflow-hidden border border-ink-line">
          {STEPS.map((s, idx) => (
            <div
              key={s.n}
              className="reveal bg-ink p-8"
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              <span className="font-mono text-signal-listen text-sm">{s.n}</span>
              <h3 className="font-display font-semibold text-mist-bright text-lg mt-3">
                {s.title}
              </h3>
              <p className="text-mist text-sm mt-2 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
