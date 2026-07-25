import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface StatCardProps {
  value: string;
  label: string;
  colorClass: string; // e.g., "text-cyan-400"
}

export default function AnimatedStatCard({ value, label, colorClass }: StatCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="text-center p-6 bg-[#0F172A] rounded-xl border border-gray-800/50 shadow-lg hover:shadow-cyan-500/20 transition duration-300"
    >
      <p className={`text-6xl font-extrabold ${colorClass}`}>{value}</p>
      <p className="text-gray-400 mt-2 text-lg">{label}</p>
    </motion.div>
  );
}