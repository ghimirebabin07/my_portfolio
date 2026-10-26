"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 px-4 sm:px-6 md:px-20 bg-background text-foreground scroll-mt-20"
    >
      <motion.h2
        className="text-2xl sm:text-3xl font-bold mb-6 text-accent"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="max-w-3xl text-muted leading-relaxed text-base sm:text-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        I&apos;m a Bachelor of Engineering in Information Technology (BEIT)
        student passionate about backend development, AI, and building real-world
        software solutions. I enjoy turning ideas into practical applications
        using modern technologies such as FastAPI, Spring Boot, PostgreSQL,
        SQLAlchemy, and Next.js.
        <br />
        <br />
        I have led projects including an AI-powered LifeLink system at the
        National AI Hackathon 2026 and developed a Loan & EMI Management System
        that automates loan processing, payment tracking, and dashboard reporting
        through REST APIs.
        <br />
        <br />
        Before transitioning into software engineering, I completed a diploma in
        Civil Engineering, where I developed strong analytical, project planning,
        and problem-solving skills. Today, I combine that engineering mindset
        with software development to create scalable and impactful solutions while
        continuously learning new technologies.
      </motion.p>
    </section>
  );
}
