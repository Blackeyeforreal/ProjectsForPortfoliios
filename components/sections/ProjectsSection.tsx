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
  image: string;
}
interface ProjectsData {
  eyebrow: string;
  title: string;
  description: string;
  items: Project[];
}
const accentColorMap: { [key: string]: string } = {
  cyan: "from-amber-100/70 dark:from-accent-gold/20 to-amber-50/20 dark:to-transparent",
  pink: "from-rose-100/70 dark:from-accent-rose/20 to-rose-50/20 dark:to-transparent",
  violet: "from-purple-100/70 dark:from-purple-500/20 to-purple-50/20 dark:to-transparent",
  amber: "from-emerald-100/70 dark:from-accent-emerald/20 to-emerald-50/20 dark:to-transparent",
};

const stickerColorMap: { [key: string]: string } = {
  cyan: "border-accent-gold/20 bg-accent-gold/10 text-accent-gold",
  pink: "border-accent-rose/20 bg-accent-rose/10 text-accent-rose",
  violet: "border-purple-400/20 bg-purple-400/10 text-purple-600 dark:border-purple-300/30 dark:bg-purple-300/15 dark:text-purple-200",
  amber: "border-accent-emerald/20 bg-accent-emerald/10 text-accent-emerald",
};

const typeColorMap: { [key: string]: string } = {
  cyan: "text-accent-gold",
  pink: "text-accent-rose",
  violet: "text-purple-600 dark:text-purple-300",
  amber: "text-accent-emerald",
};

const linkColorMap: { [key: string]: string } = {
  cyan: "text-accent-gold hover:text-accent-gold/80",
  pink: "text-accent-rose hover:text-accent-rose/80",
  violet: "text-purple-600 dark:text-purple-300 hover:text-purple-500 dark:hover:text-purple-200",
  amber: "text-accent-emerald hover:text-accent-emerald/80",
};

export default function ProjectsSection({ data }: { data: ProjectsData }) {
  return (
    <section id="projects" className="section-shell scroll-mt-24 py-24 sm:py-32">
      <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div><p className="eyebrow">{data.eyebrow}</p><h2 className="section-title">{data.title}</h2></div>
        <p className="max-w-md text-sm leading-6 text-slate-600 dark:text-slate-400">{data.description}</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.items.map((project, index) => (
          <motion.article key={project.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: index * .1 }} whileHover={{ y: -6 }} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:border-accent-gold/30 hover:shadow-lg">
            <div className="relative h-32 overflow-hidden border-b border-border/60 p-5">
              {/* Picture / Gradient Preview with scale zoom animation */}
              {project.image ? (
                <>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-slate-900/10 transition-opacity duration-300 group-hover:opacity-30" />
                </>
              ) : (
                <div className={`absolute inset-0 bg-gradient-to-br ${accentColorMap[project.accent] || accentColorMap.cyan} transition-transform duration-700 ease-out group-hover:scale-110`} />
              )}
              <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110 pointer-events-none">
                <div className="absolute -right-5 -top-6 h-28 w-28 rounded-full border border-border/40" />
                <div className="absolute right-10 top-8 h-16 w-16 rounded-xl border border-border/40 bg-white/10" />
              </div>
              <Layers3 className="relative text-slate-600 dark:text-slate-400" size={24} />
              <span className="relative mt-8 block text-[10px] font-semibold uppercase tracking-[.18em] text-slate-500 dark:text-slate-400">Case study</span>
              <span className={`absolute right-4 top-4 rotate-6 rounded-lg border px-2 py-0.5 text-[9px] font-bold ${stickerColorMap[project.accent] || stickerColorMap.cyan}`}>{project.sticker}</span>
            </div>
            <div className="p-5">
              <p className={`text-[11px] font-semibold tracking-wide ${typeColorMap[project.accent] || typeColorMap.cyan}`}>{project.type}</p>
              <h3 className="mt-1.5 text-xl font-bold tracking-tight text-slate-800 dark:text-slate-100 line-clamp-1">{project.title}</h3>
              <p className="mt-2 min-h-12 text-xs leading-5 text-slate-600 dark:text-slate-300 line-clamp-3">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">{project.tags.map(tag => <span key={tag} className="rounded-full border border-border bg-slate-50 dark:bg-white/5 px-2 py-0.5 text-[10px] text-slate-600 dark:text-slate-300">{tag}</span>)}</div>
              <div className="mt-5 flex items-center gap-4 border-t border-border/60 pt-4 text-xs font-semibold">
                <a href={project.githubUrl} className="inline-flex items-center gap-1.5 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-100"><FaGithub size={14} /> Code</a>
                <a href={project.demoUrl} className={`inline-flex items-center gap-1.5 ${linkColorMap[project.accent] || linkColorMap.cyan}`}>Preview <ArrowUpRight size={13} /></a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
