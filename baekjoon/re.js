// 신맛과 쓴맛의 차이가 가장 적은 음식
// 신맛 x, 쓴맛 y
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
    visited[i] = true;
    dfs(depth + 1, i + 1);
    result.pop();
    visited[i] = false;
  }
}

dfs(0, 0);
console.log(answer);
