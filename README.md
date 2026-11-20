# Portofolio Ruly Octareza

Situs portofolio di **[rulyoctareza.vercel.app](https://rulyoctareza.vercel.app)**, dibangun dengan [Astro](https://astro.build).
Versi lama (Flutter Web) tetap tersimpan di branch [`flutter-legacy`](https://github.com/RulyOctareza/my-portofolio/tree/flutter-legacy).

## Isi

- Dua bahasa: Indonesia di `/`, English di `/en/`
- Tema terang dan gelap, mengikuti sistem dan bisa diganti lewat tombol
- Proyek live dengan screenshot asli, layanan, riwayat kerja, alat, dan kontak WhatsApp/email

## Desain

Arah desain dan alasan setiap pilihan (warna, font, tata letak, breakpoint, tabel kontras) ada di **[DESIGN.md](DESIGN.md)**.
Desainnya dicek dengan aturan [anti-slop](https://github.com/miqdadbadjuber/anti-slop): tanpa statistik yang tidak bisa dicek, tanpa ikon dekoratif, kontras WCAG AA di dua tema, target sentuh minimal 44px.

## Mengubah konten

Semua teks dan daftar proyek ada di **`src/data/site.ts`** (dua bahasa di satu tempat).
Screenshot ada di `src/assets/`; Astro mengubahnya ke AVIF/WebP saat build.

```
src/
  data/site.ts          teks, proyek, layanan, riwayat, alat
  components/Home.astro seluruh halaman
  components/Phone.astro, Shot.astro, Icon.astro
  layouts/Base.astro    <head>, SEO, Open Graph
  styles/global.css     token warna, tata letak
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

Butuh Node.js 22.23 atau lebih baru.

## Deploy

Vercel (proyek `rezadev_portofolio`), otomatis setiap push ke `main`.
