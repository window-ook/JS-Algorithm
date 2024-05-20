// 예산
// 난이도 ⭐️⭐️

const fs = `4
120 110 140 150
485`;
const input = fs.split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);
const m = Number(input[2]);

let start = 1;
let end = arr.reduce((a, b) => Math.max(a, b));
let result = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;
  for (x of arr) {
    total += Math.min(mid, x);
  }

  if (total <= m) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}
console.log(result);
