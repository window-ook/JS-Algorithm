// 연속부분최대곱
// ⭐️⭐️
const fs = `8
1.1
0.7
1.3
0.9
1.4
0.8
0.7
1.4`;
let input = fs.split('\n');
let n = Number(input[0]);
dp = [];
for (let i = 1; i <= n; i++) dp.push(Number(input[i]));
for (let i = 1; i < n; i++) dp[i] = Math.max(dp[i], dp[i] * dp[i - 1]);
console.log(Math.max(...dp).toFixed(3));
