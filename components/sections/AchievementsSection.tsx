"use client";

import { motion, useInView } from "framer-motion";
import { BriefcaseBusiness, Gauge, Rocket } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const visible = useInView(ref, { once: true, amount: 0.7 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return;
    const duration = 1300;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.round((1 - Math.pow(1 - progress, 3)) * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [visible, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const metrics = [
  { icon: BriefcaseBusiness, value: 5, suffix: "+", label: "Projects shipped", detail: "From concept to deployed experience" },
  { icon: Rocket, value: 2, suffix: "+", label: "Years building", detail: "Full-stack engineering practice" },
  { icon: Gauge, value: 95, suffix: "%", label: "Performance focus", detail: "Aiming for fast, accessible products" },
];

export default function AchievementsSection() {
  return (
    <section className="section-shell py-24 sm:py-32">
      <div className="mb-12 text-center"><p className="eyebrow border-amber-300/30 bg-amber-300/10 text-amber-100">By the numbers ✦</p><h2 className="section-title">Careful work, measurable results.</h2></div>
      <div className="grid gap-4 md:grid-cols-3">
        {metrics.map(({ icon: Icon, value, suffix, label, detail }, index) => (
          <motion.article key={label} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }} transition={{ delay: index * .1 }} whileHover={{ y: -9, rotate: index === 1 ? -1 : 1 }} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[.035] p-7 text-left transition hover:border-cyan-400/30 hover:bg-white/[.06]">
            <div className={`absolute -right-7 -top-7 h-28 w-28 rounded-full blur-2xl ${index === 0 ? "bg-cyan-400/[.12]" : index === 1 ? "bg-pink-400/[.12]" : "bg-amber-400/[.12]"}`} />
            <Icon className="relative text-cyan-300" size={21} />
            <p className="relative mt-8 text-5xl font-bold tracking-[-.05em] text-white"><CountUp value={value} suffix={suffix} /><span className="ml-2 text-lg">{index === 0 ? "🚀" : index === 1 ? "🧠" : "⚡"}</span></p>
            <h3 className="relative mt-3 font-semibold text-slate-100">{label}</h3>
            <p className="relative mt-1 text-sm text-slate-400">{detail}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
