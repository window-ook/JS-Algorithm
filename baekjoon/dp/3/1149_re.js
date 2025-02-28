let file = `8
71 39 44
32 83 55
51 37 63
89 29 100
83 58 11
65 13 15
47 25 29
60 66 19`;
let input = file.split('\n');
let n = Number(input[0]);
let street = input.slice(1).map((row) => row.split(' ').map(Number));
let dp = Array.from(Array(n), () => Array(3).fill(0));

// 0 = R, 1 = G, 2 = B
for (let i = 0; i < n; i++) dp[0][i] = street[0][i];

// dp[1][0] = Math.max(street[1][0] + dp[0][1], street[1][0] + dp[0][2])
for (let i = 1; i < n; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 0)
      dp[i][j] = Math.min(
        street[i][j] + dp[i - 1][j + 1],
        street[i][j] + dp[i - 1][j + 2]
      );
    else if (j === 1)
      dp[i][j] = Math.min(
        street[i][j] + dp[i - 1][j - 1],
        street[i][j] + dp[i - 1][j + 1]
      );
    else
      dp[i][j] = Math.min(
        street[i][j] + dp[i - 1][j - 2],
        street[i][j] + dp[i - 1][j - 1]
      );
  }
}

console.log(Math.min(...dp[n - 1]));
