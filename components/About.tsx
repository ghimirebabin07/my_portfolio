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
      className="py-28 px-8 md:px-20 bg-[#0a0a0f] text-white"
    >
      <h2 className="text-3xl font-bold mb-6 text-purple-400">
        About Me
      </h2>

      <p className="max-w-3xl text-zinc-300 leading-relaxed text-lg">
        I am a Bachelor of Engineering in Information Technology (BEIT) student
        with a background in Civil Engineering. I have worked with core engineering
        concepts such as surveying, quantity estimation, project management, and
        construction planning, which strengthened my analytical and problem-solving skills.
        <br /><br />
        Currently, I am transitioning into the field of technology with a strong
        interest in software engineering. My journey is driven by curiosity and
        continuous learning, aiming to bridge engineering principles with modern
        technologies to build practical and impactful solutions.
      </p>
    </motion.section>
  );
}