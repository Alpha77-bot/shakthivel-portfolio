import { ArrowRight, FileText, Mail } from "lucide-react";
import { profile } from "../data/profile";

const BARS = [0.4, 0.7, 0.35, 0.9, 0.55, 0.8, 0.3, 0.65, 0.45, 0.75, 0.5, 0.35];

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* ambient backdrop */}
      <div
        className="pointer-events-none absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full opacity-[0.15] blur-3xl"
        style={{ background: "radial-gradient(circle, #4CC9F0 0%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full opacity-[0.10] blur-3xl"
        style={{ background: "radial-gradient(circle, #7CE0A8 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-[1.15fr_0.85fr] gap-16 items-center w-full">
        <div className="reveal">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-signal-listen mb-6">
            Product Management &amp; Security Portfolio
          </p>
          <h1 className="font-display font-semibold text-4xl sm:text-5xl md:text-6xl leading-[1.08] text-mist-bright text-balance">
            Driving secure, AI-powered products from <span className="text-signal-listen">vision</span> to <span className="text-signal-speak">execution</span>.
          </h1>
          <p className="mt-6 text-lg text-mist max-w-xl leading-relaxed">
            I'm Shakthivel M — a Product Manager with hands-on experience in software engineering, multi-tenant cloud platforms, AI product design, and product security.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 bg-signal-listen text-ink font-semibold text-sm px-6 py-3.5 rounded-full hover:bg-mist-bright transition-colors"
            >
              View My Work <ArrowRight size={16} />
            </a>
            <a
              href="#resume"
              className="inline-flex items-center gap-2 border border-ink-line text-mist-bright font-medium text-sm px-6 py-3.5 rounded-full hover:border-mist transition-colors"
            >
              <FileText size={16} /> Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-mist hover:text-mist-bright font-medium text-sm px-2 py-3.5 transition-colors"
            >
              <Mail size={16} /> Contact Me
            </a>
          </div>
        </div>

        {/* AI visual: listening waveform inside a status ring */}
        <div className="reveal flex justify-center md:justify-end" style={{ transitionDelay: "120ms" }}>
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full border border-ink-line flex items-center justify-center animate-floatSlow">
            <div className="absolute inset-4 rounded-full border border-signal-listen/20" />
            <div className="absolute inset-10 rounded-full border border-signal-listen/10" />
            <div className="flex items-end gap-1.5 h-16">
              {BARS.map((h, idx) => (
                <span
                  key={idx}
                  className="w-1.5 rounded-full bg-signal-listen animate-wave"
                  style={{
                    height: `${h * 100}%`,
                    animationDelay: `${idx * 0.09}s`,
                    animationDuration: `${0.8 + (idx % 3) * 0.2}s`,
                  }}
                />
              ))}
            </div>
            <span className="absolute -bottom-3 bg-ink border border-ink-line px-3 py-1 rounded-full font-mono text-[10px] uppercase tracking-wider text-signal-listen">
              listening
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
