import { ArrowUpRight, ExternalLink, Play, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { GithubIcon } from "../components/BrandIcons";
import useReveal from "../hooks/useReveal";
import { odysso as o } from "../data/odysso";

function Eyebrow({ children }) {
  return (
    <p className="font-mono text-xs tracking-[0.2em] uppercase text-peacock mb-4">{children}</p>
  );
}

function Block({ children, className = "" }) {
  return (
    <div className={`reveal py-16 md:py-20 border-t border-clay/10 ${className}`}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">{children}</div>
    </div>
  );
}

export default function OdyssoCaseStudy() {
  const rootRef = useReveal([]);

  return (
    <div ref={rootRef} className="bg-ivory min-h-screen">
      <Nav theme="light" backLabel="Back to portfolio" />

      {/* Hero */}
      <section className="pt-40 pb-16 relative overflow-hidden">
        <div
          className="pointer-events-none absolute -top-24 right-0 w-[480px] h-[480px] rounded-full opacity-[0.22] blur-3xl"
          style={{ background: "radial-gradient(circle, #E38B29 0%, transparent 70%)" }}
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 w-[380px] h-[380px] rounded-full opacity-[0.15] blur-3xl"
          style={{ background: "radial-gradient(circle, #0E5A63 0%, transparent 70%)" }}
        />
        <div className="max-w-6xl mx-auto px-6 md:px-10 relative">
          <Eyebrow>Case Study — UI/UX &amp; Product Design</Eyebrow>
          <h1 className="font-warm font-semibold text-4xl md:text-6xl text-clay leading-[1.1] max-w-3xl">
            {o.fullName}: planning a trip like a friend would help.
          </h1>
          <p className="text-clay/70 text-lg mt-6 max-w-2xl leading-relaxed">{o.overview}</p>

          <div className="flex flex-wrap gap-2 mt-8">
            {o.tags.map((t) => (
              <span
                key={t}
                className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border border-saffron/40 text-saffron-deep"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={o.figmaUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-saffron text-white font-semibold text-xs px-5 py-2.5 rounded-full hover:bg-saffron-deep transition-colors shadow-sm"
            >
              <Layers size={14} /> Figma Prototype <ExternalLink size={13} />
            </a>
            <a
              href={o.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-clay/20 text-clay font-medium text-xs px-5 py-2.5 rounded-full hover:border-peacock hover:text-peacock transition-colors"
            >
              <Play size={14} /> Live Interactive Demo <ExternalLink size={13} />
            </a>
            {o.repo && (
              <a
                href={o.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-peacock text-xs font-semibold ml-2 hover:text-peacock-deep"
              >
                <GithubIcon size={14} /> View Repository
              </a>
            )}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            {o.stack.map((s) => (
              <span key={s} className="text-clay/70 text-xs px-3 py-1.5 rounded-full bg-white/60 border border-clay/10">
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
          <p className="text-clay text-xl md:text-2xl font-warm font-medium leading-snug max-w-2xl">
            {o.problem}
          </p>
        </div>
      </Block>

      {/* Goal + target user */}
      <Block>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white/60 border border-clay/10 p-7">
            <Eyebrow>Design Goal</Eyebrow>
            <p className="text-clay/80 leading-relaxed">{o.goal}</p>
          </div>
          <div className="rounded-2xl bg-white/60 border border-clay/10 p-7">
            <Eyebrow>Target User</Eyebrow>
            <h3 className="font-warm font-medium text-clay text-lg">{o.targetUser.title}</h3>
            <p className="text-clay/70 text-sm mt-2 leading-relaxed">{o.targetUser.detail}</p>
          </div>
        </div>
      </Block>

      {/* Journey */}
      <Block>
        <Eyebrow>User Journey</Eyebrow>
        <div className="mt-6 flex flex-col md:flex-row gap-3 md:gap-0">
          {o.journey.map((j, idx) => (
            <div key={j.step} className="flex-1 flex md:items-stretch">
              <div className="flex-1 rounded-2xl bg-white/60 border border-clay/10 px-5 py-6">
                <span className="font-mono text-[10px] text-saffron-deep">{String(idx + 1).padStart(2, "0")}</span>
                <h4 className="font-warm font-medium text-clay mt-2">{j.step}</h4>
                <p className="text-clay/70 text-xs mt-2 leading-relaxed">{j.detail}</p>
              </div>
              {idx < o.journey.length - 1 && (
                <div className="hidden md:flex items-center justify-center w-6 text-saffron shrink-0">→</div>
              )}
            </div>
          ))}
        </div>
      </Block>

      {/* IA + screens */}
      <Block>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <Eyebrow>Information Architecture</Eyebrow>
            <ul className="mt-4 space-y-3">
              {o.informationArchitecture.map((it, idx) => (
                <li key={idx} className="text-clay/80 text-sm flex gap-3">
                  <span className="font-mono text-saffron-deep shrink-0">{idx + 1}</span>
                  <span className="leading-relaxed">{it}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow>Key Screens</Eyebrow>
            <div className="mt-4 space-y-4">
              {o.screens.map((s) => (
                <div key={s.name} className="rounded-xl bg-white/60 border border-clay/10 p-5">
                  <h4 className="font-warm font-medium text-clay">{s.name}</h4>
                  <p className="text-clay/70 text-sm mt-1 leading-relaxed">{s.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Block>

      {/* Screens showcase placeholder */}
      {/* Interface Showcase */}
      <Block>
        <Eyebrow>Interface Showcase</Eyebrow>
        <p className="text-clay/80 max-w-2xl mb-8 leading-relaxed">
          High-fidelity design of the Odysso visual trip planner. Designed with warm ivory (#F8F3E9) canvas, soft saffron action cards, interactive Kyoto map route widget, and live budget tracking.
        </p>
        <div className="rounded-2xl border border-clay/15 bg-white/70 overflow-hidden p-3 md:p-4 shadow-xl">
          <div className="flex items-center justify-between px-4 py-3 border-b border-clay/10 bg-ivory/90 rounded-t-xl mb-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-saffron/80" />
              <span className="w-3 h-3 rounded-full bg-peacock/80" />
              <span className="w-3 h-3 rounded-full bg-clay/30" />
              <span className="font-mono text-xs text-clay/70 ml-2">Odysso Travel Planner — High-Fidelity UI Mockup</span>
            </div>
            <a
              href={o.figmaUrl}
              target="_blank"
              rel="noreferrer"
              className="text-saffron-deep text-xs font-mono flex items-center gap-1 hover:underline"
            >
              Open in Figma <ExternalLink size={12} />
            </a>
          </div>
          <div className="relative group rounded-xl overflow-hidden border border-clay/10">
            <img
              src={o.mockupImage}
              alt="Odysso Travel Planner UI Dashboard Mockup"
              className="w-full h-auto object-cover rounded-xl transition-transform duration-500 group-hover:scale-[1.01]"
            />
          </div>
          <div className="grid sm:grid-cols-3 gap-4 mt-4 pt-2">
            <div className="rounded-xl border border-clay/10 bg-white/80 p-4">
              <span className="font-mono text-[10px] uppercase text-saffron-deep tracking-wider">5-Day Itinerary Builder</span>
              <p className="text-clay/70 text-xs mt-1">Visual cards with drag-and-drop ordering instead of dense form tables.</p>
            </div>
            <div className="rounded-xl border border-clay/10 bg-white/80 p-4">
              <span className="font-mono text-[10px] uppercase text-saffron-deep tracking-wider">Interactive Map Pins</span>
              <p className="text-clay/70 text-xs mt-1">Direct spatial connection between daily itinerary cards and destination location route.</p>
            </div>
            <div className="rounded-xl border border-clay/10 bg-white/80 p-4">
              <span className="font-mono text-[10px] uppercase text-saffron-deep tracking-wider">Budget Tracker Progress</span>
              <p className="text-clay/70 text-xs mt-1">Clear, encouraging visual indicator showing spent vs remaining trip budget.</p>
            </div>
          </div>
        </div>
      </Block>

      {/* UI decisions */}
      <Block>
        <Eyebrow>UI Decisions</Eyebrow>
        <div className="grid md:grid-cols-2 gap-5 mt-6">
          {o.uiDecisions.map((d) => (
            <div key={d.title} className="rounded-2xl bg-white/60 border border-clay/10 p-6">
              <h3 className="font-warm font-medium text-clay">{d.title}</h3>
              <p className="text-clay/70 text-sm mt-3 leading-relaxed">{d.detail}</p>
            </div>
          ))}
        </div>
      </Block>

      {/* Indian visual direction */}
      <Block>
        <Eyebrow>Indian Visual Design Direction</Eyebrow>
        <p className="text-clay/80 leading-relaxed max-w-2xl mb-8">{o.visualDirection}</p>
        <div className="flex flex-wrap gap-4">
          {[
            { name: "Ivory", hex: "#F8F3E9" },
            { name: "Saffron", hex: "#E38B29" },
            { name: "Peacock", hex: "#0E5A63" },
            { name: "Gold", hex: "#C79A3E" },
          ].map((c) => (
            <div key={c.name} className="flex items-center gap-3 rounded-full bg-white/60 border border-clay/10 pl-2 pr-4 py-2">
              <span className="w-6 h-6 rounded-full border border-clay/10" style={{ backgroundColor: c.hex }} />
              <span className="text-clay/70 text-xs font-mono uppercase tracking-wide">{c.name}</span>
            </div>
          ))}
        </div>
      </Block>

      {/* Simplification */}
      <Block>
        <Eyebrow>Simplification Decisions</Eyebrow>
        <ul className="grid sm:grid-cols-3 gap-4 mt-6">
          {o.simplification.map((s, idx) => (
            <li key={idx} className="rounded-xl bg-white/60 border border-clay/10 p-5 text-clay/80 text-sm leading-relaxed">
              {s}
            </li>
          ))}
        </ul>
      </Block>

      {/* Implementation */}
      <Block>
        <div className="grid md:grid-cols-[0.35fr_0.65fr] gap-10">
          <Eyebrow>Development / Implementation</Eyebrow>
          <p className="text-clay/80 leading-relaxed max-w-2xl">{o.implementation}</p>
        </div>
      </Block>

      {/* Learned */}
      <Block className="pb-28">
        <div className="grid md:grid-cols-[0.35fr_0.65fr] gap-10">
          <Eyebrow>Lessons Learned</Eyebrow>
          <p className="text-clay text-lg leading-relaxed max-w-2xl">{o.learned}</p>
        </div>

        <div className="mt-16 flex items-center justify-between flex-wrap gap-4">
          <Link to="/work/helvox" className="inline-flex items-center gap-2 text-clay font-medium hover:text-peacock transition-colors">
            Next case study — HelVox <ArrowUpRight size={16} />
          </Link>
          <Link to="/#contact" className="inline-flex items-center gap-2 bg-saffron text-white font-semibold text-sm px-6 py-3.5 rounded-full hover:bg-saffron-deep transition-colors">
            Get in touch
          </Link>
        </div>
      </Block>

      <Footer theme="light" />
    </div>
  );
}
