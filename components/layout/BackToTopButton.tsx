"use client";
import { motion } from 'framer-motion';
import { ArrowUpCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Simple Intersection Observer logic to determine visibility based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) { // Show button after scrolling 500px
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.3 }}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-40 p-4 bg-gradient-to-r from-accent-gold to-accent-rose text-slate-950 rounded-full shadow-2xl hover:scale-110 transition duration-300 focus:outline-none focus:ring-4 ring-accent-gold/30"
      aria-label="Back to top"
    >
      <ArrowUpCircle className="w-8 h-8" />
    </motion.button>
  );
}
