import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import StatusIndicator from "./StatusIndicator";

const LINKS = [
  { label: "Home", hash: "#top" },
  { label: "Experience", hash: "#experience" },
  { label: "Work", hash: "#work" },
  { label: "AI Design", hash: "#ai-design" },
  { label: "Capabilities", hash: "#skills" },
  { label: "About", hash: "#about" },
  { label: "Contact", hash: "#contact" },
];

export default function Nav({ theme = "dark", backLabel = null }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isDark = theme === "dark";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const wrapBase = "fixed top-0 left-0 right-0 z-50 transition-colors duration-300";
  const wrapTheme = isDark
    ? scrolled
      ? "bg-ink/85 backdrop-blur-md border-b border-ink-line"
      : "bg-transparent border-b border-transparent"
    : scrolled
    ? "bg-ivory/85 backdrop-blur-md border-b border-clay/10"
    : "bg-transparent border-b border-transparent";

  return (
    <header className={`${wrapBase} ${wrapTheme}`}>
      <nav className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <Link
          to="/"
          className={`font-display font-semibold text-sm tracking-wide ${
            isDark ? "text-mist-bright" : "text-clay"
          }`}
        >
          SHAKTHIVEL&nbsp;M
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {backLabel ? (
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isDark ? "text-mist hover:text-mist-bright" : "text-clay/70 hover:text-clay"
              }`}
            >
              ← {backLabel}
            </Link>
          ) : (
            LINKS.map((l) => (
              <a
                key={l.hash}
                href={l.hash}
                className={`text-sm font-medium transition-colors ${
                  isDark ? "text-mist hover:text-mist-bright" : "text-clay/70 hover:text-clay"
                }`}
              >
                {l.label}
              </a>
            ))
          )}
          <StatusIndicator dark={isDark} />
        </div>

        <button
          className={`md:hidden ${isDark ? "text-mist-bright" : "text-clay"}`}
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div
          className={`md:hidden px-6 pb-6 flex flex-col gap-4 ${
            isDark ? "bg-ink border-b border-ink-line" : "bg-ivory border-b border-clay/10"
          }`}
        >
          {backLabel ? (
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className={`text-sm font-medium ${isDark ? "text-mist-bright" : "text-clay"}`}
            >
              ← {backLabel}
            </Link>
          ) : (
            LINKS.map((l) => (
              <a
                key={l.hash}
                href={l.hash}
                onClick={() => setOpen(false)}
                className={`text-sm font-medium ${isDark ? "text-mist-bright" : "text-clay"}`}
              >
                {l.label}
              </a>
            ))
          )}
          <StatusIndicator dark={isDark} className="pt-2" />
        </div>
      )}
    </header>
  );
}
