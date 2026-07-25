"use client";
import { motion } from 'framer-motion';
import { IconType } from 'react-icons'; // Assuming react-icons is installed for icons
import { SiDocker, SiGit, SiMysql, SiNextdotjs, SiNodedotjs, SiReact, SiSpringboot, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const techStack = [
  { name: 'React', icon: SiReact, color: 'text-sky-300' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-300' },
  { name: 'Spring Boot', icon: SiSpringboot, color: 'text-lime-300' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-300' },
  { name: 'MySQL', icon: SiMysql, color: 'text-sky-200' },
  { name: 'Docker', icon: SiDocker, color: 'text-blue-300' },
  { name: 'AWS', icon: FaAws, color: 'text-amber-300' },
  { name: 'Git', icon: SiGit, color: 'text-orange-400' },
];

// Helper component for a single skill card
const SkillCard = ({ category, name, description, icon: Icon }: { category: string; name: string; description: string; icon: IconType }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.25 }}
    whileHover={{ y: -6, rotate: -0.5 }}
    className="bg-[#0F172A] p-8 rounded-xl shadow-2xl border border-gray-800/50 cursor-pointer hover:border-cyan-500/50 transition duration-150 group"
  >
    <div className="flex items-center mb-4">
      <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full mr-4 shadow-lg transition duration-300 group-hover:scale-110">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-2xl font-bold text-gray-50">{name}</h3>
    </div>
    <p className="text-gray-400 mb-4 flex-grow">{description}</p>
    
    {/* Progress Indicator Placeholder */}
    <div className="mt-4 pt-4 border-t border-gray-800">
        <div className="flex justify-between text-sm font-medium text-cyan-300 mb-1">
            <span>Proficiency</span>
            <span>90%</span> {/* Placeholder for actual progress */}
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2.5 rounded-full" style={{ width: '90%' }}></div>
        </div>
    </div>
  </motion.div>
);

export default function SkillsSection() {
  // Mock Icons for demonstration (In a real app, these would be imported from react-icons)
  const Icon = ({ className }: { className: string }) => <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;

  const skillsData = [
    { category: "Backend", name: "Microservices & APIs", description: "Designing and implementing scalable, resilient services using Spring Boot and REST principles.", icon: Icon },
    { category: "Frontend", name: "Modern UI/UX", description: "Building highly interactive, performant interfaces with Next.js 15, React 19, and Tailwind CSS.", icon: Icon },
    { category: "Database", name: "Data Modeling", description: "Expertise in relational database design (MySQL) and efficient data querying.", icon: Icon },
    { category: "Cloud", name: "Deployment & Infra", description: "Experience with containerization (Docker) and cloud deployment pipelines for Vercel/AWS.", icon: Icon },
    { category: "DevOps", name: "CI/CD Practices", description: "Implementing automated testing, linting, and continuous integration workflows.", icon: Icon },
    { category: "Tools", name: "State Management & Forms", description: "Utilizing React Hook Form with Zod for robust client-side validation and state handling.", icon: Icon },
    { category: "Programming Languages", name: "TypeScript Mastery", description: "Writing strongly typed, maintainable code across the entire stack to minimize runtime errors.", icon: Icon },
  ];

  return (
    <section id="skills" className="section-shell scroll-mt-24 py-24 sm:py-32">
      <motion.h2 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.3 }}
        className="text-4xl sm:text-5xl font-extrabold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
      >
        Core Competencies
      </motion.h2>
      <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto mb-8 text-center">
        A curated selection of technologies and methodologies that define my engineering practice.
      </p>

      <div className="relative mx-auto mb-12 flex max-w-3xl flex-wrap justify-center gap-2" aria-label="Technology stack">
        {techStack.map(({ name, icon: TechIcon, color }, index) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, scale: 0.7, y: 12 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.035, duration: .2 }}
            animate={{ y: [0, index % 2 === 0 ? -3 : 3, 0] }}
            whileHover={{ y: -8, scale: 1.35, rotate: index % 2 ? 5 : -5 }}
            className="group relative flex h-10 w-10 cursor-default items-center justify-center rounded-xl border border-white/10 bg-white/[.04] shadow-md shadow-black/10 transition-colors duration-150 hover:border-cyan-300/50 hover:bg-white/[.12]"
            title={name}
            aria-label={name}
          >
            <TechIcon className={`h-5 w-5 ${color}`} />
            <span className="pointer-events-none absolute -bottom-8 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/10 bg-slate-950 px-2 py-1 text-[10px] font-semibold text-white opacity-0 shadow-xl transition-opacity group-hover:opacity-100">{name}</span>
          </motion.div>
        ))}
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
        {skillsData.map((skill, index) => (
          <SkillCard 
            key={index}
            category={skill.category}
            name={skill.name}
            description={skill.description}
            icon={skill.icon}
          />
        ))}
      </div>
    </section>
  );
}
