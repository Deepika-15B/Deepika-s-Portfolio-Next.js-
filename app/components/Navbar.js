"use client";

import { useEffect, useMemo, useState } from "react";

export default function Navbar() {
  const links = useMemo(
    () => [
      { id: "top", label: "Home", href: "#top" },
      { id: "about", label: "About", href: "#about" },
      { id: "education", label: "Education", href: "#education" },
      { id: "skills", label: "Skills", href: "#skills" },
      { id: "projects", label: "Projects", href: "#projects" },
      { id: "contact", label: "Contact", href: "#contact" },
    ],
    []
  );

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("top");

  useEffect(() => {
    const sectionIds = ["about", "education", "skills", "projects", "contact"];
    const nodes = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (nodes.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) setActive(visible.target.id);
      },
      { root: null, threshold: [0.3, 0.5], rootMargin: "-20% 0px -60% 0px" }
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      {/* Background */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-lg border-b border-gray-200" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          
          {/* Logo */}
          <a
            href="#top"
            className="flex items-center gap-3 font-semibold text-gray-900"
          >
            <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-blue-600 text-white font-bold shadow-md">
              D
            </div>
            <span className="text-lg tracking-tight">
              Deepika
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {links.slice(1).map((l) => {
              const isActive = active === l.id;

              return (
                <a
                  key={l.id}
                  href={l.href}
                  className={`relative text-sm font-medium transition ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {l.label}

                  {/* Active underline */}
                  {isActive && (
                    <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-600 rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden px-4 py-2 rounded-lg border text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
            onClick={() => setOpen(!open)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden mt-2">
            <div className="bg-white rounded-2xl shadow-lg border p-4 space-y-2">
              {links.map((l) => (
                <a
                  key={l.id}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}