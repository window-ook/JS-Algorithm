/** ATM 대기시간 - 난이도 ⭐️ */
const fs = `5
3 1 4 3 2`;

const input = fs.split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

arr.sort((a, b) => a - b);

let acc = 0;
let answer = 0;
for (let i = 0; i < n; i++) {
  acc += arr[i]; // i번째
  answer += acc;
}

console.log(answer);
