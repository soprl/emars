import Image from "next/image";
import { Camera } from "lucide-react";
import { GALLERY } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function Gallery() {
  return (
    <section id="galeri" className="bg-white py-24">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">
            <Camera className="h-3.5 w-3.5" />
            Atölyemizden
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            Çalışma Alanlarımızdan Kareler
          </h2>
          <p className="mt-4 text-navy-800/70">
            Modern ekipmanlarımız ve uzman ekibimizle günlük çalışma
            ortamımızdan bir kesit.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {GALLERY.map((photo, i) => (
            <Reveal
              key={photo.src}
              delay={(i % 6) * 0.06}
              y={20}
              parallax={[36, 20, 44][i % 3]}
              scaleFx
              className={
                i === 0
                  ? "group relative col-span-2 aspect-[16/10] overflow-hidden rounded-2xl bg-navy-900/5 sm:col-span-1 sm:aspect-square"
                  : "group relative aspect-square overflow-hidden rounded-2xl bg-navy-900/5"
              }
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 640px) 33vw, 50vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-navy-950/0 transition group-hover:bg-navy-950/20" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
