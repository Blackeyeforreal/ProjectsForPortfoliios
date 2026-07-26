"use client";

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * @description A sticky progress bar at the top of the viewport that fills as the user scrolls.
 */
export default function ScrollProgressIndicator() {
  const { scrollYProgress } = useScroll();
  // Transform the scroll progress (0 to 1) into a style percentage for the width
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div 
      style={{ width: progress }}
      className="fixed top-0 left-0 h-[4px] bg-gradient-to-r from-accent-gold to-accent-rose z-[999]"
    />
  );
}