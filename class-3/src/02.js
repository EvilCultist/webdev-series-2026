// JavaScript: equality (==) vs strict equality (===)

let a = 5;
let b = 5;
let c = [1, 2];
let d = [1, 2];

console.log(a == b);  // true — same value
console.log(a === b); // true — same type and value

console.log(c == d);  // false — arrays are compared by reference
console.log(c === d); // false — still different objects

// Comparing different types
console.log(5 == "5");   // true — '==' coerces types
console.log(5 === "5");  // false — strict equality, no coercion

console.log(0 == false); // true — both considered falsy
console.log(0 === false);// false — number vs boolean

console.log([] == false); // true — weird coercion ([] -> "" -> 0)
console.log([] === false);// false — different types

// Extra examples of JS quirks
console.log(null == undefined);  // true
console.log(null === undefined); // false
console.log(NaN == NaN);         // false — NaN is never equal to itself
console.log(Object.is(NaN, NaN)); // true — Object.is fixes that

