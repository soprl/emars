import { CheckCircle2, Phone } from "lucide-react";
import { SITE, STATS } from "@/lib/data";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";

export default function Goals() {
  return (
    <section className="bg-white py-24">
      <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal parallax={16}>
          <span className="section-eyebrow">Hedeflerimiz</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            Kaliteli İşçilik, Mutlak Müşteri Memnuniyeti
          </h2>
          <p className="mt-5 text-navy-800/70 leading-relaxed">
            Emars Oto Servis olarak uzun yıllardır sektörde kaliteli işçilik
            ve mutlak müşteri memnuniyeti sağlamaya yönelik, sürekli daha
            iyiye ulaşma çabasıyla her türlü sektörel yatırımı yaparak siz
            değerli müşterilerimize en iyisini sunmayı hedefliyoruz.
          </p>

          <ul className="mt-6 space-y-3">
            {["Sıkıntısız Hizmet", "%100 Kaliteli İşçilik", "Şeffaf Fiyatlandırma"].map(
              (item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-600" />
                  <span className="text-sm font-medium text-navy-900">
                    {item}
                  </span>
                </li>
              )
            )}
          </ul>

          <a
            href={SITE.phoneHref}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-navy-800"
          >
            <Phone className="h-4 w-4" />
            Bize Ulaşın
          </a>
        </Reveal>

        <div className="grid grid-cols-3 gap-4 sm:gap-6">
          {STATS.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.1}
              parallax={[24, 36, 24][i % 3]}
              scaleFx
            >
              <div className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-navy-900/5 bg-brand-50/50 p-6 text-center shadow-card">
                <span className="font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
                  %<CountUp value={s.value} />
                </span>
                <span className="text-xs font-semibold uppercase tracking-wide text-navy-800/60">
                  {s.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
