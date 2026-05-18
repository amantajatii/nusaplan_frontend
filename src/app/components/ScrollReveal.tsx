"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
};

export default function ScrollReveal({ children, className = "", delay = 0, threshold = 0.12 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay) {
            setTimeout(() => el.classList.add("is-visible"), delay);
          } else {
            el.classList.add("is-visible");
          }
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -32px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold]);

  return (
    <div ref={ref} className={`scroll-reveal ${className}`}>
      {children}
    </div>
  );
}
