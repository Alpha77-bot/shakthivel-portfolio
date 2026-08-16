import { FileText } from "lucide-react";
import { profile } from "../data/profile";

export default function ResumeCTA() {
  return (
    <section id="resume" className="py-24 border-t border-ink-line">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="reveal rounded-xl2 border border-ink-line bg-ink-soft px-8 py-12 md:px-14 md:py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-signal-listen mb-3">
              06 / Resume
            </p>
            <h2 className="font-display font-semibold text-2xl md:text-3xl text-mist-bright">
              Want the full background?
            </h2>
            <p className="text-mist mt-2 max-w-md">
              {profile.resumeUrl
                ? "Download my resume for full work history and education."
                : "Resume available on request — reach out and I'll send it over."}
            </p>
          </div>

          {profile.resumeUrl ? (
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-signal-listen text-ink font-semibold text-sm px-6 py-3.5 rounded-full hover:bg-mist-bright transition-colors shrink-0"
            >
              <FileText size={16} /> Download Resume
            </a>
          ) : (
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-ink-line text-mist-bright font-medium text-sm px-6 py-3.5 rounded-full hover:border-mist transition-colors shrink-0"
            >
              <FileText size={16} /> Resume available on request
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
