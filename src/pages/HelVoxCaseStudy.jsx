import { ArrowUpRight, ExternalLink, Play, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import StateMachineDemo from "../components/StateMachineDemo";
import { GithubIcon } from "../components/BrandIcons";
import useReveal from "../hooks/useReveal";
import { helvox as h } from "../data/helvox";

function Eyebrow({ children }) {
  return (
    <p className="font-mono text-xs tracking-[0.2em] uppercase text-signal-listen mb-4">
      {children}
    </p>
  );
}

function Block({ children, className = "" }) {
  return (
    <div className={`reveal py-16 md:py-20 border-t border-ink-line ${className}`}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">{children}</div>
    </div>
  );
}

export default function HelVoxCaseStudy() {
  const rootRef = useReveal([]);

  return (
    <div ref={rootRef} className="bg-ink min-h-screen">
      <Nav theme="dark" backLabel="Back to portfolio" />

      {/* Hero */}
      <section className="pt-40 pb-16 relative overflow-hidden">
        <div
          className="pointer-events-none absolute -top-20 right-0 w-[480px] h-[480px] rounded-full opacity-[0.14] blur-3xl"
          style={{ background: "radial-gradient(circle, #4CC9F0 0%, transparent 70%)" }}
        />
        <div className="max-w-6xl mx-auto px-6 md:px-10 relative">
          <Eyebrow>Case Study — AI Product Design</Eyebrow>
          <h1 className="font-display font-semibold text-4xl md:text-6xl text-mist-bright leading-[1.08] max-w-3xl">
            {h.name}: a voice agent that shows its work.
          </h1>
          <p className="text-mist text-lg mt-6 max-w-2xl leading-relaxed">{h.overview}</p>

          <div className="flex flex-wrap gap-2 mt-8">
            {h.tags.map((t) => (
              <span
                key={t}
                className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border border-signal-listen/30 text-signal-listen"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={h.figmaUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-signal-listen text-ink font-semibold text-xs px-5 py-2.5 rounded-full hover:bg-mist-bright transition-colors"
            >
              <Layers size={14} /> Figma Prototype <ExternalLink size={13} />
            </a>
            <a
              href={h.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-ink-line text-mist-bright font-medium text-xs px-5 py-2.5 rounded-full hover:border-signal-listen transition-colors"
            >
              <Play size={14} /> Live Interactive Demo <ExternalLink size={13} />
            </a>
            {h.repo && (
              <a
                href={h.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-mist hover:text-mist-bright text-xs font-mono ml-2 transition-colors"
              >
                <GithubIcon size={14} /> Source Code
              </a>
            )}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {h.stack.map((s) => (
              <span key={s} className="text-mist text-xs px-3 py-1.5 rounded-full bg-ink-soft border border-ink-line">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <Block>
        <div className="grid md:grid-cols-[0.35fr_0.65fr] gap-10">
          <Eyebrow>The Problem</Eyebrow>
          <p className="text-mist-bright text-xl md:text-2xl font-display font-medium leading-snug max-w-2xl">
            {h.problem}
          </p>
        </div>
      </Block>

      {/* Target users */}
      <Block>
        <Eyebrow>Target Users</Eyebrow>
        <div className="grid sm:grid-cols-3 gap-5 mt-6">
          {h.targetUsers.map((u) => (
            <div key={u.title} className="rounded-2xl border border-ink-line p-6">
              <h3 className="font-display font-medium text-mist-bright">{u.title}</h3>
              <p className="text-mist text-sm mt-2 leading-relaxed">{u.detail}</p>
            </div>
          ))}
        </div>
      </Block>

      {/* User journey */}
      <Block>
        <Eyebrow>User Journey</Eyebrow>
        <div className="mt-6 flex flex-col md:flex-row gap-3 md:gap-0">
          {h.journey.map((j, idx) => (
            <div key={j.step} className="flex-1 flex md:items-stretch">
              <div className="flex-1 rounded-2xl border border-ink-line bg-ink-soft px-5 py-6">
                <span className="font-mono text-[10px] text-signal-listen">{String(idx + 1).padStart(2, "0")}</span>
                <h4 className="font-display font-medium text-mist-bright mt-2">{j.step}</h4>
                <p className="text-mist text-xs mt-2 leading-relaxed">{j.detail}</p>
              </div>
              {idx < h.journey.length - 1 && (
                <div className="hidden md:flex items-center justify-center w-6 text-signal-listen shrink-0">→</div>
              )}
            </div>
          ))}
        </div>
      </Block>

      {/* Key flows */}
      <Block>
        <Eyebrow>Key User Flows</Eyebrow>
        <div className="grid md:grid-cols-3 gap-5 mt-6">
          {h.flows.map((f) => (
            <div key={f.name} className="rounded-2xl border border-ink-line p-6">
              <h3 className="font-display font-medium text-mist-bright mb-4">{f.name}</h3>
              <ol className="space-y-3">
                {f.steps.map((s, idx) => (
                  <li key={idx} className="text-mist text-sm flex gap-3">
                    <span className="font-mono text-signal-listen shrink-0">{idx + 1}</span>
                    <span className="leading-relaxed">{s}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </Block>

      {/* AI capabilities */}
      <Block>
        <Eyebrow>AI Capabilities</Eyebrow>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {h.capabilities.map((c) => (
            <div key={c.label} className="rounded-2xl border border-ink-line p-5">
              <h4 className="font-mono text-xs uppercase tracking-wider text-signal-speak">{c.label}</h4>
              <p className="text-mist text-sm mt-2 leading-relaxed">{c.note}</p>
            </div>
          ))}
        </div>
      </Block>

      {/* UX challenges */}
      <Block>
        <Eyebrow>UX Challenges</Eyebrow>
        <div className="grid md:grid-cols-2 gap-5 mt-6">
          {h.uxChallenges.map((c) => (
            <div key={c.title} className="rounded-2xl border border-ink-line p-6">
              <h3 className="font-display font-medium text-mist-bright">{c.title}</h3>
              <p className="text-mist text-sm mt-3 leading-relaxed">{c.detail}</p>
            </div>
          ))}
        </div>
      </Block>

      {/* Design decisions */}
      <Block>
        <Eyebrow>Design Decisions</Eyebrow>
        <div className="space-y-5 mt-6 max-w-3xl">
          {h.designDecisions.map((d, idx) => (
            <div key={d.title} className="flex gap-5">
              <span className="font-mono text-signal-listen text-sm pt-1">{String(idx + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-display font-medium text-mist-bright">{d.title}</h3>
                <p className="text-mist text-sm mt-2 leading-relaxed">{d.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </Block>

      {/* AI interaction states — interactive signature demo */}
      <Block>
        <Eyebrow>AI Interaction States</Eyebrow>
        <p className="text-mist max-w-2xl mb-8 leading-relaxed">
          The core interface challenge: making five distinct AI states instantly legible without
          any text log to fall back on. Click through the states below the way the interface
          actually communicates them.
        </p>
        <StateMachineDemo />
      </Block>

      {/* Screens / Interface Showcase */}
      <Block>
        <Eyebrow>Screens / Interface Showcase</Eyebrow>
        <p className="text-mist max-w-2xl mb-8 leading-relaxed">
          High-fidelity design of the real-time HelVox agent dashboard. Incorporates sub-second latency analytics, glowing audio visualizer, intent confidence scoring, and e-commerce order tracking integrations.
        </p>
        <div className="rounded-2xl border border-ink-line bg-ink-soft overflow-hidden p-3 md:p-4 shadow-2xl">
          <div className="flex items-center justify-between px-4 py-3 border-b border-ink-line/60 bg-ink/80 rounded-t-xl mb-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="font-mono text-xs text-mist/60 ml-2">HelVox AI Dashboard — High-Fidelity UI Mockup</span>
            </div>
            <a
              href={h.figmaUrl}
              target="_blank"
              rel="noreferrer"
              className="text-signal-listen text-xs font-mono flex items-center gap-1 hover:underline"
            >
              Open in Figma <ExternalLink size={12} />
            </a>
          </div>
          <div className="relative group rounded-xl overflow-hidden border border-ink-line">
            <img
              src={h.mockupImage}
              alt="HelVox Real-Time AI Agent UI Dashboard Mockup"
              className="w-full h-auto object-cover rounded-xl transition-transform duration-500 group-hover:scale-[1.01]"
            />
          </div>
          <div className="grid sm:grid-cols-3 gap-4 mt-4 pt-2">
            <div className="rounded-xl border border-ink-line bg-ink/60 p-4">
              <span className="font-mono text-[10px] uppercase text-signal-listen tracking-wider">Audio Waveform</span>
              <p className="text-mist text-xs mt-1">Live WebRTC input visualization providing immediate voice activity feedback.</p>
            </div>
            <div className="rounded-xl border border-ink-line bg-ink/60 p-4">
              <span className="font-mono text-[10px] uppercase text-signal-listen tracking-wider">Intent & Confidence</span>
              <p className="text-mist text-xs mt-1">Displays 98% NLU confidence scoring to prevent silent misinterpretations.</p>
            </div>
            <div className="rounded-xl border border-ink-line bg-ink/60 p-4">
              <span className="font-mono text-[10px] uppercase text-signal-listen tracking-wider">RAG Grounded Data</span>
              <p className="text-mist text-xs mt-1">Live order lookup card (#4482 Blue Jacket) fetched in sub-100ms vector search.</p>
            </div>
          </div>
        </div>
      </Block>

      {/* Learned */}
      <Block>
        <div className="grid md:grid-cols-[0.35fr_0.65fr] gap-10">
          <Eyebrow>What I Learned</Eyebrow>
          <p className="text-mist-bright text-lg leading-relaxed max-w-2xl">{h.learned}</p>
        </div>
      </Block>

      {/* Future improvements */}
      <Block className="pb-28">
        <Eyebrow>Future Improvements</Eyebrow>
        <ul className="grid sm:grid-cols-2 gap-4 mt-6">
          {h.future.map((f) => (
            <li key={f} className="text-mist text-sm flex gap-3 rounded-xl border border-ink-line p-4">
              <span className="text-signal-listen">→</span>
              <span className="leading-relaxed">{f}</span>
            </li>
          ))}
        </ul>

        <div className="mt-16 flex items-center justify-between flex-wrap gap-4">
          <Link to="/work/odysso" className="inline-flex items-center gap-2 text-mist-bright font-medium hover:text-signal-listen transition-colors">
            Next case study — Odysso <ArrowUpRight size={16} />
          </Link>
          <Link to="/#contact" className="inline-flex items-center gap-2 bg-signal-listen text-ink font-semibold text-sm px-6 py-3.5 rounded-full hover:bg-mist-bright transition-colors">
            Get in touch
          </Link>
        </div>
      </Block>

      <Footer theme="dark" />
    </div>
  );
}
