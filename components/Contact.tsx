import Image from "next/image";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { PHOTOS, SITE } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <section id="iletisim" className="bg-navy-900 py-24">
      <div className="container-x">
        <Reveal
          className="grid gap-10 rounded-3xl bg-gradient-to-br from-navy-950 to-navy-800 p-10 shadow-2xl lg:grid-cols-3 lg:p-14"
          scaleFx
        >
          <div className="relative overflow-hidden rounded-2xl lg:col-span-1">
            <Image
              src={PHOTOS.contact.src}
              alt={PHOTOS.contact.alt}
              fill
              sizes="(min-width: 1024px) 360px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/60 to-navy-950/20" />
            <div className="relative flex h-full min-h-[260px] flex-col justify-end p-6">
              <span className="section-eyebrow w-fit bg-white/10 text-brand-100 ring-1 ring-white/15">
                İletişim
              </span>
              <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Randevu Almak İçin Bize Ulaşın
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Aracınızla ilgili tüm sorularınız için telefon veya WhatsApp
                üzerinden bize ulaşabilirsiniz.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2">
            <div className="flex items-start gap-4 rounded-2xl bg-white/[0.05] p-5 ring-1 ring-white/10">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent-400" />
              <div>
                <p className="text-sm font-semibold text-white">Adres</p>
                <p className="mt-1 text-sm text-white/60">{SITE.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-white/[0.05] p-5 ring-1 ring-white/10">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent-400" />
              <div>
                <p className="text-sm font-semibold text-white">Telefon</p>
                <a
                  href={SITE.phoneHref}
                  className="mt-1 block text-sm text-white/60 hover:text-white"
                >
                  {SITE.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-white/[0.05] p-5 ring-1 ring-white/10">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent-400" />
              <div>
                <p className="text-sm font-semibold text-white">
                  Çalışma Saatleri
                </p>
                <p className="mt-1 text-sm text-white/60">
                  {SITE.workingHours}
                </p>
              </div>
            </div>

            <a
              href={SITE.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl bg-accent-500 p-5 text-sm font-semibold text-navy-950 transition hover:bg-accent-400"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp'tan Yazın
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
