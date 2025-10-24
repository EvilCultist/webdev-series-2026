
let person = {
  name: "Alice",
  age: 25,
};

console.log(person.name);
person.city = "Paris";


let nums = [1, 2, 3];
nums.push(4);

for (let n of nums) {
  console.log(n);
}


nums.map((n) => n * 2);
nums.filter((n) => n > 2);
nums.reduce((a, b) => a + b, 0);


