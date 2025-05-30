const fs = require("fs");
const contents = fs.readFileSync("a.txt", "utf8");

console.log(contents);
