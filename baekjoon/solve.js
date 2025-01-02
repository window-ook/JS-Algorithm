// 문제 풀이 파일
// 연속으로 2잔까지 마실 수 있고, 최대한 많이 마시는게 목표
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

let d = new Array(n + 1).fill(0); // n잔만큼 먹었을 때 가장 많이 먹을 수 있는 양을 기록
d[1] = wine[1];
d[2] = wine[1] + wine[2];
d[3] = Math.max(wine[1] + wine[2], wine[1] + wine[3], wine[2] + wine[3]);
for (let i = 4; i <= n; i++) {
  d[i] = Math.max(
    d[i - 1],
    d[i - 2] + wine[i],
    d[i - 3] + wine[i - 1] + wine[i]
  );
}
console.log(d);
