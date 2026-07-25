"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const links = [
  { label: "Email me", detail: "devang.srivastava@example.com", href: "mailto:devang.srivastava@example.com", icon: Mail, colors: "border-cyan-300/25 bg-cyan-300/10 text-cyan-100" },
  { label: "LinkedIn", detail: "Let’s connect", href: "#", icon: Linkedin, colors: "border-blue-300/25 bg-blue-300/10 text-blue-100" },
  { label: "GitHub", detail: "See the code", href: "#", icon: Github, colors: "border-violet-300/25 bg-violet-300/10 text-violet-100" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="section-shell scroll-mt-24 py-24 sm:py-32">
      <div className="text-center"><p className="eyebrow border-pink-300/30 bg-pink-300/10 text-pink-100">Say hello</p>
        <motion.h2 initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .3 }} className="text-5xl font-extrabold tracking-[-.05em] sm:text-6xl"><span className="bg-gradient-to-r from-cyan-300 via-pink-300 to-amber-200 bg-clip-text text-transparent">Let&apos;s make something fun.</span></motion.h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-300">Have an idea, an opportunity, or just a great tech recommendation? Pick your preferred way to connect.</p>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
        {links.map(({ label, detail, href, icon: Icon, colors }, index) => (
          <motion.a key={label} href={href} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .25, delay: index * .06 }} whileHover={{ y: -7, rotate: index === 1 ? -1 : 1.2, scale: 1.02 }} className={`group relative overflow-hidden rounded-2xl border p-6 ${colors}`}>
            <Icon size={25} className="transition-transform duration-200 group-hover:rotate-12 group-hover:scale-110" />
            <h3 className="mt-9 text-lg font-bold">{label}</h3><p className="mt-1 text-sm opacity-70">{detail}</p>
            <span className="mt-6 inline-block text-sm font-semibold">Open →</span><span className="absolute -right-5 -top-5 h-20 w-20 rounded-full bg-white/10 blur-xl" />
          </motion.a>
        ))}
      </div>
      <div className="mt-8 flex justify-center gap-2 text-sm text-slate-400"><MapPin size={17} className="text-amber-300" /> Available remotely · San Francisco, CA</div>
    </section>
  );
}
