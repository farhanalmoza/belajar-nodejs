// console.log("Hello Han");
// const cetakNama = (nama) => `Hi, nama saya ${nama}`;
// console.log(cetakNama("Farhan"));

// const fs = require("fs"); // core module
// const cetakNama = require("./coba"); // local module
// const moment = require("moment"); // npm module

const coba = require("./coba");

console.log(coba.cetakNama("Farhan"), coba.PI, coba.mahasiswa.cetakMhs(), new coba.Orang());
