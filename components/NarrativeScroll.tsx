"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  useMotionValueEvent,
} from "framer-motion";

type Phrase = {
  parts: { text: string; accent?: boolean }[];
};

const PHRASES: Phrase[] = [
  {
    parts: [
      { text: "Hassasiyet, " },
      { text: "alışkanlık", accent: true },
      { text: " değil önceliktir." },
    ],
  },
  {
    parts: [
      { text: "Motor. Şanzıman. Rot-Balans. " },
      { text: "Tek çatı altında.", accent: true },
    ],
  },
  {
    parts: [
      { text: "Volkswagen'den Porsche'ye, " },
      { text: "13 marka.", accent: true },
    ],
  },
];

function PhraseBlock({
  phrase,
  index,
  total,
  progress,
}: {
  phrase: Phrase;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const step = 1 / total;
  const start = index * step;
  const end = start + step;
  const fadeIn = step * 0.28;
  const fadeOut = step * 0.28;

  const opacity = useTransform(
    progress,
    [
      Math.max(0, start - 0.001),
      start + fadeIn,
      end - fadeOut,
      Math.min(1, end + 0.001),
    ],
    [0, 1, 1, 0]
  );
  const y = useTransform(
    progress,
    [Math.max(0, start - 0.001), start + fadeIn, end - fadeOut, Math.min(1, end + 0.001)],
    [24, 0, 0, -24]
  );

  return (
    <motion.p
      style={{ opacity, y }}
      className="absolute inset-x-0 text-center text-3xl font-display font-semibold leading-tight text-white sm:text-5xl lg:text-6xl"
    >
      {phrase.parts.map((p, i) => (
        <span key={i} className={p.accent ? "text-accent-400" : undefined}>
          {p.text}
        </span>
      ))}
    </motion.p>
  );
}

function ScrubVideo({
  progress,
}: {
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    function onLoaded() {
      if (video && video.duration && !Number.isNaN(video.duration)) {
        setDuration(video.duration);
      }
    }
    video.addEventListener("loadedmetadata", onLoaded);
    if (video.readyState >= 1) onLoaded();
    return () => video.removeEventListener("loadedmetadata", onLoaded);
  }, []);

  useMotionValueEvent(progress, "change", (latest) => {
    const video = videoRef.current;
    if (!video || !duration) return;
    // Scroll down -> parts assemble (video plays forward).
    // Scroll up -> parts fly apart again (video plays backward).
    const target = latest * duration;
    if (Math.abs(video.currentTime - target) > 0.01) {
      video.currentTime = target;
    }
  });

  return (
    <video
      ref={videoRef}
      muted
      playsInline
      preload="auto"
      className="absolute inset-0 h-full w-full object-cover opacity-40"
    >
      <source src="/videos/assembly-loop.mp4" type="video/mp4" />
    </video>
  );
}

export default function NarrativeScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  if (reduceMotion) {
    return (
      <section className="bg-navy-950 px-6 py-28 text-center">
        <div className="mx-auto max-w-3xl space-y-10">
          {PHRASES.map((phrase, i) => (
            <p
              key={i}
              className="text-3xl font-display font-semibold leading-tight text-white sm:text-4xl"
            >
              {phrase.parts.map((p, j) => (
                <span key={j} className={p.accent ? "text-accent-400" : undefined}>
                  {p.text}
                </span>
              ))}
            </p>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section ref={containerRef} className="relative bg-navy-950" style={{ height: "340vh" }}>
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden px-6">
        <ScrubVideo progress={scrollYProgress} />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/70 to-navy-950/90" />
        <div className="relative mx-auto w-full max-w-4xl" style={{ height: "8rem" }}>
          {PHRASES.map((phrase, i) => (
            <PhraseBlock
              key={i}
              phrase={phrase}
              index={i}
              total={PHRASES.length}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
