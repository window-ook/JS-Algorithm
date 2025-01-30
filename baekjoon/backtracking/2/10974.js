/** 모든 순열 - 난이도 ⭐️⭐️
  
  1. 아이디어
  - 순열 구하기

  2. 자료구조
  - arr[]
  - visited[]
  - selected[] */
const fs = '3';
const n = Number(fs.split('\n')[0]);
let arr = [];
for (let i = 1; i <= n; i++) arr.push(i); // [1, 2, 3]
let visited = new Array(n).fill(false);
let selected = [];
let answer = '';

function dfs(arr, depth) {
  if (depth == n) {
    let result = [];
    for (i of selected) result.push(arr[i]);
    for (j of result) answer += j + ' ';
    answer += '\n';
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (visited[i]) continue;
    selected.push(i);
    visited[i] = true;
    dfs(arr, depth + 1);
    selected.pop();
    visited[i] = false;
  }
}
dfs(arr, 0);
console.log(answer);
