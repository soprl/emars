"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
  /** Continuous scroll-linked parallax range in px (0 disables). Element
   *  drifts from +parallax to -parallax as it travels through the viewport. */
  parallax?: number;
  /** Continuous scroll-linked scale (subtle zoom-in while centered, eases
   *  back out on exit) — Apple-style depth effect for photos/cards. */
  scaleFx?: boolean;
};

// Plain fade/slide-in-once reveal — no continuous scroll subscription at
// all. This is the common case (most Reveal calls on the page don't need
// a live parallax), so keeping it hook-light matters: a page with dozens
// of always-on scroll listeners is what caused the stutter further down
// the page once the heavy video sections were added.
function PlainReveal({
  children,
  delay,
  y,
  className,
  once,
}: Required<Pick<RevealProps, "delay" | "y" | "once">> &
  Pick<RevealProps, "children" | "className">) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.25 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// Reveal variant with a continuous scroll-linked parallax/scale — only
// used where explicitly requested (photos, feature cards).
function ScrollFxReveal({
  children,
  delay,
  className,
  once,
  parallax,
  scaleFx,
}: Required<Pick<RevealProps, "delay" | "once" | "parallax" | "scaleFx">> &
  Pick<RevealProps, "children" | "className">) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Raw scroll progress jumps around on every wheel/trackpad tick — feeding
  // that straight into a transform is what caused the shaky/trembling look.
  // Smoothing it through a spring first gives fluid, stable motion instead.
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
    mass: 0.2,
  });

  const parallaxY = useTransform(smoothProgress, [0, 1], [parallax, -parallax]);
  const scale = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.94, 1, 1, 0.96]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.25 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{
        y: parallax ? parallaxY : undefined,
        scale: scaleFx ? scale : undefined,
        willChange: "transform",
      }}
    >
      {children}
    </motion.div>
  );
}

export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  once = true,
  parallax = 0,
  scaleFx = false,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  if (parallax > 0 || scaleFx) {
    return (
      <ScrollFxReveal
        delay={delay}
        className={className}
        once={once}
        parallax={parallax}
        scaleFx={scaleFx}
      >
        {children}
      </ScrollFxReveal>
    );
  }

  return (
    <PlainReveal delay={delay} y={y} className={className} once={once}>
      {children}
    </PlainReveal>
  );
}
