"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16 min-h-[calc(100svh-4rem)] px-4 sm:px-6 md:px-20 py-14 md:py-20 bg-[#0a0a0f] md:bg-gradient-to-br md:from-[#0a0a0f] md:via-[#1a0b2e] md:to-[#2a0f3f] text-white scroll-mt-20"
    >
      {/* Left Side */}
      <motion.div
        className="flex flex-col gap-5 text-center md:text-left max-w-2xl w-full"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.h2
          className="text-sm tracking-[0.3em] uppercase text-white/60 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Hello I&apos;m
        </motion.h2>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Babin Ghimire
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl font-semibold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          BEIT Student & Backend Developer
        </motion.p>

        <motion.p
          className="text-sm sm:text-base md:text-lg text-purple-300 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          &bull; FastAPI <br />
          &bull; Python <br />&bull; Backend Development
        </motion.p>

        <motion.p
          className="text-white/70 text-sm sm:text-base leading-7 max-w-xl mx-auto md:mx-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Passionate about learning by building, I&apos;m currently developing
          backend applications with Python and FastAPI while exploring modern
          software engineering practices. I&apos;m looking for opportunities to
          grow, contribute, and gain real-world development experience.
        </motion.p>

        <motion.p
          className="text-purple-300 text-sm font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          National AI Hackathon 2026 &bull; Team Leader
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 transition duration-300 shadow-lg shadow-purple-500/30 text-white"
          >
            Download CV
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-purple-500 text-purple-300 hover:bg-purple-600 hover:text-white transition duration-300"
          >
            Contact Me
          </a>

          <a
            href="https://github.com/ghimirebabin07"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/30 text-white/80 hover:bg-white/10 hover:border-white/50 transition duration-300"
          >
            GitHub
          </a>
        </motion.div>
      </motion.div>

      {/* Right Side */}
      <motion.div
        className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-80 md:h-80 mb-2 md:mb-0 shrink-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
      >
        <div className="absolute inset-4 rounded-full bg-purple-600/25 blur-xl md:inset-0 md:bg-gradient-to-tr md:from-purple-600 md:to-pink-500 md:blur-3xl md:opacity-40"></div>

        <Image
          src="/profile.jpg"
          alt="Babin Ghimire"
          fill
          priority
          quality={80}
          sizes="(max-width: 640px) 11rem, (max-width: 768px) 14rem, 20rem"
          className="rounded-full border-4 border-purple-500 object-cover shadow-2xl shadow-purple-500/40"
        />
      </motion.div>
    </section>
  );
}
