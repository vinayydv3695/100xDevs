

---



### What Is an HTTP Server?

An **HTTP server** handles **requests** from clients (like browsers) and sends back **responses** (HTML, JSON, etc.).  
Node.js provides the built-in `http` module to create simple servers.

---

### Basic HTTP Server Example

```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
```

---

### Key Components

- `http.createServer(handler)`  
    Creates the server with a callback to handle requests.
    
- `req` (IncomingMessage)  
    Represents the incoming request (method, URL, headers).
    
- `res` (ServerResponse)  
    Used to send data back to the client.
    

---

### Common Methods

|Method|Description|
|---|---|
|`res.writeHead(status, headers)`|Set status code + headers|
|`res.write(data)`|Write response body (optional)|
|`res.end([data])`|End response, optionally send data|
|`req.url`|Get request path (e.g., `/about`)|
|`req.method`|HTTP method (GET, POST, etc.)|

---

### Example: Route Handling

```js
const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.end('Home Page');
  } else if (req.url === '/about') {
    res.end('About Page');
  } else {
    res.writeHead(404);
    res.end('Page not found');
  }
});
```

---

### Notes

- Default port for HTTP is `80` (or `3000`, `5000` in dev).
    
- You can serve HTML, JSON, files, etc.
    
- For larger projects, use **Express.js** to simplify routing and middleware.
    

---

