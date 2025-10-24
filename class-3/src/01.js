// ============================
// 1. Primitive Types
// ============================
console.log("=== Primitive Types ===");

let num = 42;                // Number
let str = "Hello";           // String
let bool = true;             // Boolean
let undef;                   // Undefined (no value assigned)
let n = null;                // Null
let big = 123456789012345678901234567890n; // BigInt
let sym = Symbol("id");      // Symbol (unique identifier)

console.log(typeof num, num);
console.log(typeof str, str);
console.log(typeof bool, bool);
console.log(typeof undef, undef);
console.log(typeof n, n);    // interestingly, typeof null === "object" (historical bug)
console.log(typeof big, big);
console.log(typeof sym, sym);

// ============================
// 2. Objects and Arrays
// ============================
console.log("\n=== Objects and Arrays ===");

let obj = { name: "Alice", age: 25 };
let arr = [1, 2, 3];
let func = function() { return "I’m a function!"; };

console.log(typeof obj, obj);
console.log(typeof arr, arr);         // arrays are actually "objects"
console.log(Array.isArray(arr));      // check if it's an array
console.log(typeof func, func());

// ============================
// 3. Type Coercion
// ============================
console.log("\n=== Type Coercion ===");

// Implicit conversions
console.log(4 + 3);           // 7 (number + number)
console.log('4' + '3');       // '43' (string + string)
console.log(4 + '3');         // '43' (number converted to string)
console.log('4' - '3');       // 1 (strings converted to numbers)
console.log('4' * 2);         // 8 (string converted to number)
console.log('4' + + '3');     // '43' ('+ "3"' -> number 3, but still concatenated)
console.log(4 +  + '3');      // 7 ('+ "3"' -> number 3)
console.log('4' + 3 + 2);     // '432'
console.log('4' + (3 + 2));   // '45'

// Explicit conversions
console.log(Number('123'));   // 123
console.log(String(123));     // "123"
console.log(Boolean(0));      // false
console.log(Boolean(1));      // true
console.log(parseInt("42px")); // 42
console.log(parseFloat("3.14")); // 3.14
// console.log(Number("42px")); // 42

// ============================
// 4. Equality
// ============================
console.log("\n=== Equality ===");

console.log(2 == '2');   // true  -> coercion happens
console.log(2 === '2');  // false -> strict comparison
console.log(null == undefined);  // true
console.log(null === undefined); // false
console.log(0 == false);         // true
console.log(0 === false);        // false
console.log('' == false);        // true
console.log('' === false);       // false

// ============================
// 5. NaN and Special Values
// ============================
console.log("\n=== NaN and Special Values ===");

console.log(0 / 0);             // NaN
console.log(typeof NaN);        // "number"
console.log(NaN === NaN);       // false
console.log(Number.isNaN(NaN)); // true

console.log(1 / 0);             // Infinity
console.log(-1 / 0);            // -Infinity
console.log(isFinite(1 / 0));   // false
console.log(isFinite(99));      // true

// ============================
// 6. Objects vs Primitives
// ============================
console.log("\n=== Objects vs Primitives ===");

let strPrimitive = "hello";
let strObject = new String("hello");

console.log(typeof strPrimitive); // string
console.log(typeof strObject);    // object
console.log(strPrimitive == strObject);  // true (value comparison)
console.log(strPrimitive === strObject); // false (different types)

// ============================
// 7. typeof and instanceof
// ============================
console.log("\n=== typeof and instanceof ===");

console.log(typeof 123);             // "number"
console.log(typeof new Number(123)); // "object"
console.log((123).constructor === Number); // true
console.log(new Number(123) instanceof Number); // true
console.log([] instanceof Array);    // true
console.log({} instanceof Object);   // true
//console.log(() => {} instanceof Function); // true

