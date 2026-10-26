"use client";

import { motion } from "framer-motion";
import { FiAward, FiStar, FiUsers } from "react-icons/fi";

type Achievement = {
  title: string;
  organization: string;
  year: string;
  role: string;
  description: string;
  icon: React.ReactNode;
};

const achievements: Achievement[] = [
  {
    title: "Hult Prize Nepal — National Top 8 Finalist",
    organization: "Hult Prize Foundation",
    year: "2026",
    role: "Team Member — AgriVolt",
    description:
      "Top 8 finalist in the National Hult Prize Championship Nepal 2026. AgriVolt focused on a solar-powered cold-storage solution designed to help farmers reduce post-harvest losses — a national-level entrepreneurship and innovation achievement.",
    icon: <FiStar size={24} />,
  },
  {
    title: "Hult Prize — College Round Winner",
    organization: "Cosmos College of Management and Technology",
    year: "2026",
    role: "Team Member — AgriVolt",
    description:
      "Winner of the Hult Prize college round. Demonstrated teamwork, entrepreneurship, problem-solving, and sustainable innovation through the AgriVolt project.",
    icon: <FiAward size={24} />,
  },
  {
    title: "National AI Hackathon 2026 — Team Leader",
    organization: "Kodedristi Software Pvt Ltd",
    year: "2026",
    role: "Team Leader — LifeLink",
    description:
      "Team Leader and idea contributor for LifeLink, an emergency-coordination concept intended to improve accident reporting, emergency response coordination, location sharing, and hospital matching. Highlighted leadership, AI-oriented problem-solving, and building technology concepts for real-world challenges.",
    icon: <FiUsers size={24} />,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-20 md:py-24 px-4 sm:px-6 md:px-20 bg-section-alt text-foreground scroll-mt-20"
    >
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        Achievements & Leadership
      </motion.h2>

      <motion.p
        className="text-muted mb-10 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Recognitions from national competitions and leadership roles in
        technology projects.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {achievements.map((achievement) => (
          <motion.div
            key={achievement.title}
            className="group rounded-xl bg-card border border-card-border p-6 hover:border-accent hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
            variants={cardVariants}
            whileHover={{ y: -4 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 text-accent">
                {achievement.icon}
              </div>
              <span className="text-xs text-accent-light bg-accent/10 px-2 py-1 rounded">
                {achievement.year}
              </span>
            </div>

            <h3 className="text-lg font-semibold mb-1 group-hover:text-accent transition-colors">
              {achievement.title}
            </h3>

            <p className="text-xs text-muted mb-3">{achievement.organization}</p>

            <p className="text-sm font-medium text-accent-light mb-3">
              {achievement.role}
            </p>

            <p className="text-sm text-muted leading-relaxed">
              {achievement.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
