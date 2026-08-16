import { ShieldCheck, Briefcase, Calendar, Building2 } from "lucide-react";
import { experience } from "../data/profile";

export default function Experience() {
  return (
    <section id="experience" className="py-28 md:py-36 border-t border-ink-line bg-ink-soft/30">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="reveal mb-16">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-signal-listen mb-3">
            02 / Professional Experience
          </p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-mist-bright max-w-xl">
            Product Management &amp; Product Security in action.
          </h2>
          <p className="mt-4 text-mist max-w-2xl leading-relaxed">
            Hands-on product management experience spanning multi-tenant healthcare IT platforms, AI products, product security assessments, and end-to-end sprint execution.
          </p>
        </div>

        <div className="space-y-8">
          {experience.map((exp, idx) => (
            <div
              key={exp.company}
              className="reveal rounded-xl2 border border-ink-line bg-ink p-8 md:p-10 hover:border-signal-listen/30 transition-colors"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-ink-line/60 pb-6 mb-6">
                <div>
                  <div className="flex items-center gap-2 text-signal-listen font-mono text-xs uppercase tracking-wider mb-2">
                    <Briefcase size={14} />
                    <span>{exp.role}</span>
                  </div>
                  <h3 className="font-display font-semibold text-2xl text-mist-bright flex items-center gap-2">
                    <Building2 size={20} className="text-mist/70" />
                    {exp.company}
                  </h3>
                </div>

                <div className="flex flex-col md:items-end gap-1 font-mono text-xs text-mist/70">
                  <span className="flex items-center gap-1.5 bg-ink-soft px-3 py-1.5 rounded-full border border-ink-line">
                    <Calendar size={13} className="text-signal-listen" />
                    {exp.period}
                  </span>
                  <span className="text-[11px] text-signal-speak mt-1">{exp.context}</span>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.points.map((pt, i) => (
                  <li key={i} className="text-mist text-sm md:text-base flex gap-3 leading-relaxed">
                    <ShieldCheck size={18} className="text-signal-listen shrink-0 mt-0.5" />
                    <span>{pt}</span>
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
