"use client";

import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Contact",
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#09090B]/90 backdrop-blur-md text-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        {/* Logo */}
        <Link
          href="#home"
          className="flex items-center gap-3 hover:opacity-90 transition"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center font-bold text-white">
            BG
          </div>

          <span className="hidden sm:block text-lg font-bold tracking-wide">
            Babin Ghimire
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8 font-medium">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="relative text-zinc-300 hover:text-purple-400 transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-purple-400 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden rounded-lg bg-purple-600 p-2 hover:bg-purple-500 transition"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#09090B]/95 backdrop-blur-md">
          <ul className="flex flex-col px-6 py-4">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-lg px-4 py-3 text-zinc-300 hover:bg-white/5 hover:text-purple-400 transition"
                >
                  {item}
                </Link>
              </li>
            ))}

            <li className="mt-3">
              <a
                href="/resume.pdf"
                download
                className="block rounded-lg bg-purple-600 px-4 py-3 text-center font-medium hover:bg-purple-500 transition"
              >
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}