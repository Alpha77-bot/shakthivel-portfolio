import { useEffect, useRef } from "react";

/**
 * Attaches an IntersectionObserver to reveal elements with the `.reveal`
 * class as they enter the viewport. Call once per page/component tree.
 */
export default function useReveal(deps = []) {
  const rootRef = useRef(null);

  useEffect(() => {
    const scope = rootRef.current || document;
    const els = scope.querySelectorAll(".reveal:not(.in-view)");
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return rootRef;
}
