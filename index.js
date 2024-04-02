const num1 = 1
const num2 = 62
let multiply = num1 * num2;

let random = Math.floor(Math.random() * 10) + 1;

let num3 = 4;
let num4 = 5;
let mod = num3 % num4;

const set = [5, 10, 20, 3, 7];
let max = -Infinity;

for (let i = 0; i < set.length; i++) {
  if (set[i] > max) {
    max = set[i];
  }
}