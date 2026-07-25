import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SkillCardProps {
  iconName: string; // e.g., "React" or a Lucide icon name
  category: string;
  description: string;
  progress: number; // 0 to 100
}

export default function SkillCard({ iconName, category, description, progress }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="bg-[#0F172A] p-6 rounded-xl shadow-lg border border-gray-800/50 cursor-pointer hover:shadow-cyan-500/20 transition duration-300 transform hover:-translate-y-1"
    >
      <div className="flex items-center mb-4">
        {/* Placeholder for Icon - In a real app, we'd use LucideReact */}
        <div className="p-3 bg-cyan-500/20 rounded-full mr-4">
          {/* Replace with actual icon component */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cpu text-cyan-300"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 17v5"/><path d="M16 3v5"/></svg>
        </div>
        <h3 className="text-2xl font-bold text-cyan-400">{iconName}</h3>
      </div>

      <p className="text-gray-300 mb-4 flex-grow">{description}</p>

      {/* Progress Indicator */}
      <div className="mt-4">
        <div className="flex justify-between text-sm font-medium text-gray-400 mb-1">
          <span>Proficiency</span>
          <span>{progress}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <motion.div 
            className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
            initial={{ width: "0%" }}
            whileInView={{ width: `${progress}%` }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2 }}
          ></motion.div>
        </div>
      </div>
    </motion.div>
  );
}