// 1로 만들기
// ⭐️⭐️
let file = `10`;
let n = Number(file);
let d = Array(n + 1).fill(0);
for (let i = 2; i <= n; i++) {
  d[i] = d[i - 1] + 1;
  if (i % 2 == 0) d[i] = Math.min(d[i], d[i / 2] + 1);
  if (i % 3 == 0) d[i] = Math.min(d[i], d[i / 3] + 1);
}
console.log(d[n]);
