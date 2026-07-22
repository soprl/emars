import Icon from "@/components/Icon";
import type { IconName } from "@/components/Icon";
import { VALUES } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function WhyUs() {
  return (
    <section className="bg-brand-50/40 py-24">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Neden Emars?</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            Güven, Misyon ve Vizyonumuz
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {VALUES.map((v, i) => (
            <Reveal
              key={v.title}
              delay={i * 0.1}
              parallax={[18, 32, 18][i % 3]}
              scaleFx
            >
              <div className="rounded-2xl bg-white p-8 text-center shadow-card">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 text-accent-400">
                  <Icon name={v.icon as IconName} className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-navy-900">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-800/65">
                  {v.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
