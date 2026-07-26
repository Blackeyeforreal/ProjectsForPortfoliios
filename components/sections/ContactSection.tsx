"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const links = [
  { label: "Email me", detail: "devang.srivastava@example.com", href: "mailto:devang.srivastava@example.com", icon: Mail, colors: "border-accent-gold/30 text-accent-gold hover:border-accent-gold/60 hover:shadow-accent-gold/5" },
  { label: "LinkedIn", detail: "Let’s connect", href: "#", icon: FaLinkedin, colors: "border-accent-rose/30 text-accent-rose hover:border-accent-rose/60 hover:shadow-accent-rose/5" },
  { label: "GitHub", detail: "See the code", href: "#", icon: FaGithub, colors: "border-purple-300/30 dark:border-purple-500/20 text-purple-600 dark:text-purple-300 hover:border-purple-300/60 dark:hover:border-purple-500/50 hover:shadow-purple-500/5" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="section-shell scroll-mt-24 py-24 sm:py-32">
      <div className="text-center"><p className="eyebrow border-accent-rose/30 bg-accent-rose/10 text-accent-rose">Say hello</p>
        <motion.h2 initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .3 }} className="text-5xl font-extrabold tracking-[-0.05em] sm:text-6xl"><span className="bg-gradient-to-r from-accent-gold via-accent-rose to-accent-emerald bg-clip-text text-transparent">Let&apos;s make something fun.</span></motion.h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300">Have an idea, an opportunity, or just a great tech recommendation? Pick your preferred way to connect.</p>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
        {links.map(({ label, detail, href, icon: Icon, colors }, index) => (
          <motion.a key={label} href={href} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .25, delay: index * .06 }} whileHover={{ y: -7, rotate: index === 1 ? -1 : 1.2, scale: 1.02 }} className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition hover:shadow-lg ${colors}`}>
            <Icon size={25} className="transition-transform duration-200 group-hover:rotate-12 group-hover:scale-110" />
            <h3 className="mt-9 text-lg font-bold text-slate-800 dark:text-slate-100">{label}</h3><p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{detail}</p>
            <span className="mt-6 inline-block text-sm font-semibold">Open →</span><span className="absolute -right-5 -top-5 h-20 w-20 rounded-full bg-slate-100/50 dark:bg-white/5 blur-xl" />
          </motion.a>
        ))}
      </div>
      <div className="mt-8 flex justify-center gap-2 text-sm text-slate-600 dark:text-slate-400"><MapPin size={17} className="text-accent-gold" /> Available remotely · San Francisco, CA</div>
    </section>
  );
}
