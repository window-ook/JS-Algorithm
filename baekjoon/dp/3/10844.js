// 쉬운 계단 수
// ⭐️⭐️⭐️
let file = `2`;
let n = Number(file);
let dp = Array.from(Array(n + 1), () => Array(10).fill(0));
dp[1][0] = 0;
for (let j = 1; j <= 9; j++) dp[1][j] = 1;

for (let i = 2; i <= n; i++) {
  for (let j = 0; j <= 9; j++) {
    dp[i][j] = 0;
    if (j > 0) dp[i][j] += dp[i - 1][j - 1];
    if (j < 9) dp[i][j] += dp[i - 1][j + 1];
    dp[i][j] %= Number(1e9);
  }
}

let result = 0;
for (let j = 0; j <= 9; j++) {
  result += dp[n][j];
  result %= Number(1e9);
}
console.log(result);
