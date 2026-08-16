import { useEffect, useState } from "react";

const STATES = [
  { key: "listen", label: "listening", color: "#4CC9F0" },
  { key: "process", label: "processing", color: "#F5B942" },
  { key: "speak", label: "responding", color: "#7CE0A8" },
  { key: "idle", label: "online", color: "#5B6779" },
];

/**
 * A small, always-on status chip that literally cycles through the
 * listening / processing / responding / online states described in the
 * HelVox case study. It's the site's signature element: the portfolio
 * practices the same "always show system state" idea it argues for.
 */
export default function StatusIndicator({ className = "", dark = true }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % STATES.length), 2600);
    return () => clearInterval(id);
  }, []);

  const s = STATES[i];

  return (
    <div
      className={`inline-flex items-center gap-2 font-mono text-[11px] tracking-wide uppercase select-none ${
        dark ? "text-mist" : "text-clay/60"
      } ${className}`}
      aria-hidden="true"
    >
      <span
        className="w-1.5 h-1.5 rounded-full animate-pulseDot"
        style={{ backgroundColor: s.color }}
      />
      <span key={s.key} className="transition-opacity duration-300">
        {s.label}
      </span>
    </div>
  );
}
