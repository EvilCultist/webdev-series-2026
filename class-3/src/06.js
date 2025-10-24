// =============================================================
// RANDOMNESS IN JAVASCRIPT
// =============================================================

// ---------- 1. Basic random number ----------
console.log(Math.random()); 
// Output: a float between 0 (inclusive) and 1 (exclusive), e.g., 0.73245


// ---------- 2. Random number in a range ----------
function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}

console.log(randomRange(10, 20)); 
// Output: float between 10 and 20


// ---------- 3. Random integer in a range ----------
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomInt(1, 6)); 
// Output: an integer between 1 and 6 (like a dice roll)


// ---------- 4. Random choice from an array ----------
const colors = ["red", "green", "blue", "yellow"];
function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

console.log(randomChoice(colors)); 
// Output: one random color


// ---------- 5. Shuffle an array (Fisher–Yates algorithm) ----------
function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

const nums = [1, 2, 3, 4, 5];
console.log(shuffleArray(nums));
// Output: same numbers, random order


// ---------- 6. Random boolean ----------
function randomBool() {
  return Math.random() < 0.5;
}

console.log(randomBool()); 
// Output: true or false, roughly 50/50


// ---------- 7. Random string (e.g., token or password) ----------
function randomString(length) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

console.log(randomString(8)); 
// Output: e.g. "aZ1q8GhK"

