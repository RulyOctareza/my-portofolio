import type { ImageMetadata } from 'astro';

import transiaShot from '../assets/work/transia.jpg';
import masjidShot from '../assets/work/masjidkorea.jpg';
import ikautShot from '../assets/work/ikaut.jpg';
import alishlahShot from '../assets/work/alishlah.jpg';
import posShot from '../assets/work/umkm-pos.jpg';
import convertkuShot from '../assets/work/convertku.jpg';

export type Lang = 'id' | 'en';
export type L = { id: string; en: string };
export const tr = (v: L, lang: Lang) => v[lang];

export const WA_NUMBER = '6281319577004';
export const WA_DISPLAY = '+62 813 1957 7004';
export const wa = (text: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
export const GITHUB = 'https://github.com/RulyOctareza';
export const REPO = 'https://github.com/RulyOctareza/my-portofolio';

/* ---------- Interface copy ---------- */
export const ui = {
  meta: {
    title: { id: 'Ruly Octareza | Developer aplikasi Flutter dan web', en: 'Ruly Octareza | Flutter and web developer' },
    description: {
      id: 'Ruly Octareza membangun aplikasi Flutter dan website untuk LPK, masjid, komunitas, dan UMKM. Proyek yang sudah live: Transia Career, Masjid Korea, IKA UT LLN.',
      en: 'Ruly Octareza builds Flutter apps and websites for training centres, mosques, communities and small businesses. Live projects: Transia Career, Masjid Korea, IKA UT LLN.',
    },
  },
  skip: { id: 'Lewati ke konten', en: 'Skip to content' },
  nav: {
    label: { id: 'Navigasi utama', en: 'Main navigation' },
    work: { id: 'Karya', en: 'Work' },
    services: { id: 'Layanan', en: 'Services' },
    about: { id: 'Tentang', en: 'About' },
    contact: { id: 'Kontak', en: 'Contact' },
    menu: { id: 'Menu', en: 'Menu' },
    close: { id: 'Tutup', en: 'Close' },
    theme: { id: 'Tema gelap', en: 'Dark theme' },
    langLabel: { id: 'Read this page in English', en: 'Baca halaman ini dalam Bahasa Indonesia' },
  },
  hero: {
    title: {
      id: 'Aplikasi dan website untuk LPK, masjid, komunitas, dan UMKM.',
      en: 'Apps and websites for training centres, mosques, communities and small businesses.',
    },
    lead: {
      id: 'Saya Ruly Octareza, developer Flutter dan web di Jawa Timur. Proyek saya dipakai dari Blora sampai Korea Selatan, dan semuanya bisa kamu buka di bawah.',
      en: "I'm Ruly Octareza, a Flutter and web developer in East Java, Indonesia. My projects run from Blora to South Korea, and you can open every one of them below.",
    },
    ctaPrimary: { id: 'Chat lewat WhatsApp', en: 'Message me on WhatsApp' },
    // {n} is filled from the project list at build time, so the count cannot drift.
    ctaSecondary: { id: 'Lihat {n} proyek live', en: 'See {n} live projects' },
    waText: {
      id: 'Halo Ruly, saya lihat portofoliomu dan ingin diskusi proyek.',
      en: 'Hi Ruly, I saw your portfolio and would like to discuss a project.',
    },
    phoneAlt: {
      transia: { id: 'Website Transia Career di layar ponsel', en: 'Transia Career website on a phone screen' },
      masjid: { id: 'Layar pembuka aplikasi Masjid Korea', en: 'Masjid Korea app welcome screen' },
    },
  },
  work: {
    title: { id: 'Proyek yang sudah live', en: 'Live projects' },
    sub: { id: 'Klik alamatnya untuk membuka versi aslinya.', en: 'Click an address to open the real thing.' },
    othersTitle: { id: 'Proyek lain dan eksperimen', en: 'Other projects and experiments' },
    othersSub: { id: 'Sebagian besar kodenya terbuka di GitHub.', en: 'Most of the code is open on GitHub.' },
    code: { id: 'Kode', en: 'Code' },
    codeGithub: { id: 'Kode di GitHub', en: 'Code on GitHub' },
    play: { id: 'Main', en: 'Play' },
    open: { id: 'Buka', en: 'Open' },
    private: { id: 'Repo privat', en: 'Private repo' },
  },
  services: {
    title: { id: 'Yang bisa saya kerjakan untukmu', en: 'What I can build for you' },
    sub: { id: 'Setiap layanan punya contoh nyata yang bisa kamu buka.', en: 'Each service has a real example you can open.' },
    example: { id: 'Contoh', en: 'Example' },
    via: { id: 'lewat WhatsApp', en: 'on WhatsApp' },
  },
  about: {
    title: { id: 'Dari lantai produksi ke kode.', en: 'From the factory floor to code.' },
    sub: {
      id: 'Lebih dari lima tahun saya bekerja di industri manufaktur sebelum pindah ke software.',
      en: 'I spent over five years in manufacturing before moving into software.',
    },
    photoAlt: { id: 'Ruly Octareza tersenyum di bawah pohon sakura', en: 'Ruly Octareza smiling under a cherry blossom tree' },
    learning: {
      id: 'Belajar lewat Dicoding, Sanbercode, dan bootcamp Web3 (Solidity).',
      en: 'Courses: Dicoding, Sanbercode and a Web3 bootcamp (Solidity).',
    },
  },
  tools: {
    title: { id: 'Alat yang saya pakai', en: 'Tools I use' },
  },
  contact: {
    title: { id: 'Punya masalah yang bisa dibereskan aplikasi?', en: 'Have a problem an app could solve?' },
    sub: { id: 'Ceritakan kebutuhanmu. Saya balas lewat WhatsApp atau email.', en: 'Tell me what you need. I reply on WhatsApp or by email.' },
    email: { id: 'Email', en: 'Email' },
    location: { id: 'Jawa Timur, Indonesia (WIB, UTC+7)', en: 'East Java, Indonesia (WIB, UTC+7)' },
  },
  footer: {
    source: { id: 'Kode sumber situs ini', en: 'Source code of this site' },
    legacy: { id: 'Versi Flutter lama', en: 'Old Flutter version' },
  },
} as const;

/* ---------- Live projects ---------- */
export type Link = { label: L; href: string };
export type Project = {
  id: string;
  title: string;
  kind: L;
  when: L;
  desc: L;
  stack: string;
  domain: { label: string; href: string };
  extra: Link[];
  shot: ImageMetadata;
  shotAlt: L;
};

export const featured: Project = {
  id: 'transia',
  title: 'Transia Career',
  kind: { id: 'Klien · LPK di Blora', en: 'Client · Training centre in Blora' },
  when: { id: '2026', en: '2026' },
  desc: {
    id: 'Website dan LMS untuk LPK program kerja ke Jepang. Calon peserta membaca program, mendaftar, lalu belajar di LMS dengan akun Google.',
    en: 'Website and LMS for a Japan work-program training centre. Applicants read about the programs, sign up, then study in the LMS with their Google account.',
  },
  stack: 'Astro, Next.js, TypeScript, Vercel',
  domain: { label: 'transiacareer.id', href: 'https://www.transiacareer.id' },
  extra: [
    { label: { id: 'LMS', en: 'LMS' }, href: 'https://lms.transiacareer.id' },
    { label: { id: 'Kode di GitHub', en: 'Code on GitHub' }, href: 'https://github.com/RulyOctareza/transiacareer' },
  ],
  shot: transiaShot,
  shotAlt: { id: 'Halaman depan website Transia Career', en: 'Transia Career website homepage' },
};

export const projects: Project[] = [
  {
    id: 'masjidkorea',
    title: 'Masjid Korea',
    kind: { id: 'Komunitas · KMI Korea Selatan', en: 'Community · KMI South Korea' },
    when: { id: 'Sejak 2024', en: 'Since 2024' },
    desc: {
      id: 'Aplikasi pencari masjid untuk Muslim Indonesia di Korea Selatan. Jarak dihitung dari lokasi pengguna, navigasinya lewat KakaoMap, datanya real-time dari Firestore.',
      en: 'Mosque finder for Indonesian Muslims in South Korea. It measures distance from your location, navigates with KakaoMap and reads live data from Firestore.',
    },
    stack: 'Flutter, BLoC, Firebase, KakaoMap',
    domain: { label: 'masjidkorea.com', href: 'https://masjidkorea.com' },
    extra: [{ label: { id: 'Kode di GitHub', en: 'Code on GitHub' }, href: 'https://github.com/RulyOctareza/new_masjid_korea' }],
    shot: masjidShot,
    shotAlt: { id: 'Gambar promosi aplikasi Masjid Korea dengan tampilan ponsel', en: 'Masjid Korea app promo with a phone screen' },
  },
  {
    id: 'alishlah',
    title: 'Keuangan Masjid Al Ishlah',
    kind: { id: 'Masjid · Pyeongdong, Korea Selatan', en: 'Mosque · Pyeongdong, South Korea' },
    when: { id: '2026', en: '2026' },
    desc: {
      id: 'Laporan keuangan masjid yang bisa dibuka jamaah kapan saja: saldo, pemasukan dan pengeluaran per bulan, infaq, dan rekening. Bisa dipasang di ponsel seperti aplikasi.',
      en: 'A mosque finance report any congregant can open: balance, monthly income and spending, donations and bank details. Installs on a phone like an app.',
    },
    stack: 'Next.js, TypeScript, PWA',
    domain: { label: 'keuangan-masjid-alishlah.vercel.app', href: 'https://keuangan-masjid-alishlah.vercel.app' },
    extra: [],
    shot: alishlahShot,
    shotAlt: { id: 'Dashboard keuangan Masjid Al Ishlah', en: 'Al Ishlah mosque finance dashboard' },
  },
  {
    id: 'ikaut',
    title: 'IKA UT LLN',
    kind: { id: 'Organisasi alumni', en: 'Alumni association' },
    when: { id: 'Sejak 2025', en: 'Since 2025' },
    desc: {
      id: 'Portal resmi alumni Universitas Terbuka Layanan Luar Negeri. Pengurus mengisi profil organisasi, direktori alumni per negara, berita, dan kegiatan lewat CMS.',
      en: 'Official portal of the Universitas Terbuka overseas alumni association. The board updates the profile, alumni directory by country, news and events through a CMS.',
    },
    stack: 'Next.js, Sanity CMS, TypeScript',
    domain: { label: 'ikaut-luarnegeri.web.id', href: 'https://ikaut-luarnegeri.web.id' },
    extra: [],
    shot: ikautShot,
    shotAlt: { id: 'Halaman depan portal IKA UT LLN', en: 'IKA UT LLN portal homepage' },
  },
  {
    id: 'umkmpos',
    title: 'UMKM POS',
    kind: { id: 'Produk sendiri', en: 'Own product' },
    when: { id: '2026', en: '2026' },
    desc: {
      id: 'Aplikasi kasir yang tetap jalan tanpa internet. Data tersimpan di perangkat dan dicadangkan ke cloud saat online. Ada versi web dan versi Flutter.',
      en: 'A point-of-sale app that keeps working offline. Data stays on the device and backs up to the cloud once it is online. Web and Flutter versions.',
    },
    stack: 'Next.js, Dexie, Supabase, Flutter, Drift',
    domain: { label: 'umkm-pos-teal.vercel.app', href: 'https://umkm-pos-teal.vercel.app' },
    extra: [{ label: { id: 'Kode di GitHub', en: 'Code on GitHub' }, href: 'https://github.com/RulyOctareza/UMKM-Pos-Flutter' }],
    shot: posShot,
    shotAlt: { id: 'Layar kasir UMKM POS', en: 'UMKM POS cashier screen' },
  },
  {
    id: 'convertku',
    title: 'ConvertKu',
    kind: { id: 'Produk sendiri', en: 'Own product' },
    when: { id: '2026', en: '2026' },
    desc: {
      id: 'Ubah dan kecilkan file JPG, PNG, dan PDF langsung di browser, tanpa daftar dan tanpa mengunggah file ke server.',
      en: 'Convert and compress JPG, PNG and PDF files in the browser, with no sign-up and no upload to a server.',
    },
    stack: 'Next.js, pdf-lib, PDF.js',
    domain: { label: 'convertku.my.id', href: 'https://convertku.my.id' },
    extra: [],
    shot: convertkuShot,
    shotAlt: { id: 'Halaman depan ConvertKu dengan daftar alat konversi', en: 'ConvertKu homepage listing its tools' },
  },
];

/* ---------- Other projects ---------- */
export type Other = {
  id: string;
  title: string;
  desc: L;
  stack: string;
  links: Link[];
  privateRepo?: boolean;
};

const code = (href: string): Link => ({ label: { id: 'Kode', en: 'Code' }, href });

export const others: Other[] = [
  {
    id: 'tilepmoney',
    title: 'TilepMony',
    desc: { id: 'Proyek tim: builder visual untuk alur pembayaran stablecoin.', en: 'Team project: a visual builder for stablecoin payment flows.' },
    stack: 'Solidity, TypeScript',
    links: [
      { label: { id: 'Buka', en: 'Open' }, href: 'https://tilepmoney.vercel.app' },
      code('https://github.com/TilepMony-Project'),
    ],
  },
  {
    id: 'shooter',
    title: 'Space Shooter',
    desc: { id: 'Game tembak-tembakan luar angkasa yang jalan di browser.', en: 'A space shooter that runs in the browser.' },
    stack: 'Flutter, Flame',
    links: [
      { label: { id: 'Main', en: 'Play' }, href: 'https://space-shooter-flutter-game.vercel.app' },
      code('https://github.com/RulyOctareza/space_shooter_flutter_game'),
    ],
  },
  {
    id: 'marble',
    title: 'Marble Math',
    desc: { id: 'Belajar pembagian dengan mengelompokkan kelereng.', en: 'Learn division by grouping marbles.' },
    stack: 'Flutter, GetX',
    links: [
      { label: { id: 'Main', en: 'Play' }, href: 'https://marble-game-flutter.vercel.app' },
      code('https://github.com/RulyOctareza/marble_game_flutter'),
    ],
  },
  {
    id: 'autocare',
    title: 'AutoCare OBD',
    desc: { id: 'Baca data mesin mobil lewat adaptor OBD-II Bluetooth dan catat perjalanan.', en: 'Reads engine data through a Bluetooth OBD-II adapter and logs trips.' },
    stack: 'Flutter, Riverpod, Drift',
    links: [code('https://github.com/RulyOctareza/OBD-Scanner')],
  },
  {
    id: 'absensi',
    title: 'Absensi Sekolah',
    desc: { id: 'Absensi siswa dengan scan QR, rekap ke CSV, dan notifikasi WhatsApp lewat n8n.', en: 'Student attendance by QR scan, CSV recaps and WhatsApp alerts through n8n.' },
    stack: 'Flutter, Firebase, n8n',
    links: [code('https://github.com/RulyOctareza/absensi-sekolah-flutter')],
  },
  {
    id: 'food',
    title: 'AI Food Recognizer',
    desc: { id: 'Kenali makanan dari foto dengan model TFLite dan Gemini.', en: 'Recognises food from a photo with a TFLite model and Gemini.' },
    stack: 'Flutter, TFLite, Gemini',
    links: [code('https://github.com/RulyOctareza/ai_food_recognizer')],
  },
  {
    id: 'drowsy',
    title: 'AI Anti Ngantuk',
    desc: { id: 'Deteksi kantuk pengemudi dari kamera dengan ML Kit.', en: 'Detects driver drowsiness from the camera with ML Kit.' },
    stack: 'Flutter, ML Kit, Riverpod',
    links: [code('https://github.com/RulyOctareza/ai_anti_ngantuk_app')],
  },
  {
    id: 'exercise',
    title: 'AI Exercise Tracker',
    desc: { id: 'Pelacak latihan dengan Google ML Kit.', en: 'A workout tracker built on Google ML Kit.' },
    stack: 'Flutter, ML Kit, GetX',
    links: [code('https://github.com/RulyOctareza/ai_exercise_tracker')],
  },
  {
    id: 'heart',
    title: 'Heart Rate BLE',
    desc: { id: 'Baca detak jantung dari sensor Bluetooth Low Energy.', en: 'Reads heart rate from a Bluetooth Low Energy sensor.' },
    stack: 'Flutter, BLE, SQLite',
    links: [code('https://github.com/RulyOctareza/AI_heart_rate_tracker_with_bluetooth')],
  },
  {
    id: 'wni',
    title: 'Jalan Hidup WNI',
    desc: { id: 'Game simulasi hidup versi Indonesia.', en: 'An Indonesian take on the life-simulation game.' },
    stack: 'Flutter, Riverpod',
    links: [code('https://github.com/RulyOctareza/jalan-hidup-wni')],
  },
  {
    id: 'claude',
    title: 'claude-ds dan claude-ar',
    desc: { id: 'Skrip untuk menjalankan Claude Code lewat DeepSeek atau AgentRouter.', en: 'Scripts that run Claude Code through DeepSeek or AgentRouter.' },
    stack: 'Shell',
    links: [
      { label: { id: 'claude-ds', en: 'claude-ds' }, href: 'https://github.com/RulyOctareza/claude-ds' },
      { label: { id: 'claude-ar', en: 'claude-ar' }, href: 'https://github.com/RulyOctareza/claude-ar' },
    ],
  },
  {
    id: 'video',
    title: 'Pipeline video otomatis',
    desc: {
      id: 'Topik diubah jadi naskah, suara, dan video motion graphic, lalu dirender terjadwal di server sendiri.',
      en: 'Turns a topic into a script, a voice-over and a motion-graphics video, rendered on a schedule on a self-hosted server.',
    },
    stack: 'Node.js, Remotion, ffmpeg',
    links: [],
    privateRepo: true,
  },
];

/* ---------- Services ---------- */
export type Service = {
  id: string;
  title: L;
  desc: L;
  examples: { label: string; href: string }[];
  /** Visible button text, unique per service so each link names its own topic. */
  cta: L;
  waText: L;
};

export const services: Service[] = [
  {
    id: 'lpk',
    title: { id: 'Website dan LMS untuk LPK', en: 'Websites and an LMS for training centres' },
    desc: {
      id: 'Halaman program dan alur pendaftaran untuk calon peserta, ditambah LMS tempat mereka belajar dengan akun Google.',
      en: 'Program pages and a sign-up flow for applicants, plus an LMS where they study with a Google account.',
    },
    examples: [{ label: 'Transia Career', href: '#work-transia' }],
    cta: { id: 'Tanya soal website LPK', en: 'Ask about a training-centre site' },
    waText: { id: 'Halo Ruly, saya ingin diskusi website/LMS untuk lembaga kami.', en: 'Hi Ruly, I would like to discuss a website or LMS for our training centre.' },
  },
  {
    id: 'masjid',
    title: { id: 'Aplikasi untuk masjid dan komunitas', en: 'Apps for mosques and communities' },
    desc: {
      id: 'Laporan kas yang bisa dibuka jamaah dari ponsel, website dengan direktori anggota, dan aplikasi pencari lokasi.',
      en: 'A cash report members can open on their phones, a website with a member directory, and a location finder.',
    },
    examples: [
      { label: 'Al Ishlah', href: '#work-alishlah' },
      { label: 'IKA UT LLN', href: '#work-ikaut' },
      { label: 'Masjid Korea', href: '#work-masjidkorea' },
    ],
    cta: { id: 'Tanya soal aplikasi masjid', en: 'Ask about a mosque app' },
    waText: { id: 'Halo Ruly, saya pengurus masjid/komunitas dan ingin diskusi aplikasi.', en: 'Hi Ruly, I help run a mosque or community and would like to discuss an app.' },
  },
  {
    id: 'mobile',
    title: { id: 'Aplikasi mobile dengan Flutter', en: 'Mobile apps with Flutter' },
    desc: {
      id: 'Satu kode untuk Android, iOS, dan web. Aplikasinya bisa tetap jalan tanpa internet dan tersambung ke Bluetooth, OBD-II, NFC, atau kamera.',
      en: 'One codebase for Android, iOS and the web. The app can keep working offline and connect to Bluetooth, OBD-II, NFC or the camera.',
    },
    examples: [
      { label: 'UMKM POS', href: '#work-umkmpos' },
      { label: 'AutoCare OBD', href: '#other-autocare' },
    ],
    cta: { id: 'Tanya soal aplikasi Flutter', en: 'Ask about a Flutter app' },
    waText: { id: 'Halo Ruly, saya ingin diskusi pembuatan aplikasi mobile.', en: 'Hi Ruly, I would like to discuss building a mobile app.' },
  },
  {
    id: 'ai',
    title: { id: 'Otomasi dan fitur AI', en: 'Automation and AI features' },
    desc: {
      id: 'Workflow n8n yang mengirim notifikasi WhatsApp, deteksi wajah atau makanan dari kamera, dan pipeline video otomatis.',
      en: 'n8n workflows that send WhatsApp notifications, face or food detection from the camera, and automated video pipelines.',
    },
    examples: [
      { label: 'Absensi Sekolah', href: '#other-absensi' },
      { label: 'AI Food Recognizer', href: '#other-food' },
    ],
    cta: { id: 'Tanya soal otomasi', en: 'Ask about automation' },
    waText: { id: 'Halo Ruly, saya ingin diskusi otomasi atau fitur AI.', en: 'Hi Ruly, I would like to discuss automation or an AI feature.' },
  },
];

/* ---------- About ---------- */
export const timeline = [
  {
    when: { id: '2025 sampai sekarang', en: '2025 to now' },
    role: { id: 'Developer lepas', en: 'Freelance developer' },
    org: { id: 'LPK, organisasi alumni, masjid, UMKM', en: 'Training centres, alumni groups, mosques, small businesses' },
    desc: {
      id: 'Membangun website, LMS, laporan keuangan masjid, aplikasi kasir, dan otomasi.',
      en: 'Building websites, an LMS, mosque finance reports, a point-of-sale app and automations.',
    },
  },
  {
    when: { id: 'Jun sampai Agu 2024', en: 'Jun to Aug 2024' },
    role: { id: 'Flutter Developer', en: 'Flutter Developer' },
    org: { id: 'KMI Korea Selatan', en: 'KMI South Korea' },
    desc: {
      id: 'Membangun aplikasi Masjid Korea: pencarian masjid berbasis lokasi dengan Flutter dan Firebase.',
      en: 'Built the Masjid Korea app: location-based mosque search with Flutter and Firebase.',
    },
  },
  {
    when: { id: 'Apr 2019 sampai Des 2024', en: 'Apr 2019 to Dec 2024' },
    role: { id: 'Material Handler', en: 'Material Handler' },
    org: { id: 'Namdo Mold Co. Ltd', en: 'Namdo Mold Co. Ltd' },
    desc: {
      id: 'Mengatur alur bahan baku dan produk plastik di area produksi dengan forklift, crane, dan mesin injeksi.',
      en: 'Moved raw materials and plastic products around the production floor with forklifts, cranes and injection machines.',
    },
  },
];

/* ---------- Tools ---------- */
export const tools: { name: L; items: string }[] = [
  { name: { id: 'Mobile', en: 'Mobile' }, items: 'Flutter, Dart, BLoC, Riverpod, GetX, Drift, Flame' },
  { name: { id: 'Web', en: 'Web' }, items: 'Next.js, Astro, React, TypeScript, Tailwind, Sanity, Prisma' },
  { name: { id: 'Data', en: 'Data' }, items: 'Firebase, Supabase, PostgreSQL, SQLite' },
  { name: { id: 'AI dan otomasi', en: 'AI and automation' }, items: 'ML Kit, TFLite, Gemini, Claude, n8n, Remotion, ffmpeg' },
  { name: { id: 'Infrastruktur', en: 'Infrastructure' }, items: 'Vercel, Cloudflare, Docker, Linux' },
  { name: { id: 'Lainnya', en: 'Other' }, items: 'Git, Figma, Solidity' },
];
