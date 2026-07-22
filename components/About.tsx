import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { BRANDS, PHOTOS } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="hakkimizda" className="bg-white py-24">
      <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal className="relative order-2 lg:order-1" y={36} parallax={44} scaleFx>
          <div className="relative aspect-square w-full overflow-hidden rounded-3xl shadow-card">
            <Image
              src={PHOTOS.about.src}
              alt={PHOTOS.about.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/10 to-transparent" />
            <div className="absolute inset-x-6 bottom-6 flex items-center gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur">
              <ShieldCheck className="h-8 w-8 shrink-0 text-accent-400" />
              <p className="text-sm font-semibold text-white">
                Kalite Yönetim Sistemi Odaklı Çalışma Anlayışı
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="order-1 lg:order-2" delay={0.1} parallax={16}>
          <span className="section-eyebrow">Hakkımızda</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            Emars Oto Servis
          </h2>
          <p className="mt-5 leading-relaxed text-navy-800/70">
            Firmamız Emars Oto Servis; Volkswagen, Audi, Opel, Seat, Peugeot,
            Porsche, Renault, Citroen ve Fiat marka tüm araçlar için hizmet
            vermekte olan özel servisimiz, müşteri memnuniyetiyle beraber
            büyümesine devam etmektedir.
          </p>
          <p className="mt-4 leading-relaxed text-navy-800/70">
            Kalite ve memnuniyet odaklı iş anlayışımızla, iş ortaklarımıza ve
            son kullanıcılara kalite standartları çerçevesinde hizmet
            sunmayı, olumlu geri dönüşler almayı ve hizmet kalitesine katma
            değer yaratacak yenilikler ile kalite anlayışımızı artırmayı
            prensip edindik.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {BRANDS.map((b) => (
              <span
                key={b}
                className="rounded-full border border-navy-900/10 bg-brand-50 px-3.5 py-1.5 text-xs font-semibold text-navy-800"
              >
                {b}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
