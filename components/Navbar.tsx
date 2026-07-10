"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["Home", "About", "Skills", "Experience", "Projects", "Contact"];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 left-0 w-full bg-[#09090B]/90 backdrop-blur-md text-white shadow-md z-50 border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4 gap-4">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-base sm:text-xl font-bold tracking-wide"
        >
          Babin Ghimire
        </motion.h1>

        <ul className="hidden md:flex gap-8 font-medium">
          {navItems.map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <Link
                href={`#${item.toLowerCase()}`}
                className="hover:text-purple-400 transition-colors"
              >
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="md:hidden px-3 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </motion.button>
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
    </motion.nav>
  );
}
