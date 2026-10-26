"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "@/hooks/useTheme";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Certificates", id: "achievements" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme, mounted } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id);
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-card-border bg-background/90 backdrop-blur-md text-foreground">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Logo */}
        <Link
          href="#home"
          className="flex items-center gap-3 hover:opacity-90 transition shrink-0"
        >
          <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-accent">
            <Image
              src="/profile.jpg"
              alt="Babin Ghimire"
              fill
              sizes="2.25rem"
              className="object-cover"
            />
          </div>

          <span className="hidden sm:block text-base font-bold tracking-wide">
            Babin Ghimire
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          <ul className="flex items-center gap-1 font-medium">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <Link
                    href={`#${item.id}`}
                    className={`px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                      isActive
                        ? "bg-accent/10 text-accent border border-accent/30"
                        : "text-muted hover:text-foreground hover:bg-card border border-transparent"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-lg border border-card-border hover:border-accent transition-colors"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? (
                <FiSun size={18} className="text-foreground" />
              ) : (
                <FiMoon size={18} className="text-foreground" />
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
                <FiSun size={18} className="text-foreground" />
              ) : (
                <FiMoon size={18} className="text-foreground" />
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
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <Link
                    href={`#${item.id}`}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block rounded-lg px-4 py-3 text-sm transition ${
                      isActive
                        ? "bg-accent/10 text-accent border border-accent/30"
                        : "text-muted hover:bg-card hover:text-foreground border border-transparent"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
