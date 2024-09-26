//Membuatu data/File.

const { Console } = require("node:console");
const fs = require("node:fs");
fs.writeFile("hello.txt", "Hello,perkenalkan nama saya Rafi Hafiz Lutfi, saya bersekolah di SMK NEGERI 15 KOTA BEKASI, saya tinggal di PERUM.Mustika Grande jl.Emerald 10 blok E10 no 9 RT 015/RW 013 umur saya 17 tahun", function (error) {
  if (error) {
    Console.error("Terjadi Eror", error);
  } else {
    console.log("File berhasil dibuat");
  }
});
