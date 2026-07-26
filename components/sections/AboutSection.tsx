"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Braces, Server, Sparkles } from "lucide-react";
import portfolioData from '../../content/portfolio.json';

const iconMap: { [key: string]: any } = {
  server: Server,
  braces: Braces,
  sparkles: Sparkles,
};

const colorMap: { [key: string]: string } = {
  cyan: "text-accent-gold bg-accent-gold/10 border-accent-gold/25",
  amber: "text-accent-emerald bg-accent-emerald/10 border-accent-emerald/25",
  pink: "text-accent-rose bg-accent-rose/10 border-accent-rose/25",
};

export default function AboutSection() {
  const { eyebrow, title, description, cta, strengths } = portfolioData.about;
  return (
    <section id="about" className="section-shell scroll-mt-24 py-24 sm:py-32">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="section-title">{title}</h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-350">{description}</p>
          <a href={cta.href} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-accent-gold transition hover:gap-3">{cta.label} <ArrowUpRight size={16} /></a>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {strengths.map(({ icon, title: strengthTitle, text, accent }, index) => {
            const Icon = iconMap[icon] || Server;
            const accentStyle = colorMap[accent] || colorMap.cyan;
            return (
              <motion.article key={strengthTitle} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }} whileHover={{ y: -8, rotate: index === 1 ? 1 : -1 }} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 transition hover:border-accent-gold/30 hover:shadow-lg hover:shadow-accent-gold/5">
                <span className={`mb-5 inline-flex rounded-xl border p-2.5 ${accentStyle}`}><Icon size={22} /></span><span className="absolute right-4 top-4 text-xs text-slate-400 dark:text-slate-500">0{index + 1}</span>
                <h3 className="font-semibold text-slate-800 dark:text-slate-100">{strengthTitle}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
