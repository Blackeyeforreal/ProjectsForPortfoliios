"use client";
import Spotlight from "../animations/Spotlight";
import { motion } from "framer-motion";
import { Code2, Sparkles, WandSparkles } from "lucide-react";

interface Cta {
  label: string;
  href: string;
}

interface HeroData {
  availability: string;
  intro: string;
  primaryCta: Cta;
  secondaryCta: Cta;
  badges: string[];
}

export default function HeroSection({ data, siteName }: { data: HeroData, siteName: string }) {
  return (
    <section className="relative flex min-h-[calc(100vh-72px)] items-center justify-center overflow-hidden px-5 py-24 text-center">
      {/* Spotlight Background - z-0 */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Spotlight />
      </div>

      {/* Content Container (z-10 ensures it's above the spotlight) */}
      <motion.div animate={{ y: [0, -9, 0], rotate: [-4, 2, -4] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute left-[8%] top-[23%] hidden rounded-2xl border border-accent-gold/20 bg-white/90 dark:bg-card/50 p-3 text-accent-gold shadow-lg shadow-accent-gold/5 lg:block"><WandSparkles size={26} /></motion.div>
      <motion.div animate={{ y: [0, 10, 0], rotate: [5, -3, 5] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: .7 }} className="absolute right-[10%] top-[35%] hidden rounded-full border border-accent-rose/20 bg-white/90 dark:bg-card/50 p-3 text-accent-rose shadow-lg shadow-accent-rose/5 lg:block"><Code2 size={26} /></motion.div>
      <div className="relative z-10 max-w-5xl space-y-7">
        <div className="eyebrow border-accent-emerald/30 bg-accent-emerald/10 text-accent-emerald"><Sparkles size={13} /> {data.availability}</div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl font-extrabold leading-[1.04] tracking-[-0.05em] text-slate-900 dark:text-slate-100 sm:text-6xl md:text-8xl"
        >
          Hi, I&apos;m <span className="bg-gradient-to-r from-accent-gold via-accent-rose to-accent-emerald bg-clip-text text-transparent">{siteName}.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg"
        >
          {data.intro}
        </motion.p>
        <div className="flex flex-col justify-center gap-3 pt-5 sm:flex-row">
          <a href={data.primaryCta.href} className="rounded-full bg-gradient-to-r from-accent-gold via-accent-rose to-purple-500 px-6 py-3 text-sm font-bold text-white dark:text-slate-950 shadow-xl shadow-accent-gold/25 transition hover:-translate-y-1 hover:rotate-[-1deg] hover:shadow-accent-gold/40">
            {data.primaryCta.label} →
          </a>
          <a href={data.secondaryCta.href} className="rounded-full border border-accent-rose/30 bg-white/60 dark:bg-card/50 px-6 py-3 text-sm font-semibold text-accent-rose transition hover:-translate-y-1 hover:rotate-[1deg] hover:border-accent-rose/60 hover:bg-white/90 dark:hover:bg-card/80 hover:shadow-md">
            {data.secondaryCta.label} ✦
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-2 pt-2 text-xs font-medium text-slate-600 dark:text-slate-300">{data.badges.map(badge => <span key={badge} className="rounded-full bg-white dark:bg-card/50 px-3 py-1.5 border border-slate-200 dark:border-white/5 shadow-sm">{badge}</span>)}</div>
      </div>
    </section>
  );
}
