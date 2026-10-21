import Reveal from "@/components/Reveal";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "C", "SQL"],
  },
  {
    title: "Backend & Full-Stack",
    skills: ["Django", "Django REST Framework", "Next.js", "React", "Node.js"],
  },
  {
    title: "Databases & Cloud",
    skills: ["PostgreSQL", "MySQL", "Neon", "Supabase", "Redis"],
  },
  {
    title: "Embedded & Systems",
    skills: ["ESP32 / ESP-IDF", "FreeRTOS", "Linux / Ubuntu", "Git & GitHub", "Docker"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 max-w-7xl mx-auto px-6 border-t border-slate-900">
      <Reveal className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Expertise</h2>
        <p className="text-slate-400">Core technologies and frameworks applied across academic projects and production environments.</p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <Reveal key={category.title} delay={index * 0.08} className="h-full">
          <div className="h-full bg-slate-900/40 border border-slate-800 rounded-2xl p-6 transition-colors duration-300 hover:border-cyan-500/40">
            <h3 className="text-lg font-semibold text-cyan-400 mb-4 pb-2 border-b border-slate-800">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill} className="px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700/50">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
