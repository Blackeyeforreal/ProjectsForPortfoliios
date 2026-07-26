import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Assuming react-icons is installed or available
import { Button } from "@/components/ui/button";
import portfolioData from '../../content/portfolio.json';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border/50 mt-20 py-12 text-center bg-background/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Copyright */}
        <p className="text-slate-500 dark:text-slate-400 text-sm">&copy; {new Date().getFullYear()} {portfolioData.site.name}. Built with caffeine &amp; curiosity ✦</p>

        {/* Social Links */}
        <div className="flex space-x-6">
          <Link href={portfolioData.footer.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-400 hover:text-accent-gold transition duration-200 hover:-translate-y-1 hover:rotate-6">
            <FaGithub size={28} />
          </Link>
          <Link href={portfolioData.footer.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-400 hover:text-accent-rose transition duration-200 hover:-translate-y-1 hover:-rotate-6">
            <FaLinkedin size={28} />
          </Link>
        </div>

        {/* Minimal Links */}
        <div>
          <a href={portfolioData.footer.privacyUrl} className="text-slate-500 dark:text-slate-400 hover:text-accent-gold mx-3">Privacy</a>
          <a href={portfolioData.footer.termsUrl} className="text-slate-500 dark:text-slate-400 hover:text-accent-gold mx-3">Terms</a>
        </div>
      </div>
    </footer>
  );
}
