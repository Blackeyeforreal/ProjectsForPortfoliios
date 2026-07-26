"use client";
import { motion } from 'framer-motion';
import { IconType } from 'react-icons'; // Assuming react-icons is installed for icons
import { SiDocker, SiGit, SiMysql, SiNextdotjs, SiNodedotjs, SiReact, SiSpringboot, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const iconMap: { [key: string]: { icon: IconType, color: string } } = {
  react: { icon: SiReact, color: 'text-sky-300' },
  next: { icon: SiNextdotjs, color: 'text-white' },
  typescript: { icon: SiTypescript, color: 'text-blue-400' },
  tailwind: { icon: SiTailwindcss, color: 'text-cyan-300' },
  spring: { icon: SiSpringboot, color: 'text-lime-300' },
  node: { icon: SiNodedotjs, color: 'text-green-300' },
  mysql: { icon: SiMysql, color: 'text-sky-200' },
  docker: { icon: SiDocker, color: 'text-blue-300' },
  aws: { icon: FaAws, color: 'text-amber-300' },
  git: { icon: SiGit, color: 'text-orange-400' },
};

interface Competency {
  category: string;
  name: string;
  description: string;
}

interface SkillsData {
  title: string;
  description: string;
  competencies: Competency[];
  technologies: { name: string; icon: string; }[];
}

// Helper component for a single skill card
const SkillCard = ({ category, name, description, icon: Icon }: { category: string; name: string; description: string; icon: IconType }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.25 }}
    whileHover={{ y: -6, rotate: -0.5 }}
    className="bg-card p-8 rounded-xl shadow-md border border-border cursor-pointer hover:border-accent-gold/40 hover:shadow-lg transition duration-150 group"
  >
    <div className="flex items-center mb-4">
      <div className="p-3 bg-gradient-to-br from-accent-gold to-accent-rose rounded-full mr-4 shadow-lg transition duration-300 group-hover:scale-110">
        <Icon className="w-8 h-8 text-white dark:text-slate-950" />
      </div>
      <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">{name}</h3>
    </div>
    <p className="text-slate-600 dark:text-slate-300 mb-4 flex-grow">{description}</p>
    
    {/* Progress Indicator Placeholder */}
    <div className="mt-4 pt-4 border-t border-border">
        <div className="flex justify-between text-sm font-medium text-accent-gold mb-1">
            <span>Proficiency</span>
            <span>90%</span> {/* Placeholder for actual progress */}
        </div>
        <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5">
            <div className="bg-gradient-to-r from-accent-gold to-accent-rose h-2.5 rounded-full" style={{ width: '90%' }}></div>
        </div>
    </div>
  </motion.div>
);

export default function SkillsSection({ data }: { data: SkillsData }) {
  // Mock Icons for demonstration (In a real app, these would be imported from react-icons)
  const Icon = ({ className }: { className: string }) => <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;

  return (
    <section id="skills" className="section-shell scroll-mt-24 py-24 sm:py-32">
      <motion.h2 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.3 }}
        className="text-4xl sm:text-5xl font-extrabold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-accent-gold via-accent-rose to-accent-emerald"
      >
        {data.title}
      </motion.h2>
      <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8 text-center">
        {data.description}
      </p>

      <div className="relative mx-auto mb-12 flex max-w-3xl flex-wrap justify-center gap-2" aria-label="Technology stack">
        {data.technologies.map(({ name, icon }, index) => {
          const { icon: TechIcon, color } = iconMap[icon] || { icon: () => null, color: 'text-white' };
          return (
          <motion.div
            key={name}
            initial={{ opacity: 0, scale: 0.7, y: 12 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.035, duration: .2 }}
            animate={{ y: [0, index % 2 === 0 ? -3 : 3, 0] }}
            whileHover={{ y: -8, scale: 1.35, rotate: index % 2 ? 5 : -5 }}
            className="group relative flex h-10 w-10 cursor-default items-center justify-center rounded-xl border border-border bg-card shadow-sm transition-colors duration-150 hover:border-accent-gold/60 hover:bg-slate-50 dark:hover:bg-slate-800"
            title={name}
            aria-label={name}
          >
            <TechIcon className={`h-5 w-5 ${color}`} />
            <span className="pointer-events-none absolute -bottom-8 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-md border border-border bg-slate-850 px-2 py-1 text-[10px] font-semibold text-slate-100 opacity-0 shadow-md transition-opacity group-hover:opacity-100">{name}</span>
          </motion.div>
        )})}
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
        {data.competencies.map((skill, index) => (
          <SkillCard 
            key={index}
            category={skill.category}
            name={skill.name}
            description={skill.description}
            icon={Icon} // Placeholder icon, replace with actual icons as needed
          />
        ))}
      </div>
    </section>
  );
}
