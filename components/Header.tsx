"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Phone } from "lucide-react";
import { SITE } from "@/lib/data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 64);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        solid
          ? "border-b border-navy-900/5 bg-white/90 backdrop-blur"
          : "border-b border-white/0 bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <a href="#anasayfa" className="flex items-center gap-2.5">
          <Image
            src="/images/logo-icon.png"
            alt="Emars Oto Servis"
            width={709}
            height={268}
            priority
            className="h-9 w-auto sm:h-10"
          />
          <span className="leading-tight">
            <span
              className={`block text-lg font-bold tracking-tight transition-colors ${
                solid ? "text-navy-900" : "text-white"
              }`}
            >
              EMARS
            </span>
            <span
              className={`block text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors ${
                solid ? "text-brand-600" : "text-accent-400"
              }`}
            >
              Oto Servis
            </span>
          </span>
        </a>

        <a
          href={SITE.phoneHref}
          className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors sm:px-5 ${
            solid
              ? "bg-navy-900 text-white hover:bg-navy-800"
              : "bg-white/10 text-white backdrop-blur hover:bg-white/20"
          }`}
        >
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">{SITE.phoneDisplay}</span>
        </a>
      </div>
    </header>
  );
}
