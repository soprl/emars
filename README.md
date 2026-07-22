# Emars Oto Servis — Yeni Web Sitesi (Ana Sayfa)

Bu proje, emarsotoservis.com.tr için Next.js (App Router) + TypeScript + Tailwind CSS
kullanılarak yeniden kodlanmış, mavi-beyaz kurumsal temalı bir ana sayfadır.
Sitede kullanılan fotoğraflar Pexels'ten, ücretsiz ve telif ödemeden ticari
kullanıma açık lisansla seçilmiştir (detay için "Fotoğraflar ve Lisans"
bölümüne bakın). Kendi fotoğraflarınızı eklemek çok kolay — aynı bölümde
anlatılıyor.

## Kurulum ve Çalıştırma

Bilgisayarınızda Node.js 18+ kurulu olmalı.

```bash
cd emars-oto-servis
npm install
npm run dev
```

Tarayıcıda `http://localhost:3000` adresini açın.

Yayına almak (production build) için:

```bash
npm run build
npm run start
```

Vercel, Netlify gibi servislere veya Node destekleyen herhangi bir hosting'e
doğrudan deploy edilebilir.

## Dosya Yapısı

- `app/layout.tsx` — Sayfa genel yapısı, SEO/meta bilgileri, font.
- `app/page.tsx` — Ana sayfa, tüm bölümleri birleştirir.
- `components/` — Header, Hero, Services, Campaigns, Brands, Goals, WhyUs,
  About, Contact, Footer, WhatsApp butonu ve ikon bileşeni.
- `lib/data.ts` — Tüm metinler, telefon/adres bilgileri, hizmet/kampanya/marka
  listeleri burada; içerik güncellemek için tek dosyayı düzenlemeniz yeterli.

## İçerik / Bilgi Güncelleme

Telefon, adres, WhatsApp linki, çalışma saatleri, hizmetler, kampanyalar ve
marka listesi `lib/data.ts` dosyasında merkezi olarak tutulur. Örneğin telefon
numarasını değiştirmek için `SITE.phoneDisplay` ve `SITE.phoneHref`
alanlarını güncellemeniz yeterli.

## Fotoğraflar ve Lisans

Ana sayfada (hero, hakkımızda, kampanyalar, iletişim ve "Atölyemizden" galeri
bölümü) kullanılan tüm fotoğraflar [Pexels](https://www.pexels.com/license/)
kaynaklıdır. Pexels lisansı ticari/kişisel kullanım için ücretsizdir, atıf
zorunlu değildir; yine de hangi fotoğrafın nereden geldiğini bilmeniz için
`lib/data.ts` içindeki `PHOTOS` ve `GALLERY` nesnelerinde her görselin
fotoğrafçı adı `credit` alanında not edilmiştir.

Kendi fotoğraflarınızla değiştirmek çok kolay:

1. Fotoğrafı `public/images/` klasörüne koyun (klasörü oluşturmanız gerekir),
   örn. `public/images/atolyemiz-1.jpg`.
2. `lib/data.ts` dosyasında ilgili `src` alanını `"/images/atolyemiz-1.jpg"`
   ile değiştirin. Bileşenlerde (`Hero.tsx`, `About.tsx`, `Campaigns.tsx`,
   `Contact.tsx`, `Gallery.tsx`) herhangi bir değişiklik yapmanıza gerek yok —
   hepsi bu merkezi dosyadan besleniyor.
3. Harici bir görsel servisinden (kendi CMS'iniz, farklı bir stok site vb.)
   fotoğraf kullanacaksanız, o domaini `next.config.js` içindeki
   `images.remotePatterns` listesine eklemeniz gerekir; aksi halde Next.js
   görseli optimize etmeyi reddeder.

## Animasyonlar (Apple Tarzı Landing Page)

Sayfa artık scroll ile tetiklenen animasyonlar içeriyor ([Framer Motion](https://www.framer.com/motion/)
kullanılarak):

- **Hero**: tam ekran, kademeli beliren başlık/metin/buton animasyonu, alt
  kısımda zıplayan bir "aşağı kaydır" oku.
- **Header**: hero üzerindeyken şeffaf/beyaz yazı, aşağı kaydırınca beyaz
  zemine geçiş yapıyor (Apple sitelerindeki gibi).
- **Hero'dan sonraki bölüm**: sayfa kaydırıldıkça sabitlenip (sticky) art arda
  değişen büyük başlık cümleleri (`components/NarrativeScroll.tsx`).
- **İstatistikler**: ekrana girince 0'dan gerçek değere sayan sayaçlar
  (`components/CountUp.tsx`).
- **Markalarımız**: sonsuz kayan (marquee) marka şeridi, üzerine gelince
  duruyor.
- **Diğer tüm bölümler**: ekrana girdikçe yumuşak belirme/kayma animasyonu
  (`components/Reveal.tsx`).

Tüm animasyonlar, kullanıcının işletim sisteminde "hareketi azalt" (reduced
motion) ayarı açıksa otomatik olarak devre dışı kalır/basitleşir.

### Hero Videosu Ekleme

Hero şu an fotoğrafla (poster) çalışıyor; gerçek bir video eklemek isterseniz
`public/videos/hero.mp4` olarak koymanız yeterli — kod tarafında hiçbir
değişiklik gerekmez (bkz. `public/videos/README.txt`). Bana bir video
sağlarsanız (veya bir video üretim aracına vereceğiniz İngilizce prompt'u
istediyseniz, ayrıca paylaşabilirim), onu doğrudan bu klasöre yerleştirip
bağlayabilirim.

## Sonraki Adımlar

Bu teslim sadece **ana sayfayı** kapsar. Onay sonrası aynı tasarım dili ile
Hakkımızda, Hizmetlerimiz (alt sayfalar), Markalarımız (alt sayfalar), Galeri
ve İletişim sayfaları da üretilebilir.
