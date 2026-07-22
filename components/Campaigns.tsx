import Image from "next/image";
import { Sparkles, ArrowUpRight } from "lucide-react";
import { CAMPAIGNS, PHOTOS, SITE } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function Campaigns() {
  return (
    <section id="kampanyalar" className="relative overflow-hidden bg-navy-950 py-24">
      <div className="absolute inset-0">
        <Image
          src={PHOTOS.campaignsBg.src}
          alt={PHOTOS.campaignsBg.alt}
          fill
          sizes="100vw"
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/95 to-navy-950" />
      </div>
      <div className="container-x relative">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="section-eyebrow bg-white/10 text-brand-100 ring-1 ring-white/15">
              <Sparkles className="h-3.5 w-3.5" />
              Kampanyalarımız
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Güncel Bakım ve Onarım Kampanyaları
            </h2>
          </div>
          <a
            href={SITE.phoneHref}
            className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-navy-900 transition hover:bg-brand-50"
          >
            Kampanya Detayı İçin Arayın
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CAMPAIGNS.map((c, i) => (
            <Reveal key={c} delay={(i % 6) * 0.06}>
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-accent-400/40 hover:bg-white/[0.07]">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent-400" />
                <p className="text-sm font-medium text-white/85">{c}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
