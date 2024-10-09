// Contoh validasi sederhana
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    // Tambahkan logika validasi di sini
    // Contoh: Periksa apakah semua field sudah terisi
    // Jika valid, kirim data ke server menggunakan AJAX
    console.log('Form submitted');
});