

---

## Node.js — Overview and Core Concepts

### What is Node.js?

Node.js is a **runtime environment** that allows you to run JavaScript **outside the browser**. It is built on **Google Chrome's V8 JavaScript engine**.

- Used for creating **server-side** and **network applications**.
    
- Non-blocking, event-driven architecture.
    
- Runs on various platforms (Windows, Linux, macOS).
    

---

### Why Use Node.js?

- **Asynchronous and Event-Driven**: Handles many connections at once without blocking.
    
- **Single Programming Language**: JavaScript is used on both frontend and backend.
    
- **Fast Execution**: V8 engine compiles JS to native machine code.
    
- **Large Ecosystem**: NPM (Node Package Manager) has thousands of reusable packages.
    
- **Scalable**: Ideal for building scalable applications like APIs and real-time services.
    

---

### Core Features

1. **Non-blocking I/O**  
    All I/O operations (like file or network access) are asynchronous.
    
2. **Single-Threaded Event Loop**  
    Node.js uses a single thread with an event loop for managing concurrency.
    
3. **NPM (Node Package Manager)**  
    Comes with Node.js and allows easy installation of open-source packages.
    
4. **Built-in Modules**  
    Includes core modules like `http`, `fs`, `path`, `events`, and `os`.
    

---

### Basic Node.js Example

```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.write('Hello from Node.js');
  res.end();
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

---

### Common Use Cases

- REST APIs
    
- Real-time chat applications
    
- Command-line tools
    
- Web servers
    
- Microservices
    

---

### Node.js vs Traditional Server Models

|Feature|Node.js|Traditional Servers|
|---|---|---|
|Concurrency|Non-blocking, event-driven|Multi-threaded (blocking)|
|Performance|Lightweight, fast|Depends on threading model|
|Scalability|High|Limited by thread count|

---

