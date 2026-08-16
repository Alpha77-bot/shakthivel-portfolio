import { useEffect } from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import About from "../components/About";
import FeaturedWork from "../components/FeaturedWork";
import AIProductDesign from "../components/AIProductDesign";
import DesignApproach from "../components/DesignApproach";
import Skills from "../components/Skills";
import ResumeCTA from "../components/ResumeCTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import useReveal from "../hooks/useReveal";

export default function Home() {
  const rootRef = useReveal([]);

  // If arriving with a hash (e.g. from a case-study "Back" link), scroll to it.
  useEffect(() => {
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 60);
    }
  }, []);

  return (
    <div ref={rootRef} className="bg-ink min-h-screen">
      <Nav theme="dark" />
      <Hero />
      <Experience />
      <About />
      <FeaturedWork />
      <AIProductDesign />
      <DesignApproach />
      <Skills />
      <ResumeCTA />
      <Contact />
      <Footer theme="dark" />
    </div>
  );
}
