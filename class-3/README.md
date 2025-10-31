# Javascript

[further resources](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
[web.dev](https://web.dev/learn/javascript)

## Setup

### run files via Node.js

Download & install from [https://nodejs.org](https://nodejs.org)

Check installation:

```bash
node -v
npm -v
```

Run JS files:

```bash
node script.js
```

---

## 1. JavaScript Basics vs Python

| Concept      | Python                 | JavaScript                                                   |
| ------------ | ---------------------- | ------------------------------------------------------------ |
| Print output | `print("Hello")`       | `console.log("Hello")`                                       |
| Comments     | `# single line`        | `// single line` or `/* multi-line */`                       |
| Variables    | `x = 10`               | `let x = 10;` or `const x = 10;`                             |
| Strings      | `'hello'` or `"hello"` | `'hello'`, `"hello"`, or `` `hello` `` (template literal)    |
| Null/None    | `None`                 | `null` or `undefined`                                        |
| Equality     | `==` or `is`           | `==` (loose) or `===` (strict)                               |
| Blocks       | Indentation            | `{ ... }`                                                    |
| Function     | `def add(a, b):`       | `function add(a, b) { ... }` or `const add = (a, b) => ...;` |

---

## 2. Variables and Types

### Declaring Variables

[online resources for more detail](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/)

```js
let x = 10; // can be reassigned
const y = 20; // constant
var z = 30; // old-style, avoid
```

### Dynamic Typing

Like Python, JS is dynamically typed:

```js
let a = 10;
a = "Now I’m a string!";
```

### Common Types

- `Number`
- `String`
- `Boolean`
- `Object`
- `Array`
- `undefined`, `null`

Example:

```js
console.log(typeof 42); // "number"
console.log(typeof "hi"); // "string"
console.log(typeof [1, 2, 3]); // "object"
```

---

## 3. Control Flow

### If/Else

```js
let score = 85;

if (score > 90) {
  console.log("A");
} else if (score > 75) {
  console.log("B");
} else {
  console.log("C");
}
```

### Loops

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}

let arr = ["apple", "banana", "cherry"];
for (let fruit of arr) {
  console.log(fruit);
}
```

While loop:

```js
let n = 0;
while (n < 3) {
  console.log(n);
  n++;
}
```

---

## 4. Functions

### Function Declarations

```js
function add(a, b) {
  return a + b;
}
console.log(add(2, 3));
```

### Arrow Functions

```js
const add = (a, b) => a + b;
```

Equivalent to:

```python
add = lambda a, b: a + b
```

---

## 5. Objects and Arrays

### Objects (like c structs)

```js
let person = {
  name: "Alice",
  age: 25,
};

console.log(person.name);
person.city = "Paris";
```

### Arrays

```js
let nums = [1, 2, 3];
nums.push(4);

for (let n of nums) {
  console.log(n);
}
```

### Common Methods

```js
nums.map((n) => n * 2);
nums.filter((n) => n > 2);
nums.reduce((a, b) => a + b, 0);
```

---

## 6. ⚙️ Modules

### Exporting and Importing

`math.js`:

```js
export function add(a, b) {
  return a + b;
}
```

`main.js`:

```js
import { add } from "./math.js";
console.log(add(2, 3));
```

If using **CommonJS** (default for Node before ES modules):

```js
// math.js
module.exports = { add };

// main.js
const { add } = require("./math");
```

---

## 7. ⏱️ Asynchronous JavaScript

Unlike Python, JS is **single-threaded** and uses an **event loop**.

### Callbacks

```js
setTimeout(() => {
  console.log("Hello after 2 seconds");
}, 2000);
```

### Promises

```js
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data received"), 1000);
  });
}

fetchData().then((data) => console.log(data));
```

### Async/Await

```js
async function main() {
  let data = await fetchData();
  console.log(data);
}

main();
```

Equivalent to Python’s:

```python
async def main():
    data = await fetch_data()
```

---

## 8. 🌐 Working with Files (Node.js APIs)

### Read a File

```js
import { readFileSync } from "fs";

const data = readFileSync("example.txt", "utf8");
console.log(data);
```

### Write a File

```js
import { writeFileSync } from "fs";

writeFileSync("output.txt", "Hello Node!");
```

---

## 9. 🧩 Practice Ideas

1. **FizzBuzz**
   Print numbers 1–100, but replace:
   - Multiples of 3 with “Fizz”
   - Multiples of 5 with “Buzz”
   - Multiples of both with “FizzBuzz”

2. **File Reader CLI**
   - Take a filename as input
   - Read and count words in it

3. **API Fetcher (Advanced)**
   - Use `fetch()` to call a public API
   - Log JSON data

---

## 💡 Tips for Pythonistas

- Use `===` instead of `==` for equality
- Watch out for **hoisting** (variables declared with `var`)
- Functions are **first-class** (just like Python)
- Objects are **mutable references**
- Indentation doesn’t define scope—**braces `{}`** do!

---

## 📚 Resources

- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [Node.js Docs](https://nodejs.org/api/)
- [JavaScript.info](https://javascript.info/)
- [Exploring JS](https://exploringjs.com/)

---
