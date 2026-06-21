type ExperienceItem = {
  title: string;
  subtitle: string;
  year: string;
};

const experiences: ExperienceItem[] = [
  {
    title: "National AI Hackathon 2026",
    subtitle: "LifeLink Project Team Leader",
    year: "2026",
  },
  {
    title: "Frontend Developer",
    subtitle: "Online Voting System (Java Project)",
    year: "2026 - Present",
  },
  {
    title: "Technical Civil Engineering",
    subtitle: "Completed Grades 9–12 with skills in Estimating, Surveying, Project Management & Building Construction",
    year: "2020 - 2024",
  },
];

function ExperienceCard({ title, subtitle, year }: ExperienceItem) {
  return (
    <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-full before:w-1 before:bg-purple-500">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-zinc-400">{subtitle}</p>
      <span className="text-sm text-pink-400">{year}</span>
    </div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-8 md:px-20 bg-gradient-to-b from-[#2a0f3f] to-[#0a0a0f] text-white"
    >
      <h2 className="text-3xl font-bold mb-10 text-purple-400">
        Experience
      </h2>

      <div className="flex flex-col gap-8">
        {experiences.map((exp) => (
          <ExperienceCard
            key={exp.title}
            title={exp.title}
            subtitle={exp.subtitle}
            year={exp.year}
          />
        ))}
      </div>
    </section>
  );
}