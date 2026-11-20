# DESIGN.md

Arah desain portofolio Ruly Octareza. Aturan [anti-slop](https://github.com/miqdadbadjuber/anti-slop) dipakai sebagai filter di atas arah ini.

## Design Read

Halaman portofolio sekaligus halaman jasa untuk pemilik LPK, pengurus masjid, komunitas, UMKM, dan perekrut. Gaya editorial yang sederhana dan modern.

Dial: ENERGY 2 / RHYTHM 2 / MOTION 1

## Identitas

- Kepribadian: tenang, jujur, praktis. Bukti lebih penting daripada klaim.
- Motif: alamat live setiap proyek (misalnya `transiacareer.id`) selalu jadi link pertama dan paling tebal, karena alamat itulah buktinya.
- Satu fokus per layar: hero (judul dan tombol WhatsApp), Karya (Transia Career), Kontak (pita gelap).

## Warna

| Token | Terang | Gelap | Alasan |
|---|---|---|---|
| Latar | `#F7F5F0` | `#111413` | Kertas hangat, bukan putih steril |
| Teks | `#15191A` | `#ECE9E2` | Kontras tinggi untuk bacaan panjang |
| Teks sekunder | `#48504D`, `#5B6360` | `#B3B8B3`, `#959C97` | Hirarki tanpa gagal kontras |
| Aksen | `#0A6649` | `#4CC58F` / `#5FD39F` | Satu-satunya aksen: aksi utama, hover link, focus ring |

Hijau dipilih karena dekat dengan dunia klien (masjid, pendidikan) dan terbaca tenang. Tidak ada warna kedua.

Kontras (rumus WCAG 2.x, dihitung, bukan ditebak):

| Pasangan | Rasio |
|---|---|
| Teks `#15191A` di latar `#F7F5F0` | 16.25 |
| Teks sekunder `#5B6360` di latar terang | 5.67 |
| Putih di tombol `#0A6649` | 6.98 |
| Border kontrol `#757B76` di latar terang | 3.97 |
| Teks `#ECE9E2` di latar gelap `#111413` | 15.28 |
| Teks sekunder `#959C97` di latar gelap | 6.60 |
| Teks `#06150E` di tombol `#4CC58F` | 8.64 |
| Border kontrol `#6B726D` di latar gelap | 3.75 |

## Tipografi

- Satu keluarga: Plus Jakarta Sans (variable 200 sampai 800). Dibuat Tokotype untuk identitas kota Jakarta; bentuknya modern dan bersih, dan asal Indonesia-nya cocok untuk developer Indonesia dengan klien Indonesia.
- Hirarki dari ukuran dan ketebalan (800 untuk judul), bukan dari font kedua. Tidak ada huruf monospace dan tidak ada label kapital berjarak lebar.
- Tracking judul -0.015em sampai -0.02em. Lebih rapat dari itu membuat koma dan titik terlihat lepas di font ini.

## Tata letak

- Hero: teks di kiri, dua ponsel berisi screenshot asli di kanan. Ponsel kedua lebih rendah supaya terbaca sebagai dua aplikasi berbeda.
- Karya: satu proyek unggulan (gambar besar dan teks), lalu daftar baris (teks kiri, gambar kanan), lalu daftar teks untuk proyek lain. Tiga komposisi sesuai bobot konten.
- Layanan: judul menempel di kiri, daftar layanan di kanan. Tanpa ikon dan tanpa kartu.
- Tentang: foto dan linimasa berbentuk tabel. Alat: daftar definisi dua kolom.
- Kontak: satu-satunya permukaan terbalik (gelap), karena di sanalah pengunjung bertindak.

## Bentuk dan kedalaman

- Radius: 8px untuk kontrol, 12px untuk gambar, 30px untuk bingkai ponsel.
- Bayangan hanya pada dua ponsel di hero, sebagai penanda elevasi perangkat. Elemen lain datar dengan garis tipis.
- Tanpa glassmorphism, glow, gradien, pola latar, badge, atau panah dekoratif.

## Gerak

MOTION 1: hanya umpan balik hover dan tekan (warna, garis bawah, geser 1px saat ditekan). Tidak ada animasi scroll, loop, atau elemen melayang.

## Ikon

Hanya empat: logo WhatsApp dan GitHub (menandai tujuan link), serta matahari dan bulan (tema yang akan dipilih tombol).

## Breakpoint

Ditaruh di titik konten mulai rusak, bukan daftar ukuran ponsel:

- Di bawah 720px: empat link nav tidak muat lagi di samping nama, jadi pindah ke tombol berlabel "Menu".
- Di bawah 900px: hero, proyek unggulan, dan Tentang jadi satu kolom.
- Di bawah 760px: baris proyek jadi satu kolom, gambar di atas.
- Proyek lain: 3 kolom mulai 1024px, 2 kolom di tengah, 1 kolom di bawah 640px.
- Target sentuh minimal 44 x 44px.

## Aset

- Logo: nama sebagai teks (dikonfirmasi pemilik). Favicon huruf R adalah placeholder.
- Foto: foto Ruly dari portofolio lama.
- Screenshot: diambil dari situs live, dipotong dari atas halaman, tanpa data pribadi pihak lain.
- Tidak ada angka statistik (dihapus atas permintaan pemilik).
