import Image from "next/image";
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone } from "lucide-react";
import { BRANDS, NAV_LINKS, SITE } from "@/lib/data";

const SOCIALS = [
  { icon: Twitter, href: "https://www.twitter.com/", label: "Twitter" },
  { icon: Facebook, href: "https://www.facebook.com/", label: "Facebook" },
  { icon: Youtube, href: "https://www.youtube.com/", label: "YouTube" },
  { icon: Instagram, href: "https://www.instagram.com/", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 pt-20 text-white/70">
      <div className="container-x grid gap-12 pb-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="#anasayfa" className="flex items-center gap-2.5">
            <Image
              src="/images/logo-icon.png"
              alt="Emars Oto Servis"
              width={709}
              height={268}
              className="h-10 w-auto"
            />
            <span className="leading-tight">
              <span className="block text-lg font-bold text-white">
                EMARS
              </span>
              <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-300">
                Oto Servis
              </span>
            </span>
          </a>
          <p className="mt-5 text-sm leading-relaxed">
            Volkswagen, Audi, Opel, Seat, Peugeot, Porsche, Renault, Citroen
            ve Fiat marka tüm araçlar için hizmet vermekte olan özel
            servisimiz, müşteri memnuniyeti ile beraber büyümesine devam
            etmektedir.
          </p>
          <div className="mt-6 flex gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 transition hover:bg-white/15"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-white">
            Bize Ulaşın
          </h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
              <span>{SITE.address}</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
              <a href={SITE.phoneHref} className="hover:text-white">
                {SITE.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-white">
            Hızlı Bağlantılar
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-white">
            Markalarımız
          </h3>
          <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
            {BRANDS.slice(0, 8).map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="container-x flex flex-col items-center justify-between gap-2 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Emars Oto Servis. Tüm hakları saklıdır.</p>
          <p>Design by Selçuk Geçgel</p>
        </div>
      </div>
    </footer>
  );
}
