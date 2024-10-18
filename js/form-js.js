// Contoh validasi sederhana
function kirimLaporan() {
    // Ambil elemen form
    const nama = document.getElementById('nama').value;
    const jenisKasus = document.getElementById('jenis_kasus').value;
    const deskripsi = document.getElementById('deskripsi').value;
    const bukti = document.getElementById('bukti').value;
    const pesanLaporan = document.getElementById('pesanLaporan');

    // Validasi apakah semua field sudah diisi
    if (nama === "" || jenisKasus === "" || deskripsi === "" || bukti === "") {
        pesanLaporan.innerHTML = "Semua field harus diisi!";
        pesanLaporan.style.color = "red";
        return false;
    } else {
        // Simulasi pengiriman laporan
        pesanLaporan.innerHTML = "Laporan Anda berhasil dikirim!";
        pesanLaporan.style.color = "green";
        return false; // Hentikan submit form sesungguhnya untuk keperluan simulasi
    }
}