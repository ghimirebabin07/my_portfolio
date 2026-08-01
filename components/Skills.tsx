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
      title: "Backend Development",
      skills: [
        { name: "FastAPI", icon: <SiPython size={26} /> },
        { name: "REST APIs", icon: "API" },
        { name: "SQLAlchemy", icon: "SA" },
      ],
    },

    {
      title: "Database",
      skills: [
        { name: "SQLite", icon: "SQL" },
        { name: "PostgreSQL", icon: <SiPostgresql size={26} /> },
      ],
    },

    {
      title: "Frontend Development",
      skills: [
        { name: "HTML", icon: <FaHtml5 size={26} /> },
        { name: "CSS", icon: <FaCss3Alt size={26} /> },
        { name: "JavaScript", icon: <FaJs size={26} /> },
        { name: "Next.js", icon: "N" },
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
        { name: "Object-Oriented Programming", icon: "OOP" },
        { name: "Data Structures & Algorithms", icon: "DSA" },
      ],
    },

    {
      title: "Civil Engineering",
      skills: [
        { name: "Surveying", icon: "SUR" },
        { name: "Quantity Estimation", icon: "EST" },
        { name: "Project Management", icon: "PM" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 md:py-24 px-4 sm:px-6 md:px-20 bg-gradient-to-b from-[#0a0a0f] to-[#1a0b2e] text-white scroll-mt-20"
    >
      <h2 className="text-3xl sm:text-4xl font-semibold mb-12 text-center tracking-wide text-white">
        Technical Skills
      </h2>

      <div className="space-y-12">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h3 className="text-base sm:text-lg md:text-xl font-medium text-purple-300 mb-5 border-l-4 border-pink-500 pl-4 tracking-wide">
              {category.title}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center gap-3 rounded-xl bg-white/5 border border-white/10 p-6 hover:border-purple-400 hover:bg-white/10 hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-500/20 text-purple-200 text-lg font-semibold">
                    {skill.icon}
                  </div>

                  <span className="text-sm font-medium text-center text-zinc-200">
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