const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;
const FILES_DIR = path.join(__dirname, "files");

app.get("/files", (req, res) => {
  fs.readdir(FILES_DIR, (err, files) => {
    if (err) return res.status(500).send("Internal Server Error");
    res.json(files);
  });
});

app.get("/file/:filename", (req, res) => {
  const filePath = path.join(FILES_DIR, req.params.filename);
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) return res.status(404).send("File not found");
    res.send(data);
  });
});

app.use((req, res) => {
  res.status(404).send("Not Found");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
