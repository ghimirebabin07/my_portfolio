export default function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 px-4 sm:px-6 md:px-20 bg-[#0a0a0f] text-white scroll-mt-20"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-purple-400">
        About Me
      </h2>

      <p className="max-w-3xl text-zinc-300 leading-relaxed text-base sm:text-lg">
        I'm a Bachelor of Engineering in Information Technology (BEIT) student
        passionate about backend development, AI, and building real-world software
        solutions. I enjoy turning ideas into practical applications using modern
        technologies such as FastAPI, Spring Boot, PostgreSQL, SQLAlchemy, and
        Next.js.
        <br /><br />
        I have led projects including an AI-powered LifeLink system at
        the National AI Hackathon 2026 and developed a Loan & EMI Management
        System that automates loan processing, payment tracking, and dashboard
        reporting through REST APIs.
        <br /><br />
        Before transitioning into software engineering, I completed a diploma in
        Civil Engineering, where I developed strong analytical, project planning,
        and problem-solving skills. Today, I combine that engineering mindset
        with software development to create scalable and impactful solutions while
        continuously learning new technologies.
      </p>
    </section>
  );
}