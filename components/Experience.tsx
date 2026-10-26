"use client";

import { motion } from "framer-motion";
import { FiCode, FiTool, FiBriefcase } from "react-icons/fi";

type ExperienceItem = {
  title: string;
  subtitle: string;
  year: string;
  icon: React.ReactNode;
};

const experiences: ExperienceItem[] = [
  {
    title: "National AI Hackathon 2026",
    subtitle:
      "LifeLink Project — Team Leader. Led system design, backend integration, and AI-based text classification for an emergency coordination concept.",
    year: "2026",
    icon: <FiCode size={20} />,
  },
  {
    title: "Backend Developer",
    subtitle:
      "Loan / EMI Management System — Developed a backend-driven banking application using FastAPI, SQLite, and REST APIs with automated EMI schedule generation, payment tracking, and live dashboard reporting.",
    year: "2026",
    icon: <FiTool size={20} />,
  },
  {
    title: "Civil Sub Engineer",
    subtitle:
      "Background in Surveying, Estimation, Project Management & Construction Engineering. Developed strong analytical and problem-solving skills through hands-on civil engineering work.",
    year: "2020 – 2024",
    icon: <FiBriefcase size={20} />,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 md:py-24 px-4 sm:px-6 md:px-20 bg-background text-foreground scroll-mt-20"
    >
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h2>

      <motion.div
        className="flex flex-col gap-8 sm:gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {experiences.map((exp) => (
          <motion.div
            key={exp.title}
            className="relative pl-7 sm:pl-8 border-l border-accent/40"
            variants={itemVariants}
          >
            <div className="absolute w-3 h-3 bg-accent rounded-full -left-[7px] top-2"></div>

            <div className="flex items-center gap-3 mb-1">
              <span className="text-accent">{exp.icon}</span>
              <h3 className="text-lg md:text-xl font-semibold tracking-wide">
                {exp.title}
              </h3>
            </div>

            <p className="text-muted mt-1 leading-relaxed text-sm sm:text-base">
              {exp.subtitle}
            </p>

            <span className="text-xs text-accent-light mt-2 inline-block">
              {exp.year}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
