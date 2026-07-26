"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Braces, Server, Sparkles } from "lucide-react";

const strengths = [
  { icon: Server, title: "Systems that scale", text: "Thoughtful backend architecture, clean APIs, and dependable services.", accent: "text-accent-gold bg-accent-gold/10 border-accent-gold/25" },
  { icon: Braces, title: "Interfaces with intent", text: "Responsive products that make complicated workflows feel simple.", accent: "text-accent-emerald bg-accent-emerald/10 border-accent-emerald/25" },
  { icon: Sparkles, title: "Practical AI", text: "Useful automation and intelligent features grounded in real needs.", accent: "text-accent-rose bg-accent-rose/10 border-accent-rose/25" },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-shell scroll-mt-24 py-24 sm:py-32">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <p className="eyebrow">A little about me</p>
          <h2 className="section-title">Engineering reliable experiences, end to end.</h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-350">I’m Devang, a programmer who enjoys translating ambitious product ideas into fast, maintainable software. My work spans microservices, modern web interfaces, and the details that make a product feel considered.</p>
          <a href="#contact" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-accent-gold transition hover:gap-3">Let&apos;s work together <ArrowUpRight size={16} /></a>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {strengths.map(({ icon: Icon, title, text, accent }, index) => (
            <motion.article key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }} whileHover={{ y: -8, rotate: index === 1 ? 1 : -1 }} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 transition hover:border-accent-gold/30 hover:shadow-lg hover:shadow-accent-gold/5">
              <span className={`mb-5 inline-flex rounded-xl border p-2.5 ${accent}`}><Icon size={22} /></span><span className="absolute right-4 top-4 text-xs text-slate-400 dark:text-slate-500">0{index + 1}</span>
              <h3 className="font-semibold text-slate-800 dark:text-slate-100">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
