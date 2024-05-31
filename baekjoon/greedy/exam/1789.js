// 수들의 합

const fs = `120`;
let input = fs.split('\n');

let s = Number(input[0]);
let i = 0;
let sum = 0;

while (sum <= s) {
  i += 1;
  sum = sum + i;
}
console.log(i - 1);
