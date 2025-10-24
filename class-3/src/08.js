// Load Node.js built-in 'fs' module
const fs = require("fs");

// ---------- 1. Writing a simple text file (synchronously) ----------
fs.writeFileSync("example_sync.txt", "Hello, world!");
console.log("File written synchronously!");

// ---------- 2. Writing a file asynchronously ----------
fs.writeFile("example_async.txt", "Hello from async write!", (err) => {
  if (err) {
    console.error("Error writing file:", err);
  } else {
    console.log("File written asynchronously!");
  }
});

// ---------- 3. Appending to a file ----------
fs.appendFile("example_async.txt", "\nThis is appended text.", (err) => {
  if (err) {
    console.error("Error appending file:", err);
  } else {
    console.log("Text appended!");
  }
});

// ---------- 4. Writing JSON to a file ----------
const data = {
  name: "Ada",
  age: 32,
  job: "Engineer"
};

fs.writeFileSync("data.json", JSON.stringify(data, null, 2));
console.log("JSON file written!");

// ---------- 5. Reading a file ----------
const content = fs.readFileSync("data.json", "utf-8");
console.log("File content:\n", content);

