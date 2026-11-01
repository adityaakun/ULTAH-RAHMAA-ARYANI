# Panduan Recode Countdown Cypiaa

Dokumen ini menjelaskan bagian yang boleh diubah saat memperbarui countdown tanpa merusak halaman lain.

## File yang berkaitan

- `src/components/Countdown.jsx`: state React, timer, dan markup countdown.
- `src/lib/countdown.js`: perhitungan tanggal, jam, dan zona waktu.
- `src/data/birthday.js`: tanggal lahir, zona waktu, teks countdown, dan ucapan ulang tahun.
- `src/styles/components.css`: tampilan countdown dan responsivitasnya.

## Arahan untuk AI coding / recode

> Refactor hanya fitur countdown ulang tahun di proyek ini. Baca `RECODE-GUIDE.md` terlebih dahulu. Pertahankan struktur React/Vite dan konfigurasi yang ada. Targetnya 18 Oktober pukul 00.00 WIB, dengan zona waktu `Asia/Jakarta` yang tidak bergantung pada zona waktu perangkat pengunjung. Tampilkan hari, jam, menit, dan detik sebelum hari-H; tampilkan ucapan ulang tahun selama tanggal 18 Oktober WIB; setelah hari-H selesai, hitung menuju tahun berikutnya. Jaga aksesibilitas, responsivitas mobile, dukungan `prefers-reduced-motion`, dan bersihkan timer/listener saat komponen dilepas. Jangan mengubah galeri, musik, navigasi, surat, daftar ucapan, atau halaman lain. Jangan menambahkan dependency jika tidak diperlukan. Berikan perubahan lengkap dan pastikan `npm run build` berhasil.

## Hal yang bisa dikustomisasi

1. Untuk mengubah tanggal lahir atau zona waktu, edit `person` di `src/data/birthday.js`.
2. Untuk mengubah teks menuju ulang tahun dan ucapan hari-H, edit `home.countdown` di file yang sama.
3. Untuk mengubah tampilan, edit bagian `Countdown` di `src/styles/components.css`.
4. Jangan membuat rumus countdown kedua di komponen. `src/lib/countdown.js` adalah sumber perhitungan waktunya.

## Checklist setelah recode

- [ ] Countdown menunjukkan empat unit: hari, jam, menit, detik.
- [ ] Waktu dihitung berdasarkan `Asia/Jakarta`, bukan timezone perangkat.
- [ ] Tanggal 18 Oktober menampilkan ucapan ulang tahun.
- [ ] Setelah 18 Oktober, target pindah ke tahun berikutnya.
- [ ] Tampilan tidak melebar atau bertumpuk di layar HP.
- [ ] Timer dan event listener dibersihkan saat komponen dilepas.
- [ ] `npm run build` berhasil.
- [ ] Halaman galeri, wishes, letter, dan music tetap berfungsi.
