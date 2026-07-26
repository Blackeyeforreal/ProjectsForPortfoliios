import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Assuming react-icons is installed or available
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border/50 mt-20 py-12 text-center bg-background/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Copyright */}
        <p className="text-slate-500 dark:text-slate-400 text-sm">&copy; {new Date().getFullYear()} Devang Srivastava. Built with caffeine &amp; curiosity ✦</p>

        {/* Social Links */}
        <div className="flex space-x-6">
          <Link href="#" aria-label="GitHub" className="text-slate-400 hover:text-accent-gold transition duration-200 hover:-translate-y-1 hover:rotate-6">
            <FaGithub size={28} />
          </Link>
          <Link href="#" aria-label="LinkedIn" className="text-slate-400 hover:text-accent-rose transition duration-200 hover:-translate-y-1 hover:-rotate-6">
            <FaLinkedin size={28} />
          </Link>
        </div>

        {/* Minimal Links */}
        <div>
          <a href="/privacy" className="text-slate-500 dark:text-slate-400 hover:text-accent-gold mx-3">Privacy</a>
          <a href="/terms" className="text-slate-500 dark:text-slate-400 hover:text-accent-gold mx-3">Terms</a>
        </div>
      </div>
    </footer>
  );
}
