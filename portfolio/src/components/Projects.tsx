import { getGitHubProjects } from "@/lib/github";
import { FolderGit2, Star, ExternalLink, Code } from "lucide-react";
import Reveal from "@/components/Reveal";

export default async function Projects() {
  const repos = await getGitHubProjects();

  return (
    <section id="projects" className="py-24 max-w-7xl mx-auto px-6">
      <Reveal className="mb-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between">
        <div>
          <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-2">
            <FolderGit2 className="w-4 h-4" /> Live Repository Sync
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Featured GitHub Work</h2>
        </div>
        <p className="text-slate-400 text-sm mt-2 md:mt-0">Automatically fetched via GitHub REST API</p>
      </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo, index) => (
          <Reveal key={repo.id} delay={Math.min(index * 0.08, 0.32)} className="h-full">
          <div className="group h-full bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-sm hover:-translate-y-1 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-cyan-500/5">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                  <Code className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  {repo.language && (
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-cyan-400" />
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-400" />
                    {repo.stargazers_count}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {repo.name}
              </h3>
              <p className="text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                {repo.description || "No description provided for this repository."}
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-800/60">
              <div className="flex flex-wrap gap-1">
                {repo.topics.slice(0, 2).map((topic) => (
                  <span key={topic} className="px-2 py-0.5 rounded text-[10px] bg-slate-800 text-slate-300">
                    {topic}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3">
                {repo.homepage && (
                  <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors" title="Live Demo">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors" title="View Source">
                  <Code className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
