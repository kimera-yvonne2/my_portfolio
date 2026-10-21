import { Code2, Mail, Terminal } from "lucide-react";
import { personalData } from "@/data/portfolioData";
import Reveal from "@/components/Reveal";

const copyrightYear = new Date().getFullYear();

export default function Footer() {
  return (
    <Reveal>
    <footer className="border-t border-slate-900 bg-slate-950/80 py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2 text-cyan-400 font-bold text-lg">
          <Terminal className="w-5 h-5" />
          <span>Kimera Yvonne</span>
        </div>

        <p className="text-slate-400 text-sm text-center">
          © {copyrightYear} Kimera Yvonne.
        </p>

        <div className="flex items-center gap-4">
          <a href="https://github.com/KimeraYvonne" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 transition-colors">
            <Code2 className="w-5 h-5" />
          </a>
          <a href={`mailto:${personalData.email}`} className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-3 py-2.5 text-sm text-slate-300 transition-colors hover:bg-slate-800 hover:text-cyan-400">
            <Mail className="w-5 h-5" />
            <span>{personalData.email}</span>
          </a>
        </div>
      </div>
    </footer>
    </Reveal>
  );
}
