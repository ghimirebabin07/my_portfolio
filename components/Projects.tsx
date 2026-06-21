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
    title: "LifeLink – National AI Hackathon Project",
    description:
      "A disaster management and emergency support platform built to improve crisis response using AI and real-time mapping.",
    subtitle:
      "Worked on system design, backend integration, and AI-powered text classification + clustering logic.",
    tech: "Python Flask • AI/ML • Google Maps API • JavaScript • HTML • CSS • PostgreSQL " ,
    year: "2026",
    link: "#",
  },
  {
    title: "Online Voting System",
    description:
      "Secure and scalable voting platform designed for transparent digital elections.",
    subtitle: "Implemented authentication, vote integrity, and database structure.",
    tech: "Spring Boot • PostgreSQL • REST APIs",
    year: "2026",
    link: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal developer portfolio showcasing projects, skills, and experience.",
    subtitle: "Built with modern UI principles and responsive design.",
    tech: "Next.js • Tailwind CSS",
    year: "2026",
    link: "#",
  },
];

function ProjectCard({
  title,
  description,
  tech,
  link,
  subtitle,
  year,
}: Project) {
  return (
    <div className="group rounded-xl bg-[#18181B] p-6 shadow-md border border-zinc-800 hover:border-purple-500 transition-all duration-300 hover:-translate-y-1">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-purple-400 group-hover:text-purple-300">
          {title}
        </h3>

        {year && (
          <span className="text-xs text-zinc-400 bg-zinc-900 px-2 py-1 rounded">
            {year}
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-zinc-300 mt-3 leading-relaxed">
        {description}
      </p>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-zinc-400 mt-2 text-sm leading-relaxed">
          {subtitle}
        </p>
      )}

      {/* Tech stack */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tech.split("•").map((item, idx) => (
          <span
            key={idx}
            className="text-xs bg-zinc-900 text-pink-300 px-2 py-1 rounded"
          >
            {item.trim()}
          </span>
        ))}
      </div>

      {/* Link */}
      {link && (
        <a
          href={link}
          className="mt-5 inline-block text-sm text-blue-400 hover:text-blue-300 hover:underline transition"
        >
          View Project →
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-20 bg-gradient-to-b from-[#0a0a0f] to-[#1a0b2e] text-white"
    >
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-pink-400">
        Projects 
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((proj) => (
          <ProjectCard key={proj.title} {...proj} />
        ))}
      </div>
    </section>
  );
}