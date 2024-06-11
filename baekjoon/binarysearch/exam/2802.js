/** 나무 자르기 난이도 ⭐️⭐️
  
  1. 아이디어 : 
  - 적어도 M미터의 나무를 집에 가져가기 위해서 절단기에 설정할 수 있는 높이의 최댓값
  - 낮게 설정하면 안 되고, 딱 맞게 설정
 */

const fs = `5 20
4 42 40 26 46`;
const input = fs.split('\n');
const n = input[0].split(' ').map(Number)[0]; // 나무의 수
const m = input[0].split(' ').map(Number)[1]; // 집으로 가지고 갈 나무 길이
const arr = input[1].split(' ').map(Number); // 나무들 길이

// 높이의 최솟값과 최댓값 초기화
let start = 0;
let end = arr.reduce((a, b) => Math.max(a, b));
let result = 0; // 구해야 할 높이

while (start <= end) {
  let mid = parseInt((start + end) / 2); // 절단기 높이
  let total = 0; // 주운 나무
  for (x of arr) if (x > mid) total += x - mid; // 더 크면 자르고 주움
  if (total < m) end = mid - 1; // 주운 나무가 더 적으면 높이 내림
  else {
    result = mid;
    start = mid + 1;
  }
}
console.log(result);
