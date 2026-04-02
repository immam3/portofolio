// Mengambil elemen tombol
const tombolSapa = document.getElementById('btn-mode');

// Fungsi saat tombol diklik
tombolSapa.addEventListener('click', function() {
    // Meminta input nama dari pengunjung
    let namaPengunjung = prompt("Halo! Siapa nama Anda?");
    
    if (namaPengunjung) {
        // Menampilkan pesan balasan otomatis
        alert("Salam kenal, " + namaPengunjung + "! Terima kasih sudah berkunjung ke portofolio Immam Solihin.");
        
        // Mengubah teks di header secara otomatis
        document.querySelector('header p').textContent = "Senang bertemu dengan Anda, " + namaPengunjung + "!";
    }
});