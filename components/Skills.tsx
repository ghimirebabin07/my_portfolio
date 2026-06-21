"use client";

import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaJs,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiFlask,
  SiPostgresql,
  SiCplusplus,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "Java", icon: <FaJava size={28} /> },
    { name: "Spring Boot", icon: <SiSpringboot size={28} /> },
    { name: "Flask", icon: <SiFlask size={28} /> },
    { name: "C++", icon: <SiCplusplus size={28} /> },
    { name: "JavaScript", icon: <FaJs size={28} /> },
    { name: "HTML", icon: <FaHtml5 size={28} /> },
    { name: "CSS", icon: <FaCss3Alt size={28} /> },
    { name: "Git", icon: <FaGitAlt size={28} /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={28} /> },
    { name: "Python", icon: <FaPython size={28} /> },
    { name: "OOP", icon: "🧩" },
    { name: "DSA", icon: "📊" },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-8 md:px-20 bg-gradient-to-b from-[#1a0b2e] to-[#2a0f3f] text-white"
    >
      <h2 className="text-3xl font-bold mb-10 text-pink-400">
        Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center gap-3 rounded-xl bg-[#18181B] p-6 shadow-md hover:scale-105 hover:shadow-purple-500/20 transition duration-300"
          >
            <div className="text-3xl">{skill.icon}</div>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}