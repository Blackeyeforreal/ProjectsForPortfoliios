import React from 'react';
import { motion } from 'framer-motion';

/**
 * @description A component to apply complex, animated background gradients.
 * Used to give sections an expensive, dynamic feel without cluttering the content.
 */
export default function GradientBackground({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`relative z-10 ${className}`}>
      {/* Animated gradient overlay */}
      <motion.div 
        className="absolute inset-0 opacity-30 mix-blend-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-color-cyan-900)_0%,_transparent_70%)]"></div>
      </motion.div>
      {children}
    </div>
  );
}