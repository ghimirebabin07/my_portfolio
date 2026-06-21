import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
    </main>
  );
}