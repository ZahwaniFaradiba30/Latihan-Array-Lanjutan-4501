const daftarNilai = [78, 60, 95, 72, 88, 75];

let jumlahLulus = 0;
let jumlahTidakLulus = 0;

console.log("=== PENGOLAHAN NILAI SISWA ===");

console.log("Daftar nilai:");

for (let i = 0; i < daftarNilai.length; i++) {
    console.log("Siswa ke-" + (i + 1) + ": " + daftarNilai[i]);
}

for (const nilai of daftarNilai) {
    if (nilai >= 75) {
        jumlahLulus++;
    } else {
        jumlahTidakLulus++;
    }
}

console.log("Jumlah siswa:", daftarNilai.length);
console.log("Jumlah siswa lulus:", jumlahLulus);
console.log("Jumlah siswa tidak lulus:", jumlahTidakLulus);