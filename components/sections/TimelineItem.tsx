import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TimelineItemProps {
  date: string;
  title: string;
  company: string;
  description: string;
  achievements: string[];
}

export default function TimelineItem({ date, title, company, description, achievements }: TimelineItemProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      whileHover={{ x: 8 }}
      className="relative pl-12 py-6 group border-l-4 border-transparent hover:border-accent-gold/50 transition duration-300"
    >
      {/* Timeline Dot */}
      <div className="absolute -left-[1rem] top-1 w-5 h-5 bg-background rounded-full border-4 border-border group-hover:border-accent-gold z-10"></div>

      {/* Content Card */}
      <div className="relative overflow-hidden bg-card p-6 rounded-2xl shadow-md border border-border hover:border-accent-gold/40 hover:shadow-lg transition duration-300"><span className="absolute right-5 top-4 rotate-3 rounded-md bg-accent-gold/10 px-2 py-1 text-[10px] font-bold text-accent-gold">XP +100</span>
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-xl font-bold text-accent-gold">{title}</h4>
          <span className="text-sm text-slate-500 dark:text-slate-400">{date}</span>
        </div>
        <p className="text-lg font-semibold text-accent-rose mb-2">{company}</p>
        <p className="text-slate-600 dark:text-slate-350 mb-4">{description}</p>
        
        {/* Achievements List */}
        {achievements.length > 0 && (
          <div className="mt-4 pt-4 border-t border-border">
            <h5 className="text-sm font-semibold text-accent-gold mb-2">Key Achievements:</h5>
            <ul className="space-y-1 text-slate-600 dark:text-slate-300 list-disc pl-5">
              {achievements.map((a, index) => (
                <li key={index} className="text-sm">{a}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
}
