import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16 min-h-[calc(100svh-4rem)] px-4 sm:px-6 md:px-20 py-14 md:py-20 bg-[#0a0a0f] md:bg-gradient-to-br md:from-[#0a0a0f] md:via-[#1a0b2e] md:to-[#2a0f3f] text-white scroll-mt-20"
    >
      {/* Left side */}
      <div className="flex flex-col gap-5 text-center md:text-left max-w-2xl w-full">
        {/* HELLO I AM */}
        <h2 className="text-sm tracking-[0.3em] uppercase text-zinc-400 font-light">
          Hello, I am
        </h2>

        {/* NAME */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent break-words">
          BABIN GHIMIRE
        </h1>

        {/* ROLE */}
        <p className="text-base sm:text-lg md:text-xl font-semibold tracking-wide text-zinc-200">
          Aspiring Software Developer
        </p>

        {/* INTERESTS */}
        <p className="text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed">
          AI/ML & Data Science Enthusiast <br />
          Cybersecurity Explorer
        </p>

        {/* NEW DESCRIPTION (added as requested) */}
        <p className="text-zinc-400 text-sm sm:text-base leading-7 max-w-xl mx-auto md:mx-0">
          Passionate about building intelligent systems using Artificial Intelligence,
          Machine Learning, and Data Science while exploring Cybersecurity to understand
          secure and scalable digital systems.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-purple-600 transition-colors duration-200 hover:bg-purple-500 min-h-12 md:bg-gradient-to-r md:from-purple-600 md:to-pink-500 md:shadow-lg md:shadow-purple-500/30 motion-safe:md:hover:scale-105"
          >
            Download CV
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-purple-500 text-purple-300 transition-colors duration-200 hover:bg-purple-500 hover:text-white min-h-12"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right side */}
      <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-80 md:h-80 mb-2 md:mb-0 shrink-0">
        <div className="absolute inset-4 rounded-full bg-purple-600/25 blur-xl md:inset-0 md:bg-gradient-to-tr md:from-purple-600 md:to-pink-500 md:blur-3xl md:opacity-40"></div>

        <Image
          src="/profile.jpg.jpg"
          alt="Babin Ghimire"
          fill
          priority
          quality={72}
          sizes="(max-width: 640px) 11rem, (max-width: 768px) 14rem, 20rem"
          className="rounded-full border-4 border-purple-500 object-cover shadow-lg shadow-purple-500/30 md:shadow-2xl md:shadow-purple-500/50"
        />
      </div>
    </section>
  );
}
