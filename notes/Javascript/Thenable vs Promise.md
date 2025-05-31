

---


### Thenable

- Any object with a `.then()` method.
    
- It **mimics** a Promise but may not follow the full **Promise/A+ specification**.
    
- Used for interoperability with Promises.
    

```js
const thenable = {
  then: function (resolve, reject) {
    resolve("I am thenable");
  }
};
```

---

### Promise

- Built-in JavaScript object from ES6.
    
- Fully compliant with **Promise/A+**.
    
- Has `.then()`, `.catch()`, `.finally()` and internal state management.
    

```js
const promise = new Promise((resolve, reject) => {
  resolve("I am a promise");
});
```

---

### Key Differences

|Aspect|Thenable|Promise|
|---|---|---|
|Native support|No (custom object)|Yes (built-in)|
|Spec compliance|Not guaranteed|Fully A+ compliant|
|Behavior|May be unpredictable|Predictable, consistent|
|Usage|Often used to mock or wrap values|Used for real async workflows|

---

### Practical Note

JavaScript will treat any thenable like a Promise in `await` or `.then()` chains:

```js
Promise.resolve(thenable).then(console.log); // Logs: I am thenable
```

> Use **Promises** for reliable async code. Use **thenables** only when mocking or interfacing with third-party tools.