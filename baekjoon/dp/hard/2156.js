// 포도주 시식
// ⭐️⭐️⭐️
// 경우의 수
// i번째 안 마시기 : d[i - 1]
// i번째 마시기 : wine[i] + d[i - 2], wine[i] + wine[i - 1] + d[i - 3]
const fs = `6
6
10
13
9
8
1`;
const input = fs.split('\n');
let n = Number(input[0]);
let wine = [0];
for (let i = 1; i <= n; i++) wine.push(Number(input[i]));

let d = new Array(n).fill(0);
d[1] = wine[1];
d[2] = wine[1] + wine[2];
d[3] = Math.max(wine[1] + wine[2], wine[1] + wine[3], wine[2] + wine[3]);
for (let i = 4; i <= n; i++) {
  d[i] = d[i - 1];
  d[i] = Math.max(d[i], wine[i] + d[i - 2]);
  d[i] = Math.max(d[i], wine[i] + wine[i - 1] + d[i - 3]);
}
