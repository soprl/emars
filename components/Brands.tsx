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
          <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
            {[...BRANDS, ...BRANDS].map((brand, i) => (
              <BrandBadge key={`${brand}-${i}`} brand={brand} />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
