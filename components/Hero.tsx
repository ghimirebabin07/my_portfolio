"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-between min-h-screen px-8 md:px-20 bg-gradient-to-br from-[#0a0a0f] via-[#1a0b2e] to-[#2a0f3f] text-white"
    >
      {/* Left side */}
      <motion.div
        className="flex flex-col gap-6 text-center md:text-left"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-lg font-light">Hello, I'm</h2>

        <h1 className="text-5xl font-extrabold text-white">
          Babin Ghimire
        </h1>

        <p className="text-zinc-400 text-lg">
          Aspiring Software Engineer <br />
          • Web Developer <br />
          • AI & Backend Explorer
        </p>

        <p className="text-zinc-500 text-sm max-w-md">
          I am currently pursuing a Bachelor of Engineering in Information
          Technology (BEIT) and am passionate about software development,
          technology, and innovation. I enjoy transforming ideas into practical
          solutions through programming and continuous learning. My goal is to
          build impactful technologies while developing strong technical and
          professional skills.
        </p>

        <a
          href="/resume.pdf"
          download
          className="mt-4 inline-block px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 transition"
        >
          Download CV
        </a>
      </motion.div>

      {/* Right side */}
      <motion.div
        className="relative w-64 h-64 mb-10 md:mb-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 blur-3xl opacity-40"></div>

        <Image
          src="/profile.jpg.jpg"
          alt="Profile Image"
          fill
          className="rounded-full border-4 border-purple-500 shadow-lg shadow-purple-500/50 object-cover"
        />
      </motion.div>
    </section>
  );
}