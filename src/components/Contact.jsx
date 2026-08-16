import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile } from "../data/profile";

export default function Contact() {
  const githubReady = profile.github && !profile.github.startsWith("PLACEHOLDER");

  return (
    <section id="contact" className="py-28 md:py-36 border-t border-ink-line">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="reveal max-w-2xl">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-signal-listen mb-3">
            07 / Contact
          </p>
          <h2 className="font-display font-semibold text-3xl md:text-5xl text-mist-bright leading-tight">
            Have a product idea, design challenge, or opportunity?
          </h2>
          <p className="text-mist mt-5 leading-relaxed">
            I'm open to Product Management, Product Security, and AI Product opportunities. If you'd like to collaborate or discuss a role, I'd love to hear from you.
          </p>
        </div>

        <div className="reveal mt-12 grid sm:grid-cols-3 gap-5" style={{ transitionDelay: "100ms" }}>
          <a
            href={`mailto:${profile.email}`}
            className="group rounded-2xl border border-ink-line p-6 hover:border-signal-listen/40 transition-colors"
          >
            <Mail className="text-signal-listen" size={20} />
            <h3 className="font-display font-medium text-mist-bright mt-4">Email</h3>
            <p className="text-mist text-sm mt-1 break-all">{profile.email}</p>
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-ink-line p-6 hover:border-signal-listen/40 transition-colors"
          >
            <LinkedinIcon className="text-signal-listen" size={20} />
            <h3 className="font-display font-medium text-mist-bright mt-4">LinkedIn</h3>
            <p className="text-mist text-sm mt-1">/in/shakthivel-m</p>
          </a>

          <div className="rounded-2xl border border-ink-line p-6 relative">
            <GithubIcon className="text-signal-listen" size={20} />
            <h3 className="font-display font-medium text-mist-bright mt-4">GitHub</h3>
            {githubReady ? (
              <a href={profile.github} target="_blank" rel="noreferrer" className="text-mist text-sm mt-1 hover:text-mist-bright block">
                {profile.github}
              </a>
            ) : (
              <p className="text-mist/60 text-sm mt-1 font-mono">— add your GitHub URL —</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
