// 피보나치 함수
// ⭐️⭐️
// 점화식 -> 피보나치
// 0의 개수가 이전 항의 값이고 1의 개수가 현재 항의 값과 같음
const fs = `2
6
22`;
const input = fs.split('\n');
let testCase = Number(input[0]);

d = new Array(100).fill(0);
d[0] = 0;
d[1] = 1;
for (let i = 2; i <= 40; i++) d[i] = d[i - 1] + d[i - 2];
for (let i = 1; i <= testCase; i++) {
  let n = Number(input[i]);
  if (d[n] == 0) console.log(1, 0);
  else console.log(d[n - 1], d[n]);
}
