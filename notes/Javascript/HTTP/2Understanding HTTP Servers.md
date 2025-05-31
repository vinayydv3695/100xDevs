

---

### 1. **HTTP Protocol – What Does It Solve?**

- HTTP (HyperText Transfer Protocol) is the protocol used for communication between clients (like browsers) and servers.
    
- It allows fetching resources like HTML pages, JSON APIs, images, etc.
    
- It follows a **stateless** request–response model over TCP/IP.
    

---

### 2. **Exploring the Network Tab – Chrome Developer Tools**

- Open DevTools (`F12` or `Ctrl+Shift+I`) → **Network** tab.
    
- Shows each HTTP request:
    
    - **Method** (`GET`, `POST`, etc.)
        
    - **URL**
        
    - **Status Code**
        
    - **Request/Response Headers**
        
    - **Payload** (for `POST`, `PUT`)
        
    - **Time taken**
        

---

### 3. **Request–Response Model (Node.js Example)**

```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, this is a response from the server');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
```

- **req**: Incoming HTTP request (method, URL, headers, body)
    
- **res**: Response we send back to the client
    
- `writeHead()` sets the status code and headers
    
- `res.end()` sends the body and ends the response
    

---

## 4. **Important HTTP Constructs**

---

### a. **Domain Name / IP**

- **Domain name**: Human-readable address (e.g., `google.com`)
    
- **IP address**: Machine-readable address (e.g., `172.217.0.46`)
    
- The **DNS (Domain Name System)** translates domain → IP.
    

Example:

```txt
Client -> DNS lookup -> Server IP -> HTTP Request
```

---

### b. **Port**

- A port is a **logical channel** for network communication.
    
- HTTP usually uses port `80`, HTTPS uses `443`.
    
- In development, we often use ports like `3000`, `8080`.
    

```js
server.listen(3000); // Server listens on port 3000
```

---

### c. **HTTP Methods**

HTTP methods define **what action** you want to perform on a resource.

|Method|Purpose|Use Case|
|---|---|---|
|GET|Read data|Get user info, fetch page|
|POST|Create data|Submit a form, add item to DB|
|PUT|Update/replace data|Update full user info|
|PATCH|Update/modify data|Modify partial user info|
|DELETE|Delete data|Remove a resource|

Example code:

```js
const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.end('GET → Fetching data');
  } else if (req.method === 'POST') {
    res.end('POST → Creating data');
  } else if (req.method === 'PUT') {
    res.end('PUT → Replacing data');
  } else if (req.method === 'DELETE') {
    res.end('DELETE → Deleting data');
  } else {
    res.writeHead(405);
    res.end('Method Not Allowed');
  }
});
```

---

### d. **Plaintext vs JSON vs HTML Response**

- **Plaintext**: Simple text (`text/plain`)
    
- **JSON**: Data exchange format for APIs (`application/json`)
    
- **HTML**: Webpage content (`text/html`)
    

```js
if (req.url === '/json') {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'JSON response' }));
} else if (req.url === '/html') {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>HTML Page</h1>');
} else {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Plaintext response');
}
```

---

### e. **Status Codes**

Status codes show the **result** of the HTTP request.

|Code|Meaning|
|---|---|
|200|OK|
|201|Created|
|400|Bad Request|
|404|Not Found|
|405|Method Not Allowed|
|500|Internal Server Error|

Example:

```js
if (req.url !== '/valid') {
  res.writeHead(404);
  res.end('Not Found');
}
```

---

### f. **Body & Headers**

- **Headers**: Metadata about request/response (e.g., `Content-Type`)
    
- **Body**: Actual content (e.g., JSON data in POST)
    

Example:

```js
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json',
    'X-Custom-Header': 'MyApp'
  });

  const body = JSON.stringify({ success: true });
  res.end(body);
});
```

---

### g. **Routes**

- Routes are paths on the server (e.g., `/`, `/about`)
    
- You use `req.url` to match routes manually in core Node.js.
    

```js
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Home Page');
  } else if (req.url === '/about') {
    res.end('About Page');
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});
```

---

## ✅ Summary

- Use `http.createServer()` to create a basic HTTP server.
    
- Handle routes using `req.url` and methods using `req.method`.
    
- Use correct content types (`text/plain`, `application/json`, etc.)
    
- Send appropriate status codes.
    
- Manually parse body if needed for `POST`/`PUT` (or use Express for ease).
    

---

Let me know if you want this **converted to Express.js** or if you want to explore **request body parsing, CORS, or middlewares** next.