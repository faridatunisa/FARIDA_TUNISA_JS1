// if,else,nested if

// Pernyataan if , else
let usia = 30;

if (usia >= 20) {
  console.log("Anda sudah dewasa.");
} else {
  console.log("Anda masih di bawah umur.");
}

// Nested if (if bersarang)
let suhu = 27;

if (suhu > 32) {
  console.log("Suhu sangat panas.");
} else if (suhu > 20) {
  console.log("Suhu nyaman.");
} else {
  console.log("Suhu dingin.");
}


// Switch case

let pilihan = "C";

switch (pilihan) {
  case "A":
    console.log("Anda memilih opsi A.");
    break;
  case "B":
    console.log("Anda memilih opsi B.");
    break;
  case "C":
    console.log("Anda memilih opsi C.");
    break;
  default:
    console.log("Pilihan tidak valid.");
}


// For Statement 1

for (let i = 1; i <= 5; i++) {
  console.log("Angka ke-" + i);
}

// For Statement untuk mengakses elemen-elemen dalam sebuah array

let buah = ["mangga", "pir", "alpukat", "nanas", "jeruk"];

for (let i = 0; i < buah.length; i++) {
  console.log("Buah ke-" + (i + 1) + ": " + buah[i]);
}


// While, Do While

// Contoh While 

let nilai = 60;

while (nilai <= 70) {
  console.log("Perulangan ke-" + nilai);
  nilai++;
}

// Do While

let angka = 1;

do {
  console.log("Perulangan ke-" + angka);
  angka++;
} while (angka <= 5);

// Function

// Definisi sebuah fungsi sederhana
function sapa(nama) {
  console.log("Halo, " + nama + "!");
}

// Memanggil fungsi
sapa("Anisa");
sapa("Ahmad");



