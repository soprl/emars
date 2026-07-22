export const SITE = {
  name: "Emars Oto Servis",
  phoneDisplay: "0538 662 80 28",
  phoneHref: "tel:+905386628028",
  whatsappHref:
    "https://api.whatsapp.com/send?phone=905386628028&text=Merhaba%2C%20Emars%20Oto%20Servis%20web%20sitesi%20%C3%BCzerinden%20yaz%C4%B1yorum.",
  address: "İkitelli O.S.B. Atatürk Oto San. Sit. 9. Blok No: 241, Başakşehir / İstanbul",
  email: "info@emarsotoservis.com.tr",
  workingHours: "Pzt - Cmt: 08.30 - 19.00",
};

// Tüm fotoğraflar Pexels'ten (ücretsiz, telifsiz kullanım lisansı).
// https://www.pexels.com/license/ — dilediğin zaman kendi fotoğraflarınla
// değiştirebilirsin, tek yapman gereken "src" alanını güncellemek.
function pexels(id: number) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1600`;
}

export const PHOTOS = {
  heroBg: {
    src: pexels(33814732),
    alt: "Modern oto tamir atölyesinde liftte bakım yapılan araç",
    credit: "Renee Razumov / Pexels",
  },
  heroCard: {
    src: pexels(8985969),
    alt: "Kaputu açık araç motorunun detaylı görünümü",
    credit: "Artem Podrez / Pexels",
  },
  about: {
    src: pexels(6870298),
    alt: "Uzman teknisyen açık kaput altında motoru inceliyor",
    credit: "Gustavo Fring / Pexels",
  },
  campaignsBg: {
    src: pexels(8985462),
    alt: "Mavi tulumlu teknisyen donanımlı serviste araç kontrolü yapıyor",
    credit: "Artem Podrez / Pexels",
  },
  contact: {
    src: pexels(8986039),
    alt: "Profesyonel serviste kaputu açık araç ve takım çantası",
    credit: "Artem Podrez / Pexels",
  },
};

export const GALLERY = [
  {
    src: pexels(37163499),
    alt: "Liftte yükseltilmiş spor araç, oto tamir atölyesi",
    credit: "iohichu / Pexels",
  },
  {
    src: pexels(6870332),
    alt: "Teknisyen diagnostik cihazla araç kontrolü yapıyor",
    credit: "Gustavo Fring / Pexels",
  },
  {
    src: pexels(5506059),
    alt: "Rafları dolduran motor parçalarıyla geniş atölye",
    credit: "Mike van Schoonderwalt / Pexels",
  },
  {
    src: pexels(33814736),
    alt: "Hidrolik liftte bakıma hazır araç, aydınlık atölye",
    credit: "Renee Razumov / Pexels",
  },
  {
    src: pexels(4116201),
    alt: "Atölyede takım ve ekipmanlarla çevrili bakımdaki araç",
    credit: "Lumiere Studio MX / Pexels",
  },
  {
    src: pexels(8986035),
    alt: "Kaputu açık araç, atölyede bakım anı",
    credit: "Artem Podrez / Pexels",
  },
];

export const NAV_LINKS = [
  { label: "Ana Sayfa", href: "#anasayfa" },
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "Hizmetlerimiz", href: "#hizmetler" },
  { label: "Kampanyalarımız", href: "#kampanyalar" },
  { label: "Markalarımız", href: "#markalar" },
  { label: "Galeri", href: "#galeri" },
  { label: "İletişim", href: "#iletisim" },
];

export const SERVICES = [
  {
    title: "Yağ ve Filtre Bakımı",
    desc: "Periyodik yağ ve filtre değişimiyle motorunuzun ömrünü uzatıyor, performansını koruyoruz.",
    icon: "Droplet",
    video: "/videos/services/yag-bakim.mp4",
  },
  {
    title: "Motor Mekanik",
    desc: "Periyodik bakımdan ağır motor revizyonuna kadar tüm motor mekanik işlemleri uzman kadromuzla.",
    icon: "Wrench",
    video: "/videos/services/motor-mekanik.mp4",
  },
  {
    title: "Rot Balans",
    desc: "Bilgisayarlı rot-balans ölçümü ile daha güvenli sürüş ve dengeli lastik aşınımı.",
    icon: "Gauge",
    video: "/videos/services/rot-balans.mp4",
  },
  {
    title: "Yol Yardım",
    desc: "İstanbul genelinde 7/24 çekici ve yol yardım desteğiyle her an yanınızdayız.",
    icon: "Truck",
    video: "/videos/services/yol-yardim.mp4",
  },
  {
    title: "DSG Şanzıman Servisi",
    desc: "DSG çift kavramalı şanzımanlarda arıza tespiti, bakım ve komple revizyon hizmeti.",
    icon: "Cog",
    video: "/videos/services/dsg-sanziman.mp4",
  },
  {
    title: "Otomatik Şanzıman Tamiri",
    desc: "Tüm marka ve modellerde otomatik şanzıman arıza tespiti ve tamir hizmeti.",
    icon: "Settings",
    video: "/videos/services/otomatik-sanziman.mp4",
  },
  {
    title: "Renault EDC Kavrama, Volant, Beyin",
    desc: "Renault EDC şanzımanlarda kavrama, volant ve beyin (mekatronik) yenileme.",
    icon: "CircuitBoard",
    video: "/videos/services/renault-edc.mp4",
  },
  {
    title: "Triptonik Şanzıman Tamiri",
    desc: "Triptonik şanzımanlarda uzman ekibimizle detaylı arıza tespiti ve onarım.",
    icon: "GitBranch",
    video: "/videos/services/triptonik-sanziman.mp4",
  },
  {
    title: "DTC Şanzıman Tamiri",
    desc: "DTC (çift kavramalı) şanzımanlarda komple bakım, parça yenileme ve tamir.",
    icon: "Layers",
    video: "/videos/services/dtc-sanziman.mp4",
  },
];

export const CAMPAIGNS = [
  "DSG Kavrama, Volant Değişimi",
  "Debriyaj Seti Değişimi",
  "Yağ ve Filtre Değişimi",
  "Triger Seti Değişimi",
  "DSG Güçlendirilmiş Basınç Tüpü",
  "Kia DCT Kavrama ve Volant",
  "Hyundai H-Matic Kavrama, Volant, Beyin",
  "Renault EDC Kavrama, Volant, Beyin",
  "Fiat Kavrama, Volant ve DCT Robot",
  "Triptonik Şanzıman Tamiri",
  "DTC Şanzıman Tamiri",
];

export const BRANDS = [
  "Volkswagen",
  "Audi",
  "Porsche",
  "Seat",
  "Skoda",
  "Opel",
  "Peugeot",
  "Renault",
  "Citroen",
  "Fiat",
  "Jeep",
  "Alfa Romeo",
  "Lancia",
];

export const STATS = [
  { value: 97, label: "Uzman Kadromuz" },
  { value: 95, label: "Mutlu Müşterilerimiz" },
  { value: 99, label: "Kalite Standardımız" },
];

export const VALUES = [
  {
    title: "Güven",
    desc: "Yaptığımız her işlem için açık, net ve şeffaf bir hizmet anlayışını taahhüt ediyoruz.",
    icon: "ShieldCheck",
  },
  {
    title: "Misyonumuz",
    desc: "Müşteri memnuniyetini ön planda tutarak otomotiv sektöründe sağlıklı ve kaliteli hizmet sunmak.",
    icon: "Target",
  },
  {
    title: "Vizyonumuz",
    desc: "Kaliteli ürün ve hizmet anlayışımızla Emars Oto Servis adını nesiller boyu yaşatmak.",
    icon: "Rocket",
  },
];
