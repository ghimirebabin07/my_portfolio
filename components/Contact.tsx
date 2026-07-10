import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 md:px-20 bg-gradient-to-b from-[#0a0a0f] to-[#1a0b2e] text-white text-center scroll-mt-20"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-purple-400">
        Let&apos;s Connect
      </h2>

      <p className="max-w-2xl mx-auto text-zinc-300 mb-10 text-sm sm:text-base leading-relaxed">
        Feel free to reach out for collaborations, projects, internships, or just to say hi.
      </p>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-3xl">
        <a
          href="https://github.com/ghimirebabin07"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-pink-400"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/babin-ghimire-91403a32b"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-pink-400"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="mailto:ghimirebabin92@gmail.com"
          className="transition-colors hover:text-pink-400"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
}
