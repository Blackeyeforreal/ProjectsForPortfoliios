"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Layers3, Play } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface Project {
  title: string;
  type: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
  sticker: string;
  accent: string;
}
interface ProjectsData {
  eyebrow: string;
  title: string;
  description: string;
  items: Project[];
}
const accentColorMap: { [key: string]: string } = {
  cyan: "from-electric-cyan/30 via-electric-cyan/10 to-transparent", // Maps project's cyan style
  pink: "from-vibrant-magenta/30 via-fuchsia-500/10 to-transparent", // Maps project's magenta style
};
export default function ProjectsSection({ data }: { data: ProjectsData }) {
  return (
    <section id="projects" className="section-shell scroll-mt-24 py-24 sm:py-32">
      <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div><p className="eyebrow">{data.eyebrow}</p><h2 className="section-title">{data.title}</h2></div>
        <p className="max-w-md text-sm leading-6 text-slate-400">{data.description}</p>
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        {data.items.map((project, index) => (
          <motion.article key={project.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: index * .1 }} whileHover={{ y: -9, rotate: index ? 0.7 : -0.7 }} className="group overflow-hidden rounded-2xl border border-white/8 bg-[#0b1325] transition hover:border-cyan-400/25">
            <div className={`relative h-44 overflow-hidden border-b border-white/5 bg-gradient-to-br ${accentColorMap[project.accent] || `from-electric-cyan/30 via-electric-cyan/10 to-transparent`} p-6`}>
              <div className="absolute -right-5 -top-6 h-36 w-36 rounded-full border border-white/10" /><div className="absolute right-14 top-12 h-20 w-20 rounded-xl border border-white/10 bg-white/5" />
              <Layers3 className="relative text-white/80" size={27} /><span className="relative mt-12 block text-xs font-semibold uppercase tracking-[.18em] text-slate-300">Case study</span><span className={`absolute right-5 top-5 rotate-6 rounded-lg border px-2 py-1 text-[10px] font-bold ${project.accent === 'cyan' ? "border-cyan-300/30 bg-cyan-300/15 text-cyan-100" : "border-pink-300/30 bg-pink-300/15 text-pink-100"}`}>{project.sticker}</span>
            </div>
            <div className="p-6"><p className="text-xs font-medium text-cyan-300">{project.type}</p><h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">{project.title}</h3><p className="mt-3 min-h-12 text-sm leading-6 text-slate-400">{project.description}</p><div className="mt-5 flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300">{tag}</span>)}</div><div className="mt-6 flex items-center gap-4 border-t border-white/5 pt-5 text-sm font-semibold"><a href={project.githubUrl} className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white"><FaGithub size={16} /> Code</a><a href={project.demoUrl} className="inline-flex items-center gap-1.5 text-cyan-300 hover:text-cyan-200"><Play size={15} /> Preview <ArrowUpRight size={15} /></a></div></div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
