const fs = `5 20
4 42 40 26 46`;
const input = fs.split('\n');
const n = input[0].split(' ').map(Number)[0]; // 나무의 수
const m = input[0].split(' ').map(Number)[1]; // 집으로 가지고 갈 나무 길이
const arr = input[1].split(' ').map(Number); // 나무들 길이

let start = 0;
let end = arr.reduce((a, b) => Math.max(a, b));
let result = 0;

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;
  for (x of arr) if (x > mid) total += x - mid;
  // 높이를 올리면 total이 줄어들고, 반대는 total이 늘어남
  if (total < m) end = mid - 1;
  else {
    result = mid;
    start = mid + 1;
  }
}
console.log(result);
