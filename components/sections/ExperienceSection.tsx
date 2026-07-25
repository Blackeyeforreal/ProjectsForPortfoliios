"use client";
// Placeholder component for Experience Timeline
import React from 'react';
import TimelineItem from './TimelineItem'; // Assuming this path is correct
import { motion } from 'framer-motion';

export default function ExperienceSection() {
  return (
    <motion.section id="experience" className="section-shell scroll-mt-24 py-24 sm:py-32"
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      viewport={{ once: true, amount: 0.2 }} 
      transition={{ duration: 1.5 }}
    >
      <p className="eyebrow border-violet-300/30 bg-violet-300/10 text-violet-200">Career path ✦</p>
      <h2 className="section-title mb-4">Experience</h2>
      <p className="max-w-3xl mb-12 text-base text-slate-400">A chronological journey through building scalable, high-impact systems.</p>
      <motion.div animate={{ rotate: [-2, 2, -2] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute right-7 top-28 hidden rounded-xl border border-lime-300/30 bg-lime-300/10 px-3 py-2 text-xs font-bold text-lime-200 lg:block">● Still levelling up</motion.div>

      {/* Animated vertical timeline structure will be implemented here */}
      <div className="relative max-w-3xl border-l-2 border-cyan-700/50 ml-4 sm:ml-8">
        {/* Timeline items go here */}
        <TimelineItem 
          date="Jan 2022 - Present"
          title="Specialist Programmer"
          company="Infosys"
          description="Developed and maintained large-scale enterprise applications using Spring Boot, focusing on robust microservices architecture."
          achievements={["Led migration of legacy services to modern REST APIs.", "Optimized database queries reducing latency by 30%."]}
        />
        <TimelineItem 
          date="Jun 2021 - Dec 2021"
          title="Junior Developer Intern"
          company="TechCorp Solutions"
          description="Assisted in the development of a client-facing web portal using React and Next.js, focusing on component reusability."
          achievements={["Implemented responsive UI components for mobile view.", "Contributed to API integration testing."]}
        />
      </div>
    </motion.section>
  );
}
