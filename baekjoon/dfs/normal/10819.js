/** 차이를 최대로 - 난이도 ⭐️⭐️

  1. 아이디어

  2. 자료구조 
 */
const fs = `6
  20 1 15 8 4 10`;
const input = fs.split('\n');
const n = Number(input[0]);
let arr = input[1].split(' ').map(Number);
let visited = new Array(n).fill(false);
let result = [];
let maxValue = -1e9;

function dfs(depth) {
  if (depth === n) {
    let current = 0;
    for (let i = 0; i < n - 1; i++)
      current += Math.abs(result[i] - result[i + 1]);
    maxValue = Math.max(maxValue, current);
  }

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    result.push(arr[i]);
    dfs(depth + 1);
    visited[i] = false;
    result.pop();
  }
}

dfs(0);
console.log(maxValue);
