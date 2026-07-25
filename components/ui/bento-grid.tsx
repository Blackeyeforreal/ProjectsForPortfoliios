import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BentoGridProps {
  children: React.ReactNode;
}

/**
 * @description A flexible, modern grid layout component inspired by Notion/Linear's bento style.
 */
export default function BentoGrid({ children }: BentoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {children}
    </div>
  );
}