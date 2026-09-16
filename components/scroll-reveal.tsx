"use client";

import { useEffect } from "react";

const INVIEW = "is-inview";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Progressive fade-up for [data-reveal] blocks.
 * Header / phone CTAs are not marked data-reveal, so they stay immediately usable.
 * html.js-motion (set before paint) hides pending blocks; this observer reveals them.
 */
export function useScrollReveal(locale: string) {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (nodes.length === 0) return;

    if (prefersReducedMotion()) {
      nodes.forEach((el) => el.classList.add(INVIEW));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add(INVIEW);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -12% 0px" },
    );

    const frame = requestAnimationFrame(() => {
      nodes.forEach((el) => observer.observe(el));
    });

    const safety = window.setTimeout(() => {
      nodes.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add(INVIEW);
        }
      });
    }, 1500);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(safety);
      observer.disconnect();
    };
  }, [locale]);
}
