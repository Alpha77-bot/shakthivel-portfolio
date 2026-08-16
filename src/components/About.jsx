export default function About() {
  return (
    <section id="about" className="py-28 md:py-36 border-t border-ink-line">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-[0.4fr_0.6fr] gap-12">
        <div className="reveal">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-signal-listen mb-3">
            01 / About
          </p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-mist-bright">
            Product Manager with a technical &amp; security foundation.
          </h2>
        </div>

        <div className="reveal space-y-5 text-mist text-lg leading-relaxed" style={{ transitionDelay: "100ms" }}>
          <p>
            I'm an MCA graduate currently serving as a Product Manager in the CXO Office at Trivitron Digital.ai, where I oversee AI healthcare products (ClaimIQ &amp; Vaani AI). My background spans software development, product security assessments, and multi-tenant SaaS architecture.
          </p>
          <p>
            Having authored PRDs, led UAT sprints, managed defect lifecycles, and investigated complex REST API &amp; iFrame integration failures, I approach product management with technical rigor: ensuring products are not only intuitive, but secure, scalable, and compliant (HIPAA &amp; data privacy).
          </p>
          <p>
            I thrive at the intersection of business vision, technical architecture, and user security — bridging engineering teams and executive stakeholders to ship products that deliver real value safely.
          </p>
        </div>
      </div>
    </section>
  );
}
