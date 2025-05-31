Got it! I'll format everything from now on so it's clean, structured, and easy to paste into Obsidian for notes.

---

## 📘 JavaScript Promises

### 🔹 What is a Promise?

A **Promise** is a JavaScript object that represents the eventual completion (or failure) of an asynchronous operation.

---

### 🔄 States of a Promise

1. **Pending** – Initial state, not yet fulfilled or rejected.
    
2. **Fulfilled** – Operation completed successfully.
    
3. **Rejected** – Operation failed.
    

> Once a Promise is fulfilled or rejected, it becomes **settled** and its state cannot change.

---

### ✅ Creating a Promise

```js
const myPromise = new Promise((resolve, reject) => {
  // simulate async task
  if (/* success condition */) {
    resolve("Success!");
  } else {
    reject("Error!");
  }
});
```

---

### 🔗 Handling a Promise

```js
myPromise
  .then(result => {
    console.log("Resolved with:", result);
  })
  .catch(error => {
    console.error("Rejected with:", error);
  })
  .finally(() => {
    console.log("Always runs");
  });
```

- `.then()` → Runs on success.
    
- `.catch()` → Runs on failure.
    
- `.finally()` → Runs regardless of outcome.
    

---

### 🕒 Example: Delay with Promises

```js
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

wait(1000).then(() => {
  console.log("Waited 1 second");
});
```

---

### 🔁 Promise Chaining

```js
fetch("https://api.example.com/data")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error("Error:", err));
```

---

### 🆚 Why Use Promises?

|Callbacks|Promises|
|---|---|
|Callback hell|Chainable|
|Hard to manage errors|Better error handling|
|Less readable|Cleaner, readable syntax|

---
