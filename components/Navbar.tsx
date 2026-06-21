"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}   
      animate={{ y: 0, opacity: 1 }}     
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-[#09090B]/90 backdrop-blur-md text-white shadow-md z-50"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo / Name */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl font-bold tracking-wide"
        >
        
        </motion.h1>

        {/* Links */}
        <ul className="hidden md:flex gap-8 font-medium">
          {["Home", "About", "Skills", "Experience", "Projects", "Contact"].map(
            (item, index) => (
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
            )
          )}
        </ul>

        {/* Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="md:hidden px-3 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition"
        >
          ☰
        </motion.button>
      </div>
    </motion.nav>
  );
}
