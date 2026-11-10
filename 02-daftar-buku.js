const daftarBuku= [
    "HTML Dasar",
    "CSS Dasar",
    "JavaScript Dasar",
    "PHP Dasar"
];

console.log(daftarBuku);

const judulDicari = "CSS Dasar";
const indeksBuku = daftarBuku.indexOf(judulDicari);

if (indeksBuku !== -1) {
    console.log(`${judulDicari} ditemukan pada indeks${indeksBuku}.`);
} else {
    console.log(`${judulDicari} tidak ditemukan.`);
}

const dataBuku = daftarBuku.splice(1, 1, "CSS Modern");
console.log(dataBuku);
console.log(daftarBuku);

daftarBuku.splice(3, 0, "Git Dasar");
console.log(daftarBuku);

const bukuDihapus = daftarBuku.splice(4, 1);
console.log(bukuDihapus);
console.log(daftarBuku);

console.log(daftarBuku);
console.log(daftarBuku);