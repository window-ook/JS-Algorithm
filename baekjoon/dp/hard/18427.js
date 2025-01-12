// 함께 블록 쌓기
// ⭐️⭐️⭐️
let file = `3 3 5
2 3 5
3 5
1 2 3`;
let input = file.split('\n');
let [n, m, h] = input[0].split(' ').map(Number);
let block = input.slice(1, n + 1).map((line) => line.split(' ').map(Number));
let d = Array(n + 1)
  .fill()
  .map(() => Array(h + 1).fill(0));

d[0][0] = 1;
for (let i = 1; i <= n; i++) {
  for (let j = 0; j <= h; j++) {
    d[i][j] = d[i - 1][j];
    for (let b of block[i - 1]) {
      if (j - b >= 0) {
        d[i][j] += d[i - 1][j - b];
        d[i][j] %= 10007;
      }
    }
  }
}
console.log(d);
