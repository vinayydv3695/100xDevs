const fs = require("fs");

const data = fs.readFileSync("a.txt", "utf8");
const data2 = fs.readFileSync("b.txt", "utf8");

console.log(data2);
console.log(data);
