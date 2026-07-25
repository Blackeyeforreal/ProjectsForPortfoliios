"use client";
import Spotlight from "../animations/Spotlight";
import { motion } from "framer-motion";
import { Code2, Sparkles, WandSparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100vh-72px)] items-center justify-center overflow-hidden px-5 py-24 text-center">
      {/* Spotlight Background - z-0 */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Spotlight />
      </div>

      {/* Content Container (z-10 ensures it's above the spotlight) */}
      <motion.div animate={{ y: [0, -9, 0], rotate: [-4, 2, -4] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute left-[8%] top-[23%] hidden rounded-2xl border border-amber-300/30 bg-amber-300/10 p-3 text-amber-200 shadow-lg shadow-amber-500/10 lg:block"><WandSparkles size={26} /></motion.div>
      <motion.div animate={{ y: [0, 10, 0], rotate: [5, -3, 5] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: .7 }} className="absolute right-[10%] top-[35%] hidden rounded-full border border-pink-300/30 bg-pink-400/10 p-3 text-pink-200 shadow-lg shadow-pink-500/10 lg:block"><Code2 size={26} /></motion.div>
      <div className="relative z-10 max-w-5xl space-y-7">
        <div className="eyebrow border-amber-300/30 bg-amber-300/10 text-amber-100"><Sparkles size={13} /> Available for impactful work</div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl font-extrabold leading-[1.04] tracking-[-0.05em] text-white sm:text-6xl md:text-8xl"
        >
          Hi, I&apos;m <span className="bg-gradient-to-r from-cyan-200 via-fuchsia-200 to-amber-200 bg-clip-text text-transparent">Devang Srivastava.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
        >
          Specialist Programmer building world-class, performant web experiences with Next.js and modern design principles. Passionate about backend engineering, microservices, and AI.
        </motion.p>
        <div className="flex flex-col justify-center gap-3 pt-5 sm:flex-row">
          <a href="#projects" className="rounded-full bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-300 px-6 py-3 text-sm font-bold text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:-translate-y-1 hover:rotate-[-1deg] hover:shadow-cyan-400/30">
            Explore my work →
          </a>
          <a href="#contact" className="rounded-full border border-pink-300/30 bg-pink-300/[0.08] px-6 py-3 text-sm font-semibold text-pink-100 transition hover:-translate-y-1 hover:rotate-[1deg] hover:border-pink-300/60 hover:bg-pink-300/[0.14]">
            Say hello ✦
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-2 pt-2 text-xs font-medium text-slate-300"><span className="rounded-full bg-white/5 px-3 py-1.5">☕ Powered by curiosity</span><span className="rounded-full bg-white/5 px-3 py-1.5">⚡ Fast by default</span><span className="rounded-full bg-white/5 px-3 py-1.5">✦ Detail obsessed</span></div>
      </div>
    </section>
  );
}
