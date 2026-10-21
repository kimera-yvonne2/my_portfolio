import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import IdeaForm from "@/components/IdeaForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-slate-100 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <IdeaForm />
      <Footer />
    </main>
  );
}
