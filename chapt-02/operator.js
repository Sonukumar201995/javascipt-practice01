// arithmatic 
let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a % b); // 1
console.log(a ** b); // 1000

// assignment 
let x = 10;
x += 5;
console.log(x); // 15

// comparsion 
console.log(5 == "5");   // true
console.log(5 === "5");  // false
console.log(10 > 5);     // true

// logical 
let age = 20;

console.log(age > 18 && age < 30); // true
console.log(age < 18 || age > 60); // false
console.log(!(age > 18));          // false

// bitwise 
console.log(5 & 1); // 1
console.log(5 | 1); // 5

// ternory 
let ages = 18;

let result = ages >= 18 ? "Adult" : "Minor";
console.log(result); // Adult

// type
console.log(typeof "Hello"); // string
console.log(typeof 10);      // number

let arr = [];
console.log(arr instanceof Array); // true


// string operator
let first = "Hello";
let second = "World";

console.log(first + " " + second);
// Hello World

// nullish coalescing 
let name = null;

console.log(name ?? "Guest"); // Guest

// optional chaining
let user = {};

console.log(user.address?.city); // undefined

// spead operator
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];

console.log(arr2); // [1, 2, 3, 4]

// destructing operator
const [a1, ...rest] = [1, 2, 3, 4];

console.log(a1);    // 1
console.log(rest); // [2, 3, 4]