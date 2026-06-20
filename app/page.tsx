import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
    </main>
  );
}