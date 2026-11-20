# Portofolio Ruly Octareza

Situs portofolio di **[rulyoctareza.vercel.app](https://rulyoctareza.vercel.app)** — versi 2, dibangun ulang dengan [Astro](https://astro.build).
Versi lama (Flutter Web) tetap tersimpan di branch [`flutter-legacy`](https://github.com/RulyOctareza/my-portofolio/tree/flutter-legacy).

## Isi

- Dua bahasa: Indonesia di `/`, English di `/en/`
- Tema terang/gelap mengikuti sistem, bisa diganti lewat tombol
- Karya live dengan tangkapan layar asli (gulir saat kursor di atas gambar)
- Layanan, lab (eksperimen & game), perjalanan, alat kerja, kontak WhatsApp/email

## Mengubah konten

Semua teks dan daftar proyek ada di **`src/data/site.ts`** (dua bahasa dalam satu tempat).
Tangkapan layar ada di `src/assets/` — Astro mengubahnya otomatis ke AVIF/WebP saat build.

```
src/
  data/site.ts          teks, proyek, layanan, lab, perjalanan, stack
  components/Home.astro seluruh halaman
  components/*.astro    ikon, bingkai ponsel, bingkai browser
  layouts/Base.astro    <head>, SEO, Open Graph
  styles/global.css     desain (token warna, tata letak, animasi)
  pages/index.astro     /     (ID)
  pages/en/index.astro  /en/  (EN)
public/                 favicon, og.png, robots.txt, sitemap.xml
```

## Jalankan

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # hasil statis di dist/
```

Butuh Node.js 22.23+.

## Deploy

Vercel (proyek `rezadev_portofolio`), otomatis setiap push ke `main`.
