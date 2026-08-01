type ExperienceItem = {
  title: string;
  subtitle: string;
  year: string;
};

const experiences: ExperienceItem[] = [
  {
    title: "National AI Hackathon 2026",
    subtitle:
      "LifeLink Project – Team Leader (AI-based Disaster Management System)",
    year: "2026",
  },
  {
    title: "Backend Developer",
    subtitle:
      "Loan / EMI Management System – Developed a backend-driven banking application using FastAPI,SQLite, and REST APIs with automated EMI schedule generation, payment tracking, and live dashboard reporting.",
    year: "2026",
  },
  {
    title: "Civil Sub Engineer",
    subtitle:
      "Background in Surveying, Estimation, Project Management & Construction Engineering",
    year: "2020 - 2024",
  },
];

function ExperienceCard({ title, subtitle, year }: ExperienceItem) {
  return (
    <div className="relative pl-7 sm:pl-8 border-l border-purple-500/40">
      <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-[7px] top-2"></div>

      <h3 className="text-lg md:text-xl font-semibold text-white tracking-wide">
        {title}
      </h3>

      <p className="text-zinc-400 mt-1 leading-relaxed text-sm sm:text-base">
        {subtitle}
      </p>

      <span className="text-xs text-purple-300 mt-2 inline-block">
        {year}
      </span>
    </div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 md:py-24 px-4 sm:px-6 md:px-20 bg-[#0a0a0f] text-white scroll-mt-20"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-10 text-white">
        Experience
      </h2>

      <div className="flex flex-col gap-8 sm:gap-10">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.title} {...exp} />
        ))}
      </div>
    </section>
  );
}