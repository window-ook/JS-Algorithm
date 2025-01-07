// 문제 풀이 파일
const fs = `8
1.1
0.7
1.3
0.9
1.4
0.8
0.7
1.4`;
const input = fs.split('\n');
let n = Number(input[0]);
let arr = input.slice(1).map(Number);
let prevMax = arr[0];
let result = arr[0];

for (let i = 0; i < n; i++) {
  prevMax = Math.max(prevMax * arr[i], arr[i]);
  result = Math.max(prevMax, result);
}
result = Math.round(result * 1000) / 1000;
console.log(result.toFixed(3));
