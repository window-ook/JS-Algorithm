// 구현, 누적합

let file = require('fs').readFileSync('/dev/stdin');
let input = file.toString().trim().split('\n');
let [n, m] = input[0].split(' ').map(Number);
let graph = input.slice(1, n + 1).map((row) => row.split(' ').map(Number));
// 각 라인의 1의 개수를 카운트
let count = graph.map((row) => row.filter((v) => v == 1).length);

for (let i = 1; i < 3; i++) {
  // L ~ R에 해당하면 가진 1의 개수를 하나씩 빼면 됨
  let [L, R] = input[n + i].split(' ').map(Number);
  (L -= 1), (R -= 1);
  for (let j = L; j <= R; j++) if (count[j] > 0) count[j] -= 1;
}

let result = count.filter((v) => v > 0).reduce((a, b) => a + b);
console.log(result);
