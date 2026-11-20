import type { ImageMetadata } from 'astro';

import transiaShot from '../assets/work/transia.jpg';
import masjidShot from '../assets/work/masjidkorea.jpg';
import ikautShot from '../assets/work/ikaut.jpg';
import alishlahShot from '../assets/work/alishlah.jpg';
import posShot from '../assets/work/umkm-pos.jpg';
import convertkuShot from '../assets/work/convertku.jpg';
import tilepShot from '../assets/lab/tilepmoney.jpg';
import shooterShot from '../assets/lab/space-shooter.jpg';
import marbleShot from '../assets/lab/marble-math.jpg';

export type Lang = 'id' | 'en';
export type L = { id: string; en: string };
export const tr = (v: L, lang: Lang) => v[lang];

export const WA_NUMBER = '6281319577004';
export const wa = (text: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
export const GITHUB = 'https://github.com/RulyOctareza';
export const REPO = 'https://github.com/RulyOctareza/my-portofolio';

/* ---------- UI copy ---------- */
export const ui = {
  meta: {
    title: { id: 'Ruly Octareza — Mobile & AI Developer', en: 'Ruly Octareza — Mobile & AI Developer' },
    description: {
      id: 'Portofolio Ruly Octareza: aplikasi Flutter, web, dan otomasi AI untuk LPK, masjid, komunitas diaspora, dan UMKM. Proyek live: Transia Career, Masjid Korea, IKA UT LLN.',
      en: 'Portfolio of Ruly Octareza: Flutter apps, websites and AI automation for training institutes, mosques, diaspora communities and small businesses.',
    },
  },
  skip: { id: 'Lewati ke konten', en: 'Skip to content' },
  nav: {
    work: { id: 'Karya', en: 'Work' },
    services: { id: 'Layanan', en: 'Services' },
    lab: { id: 'Lab', en: 'Lab' },
    journey: { id: 'Perjalanan', en: 'Journey' },
    contact: { id: 'Kontak', en: 'Contact' },
    menu: { id: 'Menu', en: 'Menu' },
    theme: { id: 'Ganti tema terang/gelap', en: 'Toggle light/dark theme' },
    langLabel: { id: 'Read in English', en: 'Baca dalam Bahasa Indonesia' },
    cta: { id: 'Hubungi', en: 'Get in touch' },
  },
  hero: {
    status: { id: 'Terbuka untuk proyek baru', en: 'Open for new projects' },
    titleA: { id: 'Aplikasi yang', en: 'Apps people' },
    titleMark: { id: 'dipakai beneran', en: 'actually use' },
    titleB: { id: ', bukan sekadar demo.', en: ', not just demos.' },
    lead: {
      id: 'Saya Ruly Octareza, mobile & AI developer dari Jawa Timur. Saya membangun aplikasi Flutter, website, dan otomasi untuk LPK, masjid, komunitas diaspora, dan UMKM — dari Blora sampai Korea Selatan.',
      en: "I'm Ruly Octareza, a mobile & AI developer from East Java, Indonesia. I build Flutter apps, websites and automations for training institutes, mosques, diaspora communities and small businesses — from Blora to South Korea.",
    },
    ctaPrimary: { id: 'Ngobrol via WhatsApp', en: 'Chat on WhatsApp' },
    ctaSecondary: { id: 'Lihat karya', en: 'See the work' },
    waText: { id: 'Halo Ruly, saya lihat portofoliomu dan ingin diskusi proyek.', en: 'Hi Ruly, I saw your portfolio and would like to discuss a project.' },
    stats: [
      { n: '10+', l: { id: 'situs & aplikasi live', en: 'live sites & apps' } },
      { n: '4', l: { id: 'lembaga & komunitas dilayani', en: 'organisations served' } },
      { n: '110+', l: { id: 'repositori GitHub', en: 'GitHub repositories' } },
    ],
    chips: {
      a: { id: 'LMS · login Google', en: 'LMS · Google sign-in' },
      b: { id: 'masjidkorea.com', en: 'masjidkorea.com' },
      c: { id: 'PWA · bisa offline', en: 'PWA · works offline' },
    },
    phoneAlt: {
      transia: { id: 'Tampilan seluler website Transia Career', en: 'Transia Career website on mobile' },
      masjid: { id: 'Layar pembuka aplikasi Masjid Korea', en: 'Masjid Korea app welcome screen' },
      alishlah: { id: 'Dashboard keuangan Masjid Al Ishlah di ponsel', en: 'Al Ishlah mosque finance dashboard on a phone' },
    },
  },
  builtFor: { id: 'Pernah membangun untuk', en: 'Built for' },
  work: {
    kicker: { id: 'Karya pilihan', en: 'Selected work' },
    title: { id: 'Proyek live untuk lembaga, komunitas, dan UMKM.', en: 'Live projects for institutions, communities and small businesses.' },
    sub: { id: 'Semua di bawah ini bisa dibuka dan dicoba sekarang juga. Arahkan kursor ke tangkapan layar untuk menggulir halamannya.', en: 'Everything below is live — open it and try it. Hover a screenshot to scroll through the page.' },
  },
  services: {
    kicker: { id: 'Layanan', en: 'Services' },
    title: { id: 'Yang bisa saya bangun untukmu.', en: 'What I can build for you.' },
    sub: { id: 'Paket yang sudah terbukti jalan di proyek nyata — bukan janji di atas kertas.', en: 'Packages proven in real projects — not promises on paper.' },
    proof: { id: 'Bukti', en: 'Proof' },
    cta: { id: 'Diskusikan', en: 'Discuss' },
  },
  lab: {
    kicker: { id: 'Lab', en: 'Lab' },
    title: { id: 'Eksperimen, game, dan alat kecil.', en: 'Experiments, games and small tools.' },
    sub: { id: 'Sebagian besar open source di GitHub.', en: 'Mostly open source on GitHub.' },
  },
  journey: {
    kicker: { id: 'Perjalanan', en: 'Journey' },
    title: { id: 'Dari lantai produksi ke kode.', en: 'From the factory floor to code.' },
    sub: {
      id: 'Lebih dari lima tahun di industri manufaktur, lalu membangun software untuk lembaga, komunitas, dan UMKM.',
      en: 'Over five years in manufacturing, then building software for institutions, communities and small businesses.',
    },
    photoAlt: { id: 'Ruly Octareza tersenyum di bawah pohon sakura', en: 'Ruly Octareza smiling under a cherry blossom tree' },
    caption: { id: 'Ruly Octareza · Mobile & AI Developer', en: 'Ruly Octareza · Mobile & AI Developer' },
    learning: { id: 'Terus belajar', en: 'Always learning' },
  },
  stack: {
    kicker: { id: 'Alat kerja', en: 'Toolbox' },
    title: { id: 'Teknologi yang saya pakai.', en: 'The tech I work with.' },
  },
  contact: {
    kicker: { id: 'Kontak', en: 'Contact' },
    title: { id: 'Punya masalah yang bisa dibereskan aplikasi?', en: 'Got a problem an app could solve?' },
    sub: { id: 'Ceritakan kebutuhanmu — saya balas lewat WhatsApp atau email.', en: "Tell me what you need — I'll reply on WhatsApp or email." },
    wa: { id: 'WhatsApp', en: 'WhatsApp' },
    email: { id: 'Email', en: 'Email' },
    github: { id: 'GitHub', en: 'GitHub' },
    location: { id: 'Jawa Timur, Indonesia · WIB (UTC+7)', en: 'East Java, Indonesia · WIB (UTC+7)' },
  },
  footer: {
    made: { id: 'Dibangun dengan Astro, di-hosting di Vercel.', en: 'Built with Astro, hosted on Vercel.' },
    source: { id: 'Kode sumber', en: 'Source code' },
    legacy: { id: 'Versi Flutter lama', en: 'Old Flutter version' },
  },
  common: {
    live: { id: 'Buka', en: 'Open' },
    code: { id: 'Kode', en: 'Code' },
    private: { id: 'Repo privat', en: 'Private repo' },
  },
} as const;

/* ---------- Featured work ---------- */
export type Link = { label: string; href: string; kind: 'live' | 'code' };
export type Work = {
  id: string;
  title: string;
  kind: L;
  year: string;
  desc: L;
  stack: string[];
  links: Link[];
  shot: ImageMetadata;
  shotAlt: L;
  url: string;
  scroll?: boolean;
  span: 'wide' | 'narrow' | 'half';
};

export const work: Work[] = [
  {
    id: 'transia',
    title: 'Transia Career',
    kind: { id: 'Klien · LPK', en: 'Client · Job-training institute' },
    year: '2026',
    desc: {
      id: 'Website dan LMS untuk LPK program kerja ke Jepang di Blora. Calon peserta melihat program, mengikuti alur pendaftaran, lalu belajar di LMS dengan akun Google.',
      en: 'Website and LMS for a Japan work-program training institute in Blora. Applicants browse programs, follow the sign-up flow, then learn in the LMS with their Google account.',
    },
    stack: ['Astro', 'Next.js', 'TypeScript', 'Vercel'],
    links: [
      { label: 'transiacareer.id', href: 'https://www.transiacareer.id', kind: 'live' },
      { label: 'LMS', href: 'https://lms.transiacareer.id', kind: 'live' },
      { label: 'GitHub', href: 'https://github.com/RulyOctareza/transiacareer', kind: 'code' },
    ],
    shot: transiaShot,
    shotAlt: { id: 'Halaman depan website Transia Career', en: 'Transia Career website homepage' },
    url: 'transiacareer.id',
    scroll: true,
    span: 'wide',
  },
  {
    id: 'masjidkorea',
    title: 'Masjid Korea',
    kind: { id: 'Komunitas · KMI Korea Selatan', en: 'Community · KMI South Korea' },
    year: '2024–2026',
    desc: {
      id: 'Aplikasi pencari masjid terdekat untuk Muslim Indonesia di Korea Selatan: jarak dari lokasi pengguna, navigasi lewat KakaoMap, data masjid real-time dari Firestore.',
      en: 'Mosque finder for Indonesian Muslims in South Korea: distance from your location, KakaoMap navigation and live mosque data from Firestore.',
    },
    stack: ['Flutter', 'BLoC', 'Firebase', 'KakaoMap'],
    links: [
      { label: 'masjidkorea.com', href: 'https://masjidkorea.com', kind: 'live' },
      { label: 'GitHub', href: 'https://github.com/RulyOctareza/new_masjid_korea', kind: 'code' },
    ],
    shot: masjidShot,
    shotAlt: { id: 'Promosi aplikasi Masjid Korea dengan mockup ponsel', en: 'Masjid Korea app promo with a phone mockup' },
    url: 'masjidkorea.com',
    span: 'narrow',
  },
  {
    id: 'alishlah',
    title: 'Keuangan Masjid Al Ishlah',
    kind: { id: 'Masjid · Pyeongdong, Korea', en: 'Mosque · Pyeongdong, Korea' },
    year: '2026',
    desc: {
      id: 'Dashboard keuangan yang bisa dibuka jamaah kapan saja: saldo, tren pemasukan dan pengeluaran per bulan, infaq, dan rekening. Bisa dipasang sebagai aplikasi (PWA).',
      en: 'A finance dashboard any congregant can open: balance, monthly income and spending, donations and bank details. Installable as an app (PWA).',
    },
    stack: ['Next.js', 'TypeScript', 'PWA'],
    links: [{ label: 'keuangan-masjid-alishlah', href: 'https://keuangan-masjid-alishlah.vercel.app', kind: 'live' }],
    shot: alishlahShot,
    shotAlt: { id: 'Dashboard keuangan Masjid Al Ishlah dengan grafik bulanan', en: 'Al Ishlah mosque finance dashboard with a monthly chart' },
    url: 'keuangan-masjid-alishlah.vercel.app',
    scroll: true,
    span: 'narrow',
  },
  {
    id: 'ikaut',
    title: 'IKA UT LLN',
    kind: { id: 'Organisasi alumni', en: 'Alumni association' },
    year: '2025–2026',
    desc: {
      id: 'Portal resmi Ikatan Alumni Universitas Terbuka Layanan Luar Negeri: profil organisasi, direktori alumni per negara, berita, dan kegiatan — dikelola pengurus lewat CMS.',
      en: 'Official portal of the Universitas Terbuka overseas alumni association: organisation profile, alumni directory by country, news and events — run by the board through a CMS.',
    },
    stack: ['Next.js', 'Sanity CMS', 'TypeScript', 'Vercel'],
    links: [{ label: 'ikaut-luarnegeri.web.id', href: 'https://ikaut-luarnegeri.web.id', kind: 'live' }],
    shot: ikautShot,
    shotAlt: { id: 'Halaman depan portal IKA UT LLN', en: 'IKA UT LLN portal homepage' },
    url: 'ikaut-luarnegeri.web.id',
    span: 'wide',
  },
  {
    id: 'umkmpos',
    title: 'UMKM POS',
    kind: { id: 'Produk · UMKM', en: 'Product · Small business' },
    year: '2026',
    desc: {
      id: 'Kasir offline-first: transaksi tetap jalan tanpa internet, data disimpan di perangkat dan dicadangkan ke cloud saat online. Ada versi web dan versi Flutter.',
      en: 'Offline-first point of sale: sales keep working without internet, data lives on the device and backs up to the cloud when online. Web and Flutter editions.',
    },
    stack: ['Next.js', 'Dexie', 'Supabase', 'Flutter', 'Drift'],
    links: [
      { label: 'Demo', href: 'https://umkm-pos-teal.vercel.app', kind: 'live' },
      { label: 'GitHub', href: 'https://github.com/RulyOctareza/UMKM-Pos-Flutter', kind: 'code' },
    ],
    shot: posShot,
    shotAlt: { id: 'Layar kasir UMKM POS mode gelap', en: 'UMKM POS cashier screen in dark mode' },
    url: 'umkm-pos-teal.vercel.app',
    span: 'half',
  },
  {
    id: 'convertku',
    title: 'ConvertKu',
    kind: { id: 'Produk · Utilitas', en: 'Product · Utility' },
    year: '2026',
    desc: {
      id: 'Konversi dan kompres JPG, PNG, dan PDF langsung di browser — tanpa daftar, tanpa unggah file ke server. Untuk pelamar kerja, mahasiswa, guru, dan UMKM.',
      en: 'Convert and compress JPG, PNG and PDF right in the browser — no sign-up, no uploads to a server. For job seekers, students, teachers and small businesses.',
    },
    stack: ['Next.js', 'pdf-lib', 'PDF.js', 'Tailwind'],
    links: [{ label: 'convertku.my.id', href: 'https://convertku.my.id', kind: 'live' }],
    shot: convertkuShot,
    shotAlt: { id: 'Halaman depan ConvertKu dengan daftar alat konversi', en: 'ConvertKu homepage listing conversion tools' },
    url: 'convertku.my.id',
    scroll: true,
    span: 'half',
  },
];

export const builtFor = ['Transia Career', 'IKA UT LLN', 'KMI Korea Selatan', 'Masjid Al Ishlah Pyeongdong'];

/* ---------- Services ---------- */
export type Service = {
  id: string;
  icon: 'school' | 'mosque' | 'phone' | 'spark';
  title: L;
  desc: L;
  bullets: L[];
  proof: { label: string; href: string }[];
  waText: L;
};

export const services: Service[] = [
  {
    id: 'lpk',
    icon: 'school',
    title: { id: 'Digital untuk LPK & lembaga kursus', en: 'Digital for training institutes' },
    desc: { id: 'Website pendaftaran yang siap menerima trafik iklan, ditambah LMS untuk peserta.', en: 'A sign-up website ready for ad traffic, plus an LMS for your students.' },
    bullets: [
      { id: 'Halaman program, alur pendaftaran, cerita alumni', en: 'Program pages, sign-up flow, alumni stories' },
      { id: 'LMS dengan login Google', en: 'LMS with Google sign-in' },
      { id: 'Artikel & blog untuk SEO', en: 'Articles & blog for SEO' },
    ],
    proof: [{ label: 'Transia Career', href: '#work-transia' }],
    waText: { id: 'Halo Ruly, saya ingin diskusi website/LMS untuk lembaga kami.', en: 'Hi Ruly, I would like to discuss a website/LMS for our institute.' },
  },
  {
    id: 'masjid',
    icon: 'mosque',
    title: { id: 'Masjid & komunitas', en: 'Mosques & communities' },
    desc: { id: 'Transparansi dan informasi yang bisa diakses jamaah atau anggota dari ponsel.', en: 'Transparency and information members can reach from their phones.' },
    bullets: [
      { id: 'Dashboard keuangan kas & infaq', en: 'Finance dashboard for funds & donations' },
      { id: 'Website & direktori anggota lewat CMS', en: 'Website & member directory via a CMS' },
      { id: 'Aplikasi pencari lokasi, display & live stream', en: 'Location finder app, displays & live streams' },
    ],
    proof: [
      { label: 'Al Ishlah', href: '#work-alishlah' },
      { label: 'IKA UT LLN', href: '#work-ikaut' },
      { label: 'Masjid Korea', href: '#work-masjidkorea' },
    ],
    waText: { id: 'Halo Ruly, saya pengurus masjid/komunitas dan ingin diskusi aplikasi.', en: 'Hi Ruly, I help run a mosque/community and would like to discuss an app.' },
  },
  {
    id: 'mobile',
    icon: 'phone',
    title: { id: 'Aplikasi mobile Flutter', en: 'Flutter mobile apps' },
    desc: { id: 'Satu kode untuk Android, iOS, dan web.', en: 'One codebase for Android, iOS and the web.' },
    bullets: [
      { id: 'Offline-first: tetap jalan tanpa sinyal', en: 'Offline-first: keeps working without signal' },
      { id: 'Integrasi Bluetooth, OBD-II, NFC, kamera & QR', en: 'Bluetooth, OBD-II, NFC, camera & QR integrations' },
      { id: 'Backend Firebase atau Supabase', en: 'Firebase or Supabase backends' },
    ],
    proof: [
      { label: 'UMKM POS', href: '#work-umkmpos' },
      { label: 'AutoCare OBD', href: '#lab-autocare' },
    ],
    waText: { id: 'Halo Ruly, saya ingin diskusi pembuatan aplikasi mobile.', en: 'Hi Ruly, I would like to discuss building a mobile app.' },
  },
  {
    id: 'ai',
    icon: 'spark',
    title: { id: 'Otomasi & AI', en: 'Automation & AI' },
    desc: { id: 'Pekerjaan berulang dikerjakan mesin, tim fokus ke hal yang penting.', en: 'Let machines handle the repetitive work so your team can focus.' },
    bullets: [
      { id: 'Workflow n8n & notifikasi WhatsApp', en: 'n8n workflows & WhatsApp notifications' },
      { id: 'Fitur AI: deteksi wajah, pengenalan gambar, chatbot', en: 'AI features: face detection, image recognition, chatbots' },
      { id: 'Pipeline konten: naskah AI → suara → video', en: 'Content pipelines: AI script → voice → video' },
    ],
    proof: [
      { label: 'Absensi Sekolah', href: '#lab-absensi' },
      { label: 'AI Food Recognizer', href: '#lab-food' },
    ],
    waText: { id: 'Halo Ruly, saya ingin diskusi otomasi/AI untuk bisnis saya.', en: 'Hi Ruly, I would like to discuss automation/AI for my business.' },
  },
];

/* ---------- Lab ---------- */
export type LabItem = {
  id: string;
  title: string;
  tag: L;
  desc: L;
  stack: string[];
  live?: string;
  code?: string;
  shot?: ImageMetadata;
  shotAlt?: L;
  icon?: 'car' | 'qr' | 'run' | 'eye' | 'heart' | 'food' | 'dice' | 'terminal' | 'film';
};

export const labFeatured: LabItem[] = [
  {
    id: 'tilepmoney',
    title: 'TilepMony',
    tag: { id: 'Proyek tim · Web3', en: 'Team project · Web3' },
    desc: {
      id: 'Visual builder berbasis AI untuk alur pembayaran stablecoin: rancang, uji, dan deploy tanpa menulis kode.',
      en: 'AI-powered visual builder for stablecoin payment flows: design, test and deploy without writing code.',
    },
    stack: ['Solidity', 'TypeScript'],
    live: 'https://tilepmoney.vercel.app',
    code: 'https://github.com/TilepMony-Project',
    shot: tilepShot,
    shotAlt: { id: 'Halaman depan TilepMony', en: 'TilepMony homepage' },
  },
  {
    id: 'shooter',
    title: 'Space Shooter',
    tag: { id: 'Game · bisa dimainkan', en: 'Game · playable' },
    desc: { id: 'Game arcade luar angkasa yang jalan langsung di browser.', en: 'A space arcade game that runs right in the browser.' },
    stack: ['Flutter', 'Flame'],
    live: 'https://space-shooter-flutter-game.vercel.app',
    code: 'https://github.com/RulyOctareza/space_shooter_flutter_game',
    shot: shooterShot,
    shotAlt: { id: 'Layar judul game Space Shooter', en: 'Space Shooter title screen' },
  },
  {
    id: 'marble',
    title: 'Marble Math',
    tag: { id: 'Game edukasi · bisa dimainkan', en: 'Learning game · playable' },
    desc: { id: 'Belajar pembagian dengan mengelompokkan kelereng — 10 level.', en: 'Learn division by grouping marbles — 10 levels.' },
    stack: ['Flutter', 'GetX'],
    live: 'https://marble-game-flutter.vercel.app',
    code: 'https://github.com/RulyOctareza/marble_game_flutter',
    shot: marbleShot,
    shotAlt: { id: 'Game Marble Math dengan soal 24 dibagi 3', en: 'Marble Math game showing 24 divided by 3' },
  },
];

export const labMore: LabItem[] = [
  {
    id: 'autocare',
    title: 'AutoCare OBD',
    icon: 'car',
    tag: { id: 'Otomotif', en: 'Automotive' },
    desc: { id: 'Baca data mesin mobil real-time lewat adaptor OBD-II Bluetooth, catat perjalanan.', en: 'Read live engine data through a Bluetooth OBD-II adapter and log trips.' },
    stack: ['Flutter', 'Riverpod', 'Drift'],
    code: 'https://github.com/RulyOctareza/OBD-Scanner',
  },
  {
    id: 'absensi',
    title: 'Absensi Sekolah',
    icon: 'qr',
    tag: { id: 'Pendidikan', en: 'Education' },
    desc: { id: 'Absensi siswa dengan scan QR, rekap otomatis ke CSV, notifikasi WhatsApp lewat n8n.', en: 'Student attendance by QR scan, automatic CSV recaps and WhatsApp alerts via n8n.' },
    stack: ['Flutter', 'Firebase', 'n8n'],
    code: 'https://github.com/RulyOctareza/absensi-sekolah-flutter',
  },
  {
    id: 'food',
    title: 'AI Food Recognizer',
    icon: 'food',
    tag: { id: 'AI', en: 'AI' },
    desc: { id: 'Kenali makanan dari foto dengan model TFLite dan Gemini.', en: 'Recognises food from a photo with a TFLite model and Gemini.' },
    stack: ['Flutter', 'TFLite', 'Gemini'],
    code: 'https://github.com/RulyOctareza/ai_food_recognizer',
  },
  {
    id: 'drowsy',
    title: 'AI Anti Ngantuk',
    icon: 'eye',
    tag: { id: 'AI · Keselamatan', en: 'AI · Safety' },
    desc: { id: 'Deteksi kantuk pengemudi dari kamera dengan ML Kit face detection.', en: 'Detects driver drowsiness from the camera with ML Kit face detection.' },
    stack: ['Flutter', 'ML Kit', 'Riverpod'],
    code: 'https://github.com/RulyOctareza/ai_anti_ngantuk_app',
  },
  {
    id: 'exercise',
    title: 'AI Exercise Tracker',
    icon: 'run',
    tag: { id: 'AI · Kebugaran', en: 'AI · Fitness' },
    desc: { id: 'Pelacak latihan dengan Google ML Kit, GetX, dan Clean Architecture.', en: 'Workout tracker built with Google ML Kit, GetX and Clean Architecture.' },
    stack: ['Flutter', 'ML Kit', 'GetX'],
    code: 'https://github.com/RulyOctareza/ai_exercise_tracker',
  },
  {
    id: 'heart',
    title: 'Heart Rate BLE',
    icon: 'heart',
    tag: { id: 'Kesehatan', en: 'Health' },
    desc: { id: 'Pantau detak jantung dari sensor Bluetooth Low Energy.', en: 'Monitors heart rate from a Bluetooth Low Energy sensor.' },
    stack: ['Flutter', 'BLE', 'SQLite'],
    code: 'https://github.com/RulyOctareza/AI_heart_rate_tracker_with_bluetooth',
  },
  {
    id: 'wni',
    title: 'Jalan Hidup WNI',
    icon: 'dice',
    tag: { id: 'Game', en: 'Game' },
    desc: { id: 'Life simulator versi Indonesia, dibuat dengan Flutter.', en: 'An Indonesian take on the life-simulator genre, built with Flutter.' },
    stack: ['Flutter', 'Riverpod'],
    code: 'https://github.com/RulyOctareza/jalan-hidup-wni',
  },
  {
    id: 'claude',
    title: 'claude-ds & claude-ar',
    icon: 'terminal',
    tag: { id: 'Developer tools', en: 'Developer tools' },
    desc: { id: 'Jalankan Claude Code lewat DeepSeek API atau AgentRouter dengan satu skrip.', en: 'Run Claude Code through the DeepSeek API or AgentRouter with a single script.' },
    stack: ['Shell', 'CLI'],
    code: 'https://github.com/RulyOctareza/claude-ds',
  },
  {
    id: 'video',
    title: 'Pipeline Video Otomatis',
    icon: 'film',
    tag: { id: 'Otomasi · AI', en: 'Automation · AI' },
    desc: { id: 'Topik → naskah AI → suara TTS → motion graphic → render terjadwal di server sendiri.', en: 'Topic → AI script → TTS voice → motion graphics → scheduled renders on a self-hosted server.' },
    stack: ['Node.js', 'Remotion', 'ffmpeg', 'LLM'],
  },
];

/* ---------- Journey ---------- */
export const journey = [
  {
    when: { id: '2025 — sekarang', en: '2025 — now' },
    role: { id: 'Developer lepas & proyek komunitas', en: 'Freelance & community developer' },
    org: { id: 'LPK, organisasi alumni, masjid, UMKM', en: 'Training institutes, alumni groups, mosques, small businesses' },
    desc: {
      id: 'Website, LMS, dashboard keuangan, aplikasi kasir, dan otomasi — dari kebutuhan sampai live.',
      en: 'Websites, an LMS, finance dashboards, a point-of-sale app and automations — from requirements to launch.',
    },
  },
  {
    when: { id: 'Jun — Agu 2024', en: 'Jun — Aug 2024' },
    role: { id: 'Flutter Developer', en: 'Flutter Developer' },
    org: { id: 'KMI Korea Selatan', en: 'KMI South Korea' },
    desc: {
      id: 'Membangun Masjid Korea: pencarian masjid berbasis lokasi dengan Flutter dan Firebase, database real-time, performa dioptimalkan.',
      en: 'Built Masjid Korea: location-based mosque search with Flutter and Firebase, a real-time database and tuned performance.',
    },
  },
  {
    when: { id: 'Apr 2019 — Des 2024', en: 'Apr 2019 — Dec 2024' },
    role: { id: 'Material Handler', en: 'Material Handler' },
    org: { id: 'Namdo Mold Co. Ltd', en: 'Namdo Mold Co. Ltd' },
    desc: {
      id: 'Menjaga alur bahan baku, barang setengah jadi, dan produk plastik jadi di area produksi — forklift, crane, dan mesin injeksi.',
      en: 'Kept raw materials, semi-finished and finished plastic products flowing on the production floor — forklifts, cranes and injection machines.',
    },
  },
];

export const learning = ['Dicoding', 'Sanbercode', 'Bootcamp Web3 (Solidity)'];

/* ---------- Stack ---------- */
export const stackGroups: { name: L; items: string[] }[] = [
  { name: { id: 'Mobile', en: 'Mobile' }, items: ['Flutter', 'Dart', 'BLoC', 'Riverpod', 'GetX', 'Drift', 'Flame'] },
  { name: { id: 'Web', en: 'Web' }, items: ['Next.js', 'Astro', 'React', 'TypeScript', 'Tailwind', 'Sanity', 'Prisma'] },
  { name: { id: 'Data & backend', en: 'Data & backend' }, items: ['Firebase', 'Supabase', 'PostgreSQL', 'SQLite', 'n8n', 'Docker'] },
  { name: { id: 'AI & otomasi', en: 'AI & automation' }, items: ['ML Kit', 'TFLite', 'Gemini', 'Claude', 'Remotion', 'ffmpeg'] },
  { name: { id: 'Infra & alat', en: 'Infra & tools' }, items: ['Vercel', 'Cloudflare', 'Linux server', 'Git', 'Figma', 'Solidity'] },
];
