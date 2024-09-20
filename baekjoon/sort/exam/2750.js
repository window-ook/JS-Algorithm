/** 수 정렬하기 - 난이도 ⭐️ */
const fs = `5
5
2
3
4
1`;
const input = fs.split('\n');
const n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) arr.push(Number(input[i]));
arr.sort((a, b) => a - b);
for (let i = 0; i < n; i++) console.log(arr[i]);
