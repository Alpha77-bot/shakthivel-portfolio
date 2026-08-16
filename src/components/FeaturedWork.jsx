import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { helvox } from "../data/helvox";
import { odysso } from "../data/odysso";

function TagRow({ tags, tone }) {
  return (
    <div className="flex flex-wrap gap-2 mt-5">
      {tags.map((t) => (
        <span
          key={t}
          className={`font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border ${
            tone === "dark"
              ? "border-signal-listen/30 text-signal-listen"
              : "border-saffron/40 text-saffron-deep"
          }`}
        >
          {t}
        </span>
      ))}
    </div>
  );
}

export default function FeaturedWork() {
  return (
    <section id="work" className="py-28 md:py-36 border-t border-ink-line">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="reveal mb-14">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-signal-listen mb-3">
            02 / Featured Work
          </p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-mist-bright max-w-xl">
            Two products, two different design languages.
          </h2>
          <p className="mt-4 text-mist max-w-2xl leading-relaxed">
            Each case study switches visual language on purpose — a technical, dark
            "system" feel for the real-time AI product, and a warm, human one for the travel
            product. Same design thinking, applied differently to what each product needs to say.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* HelVox card — dark/technical */}
          <Link
            to="/work/helvox"
            className="group relative rounded-xl2 p-8 md:p-10 bg-ink-soft border border-ink-line overflow-hidden hover:border-signal-listen/40 transition-colors reveal"
          >
            <div
              className="absolute -top-16 -right-16 w-56 h-56 rounded-full opacity-20 blur-3xl"
              style={{ background: "radial-gradient(circle, #4CC9F0, transparent 70%)" }}
            />
            <div className="relative flex items-start justify-between">
              <span className="font-mono text-[11px] uppercase tracking-wider text-signal-listen">
                {helvox.heroStat}
              </span>
              <ArrowUpRight className="text-mist group-hover:text-signal-listen group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={20} />
            </div>
            <h3 className="relative font-display font-semibold text-2xl md:text-3xl text-mist-bright mt-6">
              {helvox.name}
            </h3>
            <p className="relative text-mist mt-3 leading-relaxed">{helvox.tagline}</p>
            <TagRow tags={helvox.tags} tone="dark" />
          </Link>

          {/* Odysso card — light/warm preview inside dark page */}
          <Link
            to="/work/odysso"
            className="group relative rounded-xl2 p-8 md:p-10 bg-ivory border border-clay/10 overflow-hidden hover:border-saffron/50 transition-colors reveal"
            style={{ transitionDelay: "100ms" }}
          >
            <div
              className="absolute -top-16 -right-16 w-56 h-56 rounded-full opacity-25 blur-3xl"
              style={{ background: "radial-gradient(circle, #E38B29, transparent 70%)" }}
            />
            <div className="relative flex items-start justify-between">
              <span className="font-mono text-[11px] uppercase tracking-wider text-peacock">
                Travel planning, reimagined
              </span>
              <ArrowUpRight className="text-clay/50 group-hover:text-saffron-deep group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={20} />
            </div>
            <h3 className="relative font-warm font-semibold text-2xl md:text-3xl text-clay mt-6">
              {odysso.name}
            </h3>
            <p className="relative text-clay/70 mt-3 leading-relaxed">{odysso.tagline}</p>
            <TagRow tags={odysso.tags} tone="light" />
          </Link>
        </div>
      </div>
    </section>
  );
}
