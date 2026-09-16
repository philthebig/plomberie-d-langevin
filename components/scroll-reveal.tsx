"use client";

import { useEffect } from "react";

const PREPARE = "will-reveal";
const INVIEW = "is-inview";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isAlreadyInView(el: Element) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
}

/**
 * Progressive fade-up for [data-reveal] blocks.
 * Elements already on screen stay visible (no hide-then-show).
 * CTAs are not marked data-reveal, so they stay immediately usable.
 */
export function useScrollReveal() {
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
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
    );

    for (const el of nodes) {
      if (isAlreadyInView(el)) {
        el.classList.add(INVIEW);
      } else {
        el.classList.add(PREPARE);
        observer.observe(el);
      }
    }

    return () => observer.disconnect();
  }, []);
}
