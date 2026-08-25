let prompt = require("prompt-sync")();

let sum = 0;

let n = prompt("Enter the number: ");

n = Number.parseInt(n);

for (let i = 1; i <= n; i++) {
    sum += i;
}

console.log("Sum of natural numbers: " + sum);