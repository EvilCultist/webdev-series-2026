// =============================================================
// CONTROL FLOW IN JAVASCRIPT
// =============================================================

// ---------- 1. if / else if / else ----------
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 75) {
  console.log("Grade: B");
} else {
  console.log("Grade: C or lower");
}
// Output: "Grade: B"


// ---------- 2. truthy / falsy values ----------
let value = 0;

if (value) {
  console.log("Truthy!");
} else {
  console.log("Falsy!");
}
// JS treats false, 0, "", null, undefined, and NaN as falsy


// ---------- 3. switch / case ----------
let fruit = "apple";

switch (fruit) { //same as java cpp
  case "apple":
    console.log("Apples are red (usually).");
    break;
  case "banana":
    console.log("Bananas are yellow.");
    break;
  default:
    console.log("Unknown fruit.");
}
// Remember: `break` prevents fall-through.


// ---------- 4. for loops ----------
for (let i = 0; i < 3; i++) {
  console.log("Count:", i);
}
// Output: 0, 1, 2


// ---------- 5. while loops ----------
let n = 3;
while (n > 0) {
  console.log("Countdown:", n);
  n--;
}
// Output: 3, 2, 1


// ---------- 6. do...while loops ----------
let x = 0;
do {
  console.log("Runs at least once:", x);
  x++;
} while (x < 3);
// Output: 0, 1, 2


// ---------- 7. for...of (iterate over iterable values) ----------
const colors = ["red", "green", "blue"];
for (const color of colors) {
  console.log("Color:", color);
}
// Output: red, green, blue


// ---------- 8. for...in (iterate over object keys) ----------
const person = { name: "Ada", age: 32, job: "Engineer" };
for (const key in person) {
  console.log(key, "=>", person[key]);
}
// Output: name => Ada, age => 32, job => Engineer


// ---------- 9. break and continue ----------
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // skip 3
  if (i === 5) break;    // stop loop entirely
  console.log("i =", i);
}
// Output: 1, 2, 4


// ---------- 10. try / catch / finally ----------
try {
  console.log("About to throw...");
  throw new Error("Oops!");
} catch (err) {
  console.log("Caught error:", err.message);
} finally {
  console.log("Finally always runs!");
}


// ---------- 11. conditional (ternary) operator ----------
let age = 20;
let message = age >= 18 ? "Adult" : "Minor";
let isEven = (x);
console.log(message); // Output: "Adult"


// ---------- 12. short-circuiting with && and || ----------
let loggedIn = false;
let username = loggedIn && "Alice";  // if loggedIn is true, return "Alice"
console.log(username);               // "Alice"

let inputName = '';
let displayName = inputName || "" || "Guest"; // if left side falsy, use right
console.log(displayName);               // "Guest"

