// 정수 삼각형
// ⭐️⭐️
// 7 3 8 7 5 -> 30
// dp[i][j] = triangle[i][j] + Math.max(dp[i-1][j-1], dp[i-1][j]);
const file = `5
7
3 8
8 1 0
2 7 4 4
4 5 2 6 5`;
let input = file.split('\n');
let n = Number(input[0]);
let triangle = [];
for (let i = 1; i <= n; i++) triangle.push(input[i].split(' ').map(Number));
let d = Array.from({ length: n }, (_, i) => Array(i + 1).fill(0));
d[0][0] = triangle[0][0];
for (let i = 1; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    let left = j > 0 ? d[i - 1][j - 1] : 0;
    let right = j < i ? d[i - 1][j] : 0;
    d[i][j] = triangle[i][j] + Math.max(left, right);
  }
}
console.log(Math.max(...d[n - 1]));
