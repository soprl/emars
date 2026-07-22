import { SERVICES } from "@/lib/data";
import Reveal from "@/components/Reveal";
import ServicesScrollStack from "@/components/ServiceScrub";

export default function Services() {
  return (
    <section id="hizmetler">
      <div className="bg-white py-24">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Hizmetlerimiz</span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
              İhtiyacınız Olan Her Şey Tek Çatı Altında
            </h2>
            <p className="mt-4 text-navy-800/70">
              Motor mekanikten şanzıman revizyonuna, yol yardımdan
              rot-balansa kadar tüm bakım ve onarım ihtiyaçlarınız uzman
              kadromuzla güvence altında. Aşağı kaydırdıkça her hizmeti
              yakından inceleyin.
            </p>
          </Reveal>
        </div>
      </div>

      <ServicesScrollStack services={SERVICES} />
    </section>
  );
}
