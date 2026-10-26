"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "@/hooks/useTheme";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();

  const navItems = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Achievements",
    "Projects",
    "Contact",
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-card-border bg-background/90 backdrop-blur-md text-foreground">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        {/* Logo */}
        <Link
          href="#home"
          className="flex items-center gap-3 hover:opacity-90 transition"
        >
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-accent">
            <Image
              src="/profile.jpg"
              alt="Babin Ghimire"
              fill
              sizes="2.5rem"
              className="object-cover"
            />
          </div>

          <span className="hidden sm:block text-lg font-bold tracking-wide">
            Babin Ghimire
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6 font-medium">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="relative text-muted hover:text-accent transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-card-border hover:border-accent transition-colors"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? (
                <FiSun size={20} className="text-foreground" />
              ) : (
                <FiMoon size={20} className="text-foreground" />
              )}
            </button>
          )}
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-2">
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-card-border"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? (
                <FiSun size={20} className="text-foreground" />
              ) : (
                <FiMoon size={20} className="text-foreground" />
              )}
            </button>
          )}

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg bg-accent p-2 hover:opacity-90 transition"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-card-border bg-background/95 backdrop-blur-md">
          <ul className="flex flex-col px-6 py-4">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-lg px-4 py-3 text-muted hover:bg-card hover:text-accent transition"
                >
                  {item}
                </Link>
              </li>
            ))}

            <li className="mt-3">
              <a
                href="/resume.pdf"
                download
                className="block rounded-lg bg-accent px-4 py-3 text-center font-medium text-white hover:opacity-90 transition"
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
