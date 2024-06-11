/** 랜선 자르기 - 난이도 ⭐️⭐️ 
 
  1. 아이디어 : n개보다 많이 만들어도 된다. n개를 만들 수 있는 길이 중 최대의 길이를 구해야 한다
*/

const fs = `4 11
802
743
457
539`;
const input = fs.split('\n');
const k = input[0].split(' ')[0]; // 이미 가지고 있는 랜선 갯수
const n = input[0].split(' ')[1]; // 필요한 랜선 갯수
const arr = []; // 이미 가지고 있는 랜선들의 길이
for (let i = 1; i <= k; i++) {
  arr.push(Number(input[i]));
}

let start = 1; // 안 자르고는 못 만듦
let end = arr.reduce((a, b) => Math.max(a, b));
let result = 0;

while (start <= end) {
  let mid = parseInt((start + end) / 2); // 자를 단위
  let total = 0; // 만들어지는 랜선 갯수
  for (x of arr) total += parseInt(x / mid);

  // total이 n보다 작으면 mid를 내려야 갯수를 늘릴 수 있음
  if (total < n) end = mid - 1;
  else {
    result = mid;
    start = mid + 1;
  }
}
console.log(result);
