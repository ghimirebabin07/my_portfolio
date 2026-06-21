"use client";

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
        { name: "GitHub", icon: <FaGithub size={26} /> }, // ✅ FIXED
      ],
    },
    {
      title: "Core Computer Science",
      skills: [
        { name: "OOP", icon: "🧩" },
        { name: "DSA", icon: "📊" },
      ],
    },

    // 🔥 Civil Engineering Section
    {
      title: "Civil Engineering Skills",
      skills: [
        { name: "Surveying", icon: "📐" },
        { name: "Quantity Estimation", icon: "📏" },
        { name: "Project Management", icon: "📊" },
        { name: "AutoCAD Basics", icon: "🏗️" },
        { name: "Construction Planning", icon: "🏢" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 px-8 md:px-20 bg-gradient-to-b from-[#0a0a0f] to-[#1a0b2e] text-white"
    >
      {/* Title */}
      <h2 className="text-4xl font-semibold mb-14 text-center tracking-wide text-white">
        Skills & Expertise
      </h2>

      <div className="space-y-14">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h3 className="text-lg md:text-xl font-medium text-purple-300 mb-6 border-l-4 border-pink-500 pl-4 tracking-wide">
              {category.title}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center gap-3 rounded-xl bg-white/5 border border-white/10 p-6 shadow-md hover:scale-105 hover:shadow-purple-500/20 transition duration-300"
                >
                  <div className="text-3xl">{skill.icon}</div>
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