// core module
// file system
const fs = require("fs");

// menuliska string ke file (synchronous)
// try {
//   fs.writeFileSync("data/test.txt", "Hello world!");
// } catch (e) {
//   console.log(e);
// }

// menuliskan string ke file (asynchronous)
// fs.writeFile("data/test.txt", "Hello World secara async", (err) => {
//   console.log(err);
// });

// membaca isi file (Synchronous)
// const data = fs.readFileSync("data/test.txt", "utf-8");
// console.log(data);

// membaca isi file (Asynchronous)
// fs.readFile("data/test.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// Readline
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan nama Anda : ", (nama) => {
  rl.question("Masukkan NPM : ", (NPM) => {
    const contact = { nama, NPM };
    const file = fs.readFileSync("data/contacts.json", "utf-8");
    const contacts = JSON.parse(file);

    contacts.push(contact);

    fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
    console.log("Terimakasih sudah memasukkan data");

    rl.close();
  });
});
