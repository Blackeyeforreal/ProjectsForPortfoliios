"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

/** Ambient color fields that give the page depth without competing with its content. */
export default function AbstractBackground() {
  const { scrollY } = useScroll();
  const slowDrift = useTransform(scrollY, [0, 2400], [0, -260]);
  const fastDrift = useTransform(scrollY, [0, 2400], [0, 160]);
  const pointerX = useSpring(0, { stiffness: 85, damping: 18 });
  const pointerY = useSpring(0, { stiffness: 85, damping: 18 });

  useEffect(() => {
    const move = (event: PointerEvent) => {
      pointerX.set((event.clientX / window.innerWidth - 0.5) * 90);
      pointerY.set((event.clientY / window.innerHeight - 0.5) * 70);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [pointerX, pointerY]);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,.03)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      <motion.div animate={{ scale: [1, 1.18, 1], opacity: [.8, 1, .8] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} style={{ x: pointerX, y: pointerY }} className="absolute -left-40 -top-36 h-[34rem] w-[34rem] rounded-full bg-cyan-500/[.12] blur-[110px]" />
      <motion.div animate={{ scale: [1.1, .92, 1.1], opacity: [.75, 1, .75] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }} style={{ x: fastDrift }} className="absolute right-[-14rem] top-[20%] h-[31rem] w-[31rem] rounded-full bg-blue-600/[.11] blur-[120px]" />
      <motion.div animate={{ scale: [.9, 1.15, .9] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} style={{ x: pointerX, y: slowDrift }} className="absolute bottom-[-14rem] left-[16%] h-[28rem] w-[28rem] rounded-full bg-violet-500/[.09] blur-[120px]" />
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 36, repeat: Infinity, ease: "linear" }} className="absolute -right-16 top-[7%] h-48 w-48 rounded-full border border-dashed border-pink-300/20" />
      <motion.div animate={{ y: [0, -22, 0], rotate: [0, 11, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute left-[7%] top-[61%] h-10 w-10 rounded-[1rem] border border-amber-300/25 bg-amber-300/[.07]" />
      <motion.div animate={{ y: [0, 17, 0], x: [0, 10, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute right-[12%] top-[73%] h-5 w-5 rounded-full bg-cyan-300/20" />
      {["left-[18%] top-[18%]", "left-[78%] top-[52%]", "left-[36%] top-[80%]", "left-[91%] top-[31%]", "left-[57%] top-[11%]"].map((position, index) => (
        <motion.span key={position} animate={{ opacity: [.15, .9, .15], scale: [.7, 1.4, .7], y: [0, -18, 0] }} transition={{ duration: 2.5 + index, repeat: Infinity, delay: index * .45, ease: "easeInOut" }} className={`absolute ${position} h-1.5 w-1.5 rounded-full bg-white/70 shadow-[0_0_14px_3px_rgba(103,232,249,.25)]`} />
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,#020617_83%)]" />
    </div>
  );
}
