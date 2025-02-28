// 누적합

let file = `5 3
10 50 20 70 100
1 3
3 4
1 5`;
let input = file.split('\n');
let [n, k] = input[0].split(' ').map(Number);
let s = [0, ...input[1].split(' ').map(Number)];
let prefixSum = [0];
for (let i = 1; i <= n; i++) prefixSum[i] = prefixSum[i - 1] + s[i];
for (let i = 1; i <= k; i++) {
  let [start, end] = input[i + 1].split(' ').map(Number);
  let result = (prefixSum[end] - prefixSum[start - 1]) / (end - start + 1);
  console.log(result.toFixed(2));
}
