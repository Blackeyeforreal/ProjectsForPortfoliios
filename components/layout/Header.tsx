"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle'; // Reverting to relative path due to alias failure

export default function Header() {
  const [open, setOpen] = useState(false);
  const links = ["About", "Experience", "Skills", "Projects", "Contact"];
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#020617]/75 backdrop-blur-xl">
      <div className="section-shell flex h-[72px] items-center justify-between">
        {/* Logo / Name */}
        <Link href="/" className="text-lg font-bold tracking-tight text-white hover:text-cyan-300" aria-label="Devang Srivastava Portfolio Home">
          Devang<span className="text-cyan-400">.dev</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex" aria-label="Main navigation links">
          {links.map((link) => <Link key={link} href={`#${link.toLowerCase()}`} className="transition-colors hover:text-cyan-300">{link}</Link>)}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} aria-controls="mobile-menu" aria-expanded={open} aria-label="Toggle navigation menu" className="rounded-lg p-2 text-slate-200 hover:bg-white/5 hover:text-cyan-300">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* CTA Group (Theme Toggle + Resume) */}
        <div className="hidden items-center gap-3 md:flex" aria-label="User actions">
          <a href="/resume/devang_srivastava.pdf" download className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/10 transition hover:bg-cyan-300" aria-label="Download resume PDF">
            Resume
          </a>
          <ThemeToggle /> {/* Integrated Theme Toggle */}
        </div>
      </div>
      {open && <nav id="mobile-menu" className="section-shell flex flex-col gap-1 border-t border-white/5 py-4 md:hidden" aria-label="Mobile navigation">
        {links.map((link) => <Link key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-cyan-300">{link}</Link>)}
      </nav>}
    </header>
  );
}
