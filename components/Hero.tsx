"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Phone, MessageCircle, ChevronDown } from "lucide-react";
import { PHOTOS, SITE } from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="anasayfa"
      className="relative flex h-[100svh] min-h-[640px] w-full items-center overflow-hidden bg-navy-950"
    >
      <div className="absolute inset-0">
        {/* Kendi videonuzu eklemek için: dosyayı public/videos/hero.mp4 olarak
            koyun — video yoksa aşağıdaki fotoğraf otomatik olarak görünür. */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={PHOTOS.heroBg.src}
          className="h-full w-full scale-105 object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/70 to-navy-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/60 via-transparent to-navy-950/60" />
      </div>

      <div className="container-x relative flex flex-col items-center text-center">
        <motion.span
          initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="inline-flex items-center rounded-full bg-white/10 px-7 py-3 font-display text-2xl font-bold tracking-tight text-white ring-1 ring-white/15 backdrop-blur sm:px-8 sm:py-3.5 sm:text-3xl"
        >
          EMARS OTO
        </motion.span>

        <motion.h1
          initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          className="mt-7 max-w-4xl text-balance font-display text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          Alman mühendisliğine{" "}
          <span className="text-accent-400">Türk ustalığı.</span>
        </motion.h1>

        <motion.p
          initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22, ease: EASE }}
          className="mt-6 max-w-xl text-balance text-base leading-relaxed text-white/70 sm:text-lg"
        >
          Volkswagen, Audi, Porsche, Seat, Skoda ve 13 markada motor mekanik,
          şanzıman ve rot-balans uzmanlığı — tek adreste.
        </motion.p>

        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.34, ease: EASE }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={SITE.phoneHref}
            className="flex items-center gap-2 rounded-full bg-accent-500 px-7 py-3.5 text-sm font-semibold text-navy-950 shadow-card transition hover:scale-[1.03] hover:bg-accent-400"
          >
            <Phone className="h-4 w-4" />
            Hemen Ara: {SITE.phoneDisplay}
          </a>
          <a
            href={SITE.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:scale-[1.03] hover:bg-white/10"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp'tan Yaz
          </a>
        </motion.div>
      </div>

      {!reduceMotion && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{
            opacity: { duration: 0.6, delay: 1 },
            y: { duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 1 },
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
        >
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      )}
    </section>
  );
}
