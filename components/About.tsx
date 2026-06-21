"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-28 px-8 md:px-20 bg-gradient-to-b from-[#0a0a0f] to-[#1a0b2e] text-white"
    >
      <h2 className="text-3xl font-bold mb-6 text-orange-400">
        About Me
      </h2>

      <p className="max-w-3xl text-zinc-300 leading-relaxed text-lg">
        Welcome to my digital portfolio — a showcase of my learning journey,
        projects, and technical interests. I am currently pursuing a Bachelor
        of Engineering in Information Technology (BEIT) and enjoy exploring
        various areas of technology, including software development,
        artificial intelligence, data science, cybersecurity, and backend
        systems. I am passionate about continuous learning, problem-solving,
        and building solutions that can make a real-world impact.
      </p>
    </motion.section>
  );
}