// 누적합

let file = `5 3
10 50 20 70 100
1 3
3 4
1 5`;
let input = file.split('\n');
let [n, k] = input[0].split(' ').map(Number);
let scores = input[1].split(' ').map(Number);

let preSum = new Array(n + 1).fill(0);
for (let i = 1; i <= n; i++) preSum[i] = preSum[i - 1] + scores[i - 1];

for (let i = 1; i <= k; i++) {
  let [start, end] = input[i + 1].split(' ').map(Number);
  let total = preSum[end] - preSum[start - 1];
  let avg = total / (end - start + 1);
  console.log(avg.toFixed(2));
}
