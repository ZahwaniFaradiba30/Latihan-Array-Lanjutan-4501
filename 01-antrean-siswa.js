const antreanSiswa = ["Andi", "Budi", "Citra"];
console.log(antreanSiswa);

antreanSiswa.push("Deni");
console.log(antreanSiswa);

antreanSiswa.unshift("Eka");
console.log(antreanSiswa);

const siswaDipanggil = antreanSiswa.shift();
console.log(siswaDipanggil);
console.log(antreanSiswa);

const siswaDihapus = antreanSiswa.pop();
console.log(antreanSiswa);
console.log(siswaDihapus);

console.log(antreanSiswa);