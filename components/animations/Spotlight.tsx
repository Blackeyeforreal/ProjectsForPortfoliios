"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * @description A premium, animated spotlight effect background element.
 * This simulates a light source moving across the section for an expensive feel.
 */
export default function Spotlight() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* The actual glowing beam */}
      <motion.div 
        className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-accent-gold/5 rounded-full mix-blend-multiply blur-[150px]"
        initial={{ x: "-10%", y: "-10%", opacity: 0 }}
        animate={{ x: "120%", y: "120%", opacity: 0.6 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}