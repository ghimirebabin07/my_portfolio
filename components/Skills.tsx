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
  SiFlask,
  SiPostgresql,
  SiCplusplus,
} from "react-icons/si";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C", icon: "C" },
        { name: "C++", icon: <SiCplusplus size={26} /> },
        { name: "Java", icon: <FaJava size={26} /> },
        { name: "Python", icon: <FaPython size={26} /> },
        { name: "JavaScript", icon: <FaJs size={26} /> },
      ],
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML", icon: <FaHtml5 size={26} /> },
        { name: "CSS", icon: <FaCss3Alt size={26} /> },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Flask", icon: <SiFlask size={26} /> },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql size={26} /> },
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
        { name: "OOP", icon: "OOP" },
        { name: "DSA", icon: "DSA" },
      ],
    },

    {
      title: "Civil Engineering Skills",
      skills: [
        { name: "Surveying", icon: "SUR" },
        { name: "Quantity Estimation", icon: "EST" },
        { name: "Project Management", icon: "PM" },
        { name: "AutoCAD Basics", icon: "CAD" },
        { name: "Construction Planning", icon: "PLAN" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 md:py-24 px-4 sm:px-6 md:px-20 bg-gradient-to-b from-[#0a0a0f] to-[#1a0b2e] text-white scroll-mt-20"
    >
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-semibold mb-12 text-center tracking-wide text-white">
        Skills & Expertise
      </h2>

      <div className="space-y-12">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h3 className="text-base sm:text-lg md:text-xl font-medium text-purple-300 mb-5 border-l-4 border-pink-500 pl-4 tracking-wide">
              {category.title}
            </h3>

            <div className="grid grid-cols-1 min-[420px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center gap-3 rounded-lg bg-white/5 border border-white/10 p-5 sm:p-6 shadow-sm transition-colors duration-200 min-h-28 motion-safe:hover:-translate-y-1 motion-safe:hover:border-purple-400/50 motion-safe:hover:shadow-purple-500/20"
                >
                  <div className="flex h-8 min-w-8 items-center justify-center text-xl font-semibold text-purple-200">
                    {skill.icon}
                  </div>
                  <span className="text-sm font-medium text-zinc-200 text-center tracking-wide">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
