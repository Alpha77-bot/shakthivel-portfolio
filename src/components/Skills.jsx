const GROUPS = [
  {
    title: "Product Management",
    accent: "bg-signal-listen",
    items: [
      "PRDs & Feature Specs",
      "Product Strategy & Roadmap",
      "Backlog & Sprint Planning",
      "UAT & Issue Triage",
      "Ticket Lifecycle Tracking",
      "Vendor Assessment",
      "Cross-functional Leadership",
    ],
  },
  {
    title: "Product Security & Risk",
    accent: "bg-signal-speak",
    items: [
      "Product Security Analysis",
      "Data Privacy & HIPAA",
      "REST API Security & iFrames",
      "Role-Based Access (RBAC)",
      "Defect & Severity Triage",
      "Security Audits & Compliance",
      "Multi-tenant Isolation",
    ],
  },
  {
    title: "Product & AI UX",
    accent: "bg-signal-process",
    items: [
      "Conversational UX",
      "AI Interaction Design",
      "Information Architecture",
      "User Journey Mapping",
      "Wireframing & Prototyping",
      "Figma Design Systems",
    ],
  },
  {
    title: "Engineering & Cloud",
    accent: "bg-saffron",
    items: ["React & JavaScript", "Python & REST APIs", "Healthcare IT Systems", "LiveKit WebRTC", "PostgreSQL & Weaviate"],
  },
  {
    title: "Tools & Methodologies",
    accent: "bg-mist-bright",
    items: ["Jira & Confluence", "GitHub & Git", "Docker & Kubernetes", "RAG & Vector Search", "Postman & API Testing"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 md:py-36 border-t border-ink-line bg-ink-soft/40">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="reveal mb-14 max-w-xl">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-signal-listen mb-3">
            05 / Core Capabilities
          </p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-mist-bright">
            What I bring to a product &amp; engineering organization.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {GROUPS.map((g, idx) => (
            <div
              key={g.title}
              className="reveal rounded-2xl border border-ink-line p-6"
              style={{ transitionDelay: `${idx * 70}ms` }}
            >
              <div className="flex items-center gap-2 mb-5">
                <span className={`w-1.5 h-1.5 rounded-full ${g.accent}`} />
                <h3 className="font-mono text-[11px] uppercase tracking-wider text-mist">
                  {g.title}
                </h3>
              </div>
              <ul className="space-y-2.5">
                {g.items.map((it) => (
                  <li key={it} className="text-mist-bright text-sm font-medium">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
