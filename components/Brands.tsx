"use client";

import { useEffect, useRef } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { Car } from "lucide-react";
import { BRANDS } from "@/lib/data";
import { BRAND_LOGOS } from "@/lib/brandLogos";
import Reveal from "@/components/Reveal";

function BrandBadge({ brand }: { brand: string }) {
  const logo = BRAND_LOGOS[brand];

  return (
    <div className="flex items-center gap-3 whitespace-nowrap rounded-2xl border border-navy-900/5 bg-white px-6 py-4 shadow-sm">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-900/5">
        {logo ? (
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill={`#${logo.hex}`}
            aria-hidden="true"
          >
            <path d={logo.path} />
          </svg>
        ) : (
          <Car className="h-4 w-4 text-navy-900" />
        )}
      </span>
      <span className="text-sm font-semibold text-navy-900">{brand}</span>
    </div>
  );
}

export default function Brands() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const dragRef = useRef<{ startX: number; startScroll: number } | null>(null);

  // Auto-scroll the track ourselves (instead of a CSS transform marquee)
  // so the container can also be a real scrollable element — that's what
  // lets touch/drag/wheel input move it manually.
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame: number;
    let last = performance.now();
    const pxPerSecond = 42;

    function tick(now: number) {
      const dt = (now - last) / 1000;
      last = now;
      if (!pausedRef.current && el) {
        el.scrollLeft += pxPerSecond * dt;
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) {
          el.scrollLeft -= half;
        }
      }
      frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  function pause() {
    pausedRef.current = true;
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
  }

  function scheduleResume() {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      pausedRef.current = false;
    }, 2000);
  }

  function onPointerDown(e: ReactPointerEvent<HTMLDivElement>) {
    pause();
    if (e.pointerType === "mouse" && scrollerRef.current) {
      dragRef.current = { startX: e.clientX, startScroll: scrollerRef.current.scrollLeft };
    }
  }

  function onPointerMove(e: ReactPointerEvent<HTMLDivElement>) {
    if (!dragRef.current || !scrollerRef.current) return;
    const dx = e.clientX - dragRef.current.startX;
    scrollerRef.current.scrollLeft = dragRef.current.startScroll - dx;
  }

  function endInteraction() {
    dragRef.current = null;
    scheduleResume();
  }

  return (
    <section id="markalar" className="overflow-hidden bg-brand-50/40 py-24">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Markalarımız</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            Hizmet Verdiğimiz Markalar
          </h2>
          <p className="mt-4 text-navy-800/70">
            Aşağıdaki markalara ait tüm modellerde bakım, onarım ve şanzıman
            servisi sağlıyoruz.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.15} className="mt-14">
        <div
          className="[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
        >
          <div
            ref={scrollerRef}
            className="no-scrollbar cursor-grab select-none overflow-x-auto active:cursor-grabbing"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endInteraction}
            onPointerLeave={endInteraction}
            onPointerCancel={endInteraction}
            onTouchStart={pause}
            onTouchEnd={scheduleResume}
            onWheel={() => {
              pause();
              scheduleResume();
            }}
          >
            <div className="flex w-max gap-4">
              {[...BRANDS, ...BRANDS].map((brand, i) => (
                <BrandBadge key={`${brand}-${i}`} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
