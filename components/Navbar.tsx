"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["Home", "About", "Skills", "Experience", "Projects", "Contact"];

  return (
    <nav className="sticky top-0 left-0 w-full bg-[#09090B]/95 text-white shadow-sm z-50 border-b border-white/10 supports-[backdrop-filter]:bg-[#09090B]/80 supports-[backdrop-filter]:backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4 gap-4">
        <h1 className="text-base sm:text-xl font-bold tracking-wide">
          Babin Ghimire
        </h1>

        <ul className="hidden md:flex gap-8 font-medium">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                className="hover:text-purple-400 transition-colors"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden px-3 py-2 rounded-lg bg-purple-600 transition-colors hover:bg-purple-700"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {isMenuOpen && (
        <div id="mobile-nav" className="md:hidden border-t border-white/10 bg-[#09090B]">
          <ul className="max-w-6xl mx-auto grid gap-1 px-4 sm:px-6 py-3">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="block rounded-lg px-3 py-3 text-sm font-medium text-white hover:bg-white/5 hover:text-purple-300 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
