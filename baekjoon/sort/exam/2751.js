/** 수 정렬하기 2 - 난이도 ⭐️ */
const fs = `5
5
4
3
2
1`;
const input = fs.split('\n');
const n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) arr.push(input[i]);
arr.sort((a, b) => a - b);
let answer = '';
for (let i of arr) {
  answer += i + '\n';
}
console.log(answer);
