# Wedding Invitation

Aplikasi undangan pernikahan digital berbasis Astro, React, dan SQLite.

## Pengembangan

1. Salin `.env.example` menjadi `.env` dan ubah `ADMIN_PASSWORD`.
2. Instal dependensi dengan `npm install`.
3. Jalankan `npm run dev`.
4. Buka `/` untuk undangan, `/admin` untuk dashboard, dan `/qrcode` untuk QR generator.

Database SQLite dibuat otomatis di `database/wedding.db` saat aplikasi pertama kali dijalankan.

Struktur PHP lama masih tersedia sebagai referensi selama proses migrasi.
