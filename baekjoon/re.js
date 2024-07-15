function dfs(depth, start) {
  if (depth >= 1) {
    let totalX = 1;
    let totalY = 0;
    for (let i of result) {
      let [x, y] = arr[i];
      totalX *= x;
      totalY += y;
    }
    answer = Math.min(answer, Math.abs(totalX - totalY));
  }

  for (let i = start; i < n; i++) {
    if (visited[i]) continue;
    result.push(i);
    dfs(start + 1, i + 1);
    visited[i] = false;
    result.pop();
  }
}

const fs = `2
3 8
5 8`;
const input = fs.split('\n');
const n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  let [x, y] = input[i].split(' ').map(Number);
  arr.push([x, y]);
}
let result = [];
let visited = new Array(n).fill(false);
let answer = 1e9;

dfs(0, 0);
console.log(answer);
