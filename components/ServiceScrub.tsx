"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  useMotionValueEvent,
} from "framer-motion";
import Icon from "@/components/Icon";
import type { IconName } from "@/components/Icon";

type Service = {
  title: string;
  desc: string;
  icon: string;
  video: string;
};

function ServiceLayer({
  service,
  index,
  total,
  progress,
}: {
  service: Service;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const step = 1 / total;
  const start = index * step;
  const end = start + step;
  const overlap = step * 0.4;
  const fadeInEnd = start + overlap;
  const fadeOutStart = end - overlap;

  const opacity = useTransform(
    progress,
    [Math.max(0, start - 0.0001), fadeInEnd, fadeOutStart, Math.min(1, end + 0.0001)],
    [0, 1, 1, 0]
  );
  const scale = useTransform(
    progress,
    [Math.max(0, start - 0.0001), fadeInEnd, fadeOutStart, Math.min(1, end + 0.0001)],
    [1.05, 1, 1, 0.97]
  );

  const videoRef = useRef<HTMLVideoElement>(null);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    function onLoaded() {
      if (el && el.duration && !Number.isNaN(el.duration)) {
        setDuration(el.duration);
      }
    }
    el.addEventListener("loadedmetadata", onLoaded);
    if (el.readyState >= 1) onLoaded();
    // iOS Safari (and some mobile Chrome builds) refuse to render seeked
    // frames on a <video> that has never actually played — setting
    // currentTime silently does nothing until the decoder has been
    // "woken up" once. Muted autoplay is allowed without a user gesture,
    // so play immediately and pause on the very next frame to prime it.
    el.play()
      .then(() => el.pause())
      .catch(() => {});
    return () => el.removeEventListener("loadedmetadata", onLoaded);
  }, []);

  useMotionValueEvent(progress, "change", (latest) => {
    const el = videoRef.current;
    if (!el || !duration) return;
    // Only this service's own window (plus a little slack for the
    // crossfade) needs to keep seeking — skip entirely otherwise so we're
    // not decoding/seeking 8 invisible videos on every scroll tick, which
    // is what was causing the stutter ("titreme") once you scrolled past.
    const slack = overlap * 1.5;
    if (latest < start - slack || latest > end + slack) return;
    // Local progress within this service's own slice of the scroll range,
    // so scrolling down plays it forward and scrolling up reverses it —
    // independent of the crossfade with neighbouring services.
    const local = Math.min(1, Math.max(0, (latest - start) / step));
    const target = local * duration;
    if (Math.abs(el.currentTime - target) > 0.08) {
      el.currentTime = target;
    }
  });

  return (
    <motion.div style={{ opacity, scale }} className="absolute inset-0">
      <video
        ref={videoRef}
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={service.video} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/45 to-transparent" />
      <div className="relative z-10 flex h-full flex-col items-center justify-end px-6 pb-14 text-center sm:pb-20">
        <div className="w-full max-w-lg rounded-[2rem] border border-white/20 bg-white/30 p-8 shadow-lg shadow-navy-900/5 backdrop-blur-sm sm:p-10">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 text-accent-400 shadow-md">
            <Icon name={service.icon as IconName} className="h-7 w-7" />
          </span>
          <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-navy-900 sm:text-3xl">
            {service.title}
          </h3>
          <p className="mx-auto mt-3 max-w-md leading-relaxed text-navy-800/70">
            {service.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesScrollStack({ services }: { services: Service[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  if (reduceMotion) {
    return (
      <div>
        {services.map((s) => (
          <section
            key={s.title}
            className="border-t border-navy-900/5 bg-white px-6 py-20 text-center"
          >
            <div className="relative mx-auto aspect-video w-full max-w-3xl overflow-hidden rounded-3xl bg-brand-50/40 shadow-card">
              <video autoPlay muted loop playsInline className="h-full w-full object-cover">
                <source src={s.video} type="video/mp4" />
              </video>
            </div>
            <span className="mx-auto mt-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 text-accent-400 shadow-md">
              <Icon name={s.icon as IconName} className="h-7 w-7" />
            </span>
            <h3 className="mt-5 font-display text-2xl font-semibold text-navy-900">
              {s.title}
            </h3>
            <p className="mx-auto mt-3 max-w-md leading-relaxed text-navy-800/70">
              {s.desc}
            </p>
          </section>
        ))}
      </div>
    );
  }

  return (
    <section
      ref={containerRef}
      className="relative bg-white"
      style={{ height: `${services.length * 220}vh` }}
    >
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
        {services.map((s, i) => (
          <ServiceLayer
            key={s.title}
            service={s}
            index={i}
            total={services.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
