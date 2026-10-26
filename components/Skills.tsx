"use client";

import { motion } from "framer-motion";
import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiPython,
  SiPostgresql,
  SiCplusplus,
  SiFastapi,
  SiSqlalchemy,
  SiSqlite,
  SiNextdotjs,
  SiC,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C", icon: <SiC size={26} /> },
      { name: "C++", icon: <SiCplusplus size={26} /> },
      { name: "Java", icon: <FaJava size={26} /> },
      { name: "Python", icon: <FaPython size={26} /> },
      { name: "JavaScript", icon: <FaJs size={26} /> },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "FastAPI", icon: <SiFastapi size={26} /> },
      { name: "REST APIs", icon: <SiPython size={26} /> },
      { name: "SQLAlchemy", icon: <SiSqlalchemy size={26} /> },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "SQLite", icon: <SiSqlite size={26} /> },
      { name: "PostgreSQL", icon: <SiPostgresql size={26} /> },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML", icon: <FaHtml5 size={26} /> },
      { name: "CSS", icon: <FaCss3Alt size={26} /> },
      { name: "JavaScript", icon: <FaJs size={26} /> },
      { name: "Next.js", icon: <SiNextdotjs size={26} /> },
    ],
  },
  {
    title: "Tools & Version Control",
    skills: [
      { name: "Git", icon: <FaGitAlt size={26} /> },
      { name: "GitHub", icon: <FaGithub size={26} /> },
    ],
  },
  {
    title: "Core Computer Science",
    skills: [
      { name: "OOP", icon: <SiCplusplus size={26} /> },
      { name: "DSA", icon: <SiC size={26} /> },
    ],
  },
  {
    title: "Civil Engineering",
    skills: [
      { name: "Surveying", icon: <FaHtml5 size={26} /> },
      { name: "Estimation", icon: <FaCss3Alt size={26} /> },
      { name: "Project Mgmt", icon: <FaGitAlt size={26} /> },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 md:py-24 px-4 sm:px-6 md:px-20 bg-section-alt text-foreground scroll-mt-20"
    >
      <motion.h2
        className="text-3xl sm:text-4xl font-semibold mb-12 text-center tracking-wide"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        Technical Skills
      </motion.h2>

      <motion.div
        className="space-y-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {skillCategories.map((category) => (
          <motion.div key={category.title} variants={itemVariants}>
            <h3 className="text-base sm:text-lg md:text-xl font-medium text-accent mb-5 border-l-4 border-accent pl-4 tracking-wide">
              {category.title}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center gap-3 rounded-xl bg-card border border-card-border p-6 hover:border-accent hover:bg-accent/5 hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/20 text-accent text-lg font-semibold">
                    {skill.icon}
                  </div>

                  <span className="text-sm font-medium text-center text-foreground">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
