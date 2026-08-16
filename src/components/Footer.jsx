export default function Footer({ theme = "dark" }) {
  const isDark = theme === "dark";
  return (
    <footer
      className={`border-t py-10 ${
        isDark ? "border-ink-line text-mist" : "border-clay/10 text-clay/60"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
        <span className="font-mono text-xs">© {new Date().getFullYear()} Shakthivel M</span>
        <span className="font-mono text-xs">Designed &amp; built with React + Tailwind</span>
      </div>
    </footer>
  );
}
