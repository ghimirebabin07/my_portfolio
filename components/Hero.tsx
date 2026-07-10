"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16 min-h-[calc(100svh-4rem)] px-4 sm:px-6 md:px-20 py-14 md:py-20 bg-gradient-to-br from-[#0a0a0f] via-[#1a0b2e] to-[#2a0f3f] text-white scroll-mt-20"
    >
      {/* Left side */}
      <motion.div
        className="flex flex-col gap-5 text-center md:text-left max-w-2xl w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* HELLO I AM */}
        <h2 className="text-sm tracking-[0.3em] uppercase text-zinc-400 font-light">
          Hello, I am
        </h2>

        {/* NAME */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent break-words">
          BABIN GHIMIRE
        </h1>

        {/* ROLE */}
        <p className="text-base sm:text-lg md:text-xl font-semibold tracking-wide text-zinc-200">
          Aspiring Software Developer
        </p>

        {/* INTERESTS */}
        <p className="text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed">
          AI/ML & Data Science Enthusiast <br />
          Cybersecurity Explorer
        </p>

        {/* NEW DESCRIPTION (added as requested) */}
        <p className="text-zinc-400 text-sm sm:text-base leading-7 max-w-xl mx-auto md:mx-0">
          Passionate about building intelligent systems using Artificial Intelligence,
          Machine Learning, and Data Science while exploring Cybersecurity to understand
          secure and scalable digital systems.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105 transition duration-300 shadow-lg shadow-purple-500/30 min-h-12"
          >
            Download CV
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white transition duration-300 min-h-12"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      {/* Right side */}
      <motion.div
        className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-80 md:h-80 mb-2 md:mb-0 shrink-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 blur-3xl opacity-40"></div>

        <Image
          src="/profile.jpg.jpg"
          alt="Babin Ghimire"
          fill
          priority
          sizes="(max-width: 640px) 12rem, (max-width: 768px) 14rem, 20rem"
          className="rounded-full border-4 border-purple-500 shadow-2xl shadow-purple-500/50 object-cover"
        />
      </motion.div>
    </section>
  );
}