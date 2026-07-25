"use client";
// Placeholder component for Experience Timeline
import React from 'react';
import TimelineItem from './TimelineItem'; // Assuming this path is correct
import { motion } from 'framer-motion';

interface ExperienceItem {
  date: string;
  title: string;
  company: string;
  description: string;
  achievements: string[];
}

interface ExperienceData {
  eyebrow: string;
  title: string;
  description: string;
  status: string;
  items: ExperienceItem[];
}

export default function ExperienceSection({ data }: { data: ExperienceData }) {
  return (
    <motion.section id="experience" className="section-shell scroll-mt-24 py-24 sm:py-32"
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      viewport={{ once: true, amount: 0.2 }} 
      transition={{ duration: 1.5 }}
    >
      <p className="eyebrow border-violet-300/30 bg-violet-300/10 text-violet-200">{data.eyebrow}</p>
      <h2 className="section-title mb-4">{data.title}</h2>
      <p className="max-w-3xl mb-12 text-base text-slate-400">{data.description}</p>
      <motion.div animate={{ rotate: [-2, 2, -2] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute right-7 top-28 hidden rounded-xl border border-lime-300/30 bg-lime-300/10 px-3 py-2 text-xs font-bold text-lime-200 lg:block">● {data.status}</motion.div>

      {/* Animated vertical timeline structure will be implemented here */}
      <div className="relative max-w-3xl border-l-2 border-cyan-700/50 ml-4 sm:ml-8">
        {data.items.map((item, index) => <TimelineItem key={index} {...item} />)}
      </div>
    </motion.section>
  );
}
