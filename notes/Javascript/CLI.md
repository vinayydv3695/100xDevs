

---

## Creating a CLI App in JavaScript with Commander.js

### Step 1: Initialize the Project

```bash
mkdir my-cli-app
cd my-cli-app
npm init -y
```

---

### Step 2: Install Commander

```bash
npm install commander
```

---

### Step 3: Create Entry File

Create `index.js` (or `cli.js`):

```js
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

```

---

### Step 4: Make It Executable

In `package.json`, add:

```json
"bin": {
  "mycli": "./index.js"
}
```

Make the script executable:

```bash
chmod +x index.js
```

---

### Step 5: Link It Locally

```bash
npm link
```

Now you can run it as:

```bash
mycli greet Vinay
mycli greet Vinay --uppercase
```

---

### Notes

- `program.command()` defines a new command.
    
- `.option()` adds flags/options.
    
- `.action()` defines the behavior.
    
- `program.parse()` starts parsing CLI input.
    

---
