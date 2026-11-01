# Cypiaa — Birthday Journal

Website ulang tahun untuk **Cypiaa** (18 Oktober 2011). Dibuat dengan React, Vite, dan React Router.
Lima halaman, masing-masing punya URL sendiri: `/` (Home), `/gallery`, `/wishes`, `/letter`, `/music`.

Semua isi (teks, foto, ucapan, surat, lagu) diedit lewat file di folder `src/data/`.
Kamu tidak perlu menyentuh komponen.

---

## 1. Menjalankan di komputer

Butuh Node.js 18 atau lebih baru.

```bash
npm install
npm run dev
```

Buka alamat yang muncul di terminal (biasanya http://localhost:5173).

Untuk mencoba hasil build seperti di Vercel:

```bash
npm run build
npm run preview
```

---

## 2. Menambahkan foto

1. Simpan foto di folder `public/images/` dengan nama `image1.jpg`, `image2.jpg`, `image3.jpg`, dan seterusnya.
2. Daftarkan di `src/data/gallery.js`. Untuk foto baru, salin satu blok `{ ... }` lalu ubah `id` dan `src`:

```js
{
  id: 11,
  src: "/images/image11.jpg",
  caption: "a good day",   // boleh dikosongkan
  category: "memories",    // dipakai untuk tombol filter
  alt: "Cypiaa di taman",  // deskripsi foto untuk pembaca layar
  ratio: "4/5",            // "4/5", "1/1", "4/3", "3/4", "3/2" atau "auto"
  featured: true           // true = ikut tampil di bagian Little Moments di Home
}
```

Foto yang belum ada akan tampil sebagai placeholder dengan petunjuk nama file.
Foto utama di halaman Home memakai `image1.jpg` dan `image2.jpg` (bisa diganti di `src/data/birthday.js`, bagian `hero`).

Tips: kecilkan ukuran foto (sekitar 1600 px sisi terpanjang, di bawah 500 KB) supaya website cepat dibuka di HP.

---

## 3. Mengedit ucapan teman (6 slot)

Buka `src/data/wishes.js`. Isi `name` dan `message` pada slot yang kamu mau, kartu akan muncul otomatis.
Slot yang masih kosong tidak ditampilkan.

```js
{ id: 1, label: "Friend 01", name: "Rani", avatar: "", message: "Selamat ulang tahun!", date: "", visible: "auto" }
```

- `avatar`: opsional, mis. `"/images/avatar1.jpg"`. Kosong = memakai inisial nama.
- `visible`: `"auto"` (tampil kalau sudah terisi), `true` (selalu tampil), `false` (selalu sembunyi).
- Pesan beberapa baris: pakai `\n`.

---

## 4. Mengganti lagu (Spotify)

Buka `src/data/music.js`, lalu isi `spotifyUrl` dengan link Spotify:

1. Di Spotify, klik titik tiga pada lagu atau playlist, pilih Share, lalu Copy link.
2. Tempel ke `spotifyUrl`, misalnya `https://open.spotify.com/track/xxxxxxxxxxxxxxxxxxxxxx`.

Link playlist, album, dan podcast juga bisa. Tidak perlu API token. Lagu tidak diputar otomatis.
Lagu pertama tampil di halaman Music dan juga jadi pratinjau di Home. Lagu kedua dan ketiga hanya tampil jika link-nya diisi.

---

## 5. Mengubah isi surat

Buka `src/data/letter.js`. Setiap bagian (pembukaan, harapan, doa, apresiasi) berisi daftar paragraf.
Ganti kalimat contohnya dengan tulisanmu, dan isi `signature` dengan namamu.

---

## 6. Mengubah teks lain dan tampilan

- Teks Home (hero, perkenalan, countdown, catatan penutup), menu, dan footer: `src/data/birthday.js`
- Tanggal ulang tahun & zona waktu countdown: bagian `person` di `src/data/birthday.js`
  (`showAge: false` menyembunyikan umur).
- Warna dan font: bagian `:root` di `src/styles/global.css`

Countdown otomatis menuju 18 Oktober berikutnya memakai zona waktu Asia/Jakarta.
Saat 18 Oktober berlangsung, countdown diganti ucapan selamat, lalu pindah ke tahun berikutnya setelah hari itu berakhir.

---

## 7. Unggah ke GitHub

```bash
git init
git add .
git commit -m "Cypiaa birthday website"
git branch -M main
git remote add origin https://github.com/USERNAME/NAMA-REPO.git
git push -u origin main
```

`node_modules` dan `dist` sudah diabaikan lewat `.gitignore`.

## 8. Deploy ke Vercel

1. Masuk ke https://vercel.com, pilih **Add New → Project**, lalu impor repo GitHub tadi.
2. Vercel mengenali Vite otomatis (Build: `npm run build`, Output: `dist`). Klik **Deploy**.
3. File `vercel.json` sudah mengatur agar `/gallery`, `/wishes`, `/letter`, dan `/music`
   tetap bisa dibuka langsung atau di-refresh tanpa error 404.

Setiap kali kamu mengubah file dan `git push`, Vercel otomatis memperbarui website.

---

## Struktur project

```
public/
  images/            foto (image1.jpg, image2.jpg, ...)
  favicon.svg
src/
  components/        Navbar, Footer, PhotoCard, PhotoLightbox, SpotifyPlayer, WishCard, Countdown, ...
  pages/             Home, Gallery, Wishes, BirthdayLetter, Music, NotFound
  data/              birthday.js, gallery.js, wishes.js, music.js, letter.js   <- yang kamu edit
  lib/               hitung countdown, baca link Spotify
  styles/            global.css, components.css, pages.css, animations.css
  App.jsx  main.jsx
vercel.json
```

## Catatan

- Font (Cormorant Garamond, DM Sans, Caveat) dimuat dari Google Fonts. Jika offline, website memakai font cadangan sistem.
- Pengguna yang mengaktifkan "reduce motion" di perangkatnya tidak akan melihat animasi.
- Lightbox: panah kiri/kanan untuk berpindah, Esc untuk menutup, geser jari di HP.
