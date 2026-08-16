import { useState } from "react";
import { Mic, Loader2, Volume2, CheckCircle2, HelpCircle, RotateCcw } from "lucide-react";

const STAGES = [
  {
    key: "listen",
    label: "Listening",
    color: "#4CC9F0",
    icon: Mic,
    line: "\"Hey, can you check on my order — the blue jacket, order 4482?\"",
    detail: "Waveform reacts live to the customer's voice, confirming the mic is active.",
  },
  {
    key: "process",
    label: "Processing",
    color: "#F5B942",
    icon: Loader2,
    line: "Looking up order #4482…",
    detail: "Agent retrieves order data via RAG. The indicator shifts to amber so the wait reads as active, not stalled.",
  },
  {
    key: "clarify",
    label: "Needs clarification",
    color: "#F5B942",
    icon: HelpCircle,
    line: "\"I found two recent orders — did you mean the one placed Tuesday or last Friday?\"",
    detail: "Instead of guessing, the agent asks one specific question and clearly signals it's waiting on the customer.",
  },
  {
    key: "speak",
    label: "Responding",
    color: "#7CE0A8",
    icon: Volume2,
    line: "\"Got it — that order shipped yesterday and should arrive by Thursday.\"",
    detail: "Agent replies in natural speech. The customer can interrupt at any point during this state.",
  },
  {
    key: "confirm",
    label: "Confirmed",
    color: "#7CE0A8",
    icon: CheckCircle2,
    line: "✓ Delivery estimate sent to your email.",
    detail: "A distinct, unmistakable state for anything the agent actually did — separate from just 'talking'.",
  },
];

export default function StateMachineDemo() {
  const [i, setI] = useState(0);
  const stage = STAGES[i];
  const Icon = stage.icon;

  const next = () => setI((n) => (n + 1) % STAGES.length);
  const reset = () => setI(0);

  return (
    <div className="rounded-xl2 border border-ink-line bg-ink-soft p-6 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <span className="font-mono text-[11px] uppercase tracking-wider text-mist">
          Interactive — click through the states
        </span>
        <button
          onClick={reset}
          className="text-mist hover:text-mist-bright transition-colors"
          aria-label="Reset demo"
        >
          <RotateCcw size={15} />
        </button>
      </div>

      {/* Status strip */}
      <div className="flex flex-wrap gap-2 mb-8">
        {STAGES.map((s, idx) => (
          <button
            key={s.key}
            onClick={() => setI(idx)}
            className="font-mono text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full border transition-colors"
            style={{
              borderColor: idx === i ? s.color : "#1E2733",
              color: idx === i ? s.color : "#8A97A6",
              backgroundColor: idx === i ? `${s.color}14` : "transparent",
            }}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Visual */}
      <div className="rounded-2xl bg-ink border border-ink-line p-8 flex flex-col items-center text-center min-h-[220px] justify-center">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mb-5 transition-colors duration-300"
          style={{ backgroundColor: `${stage.color}1F`, border: `1px solid ${stage.color}55` }}
        >
          <Icon
            size={26}
            style={{ color: stage.color }}
            className={stage.key === "process" ? "animate-spin" : ""}
          />
        </div>
        <span
          className="font-mono text-[11px] uppercase tracking-wider mb-3"
          style={{ color: stage.color }}
        >
          {stage.label}
        </span>
        <p className="font-display text-mist-bright text-lg max-w-md leading-snug">{stage.line}</p>
      </div>

      <p className="text-mist text-sm mt-6 leading-relaxed">{stage.detail}</p>

      <button
        onClick={next}
        className="mt-6 inline-flex items-center gap-2 bg-signal-listen text-ink font-semibold text-sm px-5 py-3 rounded-full hover:bg-mist-bright transition-colors"
      >
        Next state →
      </button>
    </div>
  );
}
