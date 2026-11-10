const daftarPeserta = ["Andi", "Budi", "Citra", "Deni", "Eka"];

const namaDicari = "Citra";

const namaDitemukan = daftarPeserta.includes(namaDicari);

console.log("=== PENCARIAN PESERTA LOMBA ===");

if (namaDitemukan) {

    const indeks = daftarPeserta.indexOf(namaDicari);

    console.log("Nama:", namaDicari);
    console.log("Status: Terdaftar");
    console.log("Indeks:", indeks);
    console.log("Nomor urut:", indeks + 1);

} else {

    console.log("Nama:", namaDicari);
    console.log("Status: Belum terdaftar");

}