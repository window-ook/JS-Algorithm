/** K번째 수 - 난이도 ⭐️ 

    1. 아이디어
    - 3*3이라면 [[1, 2, 3], [2, 4, 6], [3, 6 ,9]]
    - b는 [1, 2, 2, 3, 3, 4, 6, 6, 9]

    2. 자료구조
*/
const fs = `3
7`;
const input = fs.split('\n');
const [n, k] = [Number(input[0]), Number(input[1])];
let start = 1;
let end = 10 ** 10;
let result = 0;

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;
  for (let i = 1; i <= n; i++) total += Math.min(n, parseInt(mid / i));
  if (total >= k) {
    result = mid;
    end = mid - 1;
  } else start = mid + 1;
}
console.log(result);
