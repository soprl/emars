import type { Metadata } from "next";
import "./globals.css";
import WhatsappButton from "@/components/WhatsappButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.emarsotoservis.com.tr"),
  title: "Emars Oto Servis | Volkswagen, Audi, Porsche, Seat, Skoda Özel Servisi",
  description:
    "Audi, Volkswagen, Porsche, Seat, Skoda marka tüm araçlar için hizmet veren Emars Oto Servis; motor mekanik, şanzıman, rot balans ve yol yardım hizmetleriyle İstanbul Başakşehir'de yanınızda.",
  keywords: [
    "Emars Oto Servis",
    "Volkswagen özel servis",
    "Audi özel servis",
    "Porsche özel servis",
    "şanzıman tamiri",
    "DSG servisi",
    "İstanbul oto servis",
  ],
  openGraph: {
    title: "Emars Oto Servis | Özel Yetkili Oto Bakım ve Onarım",
    description:
      "Volkswagen, Audi, Opel, Seat, Peugeot, Porsche, Renault, Citroen, Fiat, Jeep, Alfa Romeo ve Lancia için uzman servis hizmeti.",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <WhatsappButton />
      </body>
    </html>
  );
}
