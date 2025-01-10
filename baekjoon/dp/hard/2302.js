// 극장 좌석
// ⭐️⭐️⭐️
let fs = `9
2
4
7`;
let input = fs.split('\n');
let n = Number(input[0]);
let m = Number(input[1]);
let fix = m > 0 ? input.slice(2, 2 + m).map(Number) : []; // m이 0일 수도 있음
let vip = [0, ...fix, n + 1];
let sections = [];
for (let i = 1; i < vip.length; i++) sections.push(vip[i] - vip[i - 1] - 1);

let d = Array(n + 1).fill(0);
d[1] = 1;
d[2] = 2;
for (let i = 3; i <= n; i++) d[i] = d[i - 1] + d[i - 2];

let result = 1;
for (let x of sections) if (x > 0) result *= d[x];

console.log(result);
