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

// Variabel awal
let angkaRahasia = Math.floor(Math.random() * 100) + 1;
let nyawa = 10; // Kita beri 10 nyawa

function cekTebakan() {
    const input = document.getElementById('input-tebakan');
    const pesan = document.getElementById('pesan-game');
    const tampilanNyawa = document.getElementById('sisa-nyawa');
    const btnReset = document.getElementById('btn-reset');
    let tebakan = parseInt(input.value);
    
    if (isNaN(tebakan)) {
        pesan.textContent = "Masukkan angka dulu ya!";
        return;
    }

    nyawa--; // Kurangi nyawa setiap menebak
    tampilanNyawa.textContent = `Kesempatan: ${nyawa}`;

    if (tebakan === angkaRahasia) {
        pesan.textContent = `MENANG! 🎉 Angkanya memang ${angkaRahasia}.`;
        pesan.style.color = "green";
        input.disabled = true; // Kunci input agar tidak bisa ngetik lagi
        btnReset.style.display = "inline-block";
    } else if (nyawa === 0) {
        pesan.textContent = `GAME OVER! 💀 Angkanya adalah ${angkaRahasia}.`;
        pesan.style.color = "black";
        input.disabled = true;
        btnReset.style.display = "inline-block";
    } else if (tebakan < angkaRahasia) {
        pesan.textContent = "Terlalu RENDAH! Coba lagi.";
        pesan.style.color = "red";
    } else {
        pesan.textContent = "Terlalu TINGGI! Coba lagi.";
        pesan.style.color = "red";
    }
    input.value = ""; 
}

function resetGame() {
    angkaRahasia = Math.floor(Math.random() * 100) + 1;
    nyawa = 10;
    document.getElementById('sisa-nyawa').textContent = "Kesempatan: 10";
    document.getElementById('pesan-game').textContent = "Game direset! Tebak lagi.";
    document.getElementById('input-tebakan').disabled = false;
    document.getElementById('btn-reset').style.display = "none";
}
const textElement = document.querySelector('header p');
const text = "Saya sedang belajar menjadi Web Developer.";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        textElement.innerHTML = text.substring(0, index + 1) + '<span class="cursor">|</span>';
        index++;
        setTimeout(typeWriter, 100);
    }
}
// Jalankan animasi saat halaman dimuat
window.onload = typeWriter;