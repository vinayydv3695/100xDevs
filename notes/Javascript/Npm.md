

### What is NPM?

NPM is the default **package manager for Node.js**, used to install and manage **JavaScript dependencies**.

---

### Key Files

- `package.json` – Metadata + dependencies + scripts
    
- `package-lock.json` – Exact versions for reproducible installs
    

---

### Common Commands

```bash
npm init            # Create package.json
npm install         # Install all deps from package.json
npm install <pkg>   # Add a dependency
npm uninstall <pkg> # Remove a dependency
npm run <script>    # Run custom script from package.json
```

---

### Dependency Types

- `"dependencies"` – Required at runtime
    
- `"devDependencies"` – Needed only during development
    

---

### Install Types

- **Local (default)** – Installed in `node_modules/`
    
- **Global** – `npm install -g <pkg>` (for CLI tools)
    

---

### Versioning (SemVer)

- `^1.2.3` – Compatible major updates
    
- `~1.2.3` – Patch updates only
    
- `1.2.3` – Exact version
    

---

