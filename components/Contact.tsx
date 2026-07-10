"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-4 sm:px-6 md:px-20 bg-gradient-to-b from-[#0a0a0f] to-[#1a0b2e] text-white text-center scroll-mt-20"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-purple-400">
        Let's Connect 🤝
      </h2>

      <p className="max-w-2xl mx-auto text-zinc-300 mb-10 text-sm sm:text-base leading-relaxed">
        Feel free to reach out for collaborations, projects, internships, or just to say hi!
      </p>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-3xl">
        <motion.a
          href="https://github.com/ghimirebabin07"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          className="hover:text-pink-400 transition"
          aria-label="GitHub"
        >
          <FaGithub />
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/babin-ghimire-91403a32b"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          className="hover:text-pink-400 transition"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </motion.a>

        <motion.a
          href="mailto:ghimirebabin92@gmail.com"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          className="hover:text-pink-400 transition"
          aria-label="Email"
        >
          <FaEnvelope />
        </motion.a>
      </div>
    </motion.section>
  );
}