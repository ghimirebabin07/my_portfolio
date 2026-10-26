import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Achievements />
      <Projects />
      <Contact />
    </main>
  );
}
