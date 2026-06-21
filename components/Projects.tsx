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
      "AI-powered disaster management system designed for emergency response, mapping, and crisis coordination.",
    subtitle:
      "Led system design, backend integration, and AI-based text classification & clustering.",
    tech: "Python Flask • AI/ML • Google Maps API • PostgreSQL • JavaScript",
    year: "2026",
    link: "#",
  },
  {
    title: "Online Voting System",
    description:
      "Secure digital voting platform ensuring transparency, authentication, and vote integrity.",
    subtitle: "Built using Spring Boot with secure backend architecture.",
    tech: "Spring Boot • PostgreSQL • REST APIs",
    year: "2026",
    link: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "Modern responsive developer portfolio showcasing skills, projects, and experience.",
    subtitle: "Built with Next.js and modern UI design principles.",
    tech: "Next.js • Tailwind CSS • Framer Motion",
    year: "2026",
    link: "https://babinghimire.vercel.app/#contact",
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
    <div className="group rounded-xl bg-white/5 border border-white/10 p-6 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-purple-300 transition">
          {title}
        </h3>

        {year && (
          <span className="text-xs text-zinc-400 bg-black/40 px-2 py-1 rounded">
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
            className="text-xs bg-black/40 border border-white/10 text-purple-300 px-2 py-1 rounded"
          >
            {item.trim()}
          </span>
        ))}
      </div>

      {/* Link */}
      {link && (
        <a
          href={link}
          className="mt-5 inline-block text-sm text-purple-400 hover:text-purple-300 transition"
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
      className="py-24 px-8 md:px-20 bg-[#0a0a0f] text-white"
    >
      <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-white">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((proj) => (
          <ProjectCard key={proj.title} {...proj} />
        ))}
      </div>
    </section>
  );
}