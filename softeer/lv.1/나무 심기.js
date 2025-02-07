// 구현

let file = `3
-5 1 -4`;
let input = file.split('\n');
let n = Number(input[0]);
let f = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

function solve() {
  let negative = f[0] * f[1];
  let positive = f[f.length - 2] * f[f.length - 1];
  console.log(Math.max(negative, positive));
}

solve();
