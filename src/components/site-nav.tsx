"use client";

import { useEffect, useRef, useState } from "react";
import { couple, navLinks } from "@/content/site";

export function SiteNav() {
  const [active, setActive] = useState<string>("");
  const stripRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Keep the active tab in view by scrolling only the tab strip. scrollIntoView would also
  // touch the page's scroller and cancel an in-progress smooth scroll from a nav click.
  useEffect(() => {
    const strip = stripRef.current;
    const link = strip?.querySelector<HTMLElement>(`[data-nav="${active}"]`);
    if (!strip || !link) return;
    const left = link.offsetLeft - (strip.clientWidth - link.offsetWidth) / 2;
    strip.scrollTo({ left, behavior: "smooth" });
  }, [active]);

  return (
    <nav
      aria-label="Sections"
      className="sticky top-0 z-40 border-b border-sand/60 bg-ivory/80 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-4">
        <a
          href="#top"
          className="shrink-0 py-4 font-display text-lg italic text-cocoa"
          aria-label="Back to top"
        >
          {couple.monogram}
        </a>
        <ul ref={stripRef} className="no-scrollbar relative flex flex-1 gap-6 overflow-x-auto">
          {navLinks.map(({ id, label }) => (
            <li key={id} className="shrink-0">
              <a
                href={`#${id}`}
                data-nav={id}
                aria-current={active === id ? "true" : undefined}
                className={`block border-b py-4 text-sm tracking-wide transition-colors ${
                  active === id
                    ? "border-cocoa text-cocoa"
                    : "border-transparent text-espresso/60 hover:text-cocoa"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
