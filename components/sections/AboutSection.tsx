"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Braces, Server, Sparkles } from "lucide-react";

const strengths = [
  { icon: Server, title: "Systems that scale", text: "Thoughtful backend architecture, clean APIs, and dependable services.", accent: "text-cyan-300 bg-cyan-300/10 border-cyan-300/25" },
  { icon: Braces, title: "Interfaces with intent", text: "Responsive products that make complicated workflows feel simple.", accent: "text-amber-300 bg-amber-300/10 border-amber-300/25" },
  { icon: Sparkles, title: "Practical AI", text: "Useful automation and intelligent features grounded in real needs.", accent: "text-pink-300 bg-pink-300/10 border-pink-300/25" },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-shell scroll-mt-24 py-24 sm:py-32">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <p className="eyebrow">A little about me</p>
          <h2 className="section-title">Engineering reliable experiences, end to end.</h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-400">I’m Devang, a programmer who enjoys translating ambitious product ideas into fast, maintainable software. My work spans microservices, modern web interfaces, and the details that make a product feel considered.</p>
          <a href="#contact" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:gap-3">Let&apos;s work together <ArrowUpRight size={16} /></a>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {strengths.map(({ icon: Icon, title, text, accent }, index) => (
            <motion.article key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }} whileHover={{ y: -8, rotate: index === 1 ? 1 : -1 }} className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.025] p-5 transition hover:bg-white/[0.07]">
              <span className={`mb-5 inline-flex rounded-xl border p-2.5 ${accent}`}><Icon size={22} /></span><span className="absolute right-4 top-4 text-xs text-white/25">0{index + 1}</span>
              <h3 className="font-semibold text-slate-100">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
