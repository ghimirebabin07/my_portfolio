import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16 min-h-[calc(100svh-4rem)] px-4 sm:px-6 md:px-20 py-14 md:py-20 bg-[#0a0a0f] md:bg-gradient-to-br md:from-[#0a0a0f] md:via-[#1a0b2e] md:to-[#2a0f3f] text-white scroll-mt-20"
    >
      {/* Left Side */}
      <div className="flex flex-col gap-5 text-center md:text-left max-w-2xl w-full">
        {/* Greeting */}
        <h2 className="text-sm tracking-[0.3em] uppercase text-zinc-400 font-light">
          Hello I'm
        </h2>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
          Babin Ghimire
        </h1>

        {/* Role */}
        <p className="text-lg sm:text-xl md:text-2xl font-semibold text-zinc-200">
          BEIT Student & Backend Developer
        </p>

        <p className="text-sm sm:text-base md:text-lg text-purple-300 font-medium">
          • FastAPI <br />
          • Python <br />• Backend Development
        </p>

        {/* Description */}
        <p className="text-zinc-400 text-sm sm:text-base leading-7 max-w-xl mx-auto md:mx-0">
          I'm a Bachelor of Engineering in Information Technology (BEIT) student
          passionate about backend development with Python and FastAPI. I enjoy
          designing REST APIs, working with databases, and building practical
          software solutions through real-world projects and hackathons. I'm
          continuously learning new technologies and improving my software
          engineering skills every day.
        </p>

        {/* Achievement */}
        <p className="text-purple-300 text-sm font-medium">
          🏆 National AI Hackathon 2026 • Team Leader
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start mt-2">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 transition duration-300 shadow-lg shadow-purple-500/30"
          >
            Download CV
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-purple-500 text-purple-300 hover:bg-purple-600 hover:text-white transition duration-300"
          >
            Contact Me
          </a>

          <a
            href="https://github.com/ghimirebabin07"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:border-zinc-500 transition duration-300"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Right Side */}
      <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-80 md:h-80 mb-2 md:mb-0 shrink-0">
        <div className="absolute inset-4 rounded-full bg-purple-600/25 blur-xl md:inset-0 md:bg-gradient-to-tr md:from-purple-600 md:to-pink-500 md:blur-3xl md:opacity-40"></div>

        <Image
          src="/profile.jpg.jpg"
          alt="Babin Ghimire"
          fill
          priority
          quality={80}
          sizes="(max-width: 640px) 11rem, (max-width: 768px) 14rem, 20rem"
          className="rounded-full border-4 border-purple-500 object-cover shadow-2xl shadow-purple-500/40"
        />
      </div>
    </section>
  );
}
