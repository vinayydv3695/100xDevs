#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { Command } = require("commander");

const program = new Command();

program
  .name("count-numbers")
  .description("Counts numbers in a given file")
  .version("1.0.0")
  .argument("<file>", "Path to the file")
  .action((file) => {
    const fullPath = path.resolve(file);

    fs.readFile(fullPath, "utf8", (err, data) => {
      if (err) {
        console.error("Error reading the file:", err.message);
        process.exit(1);
      }

      const matches = data.match(/-?\d+(\.\d+)?/g);
      const count = matches ? matches.length : 0;

      console.log(
        `Found ${count} number${count === 1 ? "" : "s"} in "${file}".`,
      );
    });
  });

program.parse();
