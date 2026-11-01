// ============================================================================
//  birthday.js — SEMUA TEKS UTAMA WEBSITE ADA DI SINI
//  Ubah teks di dalam tanda kutip. Jangan hapus nama properti (kiri titik dua).
//  Foto  -> src/data/gallery.js
//  Ucapan -> src/data/wishes.js
//  Surat  -> src/data/letter.js
//  Musik  -> src/data/music.js
// ============================================================================

// ---- Data dasar (dipakai countdown & judul) --------------------------------
export const person = {
  name: "Rahma Aryani",
  birthDay: 11,
  birthMonth: 11, // 11 = november
  birthYear: 2009,
  timeZone: "Asia/Jakarta", // countdown selalu mengikuti zona waktu ini
  displayDate: "11.11.2009",
  longDate: "11 November 2009",
  showAge: true, // false = jangan tampilkan umur di countdown / ucapan hari-H
};

// ---- Info situs ------------------------------------------------------------
export const site = {
  title: "Rahma Aryani",
  description:
    "Sebuah sudut kecil di internet, dibuat khusus untuk ulang tahun Rahma Aryani.",
  footerNote: "dibuat dengan sepenuh hati untuk Rahma Aryani",
};

// ---- Menu navigasi ---------------------------------------------------------
export const nav = [
  { to: "/", label: "Home", end: true },
  { to: "/gallery", label: "Gallery" },
  { to: "/wishes", label: "Wishes" },
  { to: "/letter", label: "Letter" },
  { to: "/music", label: "Music" },
];

// ---- Hero (bagian paling atas halaman Home) --------------------------------
export const hero = {
  handNote: "happy birthday", // tulisan tangan kecil di dekat nama
  headline: "a little corner of the world, just for you",
  description:
    "Tempat kecil ini dibuat untuk merayakan harimu. Ada foto-foto, sebuah surat, dan beberapa lagu. Silakan jalan-jalan pelan-pelan.",
  primaryCta: { label: "Open the gallery", to: "/gallery" },
  secondaryCta: { label: "Read the wishes", to: "/wishes" },
  // Foto utama & foto kecil. Letakkan file di public/images/
  mainPhoto: {
    src: "/images/image1.jpg",
    alt: "Foto Rahma Aryani",
    caption: "",
  },
  secondPhoto: {
    src: "/images/image2.jpg",
    alt: "Foto Rahma Aryani yang kedua",
    caption: "",
  },
  stampText: "Rahma Aryani · 11 November 2009 · happy birthday · ",
};

// ---- Section di halaman Home ----------------------------------------------
export const home = {
  intro: {
    title: "A Little Introduction",
    handNote: "hello, you",
    paragraphs: [
      "Ini adalah halaman kecil yang disiapkan khusus untuk Rahma Aryani. Tidak ada yang rumit di sini, hanya hal-hal yang ingin disimpan dan diberikan di hari ulang tahunnya.",
      // GANTI paragraf di bawah dengan perkenalan singkatmu tentang Rahma Aryani.
      "Tuliskan di sini beberapa kalimat hangat tentang Rahma Aryani, apa adanya, dengan kata-katamu sendiri.",
    ],
    // Daftar kecil di samping teks. Tambah / hapus baris sesukamu.
    facts: [
      { label: "Nama", value: "Rahma Aryani" },
      { label: "Lahir", value: "11 November 2009" },
    ],
  },

  moments: {
    title: "Little Moments",
    text: "Beberapa potongan kecil yang dikumpulkan di satu tempat. Kalau mau lihat semuanya, album lengkapnya ada di halaman Gallery.",
    cta: "See all the photos",
  },

  song: {
    title: "A Song for You",
    text: "Ada satu lagu yang ingin diperdengarkan hari ini. Tekan play kapan pun kamu siap.",
    cta: "Go to the music page",
    emptyTitle: "Lagu pilihan akan muncul di sini",
    emptyText: "Isi link Spotify di src/data/music.js.",
  },

  countdown: {
    title: "Birthday Countdown",
    text: "Menghitung mundur menuju 11 November, tanpa melewatkan satu detik pun.",
    // {age} diganti otomatis dengan umur yang akan dicapai.
    untilTextWithAge: "menuju ulang tahun ke-{age}",
    untilText: "menuju hari ulang tahun",
    unitLabels: { days: "hari", hours: "jam", minutes: "menit", seconds: "detik" },
    // Tampil saat tanggal 11 November sedang berlangsung (zona Asia/Jakarta).
    birthdayTitle: "Selamat ulang tahun, Rahma Aryani",
    birthdayTextWithAge: "Hari ini kamu genap {age} tahun. Semoga harinya menyenangkan dari pagi sampai malam.",
    birthdayText: "Semoga harimu menyenangkan dari pagi sampai malam.",
  },

  note: {
    title: "A Little Note",
    text: "Terima kasih sudah mampir ke sudut kecil ini. Semoga harimu terasa ringan, hangat, dan penuh hal-hal baik.",
    signature: "with care", // kosongkan ("") kalau tidak mau ada tanda tangan
  },
};
