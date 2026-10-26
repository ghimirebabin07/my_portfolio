"use client";

import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  tech: string;
  link?: string;
  subtitle?: string;
  year?: string;
};

const projects: Project[] = [
  {
    title: "GasQ — LPG Gas Digital Queue Management System",
    description:
      "A complete queue management system for LPG gas dealers with customer registration, digital token system, real-time queue tracking, and dealer dashboard.",
    subtitle:
      "Built a full-stack application with JWT authentication, role-based access (customer/dealer/admin), automated queue management, stock tracking, and audit logging.",
    tech: "FastAPI • SQLite • JWT • HTML • CSS • JavaScript • Uvicorn • Pydantic",
    year: "2026",
    link: "https://gasq.onrender.com/",
  },
  {
    title: "LifeLink — National AI Hackathon Project",
    description:
      "AI-powered disaster management system designed for emergency response, mapping, and crisis coordination.",
    subtitle:
      "Led system design, backend integration, and AI-based text classification & clustering. Prototype concept for real-world emergency coordination.",
    tech: "Python Flask • AI/ML • Google Maps API • PostgreSQL • JavaScript",
    year: "2026",
    link: "#",
  },
  {
    title: "Loan / EMI Management System",
    description:
      "A backend-driven banking system that digitizes customer, loan, EMI schedule, and payment management with automated business logic and REST APIs.",
    subtitle:
      "Designed and developed a FastAPI backend with SQLite, automated EMI generation, payment tracking, live outstanding balance calculation, and dashboard reporting.",
    tech: "FastAPI • SQLite • Pydantic • REST API • Uvicorn • HTML • CSS • JavaScript",
    year: "2026",
    link: "https://loan-emi-system-1.onrender.com/index.html",
  },
  {
    title: "Portfolio Website",
    description:
      "Modern responsive developer portfolio showcasing skills, projects, and experience.",
    subtitle: "Built with Next.js and modern UI design principles.",
    tech: "Next.js • Tailwind CSS • Framer Motion",
    year: "2026",
    link: "https://babinghimire.com.np/#contact",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

function ProjectCard({ title, description, tech, link, subtitle, year }: Project) {
  return (
    <motion.div
      className="group rounded-xl bg-card border border-card-border p-6 hover:border-accent hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
      variants={cardVariants}
      whileHover={{ y: -4 }}
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg md:text-xl font-semibold group-hover:text-accent transition-colors">
          {title}
        </h3>

        {year && (
          <span className="text-xs text-accent-light bg-accent/10 px-2 py-1 rounded">
            {year}
          </span>
        )}
      </div>

      <p className="text-foreground/80 leading-relaxed">{description}</p>

      {subtitle && (
        <p className="text-muted mt-2 text-sm leading-relaxed">{subtitle}</p>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        {tech.split("•").map((item, idx) => (
          <span
            key={idx}
            className="text-xs bg-accent/10 text-accent-light px-2 py-1 rounded"
          >
            {item.trim()}
          </span>
        ))}
      </div>

      {link && link !== "#" && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-block text-sm text-accent hover:text-accent-light transition"
        >
          View Project &rarr;
        </a>
      )}
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 md:py-24 px-4 sm:px-6 md:px-20 bg-background text-foreground scroll-mt-20"
    >
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {projects.map((proj) => (
          <ProjectCard key={proj.title} {...proj} />
        ))}
      </motion.div>
    </section>
  );
}
